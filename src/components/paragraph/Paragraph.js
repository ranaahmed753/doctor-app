import React from "react";

function Paragraph({ title, fontSize }) {
    return (
        <p
            style={{
                color: "#B4B4B4",
                fontFamily: "Poppins",
                fontWeight: 300,
                fontSize: fontSize,
                cursor: "pointer",
                textAlign: "start",
            }}
        >
            {title}
        </p>
    );
}

export default Paragraph;
