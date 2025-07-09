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
         
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
