import UseInput from "../Hooks/UseInput";

const isNoEmpyt = (value) => value.trim() !== "";
const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hassError: nameInputHassError,
    ValueChangeHandler: nameChangeHandler,
    inputBlurHandle: nameBlurHandler,
    reset: resetName,
  } = UseInput(isNoEmpyt);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hassError: lastNameInputHassError,
    ValueChangeHandler: lastNameChangeHandler,
    inputBlurHandle: lastNameBlurHandler,
    reset: resetlastName,
  } = UseInput(isNoEmpyt);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hassError: emailInputHassError,
    ValueChangeHandler: emailChangeHandler,
    inputBlurHandle: emailBlurHandler,
    reset: resetEmail,
  } = UseInput((value) => value.includes("@"));

  //Check For Form
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetName();
    resetlastName();
    resetEmail();
  };

  const nameInputClasses = nameInputHassError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameInputHassError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHassError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="Fname">First Name</label>
          <input
            type="text"
            id="Fname"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        {nameInputHassError && (
          <h3 className="error-text">Enter A Valid First Name</h3>
        )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="Lname">Last Name</label>
          <input
            type="text"
            id="Lname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        {lastNameInputHassError && (
          <h3 className="error-text">Enter A Valid Last Name</h3>
        )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHassError && (
        <h3 className="error-text">Enter A Valid Email</h3>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
