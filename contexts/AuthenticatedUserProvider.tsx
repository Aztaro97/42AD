import React, { useState, createContext } from "react";

export const AuthenticatedUserContext = createContext({});

interface AuthenticatedUserProviderProps {
  children: React.ReactNode;
}

export const AuthenticatedUserProvider = ({
  children,
}: AuthenticatedUserProviderProps) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
