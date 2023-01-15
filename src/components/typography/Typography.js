import React from "react";

function Typography({ type }) {
    return type === "take-care" ? (
        <h1
            style={{
                lineHeight: 0.3,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 50,
            }}
        >
            <span
                style={{
                    color: "#92D2C0",
                    lineHeight: 0.3,
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 50,
                }}
            >
                Take care
            </span>
            <span
                style={{
                    color: "#063B70",
                    marginLeft: 10,
                    lineHeight: 0.3,
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 50,
                }}
            >
                of your
            </span>
        </h1>
    ) : (
        <h1
            style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 50,
                color: "#063B70",
                lineHeight: 0.3,
            }}
        >
            health with care
        </h1>
    );
}

export default Typography;
