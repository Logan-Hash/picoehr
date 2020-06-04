import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Table from "../components/Table/Table";

function createData(
  visitRegNo,
  patientId,
  patientName,
  doctor,
  opdCheckedIn,
  ipdCheckedIn,
  checkedOut,
  blood
) {
  return [
    visitRegNo,
    patientId,
    patientName,
    doctor,
    opdCheckedIn,
    ipdCheckedIn,
    checkedOut,
    blood,
  ];
}

const tableHeader = [
  "Visit Reg No.",
  "Patient ID",
  "Patient Name",
  "Doctor",
  "OPD Checked In",
  "IPD Checked In",
  "Checked Out",
  "Blood",
];

function createAction(actionName, actionIcon) {
  return { actionName, actionIcon };
}

const tableDataRows = [
  createData(
    "VRNUM-1-20-000008",
    "P-20-000006",
    "U Arkar Myat Min",
    "Dr. Shwe Yi",
    "01-02-2020",
    "05-02-2020",
    "14-02-2020",
    "A+"
  ),
  createData(
    "VRNUM-1-20-000007",
    "P-20-000005",
    "U Aung Myin Kyaw",
    "Dr. Aung Ko Latt",
    "20-01-2020",
    "22-01-2020",
    "27-01-2020",
    "O+"
  ),
  createData(
    "VRNUM-1-20-000006",
    "P-20-000004",
    "U Thiha Kyaw",
    "Dr. Shwe Yi, Dr. Aung Ko Latt",
    "13-01-2020",
    "18-01-2020",
    "20-01-2020",
    "AB+"
  ),
  createData(
    "VRNUM-1-20-000005",
    "P-20-000003",
    "U Soe Myint Lwin",
    "Dr. Myat Theingi Myint",
    "10-01-2020",
    "15-01-2020",
    "22-01-2020",
    "A-"
  ),
  createData(
    "VRNUM-1-20-000004",
    "P-20-000002",
    "Daw Hla Myat Yi",
    "Dr. Shwe Yi, Dr. Aung Ko Latt",
    "08-01-2020",
    "09-01-2020",
    "14-01-2020",
    "O-"
  ),
  createData(
    "VRNUM-1-20-000003",
    "P-20-000001",
    "Daw Win Min Myint",
    "Dr. Myat Theingi Myint, Dr. Shwe Yi, Dr. Aung Ko Latt",
    "04-01-2020",
    "05-01-2020",
    "10-01-2020",
    "A+"
  ),
  createData(
    "VRNUM-1-20-000002",
    "P-19-000007",
    "Daw Ni Ni Aung",
    "Dr. Aung Ko Latt",
    "03-01-2020",
    "06-01-2020",
    "12-01-2020",
    "B-"
  ),
  createData(
    "VRNUM-1-20-000001",
    "P-19-000006",
    "Mrs. Yoon Se Yi",
    "Dr. Aung Ko Latt",
    "01-01-2020",
    "05-01-2020",
    "14-01-2020",
    "B+"
  ),
  createData(
    "VRNUM-1-19-000010",
    "P-19-000005",
    "U Aung Ko Min",
    "Dr. Shwe Yi",
    "01-10-2019",
    "06-10-2019",
    "14-10-2019",
    "O+"
  ),
  createData(
    "VRNUM-1-19-000009",
    "P-19-000004",
    "Mr. James Tommy",
    "Dr. Shwe Yi, Dr. Aung Ko Latt",
    "12-09-2019",
    "18-09-2019",
    "28-09-2019",
    "AB-"
  ),
  createData(
    "VRNUM-1-19-000008",
    "P-19-000003",
    "Mr. Joe Cole",
    "Dr. Shwe Yi",
    "11-09-2019",
    "15-09-2019",
    "22-09-2019",
    "A+"
  ),
  createData(
    "VRNUM-1-19-000007",
    "P-19-000002",
    "U Myint Myat Bone Aung",
    "Dr. Aung Ko Latt, Dr. Myat Theingi Myint",
    "05-09-2019",
    "12-09-2019",
    "22-09-2019",
    "A+"
  ),
  createData(
    "VRNUM-1-19-000006",
    "P-19-000001",
    "U Tint Lwin",
    "Dr. Myat Theingi Myint, Dr. Shwe Yi",
    "01-09-2019",
    "05-09-2019",
    "14-09-2019",
    "A+"
  ),
  createData(
    "VRNUM-1-19-000005",
    "P-18-000005",
    "U Maung Maung Zaw",
    "Dr. Myat Theingi Myint",
    "01-10-2018",
    "06-10-2018",
    "14-10-2018",
    "B+"
  ),
  createData(
    "VRNUM-1-19-000004",
    "P-18-000004",
    "Daw Sein Tint",
    "Dr. Shwe Yi, Dr. Aung Ko Latt",
    "12-09-2018",
    "18-09-2018",
    "28-09-2018",
    "A+"
  ),
  createData(
    "VRNUM-1-19-000003",
    "P-18-000003",
    "Daw Myint Myint Yi",
    "Dr. Myat Theingi Myint",
    "11-09-2018",
    "15-09-2018",
    "22-09-2018",
    "B-"
  ),
  createData(
    "VRNUM-1-19-000002",
    "P-18-000002",
    "U Sai Khant Win",
    "Dr. Aung Ko Latt",
    "05-09-2018",
    "12-09-2018",
    "22-09-2018",
    "A+"
  ),
  createData(
    "VRNUM-1-19-000001",
    "P-18-000001",
    "U Tayzar Kyaw",
    "Dr. Shwe Yi",
    "01-09-2018",
    "05-09-2018",
    "14-09-2018",
    "O+"
  ),
];

const tableAction = [
  createAction("Detail", "eye"),
  createAction("Update", "pencil-alt"),
  createAction("Delete", "trash"),
];

const VisitRegList = () => {
  console.log("visit registration list");
  return (
    <React.Fragment>
      <Topbar pageTitle="Visit Registration List" />
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

export default VisitRegList;
