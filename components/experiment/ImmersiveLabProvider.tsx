"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { CursorGlow } from "./CursorGlow";
import { AmbientFilm } from "./AmbientFilm";

const ImmersiveLabContext = createContext(false);

export function ImmersiveLabProvider({
  enabled,
  children,
}: {
  enabled: boolean;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!enabled) return;
    document.documentElement.dataset.immersiveLab = "on";
    return () => {
      delete document.documentElement.dataset.immersiveLab;
    };
  }, [enabled]);

  const value = useMemo(() => enabled, [enabled]);

  return (
    <ImmersiveLabContext.Provider value={value}>
      {children}
      {enabled ? (
        <>
          <AmbientFilm />
          <CursorGlow />
        </>
      ) : null}
    </ImmersiveLabContext.Provider>
  );
}

export function useImmersiveLab() {
  return useContext(ImmersiveLabContext);
}
