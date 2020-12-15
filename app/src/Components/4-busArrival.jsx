import { Link } from "react-router-dom";

const Busarrival = () => {
  return (
    <div class="container" style={{ border: "1px black solid" }}>
      <div class="row justify-content-center">
        <div class="col-6" style={{ border: "1px red solid" }}>
          <h1>Bus Arrival</h1>

          <button>
            <Link to="/endstop">Back</Link>
          </button>
          <button>
            <Link to="/setDistance">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Busarrival;
