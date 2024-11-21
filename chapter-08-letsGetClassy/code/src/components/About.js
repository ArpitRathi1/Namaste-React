import React from "react";
import { Outlet } from "react-router-dom";

class About extends React.Component {

  constructor(props) {
    super(props)
    console.log("Parent Constructor")
  }

  componentDidMount() {
    // Best place to make API call
    console.log("Parent - componentDidMount")
  }

  render() {
    console.log("Parent - render")
    return (
      <div>
        <h1>About us page</h1>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default About;
