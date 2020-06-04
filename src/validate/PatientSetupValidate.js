const PatientSetupValidate = (values, returnState = false) => {
  let requireText = " field is required";
  if (returnState) {
    if (values.value) {
      return "";
    } else {
      return requireText;
    }
  } else {
    let errors = {};
    if (!values.id) {
      errors.id = requireText;
    } else {
      errors.id = "";
    }
    if (!values.nrc) {
      errors.nrc = requireText;
    } else {
      errors.nrc = "";
    }
    if (!values.name) {
      errors.name = requireText;
    } else {
      errors.name = "";
    }
    if (!values.fatherName) {
      errors.fatherName = requireText;
    } else {
      errors.fatherName = "";
    }
    if (!values.gender) {
      errors.gender = requireText;
    } else {
      errors.gender = "";
    }
    if (!values.maritalStatus) {
      errors.maritalStatus = requireText;
    } else {
      errors.maritalStatus = "";
    }
    if (!values.age) {
      errors.age = requireText;
    } else {
      errors.age = "";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = requireText;
    } else {
      errors.dateOfBirth = "";
    }
    if (!values.placeOfBirth) {
      errors.placeOfBirth = requireText;
    } else {
      errors.placeOfBirth = "";
    }
    if (!values.location) {
      errors.location = requireText;
    } else {
      errors.location = "";
    }
    if (!values.email) {
      errors.email = requireText;
    } else {
      errors.email = "";
    }
    if (!values.occupation) {
      errors.occupation = requireText;
    } else {
      errors.occupation = "";
    }
    if (!values.bloodType) {
      errors.bloodType = requireText;
    } else {
      errors.bloodType = "";
    }
    if (!values.allergy) {
      errors.allergy = requireText;
    } else {
      errors.allergy = "";
    }
    // if (!values.remark) {
    //   errors.remark = requireText;
    // } else {
    //   errors.remark = "";
    // }
    return errors;
  }
};

export default PatientSetupValidate;
