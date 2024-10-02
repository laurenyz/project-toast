import React from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const initialVariant = 'notice'
  const [selectedVariant, setSelectedVariant] = React.useState(initialVariant);
  // const [isToastVisible, setIsToastVisible] = React.useState(false);
  // const [toasts, setToasts] = React.useState([]);
  const { setToasts } = React.useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setToasts((prevState) => [...prevState, {id: crypto.randomUUID(), message, variant: selectedVariant}])
    setSelectedVariant(initialVariant)
    setMessage('')
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf/>
      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
              {
                VARIANT_OPTIONS.map((variant) => (
                  <label key={variant} htmlFor={`variant-${variant}`}>
                  <input
                    id={`variant-${variant}`}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={selectedVariant === variant}
                    onChange={(e)=>setSelectedVariant(e.target.value)}
                  />
                  {variant}
                  </label>
                ))
              }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
