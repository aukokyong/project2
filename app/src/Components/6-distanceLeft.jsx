import { Link } from "react-router-dom";

const Distanceleft = () => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>Distance Left</h1>

          <button>
            <Link to="/setdistance">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Distanceleft;
