import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navContainer">
        <div className="navWrapper">
          <div className="navBar">
            <a href="#home" className="headerTitle">
              Children's Learning
            </a>
            <div className="navLinks">
              <li className="navLinksText">
                <a href="#home">Login</a>
              </li>
              <li className="navLinksText">
                <a href="#education">Create</a>
              </li>
              <li className="navLinksText">
                <a href="#projects">Join</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;