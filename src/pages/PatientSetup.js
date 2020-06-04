import React, { useState } from "react";
import Topbar from "../components/Topbar/Topbar";
import FormWithSection from "../components/Form/FormWithSection/FormWithSection";
import FormSection from "../components/Form/FormWithSection/FormSection";
import FormControl from "../components/Form/FormControl/FormControl";
import Input from "../components/Form/Input/Input";
import Select from "../components/Form/Input/Select";
import TextArea from "../components/Form/Input/TextArea";
import CheckBox from "../components/Form/Input/Checkbox";
import FormFooter from "../components/Form/FormFooter/FormFooter";
import Button from "../components/Form/Button/Button";
import PersonalInformationForm from "../share/PersonalInformationForm";
import validate from "../validate/PatientSetupValidate";
// import Axios from "../share/Axios";
// import Spinner from "../share/Spinner/Spinner";

function createInitialName(optionValue, optionText) {
  return { optionValue, optionText };
}
console.log("Patient setup above");
//Sample Data for Select Input
const selectSampleData = [
  createInitialName("1", "description 1"),
  createInitialName("2", "description 2"),
  createInitialName("3", "description 3"),
  createInitialName("4", "description 4"),
  createInitialName("5", "description 5"),
];

const PatientSetup = () => {
  console.log("patient setup");
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
    location: "",
    email: "",
    occupation: "",
    bloodType: "",
    allergy: "",
    remark: "",
    active: false,
  });
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState({
  //   success: "",
  //   error: "",
  // });

  const handleOnChange = (e) => {
    e.persist();
    //current element
    const target = e.target;
    //current element's name attribute
    const name = target.name;
    //current element's value attribute (if checkbox, checked or not)
    const value = target.name === "active" ? target.checked : target.value;
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
  const handleOnSavePatient = (e) => {
    e.preventDefault();
    //check validation for all information
    let validatedErrors = validate(information);
    //push errors
    setErrors(validatedErrors);
    console.log(Object.values(validatedErrors));
    //if no error
    if (
      Object.values(validatedErrors).filter((value) => value.length > 1)
        .length === 0
    ) {
      console.log("no error");
      console.log(information);
      // setLoading(true);
      // //push to api
      // Axios.post("/patient", information)
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
  //save data and print it
  const saveAndPrint = (e) => {
    // save data as submit
    handleOnSavePatient(e);
    //print component using window.print()
    const printableElements = document.getElementById("patientSetupDiv")
      .innerHTML;
    const orderHtml =
      "<html><head><title></title></head><body>" +
      printableElements +
      "</body></html>";
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHtml;
    window.print();
    document.body.innerHTML = oldPage;
  };
  return (
    <div id="patientSetupDiv">
      {/* {loading && <Spinner />}
      {alert.success ? "Success" : null}
      {alert.error ? "Error" : null} */}
      <Topbar pageTitle="Patient Setup" />
      <div className="my-4 px-4 lg:px-0 w-full lg:w-4/5 xl:w-2/3 m-auto">
        <FormWithSection action="" onSubmit={handleOnSavePatient}>
          <PersonalInformationForm
            information={information}
            handleOnChange={handleOnChange}
            selectSampleData={selectSampleData}
            errors={errors}
          />
          <FormSection sectionTitle="Address Information">
            <FormControl>
              <Input
                className="w-full"
                type="text"
                labelText="Location"
                name="location"
                value={information.location}
                onChange={handleOnChange}
                error={errors.location}
              />
            </FormControl>
            <FormControl>
              <Input
                className="w-full"
                type="email"
                labelText="Email"
                name="email"
                value={information.email}
                onChange={handleOnChange}
                error={errors.email}
              />
            </FormControl>
            <FormControl>
              <Input
                className="w-full"
                type="text"
                labelText="Occupation"
                name="occupation"
                value={information.occupation}
                onChange={handleOnChange}
                error={errors.occupation}
              />
            </FormControl>
          </FormSection>
          <FormSection sectionTitle="Medical Information">
            <FormControl>
              <Select
                className="w-24"
                labelText="Blood Type"
                optionData={selectSampleData}
                preViewData="-"
                name="bloodType"
                value={information.bloodType}
                onChange={handleOnChange}
                error={errors.bloodType}
              />
            </FormControl>
            <FormControl>
              <TextArea
                className="w-full"
                labelText="Allergy"
                name="allergy"
                value={information.allergy}
                onChange={handleOnChange}
                error={errors.allergy}
              />
            </FormControl>
          </FormSection>
          <FormSection sectionTitle="Remark">
            <FormControl>
              <TextArea
                className="w-full"
                name="remark"
                value={information.remark}
                onChange={handleOnChange}
                error={errors.remark}
              />
            </FormControl>
            <FormControl>
              <CheckBox
                labelText="Active"
                name="active"
                checked={information.active}
                onChange={handleOnChange}
              />
            </FormControl>
          </FormSection>
          <FormFooter>
            <Button className="ml-2" type="button" onClick={saveAndPrint}>
              Save & Print
            </Button>
            <Button className="ml-2" type="submit">
              Save
            </Button>
          </FormFooter>
        </FormWithSection>
      </div>
    </div>
  );
};

export default PatientSetup;
