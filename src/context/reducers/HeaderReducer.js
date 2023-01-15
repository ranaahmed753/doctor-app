import { HeaderActionTypes } from "../actions/constants";
export const headerReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case HeaderActionTypes.SWITCH_TO_HOME_PAGE:
            return {
                ...state,
                isHomePage: true,
                isAboutPage: false,
                isServicePage: false,
                isDoctorPage: false,
                isFacilityPage: false,
                isSignupPage: false,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_ABOUT_PAGE:
            return {
                ...state,
                isAboutPage: true,
                isHomePage: false,
                isServicePage: false,
                isDoctorPage: false,
                isFacilityPage: false,
                isSignupPage: false,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_SERVICE_PAGE:
            return {
                ...state,
                isHomePage: false,
                isAboutPage: false,
                isServicePage: true,
                isDoctorPage: false,
                isFacilityPage: false,
                isSignupPage: false,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_DOCTOR_PAGE:
            return {
                ...state,
                isHomePage: false,
                isAboutPage: false,
                isServicePage: false,
                isDoctorPage: true,
                isFacilityPage: false,
                isSignupPage: false,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_FACILITY_PAGE:
            return {
                ...state,
                isHomePage: false,
                isAboutPage: false,
                isServicePage: false,
                isDoctorPage: false,
                isFacilityPage: true,
                isSignupPage: false,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_SIGNUP_PAGE:
            return {
                ...state,
                isHomePage: false,
                isAboutPage: false,
                isServicePage: false,
                isDoctorPage: false,
                isFacilityPage: false,
                isSignupPage: true,
                isSigninPage: false,
            };

        case HeaderActionTypes.SWITCH_TO_SIGNIN_PAGE:
            return {
                ...state,
                isHomePage: false,
                isAboutPage: false,
                isServicePage: false,
                isDoctorPage: false,
                isFacilityPage: false,
                isSignupPage: false,
                isSigninPage: true,
            };

        default:
            return state;
    }
};
