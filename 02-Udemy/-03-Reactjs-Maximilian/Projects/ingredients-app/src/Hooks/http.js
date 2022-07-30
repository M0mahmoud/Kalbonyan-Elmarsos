import { useCallback, useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifer: null,
};
const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifer: action.identifer,
      };
    case "RESPONSE":
      return {
        ...curHttpState,
        loading: false,
        data: action.resData,
        extra: action.extra,
      };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};
const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const clear = useCallback(() => dispatchHttp({ type: "CLEAR" }), []);
  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifer) => {
      dispatchHttp({ type: "SEND", identifer: reqIdentifer });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          dispatchHttp({
            type: "RESPONSE",
            resData: resData,
            extra: reqExtra,
          });
        })
        .catch((err) => {
          dispatchHttp({
            type: "ERROR",
            errorMessage:
            "Something Wrong !"
          });
        });
    },
    []
  );
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifer: httpState.identifer,
    clear: clear,
  };
};
export default useHttp;
