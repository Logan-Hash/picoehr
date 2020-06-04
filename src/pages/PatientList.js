import React, { useState,useEffect } from "react";
import Topbar from "../components/Topbar/Topbar";
import Table from "../components/Table/Table";
import axios from 'axios';

function createData(patientID, name, father, nrc, age, blood, status) {
  return [patientID, name, father, nrc, age, blood, status];
}

const tableHeader = [
  "Patient ID",
  "Name",
  "Father",
  "NRC No.",
  "Age",
  "Blood",
  "Status",
];

function createAction(actionName, actionIcon) {
  return { actionName, actionIcon };
}

const tableDataRows = [
  createData(
    "P-19-000008",
    "U Aung Myin Kyaw",
    "U Tint Lwin",
    "12/kakhaga(N)77487",
    "25",
    "O+",
    "Active"
  ),
  createData(
    "P-19-000007",
    "U Aung Ko Min",
    "U Aung Myint Kyaw",
    "12/kakhaga(N)36354",
    "30",
    "A-",
    "Active"
  ),
  createData(
    "P-19-000006",
    "U Tayzar Moe Win",
    "U Aung Kyaw",
    "9/kakhaga(N)25666",
    "32",
    "A-",
    "Deleted"
  ),
  createData(
    "P-19-000005",
    "U Tint Lwin",
    "U Tayzar Aung",
    "7/kakhaga(N)34899",
    "24",
    "O+",
    "Active"
  ),
  createData(
    "P-19-000004",
    "U Moe Win",
    "U Maung Moe",
    "8/kakhaga(N)33985",
    "43",
    "B+",
    "Active"
  ),
  createData(
    "P-19-000003",
    "U Tayzar",
    "U Maung Tayza",
    "9/kakhaga(N)95564",
    "55",
    "A+",
    "Active"
  ),
  createData(
    "P-19-000002",
    "U Kyaw Soe Moe Win",
    "U Maung Win Kyaw",
    "12/kakhaga(N)61113",
    "65",
    "O-",
    "Active"
  ),
  createData(
    "P-19-000001",
    "U Soe Win",
    "U Aung Ko Min",
    "3/kakhaga(N)67513",
    "44",
    "O+",
    "Active"
  ),
  createData(
    "P-18-000009",
    "Daw Sein Tint",
    "U Tayzar Myint Sein",
    "12/kakhaga(N)39562",
    "45",
    "A-",
    "Active"
  ),

];

const tableAction = [
  createAction("Detail", "eye"),
  createAction("Update", "pencil-alt"),
  createAction("Delete", "trash"),
];

const [patients,setPatient] = useState([])
const PatientList = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/patients')
        .then(res => {
          const datas = res.datas
          setPatient(datas)
        })
        const list = patients.map(patient => {
          return console.log(patient.name)
        })
  },[]);
  return (
    <React.Fragment>
      <Topbar pageTitle="Patient List" />
      <div className="my-4 px-4 lg:px-0">
        <Table
          tableHeader={tableHeader}
          tableDataRow={tableDataRows}
          tableAction={tableAction}
          rowLimit={10}
          tableFilter={true}
        />
      </div>
    </React.Fragment>
  );
};

export default PatientList;
