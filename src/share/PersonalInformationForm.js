import React from "react";
import FormSection from "../components/Form/FormWithSection/FormSection";
import FormControl from "../components/Form/FormControl/FormControl";
import Input from "../components/Form/Input/Input";
import Select from "../components/Form/Input/Select";

const PersonalInformationForm = ({
  information,
  handleOnChange,
  selectSampleData,
  errors,
}) => {
  console.log("personal information");
  return (
    <FormSection sectionTitle="Personal Information">
      <FormControl className="flex-grow md:flex-grow-0">
        <Input
          className="w-full md:w-auto"
          type="text"
          labelText="Patient ID"
          name="id"
          value={information.id}
          onChange={handleOnChange}
          error={errors.id}
        />
      </FormControl>
      <div className="flex flex-wrap items-end">
        <FormControl>
          <Select
            className="w-32"
            labelText="nrc"
            optionData={selectSampleData}
            preViewData="Initial"
            required={true}
            name="nrc"
            value={information.nrc}
            onChange={handleOnChange}
            error={errors.nrc}
          />
        </FormControl>
        <FormControl className="flex-grow">
          <Input
            className="w-full"
            type="text"
            labelText="Patient Name"
            // required={true}
            name="name"
            value={information.name}
            onChange={handleOnChange}
            error={errors.name}
          />
        </FormControl>
      </div>
      <FormControl className="flex-grow md:flex-grow-0">
        <Input
          className="w-full"
          type="text"
          labelText="Father Name"
          // required={true}
          name="fatherName"
          value={information.fatherName}
          onChange={handleOnChange}
          error={errors.fatherName}
        />
      </FormControl>
      <div className="flex flex-wrap items-end">
        <FormControl>
          <Select
            labelText="Gender"
            optionData={selectSampleData}
            preViewData="Other"
            name="gender"
            value={information.gender}
            onChange={handleOnChange}
            error={errors.gender}
          />
        </FormControl>
        <FormControl>
          <Select
            labelText="Marital Status"
            optionData={selectSampleData}
            preViewData="Single"
            name="maritalStatus"
            value={information.maritalStatus}
            onChange={handleOnChange}
            error={errors.maritalStatus}
          />
        </FormControl>
      </div>
      <div className="flex flex-wrap items-end">
        <FormControl className="inline-block">
          <Input
            className="w-24"
            type="number"
            labelText="Age"
            name="age"
            value={information.age}
            onChange={handleOnChange}
            error={errors.age}
          />
        </FormControl>
        <FormControl className="inline-block">
          <Input
            type="text"
            labelText="Date of Birth"
            placeholder="DD/MM/YYYY"
            name="dateOfBirth"
            value={information.dateOfBirth}
            onChange={handleOnChange}
            error={errors.dateOfBirth}
          />
        </FormControl>
      </div>
      <FormControl>
        <Input
          className="w-full"
          type="text"
          labelText="Place of Birth"
          name="placeOfBirth"
          value={information.placeOfBirth}
          onChange={handleOnChange}
          error={errors.placeOfBirth}
        />
      </FormControl>
    </FormSection>
  );
};

export default React.memo(
  PersonalInformationForm,
  (prevProps, nextProps) =>
    prevProps.information === nextProps.information &&
    prevProps.errors === nextProps.errors
);
