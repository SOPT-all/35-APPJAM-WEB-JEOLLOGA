import BtnBox from '@components/common/modal/BtnBox';
import ModalTextBox from '@components/common/modal/ModalTextBox';

import * as styles from './modal.css';

interface ModalProps {
  modalTitle: string;
  modalBody: string;
}

const Modal = ({ modalTitle, modalBody }: ModalProps) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <ModalTextBox modalTitle={modalTitle} modalBody={modalBody} />
        <BtnBox />
      </div>
    </div>
  );
};

export default Modal;
