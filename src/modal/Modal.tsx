import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: React.FC<{ content: JSX.Element }> = ({ content }) => {
  const modalRoot = document.getElementById('modal-root');
  const modalOuter = useRef(document.createElement('div'));

  useEffect(() => {
    modalOuter.current.className = 'modal-outer';
    modalRoot?.appendChild(modalOuter.current);

    return () => {
      console.log('Clear function');
      modalRoot?.removeChild(modalOuter.current);
    };
  }, []);

  const modalInner = () => {
    return (
      <div className="modal-inner">
        {content}
      </div>
    );
  };

  return createPortal( modalInner(), modalOuter.current);

};

export default Modal;