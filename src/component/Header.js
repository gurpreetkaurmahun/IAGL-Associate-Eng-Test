import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-dark navbar-expand-lg bg-l">
            <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/">
              My Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5 px-2">
                  <Link className="nav-link" to="/create" style={{ color: "black" }}>
                    New Todo
                  </Link>
        
                </li>
              </ul>
            </div>
          
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
