import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useLocalStorage(
    "theme",
    "light"
  );


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}