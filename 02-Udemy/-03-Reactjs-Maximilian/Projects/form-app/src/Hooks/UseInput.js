//
//
//
//
//          With useState
//
//
//
//
// import { useState } from "react";

// const UseInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouch, setIsTouch] = useState(false);

//   //This mean that name value is valid
//   const valueIsValid = validateValue(enteredValue);
//   const hassError = !valueIsValid && isTouch;

//   const ValueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const inputBlurHandle = (event) => {
//     setIsTouch(true);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouch(false);
//   };
//   return {
//     value: enteredValue,
//     isValid: valueIsValid,
//     hassError,
//     ValueChangeHandler,
//     inputBlurHandle,
//     reset,
//   };
// };

// export default UseInput;

//
//
//
//
//          With useReducer
//
//
//
//
import { useReducer } from "react";

const initialInput = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return {
    value: "",
    isTouched: false,
  };
};

const UseInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInput);

  const valueIsValid = validateValue(inputState.value);
  const hassError = !valueIsValid && inputState.isTouched;

  const ValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandle = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hassError,
    ValueChangeHandler,
    inputBlurHandle,
    reset,
  };
};

export default UseInput;
