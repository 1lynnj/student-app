import React from "react";
import Student from "./Student";
import "./StudentList.css";
import PropTypes from "prop-types";

const StudentList = (props) => {
  // console.log(`🌼${props}`);
  // .map loops through studentData (for student in studentData)
  const studentComponents = props.students.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
        />
      </li>
    );
  });

  return (
    <section>
      <h2 className="student-list-heading">Student List</h2>
      <ul className="student-list">{studentComponents}</ul>
    </section>
  );
};

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
};

export default StudentList;
