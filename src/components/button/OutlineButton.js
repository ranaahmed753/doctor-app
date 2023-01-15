import React, { useState } from "react";
import { useHeader } from "../../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { switchToService } from "../../context/actions/HeaderAction";

function OutlineButton({ title }) {
    const [hovered, setHovered] = useState(false);
    const { headerDispatch } = useHeader();
    return (
        <NavLink
            style={
                !hovered
                    ? {
                          backgroundColor: "white",
                          borderRadius: 999,
                          padding: 10,
                          cursor: "pointer",
                          border: "1px solid #8BCFBC",
                          textDecoration: "none",
                      }
                    : {
                          backgroundColor: "#8BCFBC",
                          borderRadius: 999,
                          padding: 10,
                          cursor: "pointer",
                          border: "1px solid #8BCFBC",
                          textDecoration: "none",
                      }
            }
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            to="/services"
            onClick={() => headerDispatch(switchToService())}
        >
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 15,
                    color: !hovered ? "#8BCFBC" : "white",
                    lineHeight: 0.1,
                }}
            >
                {title}
            </h1>
        </NavLink>
    );
}

export default OutlineButton;
