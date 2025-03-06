import React from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter text...",
  value,
  onChange,
  variant = "primary",
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={clsx(styles.input, styles[variant], className)}
    />
  );
};

export default Input;
