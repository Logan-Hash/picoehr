import React, { useState, useRef } from "react";
import Topbar from "../components/Topbar/Topbar";
import FormWithSection from "../components/Form/FormWithSection/FormWithSection";
import FormSection from "../components/Form/FormWithSection/FormSection";
import FormControl from "../components/Form/FormControl/FormControl";
import FormFooter from "../components/Form/FormFooter/FormFooter";
import Button from "../components/Form/Button/Button";
import DataList from "../components/Form/Input/DataList";
import PersonalInformationForm from "../share/PersonalInformationForm";
import validate from "../validate/VisitRegSetupValidate";
// import Axios from "../share/Axios";
// import Spinner from "../share/Spinner/Spinner";

function createSelectData(optionValue, optionText) {
  return { optionValue, optionText };
}

//Sample Data for Select Input
const selectSampleData = [
  createSelectData("1", "description 1"),
  createSelectData("2", "description 2"),
  createSelectData("3", "description 3"),
  createSelectData("4", "description 4"),
  createSelectData("5", "description 5"),
];

//Sample Data for Datalist Input
const dataListSampleData = [
  "Dr. Shwe Yi",
  "Dr. Mya Theingi",
  "Dr. Park Soon Ri",
  "Dr. William Smith",
  "Dr. Hsu Wai Khet Khaing",
  "Dr. Min Min Soe",
  "Dr. Khin Hinn Wai",
  "Dr. Aung Ko Khant",
];

const VisitRegSetup = () => {
  console.log("visit setup");
  const [information, setInformation] = useState({
    id: "",
    nrc: "",
    name: "",
    fatherName: "",
    gender: "",
    maritalStatus: "",
    age: "",
    dateOfBirth: "",
    placeOfBirth: "",
  });
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState({
  //   success: "",
  //   error: "",
  // });

  const [doctors, setDoctors] = useState("");
  const doctorDataListRef = useRef();
  const doctorTextAreaRef = useRef();
  const addDoctors = () => {
    if (doctors === "") {
      setDoctors(doctorDataListRef.current.value);
      doctorDataListRef.current.value = "";
    } else {
      setDoctors(doctors + ", " + doctorDataListRef.current.value);
      doctorDataListRef.current.value = "";
    }
  };
  //doctors list textarea onChange
  const updateDoctors = (e) => {
    console.log(doctorTextAreaRef.current.value);
    setDoctors(doctorTextAreaRef.current.value);
  };

  //handle on change input
  const handleOnChange = (e) => {
    e.persist();
    //current element
    const target = e.target;
    //current element's name attribute
    const name = target.name;
    //current element's value attribute (if checkbox, checked or not)
    const value = target.value;
    //put to information
    setInformation((information) => ({
      ...information,
      [name]: value,
    }));
    // check validation for current element
    let error = validate(target, true);
    //update errors's current element
    setErrors((errors) => ({
      ...errors,
      [name]: error,
    }));
  };
  // handle on submit
  const handleOnSaveVR = (e) => {
    e.preventDefault();
    //check validation for all information
    let validatedErrors = validate(information);
    //push errors
    setErrors(validatedErrors);
    //console.log(Object.values(validatedErrors));
    //if no error
    if (
      Object.values(validatedErrors).filter((value) => value.length > 1)
        .length === 0
    ) {
      console.log("no error");
      console.log(information);
      console.log(doctors);
      // setLoading(true);
      // //push to api
      // Axios.post("/visitRegistration", information)
      //   .then((res) => {
      //     //loading to false
      //     setLoading(false);
      //     // set success alert and clear error alert
      //     setAlert({
      //       success: res.success,
      //       error: "",
      //     });
      //     //clear errors
      //     //
      //   })
      //   .catch((err) => {
      //     //loading to false
      //     setLoading(false);
      //     // set error alert and clear success alert
      //     setAlert({
      //       success: "",
      //       error: err.message,
      //     });
      //   });
    }
  };

  return (
    <React.Fragment>
      <Topbar pageTitle="Visit Registration Setup" />
      <div className="my-4 px-4 lg:px-0 w-full lg:w-4/5 xl:w-2/3 m-auto">
        <FormWithSection action="" onSubmit={handleOnSaveVR}>
          <PersonalInformationForm
            information={information}
            handleOnChange={handleOnChange}
            selectSampleData={selectSampleData}
            errors={errors}
          />
          <FormSection sectionTitle="Doctor Information">
            <FormControl>
              <DataList
                labelText="Doctors"
                placeholder="Select Doctors"
                dataList={dataListSampleData}
                doctors={doctors}
                doctorDataListRef={doctorDataListRef}
                doctorTextAreaRef={doctorTextAreaRef}
                addDoctors={addDoctors}
                updateDoctors={updateDoctors}
              />
            </FormControl>
          </FormSection>
          <FormFooter>
            <Button className="ml-2" type="">
              Save
            </Button>
          </FormFooter>
        </FormWithSection>
      </div>
    </React.Fragment>
  );
};

export default VisitRegSetup;
