import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useHeader } from "../../context/DoctorContext";
import {
    switchToHome,
    switchToAbout,
    switchToService,
    switchToDoctor,
    switchToFacility,
    switchToSignup,
    switchToSignin,
} from "../../context/actions/HeaderAction";

function Header() {
    const { headerStates, headerDispatch } = useHeader();
    const {
        isHomePage,
        isAboutPage,
        isServicePage,
        isDoctorPage,
        isFacilityPage,
        isSignupPage,
        isSigninPage,
    } = headerStates;
    return (
        <div className="header">
            <div className="header__left">
                <NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToHome())}
                >
                    <h3
                        style={{
                            fontFamily: "Poppins",
                            fontWeight: 600,
                            fontSize: 16,
                            marginLeft: 15,
                            cursor: "pointer",
                            color: "#063B70",
                        }}
                    >
                        Medie
                    </h3>
                </NavLink>
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: "pointer",
                        color: "#85CDB9",
                    }}
                >
                    Care
                </h3>
            </div>
            <div className="header__middle">
                <NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToHome())}
                >
                    <h1
                        style={
                            isHomePage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#85cdb9",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#063B70",
                                  }
                        }
                    >
                        Home
                    </h1>
                </NavLink>
                <NavLink
                    to="/about"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToAbout())}
                >
                    <h1
                        style={
                            isAboutPage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#85cdb9",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#063B70",
                                  }
                        }
                    >
                        About
                    </h1>
                </NavLink>
                <NavLink
                    to="/services"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToService())}
                >
                    <h1
                        style={
                            isServicePage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#85cdb9",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#063B70",
                                  }
                        }
                    >
                        Services
                    </h1>
                </NavLink>
                <NavLink
                    to="/doctors"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToDoctor())}
                >
                    <h1
                        style={
                            isDoctorPage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#85cdb9",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#063B70",
                                  }
                        }
                    >
                        Doctors
                    </h1>
                </NavLink>
                <NavLink
                    to="/facilities"
                    style={{ textDecoration: "none" }}
                    onClick={() => headerDispatch(switchToFacility())}
                >
                    <h1
                        style={
                            isFacilityPage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#85cdb9",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      color: "#063B70",
                                  }
                        }
                    >
                        Facilities
                    </h1>
                </NavLink>
            </div>
            <div className="header__right">
                <NavLink
                    style={{ textDecoration: "none" }}
                    to="/signin"
                    onClick={() => headerDispatch(switchToSignin())}
                >
                    <h1
                        style={
                            isSigninPage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      backgroundColor: "#8bcfbc",
                                      borderRadius: 999,
                                      paddingLeft: 15,
                                      paddingRight: 15,
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      color: "white",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      backgroundColor: "white",
                                      borderRadius: 999,
                                      paddingLeft: 15,
                                      paddingRight: 15,
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      color: "#063B70",
                                  }
                        }
                    >
                        SignIn
                    </h1>
                </NavLink>

                <NavLink
                    style={{ textDecoration: "none" }}
                    to="/signup"
                    onClick={() => headerDispatch(switchToSignup())}
                >
                    <h1
                        style={
                            isSignupPage
                                ? {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      backgroundColor: "#8bcfbc",
                                      borderRadius: 999,
                                      paddingLeft: 15,
                                      paddingRight: 15,
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      color: "white",
                                  }
                                : {
                                      fontFamily: "Poppins",
                                      fontWeight: 300,
                                      fontSize: 13,
                                      marginLeft: 15,
                                      cursor: "pointer",
                                      backgroundColor: "white",
                                      borderRadius: 999,
                                      paddingLeft: 15,
                                      paddingRight: 15,
                                      paddingTop: 5,
                                      paddingBottom: 5,
                                      color: "#063B70",
                                  }
                        }
                    >
                        SignUp
                    </h1>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
