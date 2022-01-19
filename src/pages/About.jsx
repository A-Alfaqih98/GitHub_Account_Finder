import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container text-light">
      <h1>About This Projcet</h1>
      <p>This is a React app to find GitHub accounts</p>
      <p>By: Abdulrahman Alfaqih</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="http://localhost:3000/App">Back To Home</Link>
      </p>
    </div>
  );
}

export default About;
