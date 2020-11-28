import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Notification from "../components/Notification";
import "./Home.css";
import data from '../data.json';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div>
        <Navbar curso={"Precálculo"} curso_anterior="Matemáticas" />
        <div className="page-content-container">
          <div className="sidebar">
            <div className="resume-content-container">
              <Resume
                temas={this.state.data.map((tema) => tema)}
                puntos="4.900"
              />
            </div>
            <Notification />
          </div>

          <div className="subjects-content-container">
            <ul className="card-ul">
              {this.state.data.map((tema) => {
                return (
                  <li key={tema.id_tema} className="card-li">
                    {<Card title={tema.tema} subtemas={tema.subtemas} logo={tema.logo} />}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
