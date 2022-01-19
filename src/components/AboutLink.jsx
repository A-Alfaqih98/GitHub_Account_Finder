import { Link } from 'react-router-dom';

function AboutLink() {
  return (
    <div>
      <Link to="/About" className="nav-link text-light">
        About
      </Link>
    </div>
  );
}

export default AboutLink;
