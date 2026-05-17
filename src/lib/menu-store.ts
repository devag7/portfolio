"use client";

import { useSyncExternalStore } from "react";

let _open = false;
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }

function setOpen(v: boolean) {
  _open = v;
  if (typeof document !== "undefined") {
    document.body.classList.toggle("menu-open", v);
  }
  emit();
}

export const menuStore = {
  open: () => _open,
  setOpen,
  toggle: () => setOpen(!_open),
  subscribe(l: () => void) {
    listeners.add(l);
    return () => { listeners.delete(l); };
  },
};

if (typeof window !== "undefined") {
  (window as unknown as { __menu?: typeof menuStore }).__menu = menuStore;
}

export function useMenuOpen(): boolean {
  return useSyncExternalStore(
    (cb) => menuStore.subscribe(cb),
    () => menuStore.open(),
    () => false,
  );
}
