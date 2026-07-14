import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.css";


function Header(){

  const { theme, setTheme } = useTheme();


  return(
    <>
    <header className={styles.header}>
      <h1>Kanban Task Board</h1>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
      </button>
    </header>

    </>
  );

}

export default Header;