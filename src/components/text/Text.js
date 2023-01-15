import React from "react";

function Text({ size, title }) {
    if (size === "small") {
        return (
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 200,
                    fontSize: 12,
                    cursor: "pointer",
                    color: "#264064",
                    textAlign: "start",
                }}
            >
                {title}
            </h1>
        );
    }
    if (size === "medium") {
        return (
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    fontSize: 15,
                    cursor: "pointer",
                    color: "#264064",
                    textAlign: "start",
                }}
            >
                {title}
            </h1>
        );
    }
    if (size === "large") {
        return (
            <h1
                style={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 30,
                    cursor: "pointer",
                    color: "#264064",
                    textAlign: "start",
                }}
            >
                {title}
            </h1>
        );
    }
}

export default Text;
