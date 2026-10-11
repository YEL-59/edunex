"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Custom hook to safely determine if code is running in browser client environment.
 * Complies with React 19 / Next.js best practices using useSyncExternalStore without cascading renders.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
