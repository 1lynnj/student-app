import React from "react";

const ClassInfo = (props) => {
  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of Members: {props.memberCount}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;
