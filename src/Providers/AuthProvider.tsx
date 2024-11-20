import { createContext, PropsWithChildren, useContext, useState } from "react";

interface AuthTypes{
    authenticated : boolean
    setAuthenticated : React.Dispatch<React.SetStateAction<boolean>>
}


const AuthContext = createContext<AuthTypes | undefined>(undefined)

export default function AuthProvider({children}:PropsWithChildren) {

    const [authenticated, setAuthenticated] = useState(false)

    return(
        <AuthContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider"); // Throw an error instead of just logging
    }
    return context; // Return the valid context
  };