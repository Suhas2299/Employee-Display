import React from "react";

const UserContext = React.createContext();

export default UserContext;

const UserContextProvider = ({ props }) => {
  const [displayData, setDisplayData] = useState([]);

  return (
    <UserContext.Provider
      value={{
        displayData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
