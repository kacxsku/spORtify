import React, { createContext, useState, useEffect } from "react";
import userService from '../service/userService'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const[user, setUser] = useState()

    useEffect(() => {
      const fetchUser = () => {
        userService.getUserData("15")
        .then(user => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
          // firebaseAuth(user.name ,user.email, user.password);
          console.log("get user operation successfully finish", user);
        }).catch(error => {
          console.log("unable to get user data", error)
      })
    }
    fetchUser();
  }, []);


  const firebaseAuth = async (username ,email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      if ( errorCode === 'auth/user-not-found' ) {
                    const userCredential =  createUserWithEmailAndPassword(
                      auth,
                      email,
                      password
                    );
                    const update =  updateProfile(auth.currentUser, {
                      displayName: username,
                    });
                
                    const user = userCredential.user;
                
                    setDoc(doc(db, "users", user.uid), {
                      username: username,
                      email: email,
                      userId: user.uid,
                      timestamp: new Date(),
                    });
      } else {
          alert( errorMessage );
      }
      console.log( error );
  });
    // signInWithEmailAndPassword(auth, mail, pass)
    //   .then((userCredential) => {
    //     const userer = userCredential.user;
    //     console.log("fbu", userer);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     alert(errorMessage);
    //   });
  }

  const firebaseLogin = (mail, pass) => {
    signInWithEmailAndPassword(auth, mail, pass)
    .then((userCredential) => {
      const userer = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
  }


  // const RegisterPage = () => {
  //   let navigate = useNavigate(); 

  //   const firebaseAuth = async (username, password, email) => {
  //       console.log("fb", email)
  //       try {
  //           const userCredential = await createUserWithEmailAndPassword(
  //             auth,
  //             email,
  //             password
  //           );
  //           const update = await updateProfile(auth.currentUser, {
  //             displayName: username,
  //           });
        
  //           const user = userCredential.user;
        
  //           setDoc(doc(db, "users", user.uid), {
  //             username: username,
  //             email: email,
  //             userId: user.uid,
  //             timestamp: new Date(),
  //           });
        
  //           navigate("/");
  //         } catch (error) {
  //           alert(error.message);
  //         }
  //   }

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };
