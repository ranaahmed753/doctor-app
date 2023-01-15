import { HeaderActionTypes } from "./constants";

export const switchToHome = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_HOME_PAGE,
    };
};

export const switchToAbout = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_ABOUT_PAGE,
    };
};

export const switchToService = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_SERVICE_PAGE,
    };
};

export const switchToDoctor = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_DOCTOR_PAGE,
    };
};

export const switchToFacility = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_FACILITY_PAGE,
    };
};

export const switchToSignup = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_SIGNUP_PAGE,
    };
};

export const switchToSignin = () => {
    return {
        type: HeaderActionTypes.SWITCH_TO_SIGNIN_PAGE,
    };
};
