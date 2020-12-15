import { Link } from "react-router-dom";

const Setdistance = () => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>Set Distance</h1>

          <button>
            <Link to="/busarrival">Back</Link>
          </button>
          <button>
            <Link to="/distanceleft">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setdistance;
