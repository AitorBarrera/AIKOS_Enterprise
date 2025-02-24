import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 text-white border-white rounded-lg cursor-pointer bg-p_ruby dark:bg-black dark:text-white border-3"
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
