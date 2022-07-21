import { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// After 1 hr
const calcRemainingTime = (expiresIn) => {
  const cureentTime = new Date().getTime();
  const adjexpiresIn = new Date(expiresIn).getTime();

  const remainingDuration = adjexpiresIn - cureentTime;

  return remainingDuration;
};


const StoredDate = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("time");

  const remainingTime = calcRemainingTime(storedExpirationDate);
  if (remainingTime <= 3000) {
    localStorage.removeItem("token");
    localStorage.removeItem("time");
    return null;
  }

  console.log({
    token: storedToken, duration: remainingTime
  })
  return { token: storedToken, duration: remainingTime };
};


export const AuthContextProvider = (props) => {
  const tokenData = StoredDate();
  let initialToken;
  if (initialToken) {
    initialToken = tokenData.token;
  }
  const [token, SetToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    SetToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("time");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expiresIn) => {
    SetToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("time", expiresIn);

    const remainingTime = calcRemainingTime(expiresIn);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;