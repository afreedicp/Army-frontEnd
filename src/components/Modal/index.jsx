import { StyledModal } from './styles';

function Modal({ open, children, align, containerClassName }) {
  return (
    <StyledModal className={`${open === 'open' ? 'open-drawer' : ''}`}>
      <div
        className={`drawer-container ${open} align-${align} ${containerClassName}`}
      >
        {children}
      </div>
    </StyledModal>
  );
}

export default Modal;
