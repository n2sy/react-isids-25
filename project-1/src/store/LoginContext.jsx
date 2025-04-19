import { createContext, useState } from "react";

export let LoginContext = createContext({
  isLogged: false,
  role: "",
  seConnecter: () => {},
  seDeconnecter: () => {},
});

function LoginContextProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setIsRole] = useState("");

  function seConnecter(newRole) {
    setIsLogged(true);
    setIsRole(newRole);
    console.log(role);
  }

  function seDeconnecter() {
    setIsLogged(false);
  }

  let c = {
    isLogged,
    role: role,
    seConnecter: seConnecter,
    seDeconnecter: seDeconnecter,
  };

  return (
    <LoginContext.Provider value={c}>{props.children}</LoginContext.Provider>
  );
}

export default LoginContextProvider;
