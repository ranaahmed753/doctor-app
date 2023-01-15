import { createContext, useContext, useReducer } from "react";
import { headerState } from "./states/HeaderState";
import { headerReducer } from "./reducers/HeaderReducer";
export const doctorContext = createContext();
export const DoctorProvider = ({ children }) => {
    const [headerStates, headerDispatch] = useReducer(
        headerReducer,
        headerState
    );
    return (
        <doctorContext.Provider
            value={{
                headerStates: headerStates,
                headerDispatch: headerDispatch,
            }}
        >
            {children}
        </doctorContext.Provider>
    );
};

export function useHeader() {
    return useContext(doctorContext);
}
