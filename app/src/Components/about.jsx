const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <h1>About</h1>
          <br />
          <p>
            This application was built with the following technologies /
            libraries:
          </p>
          <ul className="list-group">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">Javascript</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Axios</li>
            <li className="list-group-item">React Router</li>
            <li className="list-group-item">Moment.js</li>
          </ul>

          <br />
          <p>
            All data set were retrieved from LTA's DataMall: <br />
            <a
              href="https://www.mytransport.sg/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.mytransport.sg/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
