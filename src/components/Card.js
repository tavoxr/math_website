import React from "react";
import "./styles/Card.css";


class Card extends React.Component {
  render() {
    const subtemas = this.props.subtemas;

    return (
      <div className="card-container">
        <div className="card-header">
          <div className="title-card-container">
            <img
              className="card-logo-header"
              src={this.props.logo}
              alt="Logo-Subject"
            />
            <h3 className="card-title">{this.props.title}</h3>
          </div>
          <div className="about-card-container">
            <p className="card-disponible">Dominio no disponible</p>
            <i className="fas fa-question-circle"></i>
          </div>
        </div>
        <hr className="line-division" />
        <div className="card-body">
          <ul className="list-subjects">
            {subtemas.map((subtema) => {
              return (
                <li key={subtema.id} className="subject">
                  <a href={subtema.url} target="_blank">
                    {subtema.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
