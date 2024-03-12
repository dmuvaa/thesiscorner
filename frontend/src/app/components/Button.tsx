/** @format */
'use client'
import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "success" | "danger";
  backgroundColor: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ variant, backgroundColor, text }) => {
  let buttonStyle: React.CSSProperties = {
    backgroundColor,
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box",
    transition: "background-color 0.3s",
  };

  const handleMouseEnter = () => {
    // Change background color on hover
    if (variant === "primary") {
      buttonStyle.backgroundColor = "#007bff";
    } else if (variant === "secondary") {
      buttonStyle.backgroundColor = "#6c757d";
    } else if (variant === "success") {
    const updatedButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#28a745",

        };
        buttonStyle = updatedButtonStyle;
    } else if (variant === "danger") {
      buttonStyle.backgroundColor = "#dc3545";
    }
  };

  const handleMouseLeave = () => {
    // Reset background color when not hovered
    let updatedButtonStyle = {
        ...buttonStyle,
        backgroundColor: backgroundColor,
    };
    buttonStyle = updatedButtonStyle;
  };

return (
    <div className="w-full">
        <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter} // Fix: Pass the function handleMouseEnter as the event handler
            onMouseLeave={handleMouseLeave}
            className="w-full whitespace-nowrap"
        >
            {text}
        </button>
    </div>
);
};

export default Button;
