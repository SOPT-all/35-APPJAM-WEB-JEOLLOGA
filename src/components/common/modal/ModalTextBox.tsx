import * as styles from './modal.css';

interface ModalTextBoxProps {
  modalTitle: string;
  modalBody: string;
}

const ModalTextBox = ({ modalTitle, modalBody }: ModalTextBoxProps) => {
  return (
    <div className={styles.modalTextBox}>
      <h1 className={styles.modalTitle}>{modalTitle}</h1>
      <h2 className={styles.modalBody}>{modalBody}</h2>
    </div>
  );
};

export default ModalTextBox;
