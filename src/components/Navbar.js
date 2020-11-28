import React from "react";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h4> &lt; {this.props.curso_anterior}</h4>
        <h2>{this.props.curso}</h2>
      </div>
    );
  }
}

export default Navbar;
