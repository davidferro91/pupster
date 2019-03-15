import React, { Component } from "react";
import APIRandom from "../utils/APIRandom";


class Discover extends Component {

randomPuppies = () => {
  APIRandom.search()
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

render() {
  return (
    <div>
      <h1>Discover Page</h1>
      <p>
        
      </p>
    </div>
  );
}
}

export default Discover;
