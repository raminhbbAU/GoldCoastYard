import { validateProps,evaluationValidateProps,SellCarRequestValidateProps,financeValidateProps,insuranceValidateProps,serviceValidateProps, testDriveValidateProps, ContactValidateProps } from "../../common/types";

export function validateTestDriveRequestForm(values: testDriveValidateProps) {
  let errors = {} as testDriveValidateProps;


  if (!values.firstName) {
    errors.firstName = "FirstName is required";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone is required";
  }
  if (!values.date) {
    errors.date = "Date is required";
  }
  if (!values.time) {
    errors.time = "Time is required";
  }

  var today = new Date();
  today.setHours(0,0,0,0);
  var varDate = new Date(values.date);

  if (varDate < today) {
    errors.date = "Date is invalid";
  }

  
  return errors;
}

export function validateServiceRequestForm(values: serviceValidateProps) {
  let errors = {} as serviceValidateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.make) {
    errors.make = "Make is required";
  }
  if (!values.model) {
    errors.model = "Model is required";
  }
  if (!values.year) {
    errors.year = "year is required";
  }
  if (!values.cylinders) {
    errors.cylinders = "Cylinders is required";
  }else if (values.cylinders.toString() === "") {
    errors.cylinders = "Cylinders is required";
  }
  if (!values.fuel) {
    errors.fuel = "Fuel Type is required";
  }else if (values.fuel.toString() === "") {
    errors.fuel = "Fuel Type is required";
  }

  
  return errors;
}

export function validateInsuranceRequestForm(values: insuranceValidateProps) {
  let errors = {} as insuranceValidateProps;

  if (!values.firstName) {
    errors.firstName = "FirstName is required";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone is required";
  }
  if (!values.state) {
    errors.state = "State is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  
  return errors;
}

export function validateFinanceRequestForm(values: financeValidateProps) {
  let errors = {} as financeValidateProps;

  if (!values.firstName) {
    errors.firstName = "FirstName is required";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone is required";
  }
  if (!values.state) {
    errors.state = "State is required";
  }else if (values.state.toString() === "") {
    errors.state = "State is required";
  }

  
  return errors;
}

export function validateSellCarRequestForm(values: SellCarRequestValidateProps) {
  let errors = {} as SellCarRequestValidateProps;

  if (!values.fullName) {
    errors.fullName = "Full Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "phone is required";
  }
  if (!values.make) {
    errors.make = "Make is required";
  }
  if (!values.model) {
    errors.model = "Model is required";
  }
  if (!values.year) {
    errors.year = "Year is required";
  }
  if (!values.odometer) {
    errors.odometer = "Odometer is required";
  }
  if (!values.rego) {
    errors.rego = "Rego is required";
  }
  
  return errors;
}

export function validateEvaluationForm(values: evaluationValidateProps) {
  let errors = {} as evaluationValidateProps;

  if (!values.rego) {
    errors.rego = "Rego is required";
  }
  if (!values.state) {
    errors.state = "State is required";
  }
  if (!values.odometer) {
    errors.odometer = "odometer is required";
  }

  if (isNaN(Number(values.odometer))) {
    errors.odometer = "odometer should be a number";
  }
  
  
  return errors;
}

export function validateContactForm(values: ContactValidateProps) {
  let errors = {} as ContactValidateProps;

  if (!values.firstName) {
    errors.firstName = "FirstName is required";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone is required";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  
  return errors;
}

export function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
