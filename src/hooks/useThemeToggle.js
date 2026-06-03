import { useTheme } from "../contexts/ThemeContext";

export const useThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return { theme, toggleTheme };
};
