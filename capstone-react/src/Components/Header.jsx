import { useTheme } from "../hooks/useTheme";


function Header(){

  const { theme, setTheme } = useTheme();


  return(
    <>
    <header>
      <h1>Kanban Task Board</h1>
    </header>

    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
    </>
  );

}

export default Header;