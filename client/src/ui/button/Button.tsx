import React from "react";
import styles from "./button.module.css";
import clsx from "clsx"; // Helps combine class names conditionally

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary"; // Optional variant
  className?: string; // Additional custom styles
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary", className }) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
