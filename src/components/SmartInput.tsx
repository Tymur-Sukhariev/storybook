import { useRef, useState } from 'react';
import HidePassword from '../../public/icons/hidePassword.svg';
import ShowPassword from '../../public/icons/showPassword.svg';
import styles from '../styles/smartInput.module.css';

export interface InputProps {
  type: string;
  clearable: boolean;
}

export default function SmartInput({ type, clearable }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  function handleClear() {
    if (inputRef.current) inputRef.current.value = '';
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <>
      <div className={styles.inputWrapper}>
        <input ref={inputRef} type={inputType} className={styles.input} />
        {isPassword && (
          <img
            onClick={toggleShowPassword}
            className={styles.eye}
            src={showPassword ? HidePassword : ShowPassword}
            alt={showPassword ? 'Hide password' : 'Show password'}
          />
        )}
      </div>
      {clearable && (
        <button onClick={handleClear} className={styles.clearButton}>
          ×
        </button>
      )}
    </>
  );
}
