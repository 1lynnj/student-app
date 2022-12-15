import React from "react";

const ClassInfo = (props) => {
  const deleteStudentsButton = () => {
    const deletedStudents = [];
    props.onClearStudentList(deletedStudents);
  };

  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of Members: {props.memberCount}</li>
      </ul>
      <button onClick={deleteStudentsButton}>Delete all students!</button>
    </section>
  );
};

export default ClassInfo;
