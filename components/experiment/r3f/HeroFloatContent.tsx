"use client";

/**
 * 3D hero: PlayStation 5 mesh from Sketchfab (CC BY 4.0) — “PS5” by rtql8d.
 * Source page: https://sketchfab.com/3d-models/ps5-d788de3735964151a3e24fd59c0f1956
 *
 * Export glTF Binary from Sketchfab and add:
 *   public/models/ps5-sketchfab-d788de37.glb
 * See public/models/README.md for attribution and setup.
 */

import type { MutableRefObject } from "react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Center, ContactShadows, Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { useTheme } from "@/components/theme/ThemeProvider";

const PS5_GLB_PATH = "/models/ps5-sketchfab-d788de37.glb";

const dracoDecoder = "https://www.gstatic.com/draco/versioned/decoders/1.5.7/";

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
        mat.envMapIntensity = isDark ? 1.15 : 1.38;
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

/** Four curated product views — scroll 0→1 moves through 0→1→2→3. */
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
  const tmpE = useMemo(() => new THREE.Euler(), []);

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
    tmpE.x = THREE.MathUtils.lerp(
      SCROLL_MODEL_EULER[i].x,
      SCROLL_MODEL_EULER[i + 1].x,
      f,
    );
    tmpE.y = THREE.MathUtils.lerp(
      SCROLL_MODEL_EULER[i].y,
      SCROLL_MODEL_EULER[i + 1].y,
      f,
    );
    tmpE.z = THREE.MathUtils.lerp(
      SCROLL_MODEL_EULER[i].z,
      SCROLL_MODEL_EULER[i + 1].z,
      f,
    );
    groupRef.current.rotation.copy(tmpE);
  });

  return null;
}

function Ps5LoadFallback() {
  return (
    <group>
      <RoundedBox args={[0.44, 1.22, 0.42]} radius={0.035} smoothness={3} position={[0, 0.1, 0]}>
        <meshPhysicalMaterial
          color="#f2f4f8"
          metalness={0.15}
          roughness={0.38}
          clearcoat={0.55}
          clearcoatRoughness={0.2}
        />
      </RoundedBox>
      <mesh position={[0.22, 0.08, 0.22]} rotation={[0, 0.35, 0]}>
        <boxGeometry args={[0.06, 0.85, 0.28]} />
        <meshPhysicalMaterial color="#1a1d24" metalness={0.85} roughness={0.35} />
      </mesh>
    </group>
  );
}

