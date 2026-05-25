import { useState } from "react";
import "./App.css";
import Job from "./Job";

const App = () => {
  return (
    <>
      <header className="wrapper">
        <h1>The Job Board</h1>
      </header>
      <div className=" wrapper container">
        <Job
          className="item red"
          title="Recrutement animateurs seniors"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="item pink"
          title="Agent polyvalent entretien restauration"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="item green"
          title="Adjoint(e) d'animation territorial"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="item blue"
          title=""
          contractType=""
          country=""
          city=""
        />
        <Job
          className="item yellow"
          title=""
          contractType=""
          country=""
          city=""
        />
        <Job
          className="item violet"
          title=""
          contractType=""
          country=""
          city=""
        />
        <Job
          className="item maroon"
          title=""
          contractType=""
          country=""
          city=""
        />
        <Job
          className="item skyblue"
          title=""
          contractType=""
          country=""
          city=""
        />
        <Job
          className="item salmon"
          title=""
          contractType=""
          country=""
          city=""
        />
      </div>
    </>
  );
};

export default App;
