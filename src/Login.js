import React, { useState } from "react";
import "./styles/Login.css";
import loginimage from "./images/loginimage.png";
import Join from "./Join";
import LoginHeader from "./LoginHeader";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [join, setJoin] = useState(false);

   const dispatch = useDispatch();

   const loginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
         dispatch(
            login({
               email: userAuth.user.email,
               uid: userAuth.user.uid,
               displayName: userAuth.user.displayName,
               profileUrl: userAuth.user.photoURL,
            })
         );
      });
   };

   return (
      <>
         {join ? (
            <Join setJoin={setJoin} />
         ) : (
            <>
               <LoginHeader setJoin={setJoin} />
               <div className="login">
                  <div className="login__contents">
                     <div className="login__left">
                        <h1>Find jobs through your community</h1>
                        <form className="login__form">
                           <p>Email</p>
                           <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />

                           <p>Password</p>
                           <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                           <p className="forgotpw">Forgot password?</p>
                           <button type="submit" onClick={loginToApp}>
                              Sign in
                           </button>
                        </form>
                     </div>
                     <div className="login__right">
                        <img src={loginimage} alt="linkedin login" />
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default Login;