export function HeroFloatContent({
  mouseRef,
  scale = 1,
  scrollProgressRef,
  interactive = true,
  modelFit,
}: {
  mouseRef: MutableRefObject<{ x: number; y: number }>;
  scale?: number;
  scrollProgressRef?: MutableRefObject<number>;
  interactive?: boolean;
  /** Larger value = larger on-screen model (world units). */
  modelFit?: number;
}) {
  const root = useRef<THREE.Group>(null);
  const scrollModelGroup = useRef<THREE.Group>(null);
  const drift = useRef(0);
  const lastFittedId = useRef<string | null>(null);
  const lastFitApplied = useRef<number | null>(null);
  const { gl, scene } = useThree();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollMode = scrollProgressRef != null;
  const fitTarget =
    modelFit ?? (scrollMode ? 2.28 : 2.58);

  const [model, setModel] = useState<THREE.Object3D | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [shadowY, setShadowY] = useState(-1.05);

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

  useEffect(() => {
    let cancelled = false;
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    draco.setDecoderPath(dracoDecoder);
    loader.setDRACOLoader(draco);

    loader.load(
      PS5_GLB_PATH,
      (gltf) => {
        if (cancelled) {
          disposeObject3D(gltf.scene);
          draco.dispose();
          return;
        }
        draco.dispose();
        setModel(gltf.scene);
      },
      undefined,
      () => {
        if (!cancelled) setLoadFailed(true);
        draco.dispose();
      },
    );

    return () => {
      cancelled = true;
      draco.dispose();
    };
  }, []);

  useLayoutEffect(() => {
    if (!model) return;
    const id = model.uuid;
    const needsFit =
      lastFittedId.current !== id || lastFitApplied.current !== fitTarget;
    if (needsFit) {
      enhanceMaterials(model, isDark);
      const ground = fitAndCenterScene(model, fitTarget);
      setShadowY(ground - 0.03);
      lastFittedId.current = id;
      lastFitApplied.current = fitTarget;
      return;
    }
    enhanceMaterials(model, isDark);
  }, [model, isDark, fitTarget]);

  useEffect(() => {
    return () => {
      if (model) disposeObject3D(model);
    };
  }, [model]);

  useFrame((_, delta) => {
    if (scrollMode) return;
    drift.current += delta;
    if (!root.current) return;
    const mx = interactive ? mouseRef.current.x : 0;
    const my = interactive ? mouseRef.current.y : 0;
    const t = drift.current;
    const idleRx = Math.sin(t * 0.28) * 0.003;
    const idleRy = Math.sin(t * 0.2) * 0.004;
    const idleRz = Math.cos(t * 0.22) * 0.0015;
    const ptr = interactive ? 1 : 0;
    const targetRx = my * -0.07 * ptr + idleRx;
    const targetRy = mx * 0.09 * ptr + idleRy;
    const targetRz = mx * -0.018 * ptr + idleRz;
    const lerp = 0.04;
    root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, targetRx, lerp);
    root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, targetRy, lerp);
    root.current.rotation.z = THREE.MathUtils.lerp(root.current.rotation.z, targetRz, lerp);
  });

  const showFallback = loadFailed || !model;

  return (
    <>
      {scrollMode && scrollProgressRef ? (
        <>
          <ScrollCameraRig scrollRef={scrollProgressRef} />
          <ScrollModelRig scrollRef={scrollProgressRef} groupRef={scrollModelGroup} />
        </>
      ) : null}

      <ambientLight intensity={isDark ? 0.1 : 0.14} />
      <hemisphereLight
        color={isDark ? "#e8efff" : "#ffffff"}
        groundColor={isDark ? "#06080e" : "#c4cad8"}
        intensity={isDark ? 0.46 : 0.6}
      />
      <directionalLight
        position={[3.6, 4.8, 4]}
        intensity={isDark ? 1.88 : 2.08}
        color={isDark ? "#f8faff" : "#ffffff"}
      />
      <directionalLight
        position={[-5, 2.6, -3.2]}
        intensity={isDark ? 1.98 : 1.28}
        color="#a8c8ff"
      />
      <directionalLight
        position={[0.5, -2.2, 3.4]}
        intensity={isDark ? 0.4 : 0.46}
        color={isDark ? "#5a6a88" : "#9aaec8"}
      />
      <directionalLight
        position={[4.2, 0.4, -1.6]}
        intensity={isDark ? 0.5 : 0.38}
        color="#ffe8d8"
      />

      <group ref={root} rotation={scrollMode ? [0, 0, 0] : [0.045, -0.32, 0]}>
        <group ref={scrollModelGroup}>
          <group scale={scale}>
            {scrollMode ? (
              showFallback ? (
                <Center>
                  <Ps5LoadFallback />
                </Center>
              ) : (
                <primitive object={model} />
              )
            ) : (
              <Float speed={0.22} rotationIntensity={0.003} floatIntensity={0.012}>
                {showFallback ? (
                  <Center>
                    <Ps5LoadFallback />
                  </Center>
                ) : (
                  <primitive object={model} />
                )}
              </Float>
            )}
          </group>
        </group>
      </group>

      <ContactShadows
        key={shadowY.toFixed(3)}
        position={[0, shadowY, 0]}
        opacity={isDark ? 0.62 : 0.36}
        scale={12}
        blur={2.35}
        far={6}
        frames={1}
        color="#000000"
      />
    </>
  );
}
