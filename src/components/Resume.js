import React from "react";
import "./styles/Resume.css";

class Resume extends React.Component {
  render() {
    const temas = this.props.temas;
    // const puntos = this.props.temas.map(points=>points.puntos)
    //   var te=  teme.map(t=> t.map(d=>d.id_tema))

    return (
      <div className="resume-content">
        <div className="puntos-container">
          <h2 className="puntos">{this.props.puntos}</h2>
          <p className="puntos-description">
            Puntos de nivel Dominado disponibles en este curso
          </p>
        </div>
        <hr />
        <div className="resume">
          <h3 className="resume-title">Resumen del Curso</h3>
          <hr />

          <ul>
            {temas.map((tema) => {
              return (
                <li key={tema.id_tema}>
                  <div className="temas-resume">
                    <h3>{tema.tema}</h3>
                    <span>--</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;
