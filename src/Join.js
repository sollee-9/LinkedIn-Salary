import React, { useState } from "react";
import LinkedinLogo2 from "./images/linkedin2.png";
import "./styles/Join.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { Divider } from "@mui/material";

function Join({ setJoin }) {
   const [name, setName] = useState("");
   const [profilePic, setProfilePic] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();

   const register = (e) => {
      e.preventDefault();

      if (!name) {
         return alert("Please enter a full name");
      }

      auth
         .createUserWithEmailAndPassword(email, password)
         .then((userAuth) => {
            userAuth.user
               .updateProfile({
                  displayName: name,
                  photoURL: profilePic,
               })
               .then(() => {
                  dispatch(
                     login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                     })
                  );
               });
         })
         .catch((error) => alert(error));
   };

   return (
      <div className="join">
         <div className="join__header">
            <img src={LinkedinLogo2} alt="Linkedin logo"></img>
         </div>
         <div className="join__body">
            <h2>Make the most of your professional life</h2>
            <div className="join__card">
               <form>
                  <h3>Join LinkedIn</h3>
                  <p>Full Name</p>
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />

                  <p>Profile picture URL (optional)</p>
                  <input
                     type="text"
                     value={profilePic}
                     onChange={(e) => setProfilePic(e.target.value)}
                  />

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

                  <button type="submit" onClick={register}>
                     Agree & Join
                  </button>
               </form>
               <div className="divider__or">or</div>
               <p className="join__signin">
                  Already on LinkedIn?{" "}
                  <button onClick={() => setJoin(false)}>Sign in</button>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Join;
