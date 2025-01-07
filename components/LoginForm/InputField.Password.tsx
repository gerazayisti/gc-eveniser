import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}

 const InputFieldPass: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <div className={`${styles.parentPass}`}>
        <img src="/view-off.svg" alt="view off icon" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`${styles.inputPass} ${error ? styles.errorInput : ''}`}
          placeholder={placeholder}
        />
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
 };

export default InputFieldPass;