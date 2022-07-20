import UseInput from "../Hooks/UseInput";

const SimpleInput = (props) => {
  // UseInput(Function) => We Can Customize The Validation Logic In The Component Where We Need This Hook.
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hassError: nameInputHassError,
    ValueChangeHandler: nameChangeHandler,
    inputBlurHandle: nameBlurHandler,
    reset: resetName,
  } = UseInput((value) => value.trim() !== "");
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
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
    //If It Is False This Do button Is Disabled
  }

  const formSubmitionHandler = (e) => {
    e.preventDefault();
    // Form is submitted
    // If enter empty value
    if (!enteredNameIsValid ) {
      return;
    }
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputHassError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHassError
    ? "form-control invalid"
    : "form-control ";

  //
  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHassError && <h3 className="error-text">Enter A Valid Name</h3>}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
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

export default SimpleInput;

//------- Note ----------
// Ref Good when U Will use Once On Submit
// useState Good When use after every keysstroke ,
// EX => for instant validation or if U want to rest form (better than ref to rest it)

//Before use Hook
// const [enteredName, setEnteredName] = useState("");
// const [enteredEmail, setEnteredEmail] = useState("");
// const [enteredNameTouch, setEnteredNameTouch] = useState(false);
// const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);
// const [formIsValid , setFormIsValid] = useState(false);
//This mean that name value is valid
// const enteredNameIsValid = enteredName.trim() !== "";
// const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
//This mean that email value is valid
// const enteredEmailIsValid = enteredEmail.includes("@");
// const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;
