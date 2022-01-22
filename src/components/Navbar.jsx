import { FaGithub } from 'react-icons/fa';

import AboutLink from './AboutLink';

function Navbar() {
  return (
    <nav className="  navbar navbar-dark bg-secondary mb-3 navbar-expand pb-0 ">
      <div className="container">
        <a href="/" className="navbar-brand">
          <FaGithub fontSize="30px" />
        </a>
        <div className="navbar-nav ml-5">
          <div className="nav-item nav-link text-light h4 ">GitHub Finder</div>
        </div>
        <ul className="navbar-nav pb-2">
          <li className="nav-item">
            <AboutLink />
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-light">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
