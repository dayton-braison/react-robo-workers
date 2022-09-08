import React, { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    // destructuring
    let { roboWorkers } = this.props;

    return (
      <div className="card-list">
        {roboWorkers.map((robot) => {
          return <Card robot={robot} />;
        })}
      </div>
    );
  }
}

export default CardList;
