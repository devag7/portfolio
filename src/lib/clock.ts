"use client";

import { useEffect, useState } from "react";

export function formatIST(d: Date): string {
  const fmt = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return fmt.format(d);
}

export function useLocalTimeIST(): string {
  const [time, setTime] = useState<string>("--:--");
  useEffect(() => {
    const update = () => setTime(formatIST(new Date()));
    update();
    const id = setInterval(update, 30 * 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
