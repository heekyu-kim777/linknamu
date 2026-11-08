"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-base shadow-[0_6px_20px_-10px_rgba(180,100,60,0.4)] backdrop-blur-xl transition duration-300 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {/* 마운트 전에는 비워 두어 하이드레이션 불일치를 피한다 */}
      {dark === null ? null : dark ? "☀️" : "🌙"}
    </button>
  );
}
