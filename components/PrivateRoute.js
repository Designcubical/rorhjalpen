import { useEffect, useState } from "react";
import netlifyAuth from "../auth/netlifyAuth";

export default function PrivateRoute({ Children }) {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
    });
  }, [loggedIn]);

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };

  //   let logout = () => {
  //     netlifyAuth.signout(() => {
  //       setLoggedIn(false);
  //       setUser(null);
  //     });
  //   };

  return (
    <>
      {loggedIn && Children}
      {!loggedIn && <button onClick={login}>Log in here.</button>}
    </>
  );
}
