import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
        {/* Using context in class based components */}
        <UserContext.Consumer>
          {/* {(value) => console.log(value) } */}
          {({user}) => <h1>{user.name} - {user.email}</h1>}
        </UserContext.Consumer>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default About;
