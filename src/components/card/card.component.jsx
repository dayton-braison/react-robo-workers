import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
      <div key={this.props.robot.id} className="card-container">
        <img
          src={`https://robohash.org/${this.props.robot.id}?set=set2&size=180x180`}
          alt="robot"
        />
        <h2>{this.props.robot.name}</h2>
        <h3>Goal</h3>
        <h4>{capitalizeFirstLetter(this.props.robot.company.bs)}</h4>
      </div>
    );
  }
}

export default Card;
