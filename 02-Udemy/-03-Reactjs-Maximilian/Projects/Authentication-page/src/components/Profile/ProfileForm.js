import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext)
  const histroy = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFfo1XxQwr6nm4v5_DZB79DJmaq8GFrwo',{
        method:"POST",
        body:JSON.stringify({
          idToken : authCtx.token,
          password:enteredNewPassword,
          returnSecureToken:false,
        }),
        headers:{
          "Content-Type": "application/json"
        }
      }).then(response=>{
        //Succeeds
        histroy.replace('/')
      })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password"  id="new-password" minLength='6' maxLength='25' ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
