import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-p_ruby   dark:bg-black text-white dark:text-white rounded-lg flex items-center gap-2 border-3 border-white"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-8 h-8" />
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-8 h-8" />
        </>
      ) : (
        <>
          <Monitor className="w-8 h-8" />
        </>
      )}
    </button>
  );
}
