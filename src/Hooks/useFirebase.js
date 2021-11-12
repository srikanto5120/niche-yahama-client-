import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

initializeAuthentication();

const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [userDataId, setUserDataId] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  // sign in with google
  const googleSignIn = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };
  //sign in email and password

  const registerWithEmailPassword = (
    name,
    email,
    password,
    location,
    history
  ) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const newUser = { email, displayName: name };

        setUser(newUser);
        savedDb(email, name);
        const loginPage = "/";
        history.replace(loginPage);
        setAuthError("");

        // update user name

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsloading(false));
  };

  // login

  const login = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password, location, history)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // observe on state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  /// saved user data in mongodb
  const savedDb = (email, displayName) => {
    const user = { email, displayName };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setUserDataId(data));
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/${userDataId}`).then((res) =>
      res.json().then((data) => setUser(data))
    );
  }, [userDataId]);
  return {
    user,
    googleSignIn,
    registerWithEmailPassword,
    login,
    logOut,
    authError,
    isLoading,
  };
};
export default useFirebase;
