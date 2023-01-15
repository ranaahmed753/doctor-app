import React from "react";

function Spacer({ type, width, height }) {
    return type === "width" ? (
        <div style={{ width: width }} />
    ) : (
        <div style={{ height: height }} />
    );
}

export default Spacer;
