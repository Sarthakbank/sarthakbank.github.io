"use client";

/**
 * Hero 3D: Sarthak’s level blockout GLB (portfolio asset).
 * Path: `/models/sarthak-level-blockout.glb` — see `public/models/README.md`.
 */

import type { MutableRefObject } from "react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Center, ContactShadows, Float, RoundedBox, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useTheme } from "@/components/theme/ThemeProvider";

export const SARATHAK_LEVEL_GLB = "/models/sarthak-level-blockout.glb";

useGLTF.preload(SARATHAK_LEVEL_GLB);

function disposeObject3D(root: THREE.Object3D) {
  root.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry?.dispose();
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) m?.dispose();
    }
  });
}

function enhanceMaterials(root: THREE.Object3D, isDark: boolean) {
  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    for (const mat of mats) {
      if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshPhysicalMaterial) {
        // Slightly higher IBL in dark so light-grey blockout stays readable on page.
        mat.envMapIntensity = isDark ? 1.34 : 1.06;
        if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
        if (mat.emissiveMap) mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
      }
    }
  });
}

function fitAndCenterScene(root: THREE.Object3D, fitTarget: number) {
  root.scale.set(1, 1, 1);
  root.position.set(0, 0, 0);
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());
  const max = Math.max(size.x, size.y, size.z, 1e-6);
  const fit = fitTarget / max;
  root.scale.multiplyScalar(fit);
  root.updateMatrixWorld(true);
  const b2 = new THREE.Box3().setFromObject(root);
  const c = b2.getCenter(new THREE.Vector3());
  root.position.sub(c);
  root.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(root).min.y;
}

function smoothstep01(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

const SCROLL_CAM_POS: readonly THREE.Vector3[] = [
  new THREE.Vector3(0.24, 0.12, 3.42),
  new THREE.Vector3(1.08, 0.16, 3.05),
  new THREE.Vector3(0.06, 0.48, 3.28),
  new THREE.Vector3(0.32, 0.08, 3.02),
];

const SCROLL_CAM_FOV = [24.2, 22.4, 23.8, 21.6] as const;

const SCROLL_MODEL_EULER: readonly THREE.Euler[] = [
  new THREE.Euler(0.05, -0.36, 0),
  new THREE.Euler(0.03, 0.82, 0),
  new THREE.Euler(-0.16, -0.2, 0.04),
  new THREE.Euler(0.1, -0.48, 0),
];

function ScrollCameraRig({ scrollRef }: { scrollRef: MutableRefObject<number> }) {
  const cam = useThree((s) => s.camera as THREE.PerspectiveCamera);
  const tmpV = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const raw = Math.min(1, Math.max(0, scrollRef.current));
    const u = raw * 3;
    const i = Math.min(2, Math.floor(u));
    const f = smoothstep01(u - i);
    tmpV.lerpVectors(SCROLL_CAM_POS[i], SCROLL_CAM_POS[i + 1], f);
    cam.position.copy(tmpV);
    cam.fov = THREE.MathUtils.lerp(SCROLL_CAM_FOV[i], SCROLL_CAM_FOV[i + 1], f);
    cam.updateProjectionMatrix();
    cam.lookAt(0, 0, 0);
  });

  return null;
}

function ScrollModelRig({
  scrollRef,
  groupRef,
}: {
  scrollRef: MutableRefObject<number>;
  groupRef: MutableRefObject<THREE.Group | null>;
}) {
  const tmpE = useMemo(() => new THREE.Euler(), []);

  useFrame(() => {
    if (!groupRef.current) return;
    const raw = Math.min(1, Math.max(0, scrollRef.current));
    const u = raw * 3;
    const i = Math.min(2, Math.floor(u));
    const f = smoothstep01(u - i);
    tmpE.x = THREE.MathUtils.lerp(SCROLL_MODEL_EULER[i].x, SCROLL_MODEL_EULER[i + 1].x, f);
    tmpE.y = THREE.MathUtils.lerp(SCROLL_MODEL_EULER[i].y, SCROLL_MODEL_EULER[i + 1].y, f);
    tmpE.z = THREE.MathUtils.lerp(SCROLL_MODEL_EULER[i].z, SCROLL_MODEL_EULER[i + 1].z, f);
    groupRef.current.rotation.copy(tmpE);
  });

  return null;
}

export function BlockoutLoadFallback() {
  return (
    <group>
      <RoundedBox args={[1.1, 0.14, 0.85]} radius={0.02} smoothness={2} position={[0, -0.32, 0]}>
        <meshPhysicalMaterial color="#f4f5f7" metalness={0.02} roughness={0.55} />
      </RoundedBox>
      <RoundedBox args={[0.55, 0.42, 0.55]} radius={0.03} smoothness={2} position={[-0.12, 0.02, 0.08]}>
        <meshPhysicalMaterial color="#ffffff" metalness={0.04} roughness={0.42} />
      </RoundedBox>
      <RoundedBox args={[0.32, 0.55, 0.32]} radius={0.025} smoothness={2} position={[0.22, 0.18, -0.1]}>
        <meshPhysicalMaterial color="#eceef2" metalness={0.03} roughness={0.48} />
      </RoundedBox>
    </group>
  );
}

