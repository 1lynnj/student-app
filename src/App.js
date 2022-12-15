import "./App.css";
import ClassInfo from "./components/ClassInfo";
import StudentList from "./components/StudentList";
import { useState } from "react";

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: false,
    },
    {
      id: 4,
      nameData: "Lynn",
      emailData: "lynn@dev.org",
      isPresentData: false,
    },
    {
      id: 5,
      nameData: "Jay",
      emailData: "jay@dev.org",
      isPresentData: false,
    },
    {
      id: 6,
      nameData: "Luke",
      emailData: "luke@dev.org",
      isPresentData: false,
    },
  ]);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    console.log(`🐈${JSON.stringify(students)}`);
    setStudentData(students);
    console.log(`📍 ${studentData}`);
  };

  const clearStudentData = () => {
    const emptyStudentList = [];
    setStudentData(emptyStudentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo
        memberCount={studentData.length}
        onClearStudentList={clearStudentData}
      ></ClassInfo>
      <StudentList
        students={studentData}
        onUpdateStudent={updateStudentData}
      ></StudentList>
    </main>
  );
}

export default App;
