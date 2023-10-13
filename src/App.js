import React, { useEffect } from 'react';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice"
import { auth } from "./firebase"
import Login from "./Login"
import { login, logout} from "./features/userSlice"


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in & can dispath them into the store
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
      )} else {
        // user is logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      {!user ? 
        <Login /> : (
        <>     
          <Header /> 
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>  
        </>
      )}
    </div>
  );
}

export default App;
