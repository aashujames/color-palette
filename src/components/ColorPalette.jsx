import React, { useState, useEffect } from "react";
import rgbToHex from "../utils.jsx";

const ColorPalette = ({ item, index }) => {
    const { ...colors } = item;
    const rgb = colors.rgb;
    const weight = colors.weight;
    const hexCode = rgbToHex(...rgb);
    const hexValue = hexCode;
    console.log(hexValue);
    return (
        <div
            className={`color ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `${hexCode}` }}
            onClick={() => {
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <div className="percent-value">{weight} %</div>
            <div className="color-value">{hexCode}</div>
        </div>
    );
};

export default ColorPalette;
