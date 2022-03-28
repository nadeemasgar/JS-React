import React from "react";

const UserContext = React.createContext({ // Default Value
  name: "Tokopedia",
  location: "Delhi",
});

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;
export default UserContext;

// export { UserProvider, UserConsumer };
