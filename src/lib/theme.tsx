import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";
type Resolved = "light" | "dark";

interface Ctx {
  theme: Theme;
  resolved: Resolved;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "7ace-theme";

function getSystem(): Resolved {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(resolved: Resolved) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [resolved, setResolved] = useState<Resolved>("dark");

  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" &&
      (localStorage.getItem(STORAGE_KEY) as Theme | null)) || "system";
    setThemeState(stored);
  }, []);

  useEffect(() => {
    const r = theme === "system" ? getSystem() : theme;
    setResolved(r);
    apply(r);

    if (theme === "system" && typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        const nr = getSystem();
        setResolved(nr);
        apply(nr);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch { /* ignore */ }
  };

  const toggle = () => setTheme(resolved === "dark" ? "light" : "dark");

  return (
    <ThemeCtx.Provider value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
