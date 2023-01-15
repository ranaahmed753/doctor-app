import React, { useState } from "react";
import { switchToDoctor } from "../../context/actions/HeaderAction";
import { useHeader } from "../../context/DoctorContext";
import { NavLink } from "react-router-dom";

function FilledButton({ title }) {
    const [hovered, setHovered] = useState(false);
    const { headerDispatch } = useHeader();
    return (
        <NavLink
            style={
                !hovered
                    ? {
                          backgroundColor: "#8BCFBC",
                          borderRadius: 999,
                          padding: 10,
                          cursor: "pointer",
                          textDecoration: "none",
                      }
                    : {
                          backgroundColor: "#8BCFBC",
                          borderRadius: 999,
                          padding: 10,
                          cursor: "pointer",
                          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                          textDecoration: "none",
                      }
            }
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => headerDispatch(switchToDoctor())}
            to="/doctors"
        >
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: 15,
                    color: "white",
                    lineHeight: 0.1,
                }}
            >
                {title}
            </h1>
        </NavLink>
    );
}

export default FilledButton;
