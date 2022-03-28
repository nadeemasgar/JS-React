import React from "react";

const UserContext = React.createContext({
  globalPosts: [],
  globalError: "",
});

export const UserProvider = UserContext.Provider;

export const UserConsumer = UserContext.Consumer;

// export { UserProvider, UserConsumer };
