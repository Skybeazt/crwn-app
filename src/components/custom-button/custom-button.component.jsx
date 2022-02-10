import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <div
    className={`${isGoogleSignin ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </div>
);

export default CustomButton;
