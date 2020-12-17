import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>Welcome to Next Stop</h1>
          <br />
          <br />
          <p>
            <i>The app that ensure you reach at your destination...</i>
          </p>
          <br />
          <br />
          <p>Click start to begin</p>

          <Link to="/bus">
            <button type="button" className="btn btn-danger">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
