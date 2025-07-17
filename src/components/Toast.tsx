import { useEffect, useState } from 'react';
import styles from '../styles/toast.module.css';

type ToastType = 'success' | 'fail' | 'default';

interface ToastProps {
  type?: 'success' | 'fail' | 'default';
  text: string;
  duration?: number;
}

export default function Toast({ type = 'default', text, duration = 3000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  function getToastStyle(type: ToastType) {
    switch (type) {
      case 'success':
        return styles.success;
      case 'fail':
        return styles.fail;
      default:
        return styles.default;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return <p className={`${styles.toast} ${getToastStyle(type)}`}>{text}</p>;
}
