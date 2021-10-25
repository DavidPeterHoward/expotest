import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import getRealmApp from "./getRealmApp";

// Access the Realm App.
const app = getRealmApp();

// Create a new Context object that will be provided to descendants of
// the AuthProvider.
export const AuthContext = React.createContext<any>(null);

// The AuthProvider is responsible for user management and provides the
// AuthContext value to its descendants. Components under an AuthProvider can
// use the useAuth() hook to access the auth value.
const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(app.currentUser);
  const [curUser, setCurUser] = useState<any>();
  const realmRef = useRef<any>(null);
  const [projectData, setProjectData] = useState<any>([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    // The current user always has their own project, so we don't need
    // to wait for the user object to load before displaying that project.
    const myProject: any = {
      name: "My Project",
      partition: `project=${user.id}`,
    };
    setProjectData([myProject]);

    const config = {
      sync: {
        user,
        partitionValue: `user=${user.id}`,
      },
    };

    // Open a realm with the logged in user's partition value in order
    // to get the projects that the logged in user is a member of
    Realm.open(config).then((userRealm) => {
      realmRef.current = userRealm;
      const users = userRealm.objects("User");

      users.addListener(() => {
        // The user custom data object may not have been loaded on
        // the server side yet when a user is first registered.
        if (users.length === 0) {
          setProjectData([myProject]);
        } else {
          const { memberOf }: any = users[0];
          setProjectData([...memberOf]);
        }
      });
    });

    return () => {
      // cleanup function
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
        setProjectData([]); // set project data to an empty array (this prevents the array from staying in state on logout)
      }
    };
  }, [user]);

  // The signIn function takes an email and password and uses the
  // emailPassword authentication provider to log in.
  const signIn = async (email: any, password: any) => {
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      const newUser = await app.logIn(credentials);
      setUser(newUser);
      setCurUser({ id: newUser.id });
      console.log("Successfully logged in!", newUser.id);
      console.log(newUser);
    } catch (err) {
      console.log("Failed to log in");
    }
    /*     const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds); */
  };

  // The signUp function takes an email and password and uses the
  // emailPassword authentication provider to register the user.
  const signUp = async (email: any, password: any) => {
    await app.emailPasswordAuth.registerUser(email, password);
  };

  // The signOut function calls the logOut function on the currently
  // logged in user
  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user,
        curUser,
        projectData, // list of projects the user is a memberOf
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// The useAuth hook can be used by components under an AuthProvider to
// access the auth context value.
const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error("useAuth() called outside of a AuthProvider?");
  }
  return auth;
};

export { AuthProvider, useAuth };
