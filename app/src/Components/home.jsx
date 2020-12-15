import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>Home Page</h1>
          <Link to="/selectbus">
            <button>Click here to start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