function BlockoutGltfMesh({
  fitTarget,
  isDark,
  onGroundY,
}: {
  fitTarget: number;
  isDark: boolean;
  onGroundY: (y: number) => void;
}) {
  const { scene } = useGLTF(SARATHAK_LEVEL_GLB);
  const clone = useMemo(() => scene.clone(true), [scene]);
  const lastFit = useRef<number | null>(null);

  useLayoutEffect(() => {
    enhanceMaterials(clone, isDark);
    if (lastFit.current !== fitTarget) {
      const ground = fitAndCenterScene(clone, fitTarget);
      onGroundY(ground - 0.02);
      lastFit.current = fitTarget;
    }
  }, [clone, isDark, fitTarget, onGroundY]);

  useEffect(() => {
    return () => disposeObject3D(clone);
  }, [clone]);

  return <primitive object={clone} />;
}

export function HeroFloatContent({
  mouseRef,
  scale = 1,
  scrollProgressRef,
  interactive = true,
  modelFit,
  respectReducedMotion = false,
  /** Off for editorial hero: avoids a “mat” / boxed shadow under the model on the page background. */
  contactShadow = true,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>;
  scale?: number;
  scrollProgressRef?: MutableRefObject<number>;
  interactive?: boolean;
  modelFit?: number;
  respectReducedMotion?: boolean;
  contactShadow?: boolean;
}) {
  const root = useRef<THREE.Group>(null);
  const scrollModelGroup = useRef<THREE.Group>(null);
  const drift = useRef(0);
  const { gl, scene } = useThree();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollMode = scrollProgressRef != null;
  const fitTarget = modelFit ?? (scrollMode ? 2.28 : 2.58);

  const motionOff = respectReducedMotion;
  const pointerOn = interactive && !motionOff && !scrollMode;

  const [shadowY, setShadowY] = useState(-1.05);
  const onGroundY = useCallback((y: number) => {
    requestAnimationFrame(() => setShadowY(y));
  }, []);

  useLayoutEffect(() => {
    const prevFog = scene.fog;
    const prevBg = scene.background;
    scene.background = null;
    scene.fog = null;

    const pmrem = new THREE.PMREMGenerator(gl);
    const room = new RoomEnvironment();
    const tex = pmrem.fromScene(room).texture;
    scene.environment = tex;
    room.dispose();

    return () => {
      scene.fog = prevFog;
      scene.background = prevBg;
      scene.environment = null;
      tex.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  useFrame((_, delta) => {
    if (scrollMode || motionOff) return;
    drift.current += delta;
    if (!root.current) return;
    const mx = pointerOn ? mouseRef.current.x : 0;
    const my = pointerOn ? mouseRef.current.y : 0;
    const t = drift.current;
    const idleRx = Math.sin(t * 0.18) * 0.0014;
    const idleRy = Math.sin(t * 0.14) * 0.0018;
    const idleRz = Math.cos(t * 0.16) * 0.0008;
    const ptr = pointerOn ? 1 : 0;
    const targetRx = my * -0.038 * ptr + idleRx;
    const targetRy = mx * 0.048 * ptr + idleRy;
    const targetRz = mx * -0.01 * ptr + idleRz;
    const lerp = 0.038;
    root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, targetRx, lerp);
    root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, targetRy, lerp);
    root.current.rotation.z = THREE.MathUtils.lerp(root.current.rotation.z, targetRz, lerp);
  });

  const scaledMesh = (
    <group scale={scale}>
      <BlockoutGltfMesh fitTarget={fitTarget} isDark={isDark} onGroundY={onGroundY} />
    </group>
  );

  const centered = motionOff ? (
    <Center>{scaledMesh}</Center>
  ) : (
    <Float speed={0.16} rotationIntensity={0.022} floatIntensity={0.032}>
      <Center>{scaledMesh}</Center>
    </Float>
  );

  return (
    <>
      {scrollMode && scrollProgressRef ? (
        <>
          <ScrollCameraRig scrollRef={scrollProgressRef} />
          <ScrollModelRig scrollRef={scrollProgressRef} groupRef={scrollModelGroup} />
        </>
      ) : null}

      <ambientLight intensity={isDark ? 0.22 : 0.2} />
      <hemisphereLight
        color={isDark ? "#f4f6fc" : "#ffffff"}
        groundColor={isDark ? "#1a1d26" : "#d8dce6"}
        intensity={isDark ? 0.52 : 0.58}
      />
      <directionalLight position={[3.2, 4.2, 3.6]} intensity={isDark ? 1.85 : 1.75} color="#ffffff" />
      <directionalLight position={[-4.5, 2.2, -2.8]} intensity={isDark ? 1.55 : 1.05} color="#b8d4ff" />
      <directionalLight position={[0.4, -1.8, 2.8]} intensity={isDark ? 0.48 : 0.4} color="#9aa8bc" />
      <directionalLight position={[-1.2, 1.2, 4.2]} intensity={isDark ? 0.42 : 0.22} color="#e8eefc" />

      <group ref={root} rotation={scrollMode ? [0, 0, 0] : [0.12, -0.42, 0]}>
        <group ref={scrollModelGroup}>
          {scrollMode ? (
            <Center>{scaledMesh}</Center>
          ) : (
            centered
          )}
        </group>
      </group>

      {contactShadow ? (
        <ContactShadows
          key={shadowY.toFixed(3)}
          position={[0, shadowY, 0]}
          opacity={isDark ? 0.32 : 0.18}
          scale={14}
          blur={3.2}
          far={6}
          frames={1}
          color="#000000"
        />
      ) : null}
    </>
  );
}
