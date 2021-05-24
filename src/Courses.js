// import json from "./courses.json";
import React from "react";
import Course from "./Course";
export default class Courses extends React.Component {
  constructor() {
    super();
    this.state = { courses: [] };
  }

  componentDidMount(event) {
    fetch("http://localhost:6800/courses", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ courses: data });
        console.log(data);
      });
  }

  handleOnChange() {}
  render() {
    return (
      <div>
        {this.state.courses.map((icourse, id) => (
          <Course course={icourse} key={id}></Course>
        ))}
      </div>
    );
  }
}
