import React from "react";
import Paragraph from "../paragraph/Paragraph";
import Text from "../text/Text";
import "./DoctorCard.css";
import Icon from "@mui/icons-material/Vaccines";
import { NavLink } from "react-router-dom";

function DoctorCard({ icon, title, description, link, onPressed }) {
    return (
        <NavLink className="doctor__card" to={link} onClick={() => onPressed()}>
            <Icon
                style={{
                    backgroundColor: "#85CDB9",
                    color: "white",
                    padding: 10,
                    borderRadius: 999,
                }}
            />
            <Text size="medium" title={title} />
            <Paragraph title={description} fontSize={12} />
        </NavLink>
    );
}

export default DoctorCard;
