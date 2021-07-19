import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="name">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

class AboutPage extends React.Component {
  renderCards() {
    return (
      <div>
        <Card name="Yasoob" />
        <Card name="Nayan" />
        <Card name="Anchit" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>About Page</h1>
        </div>
        <div>{this.renderCards()}</div>
      </div>
    );
  }
}

export default AboutPage;
