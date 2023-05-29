import { Link, Outlet } from "react-router-dom";

function Header() {
  const menuItem = [
    { name: "Home", routeTo: "/" },
    { name: "Services", routeTo: "/services" },
    { name: "Technologies", routeTo: "/technologies" },
    { name: "Careers", routeTo: "/careers" },
    { name: "About Us", routeTo: "/aboutUs" },
    { name: "Contact Us", routeTo: "/contactus/100" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Trivium eSolutions Private Limited
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {menuItem.map((menu, index) => (
                <li
                  className="nav-item"
                  key={menu.name}
                  onClick={() => console.log(index)}
                >
                  <a
                    className={`nav-link ${
                      menu.name === "Home" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    <Link to={menu.routeTo}>{menu.name} </Link>
                  </a>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
