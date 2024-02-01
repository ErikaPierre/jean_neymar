import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="sidebar d-flex flex-column flex-shrink-0 ">
          <Link to="/">
            <span className="author">Jean Neymar</span>
          </Link>

          <hr />

          <Link to="/">
            <li className="list-group">Accueil</li>
          </Link>
          <Link to="/about">
            <li className="list-group">A Propos</li>
          </Link>
          <Link to="/books">
            <li className="list-group">Oeuvres</li>
          </Link>
        </div>

        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
