import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IAction } from '../types/types';

const Modal: React.FC<
  {
    content: JSX.Element,
    actions: IAction[]
  }>
  = ({ content, actions }) => {
    const modalRoot = document.getElementById('modal-root');
    const modalOuter = useRef(document.createElement('div'));

    useEffect(() => {
      modalOuter.current.className = 'modal-outer container-fluid';
      modalRoot?.appendChild(modalOuter.current);

      return () => {
        modalRoot?.removeChild(modalOuter.current);
      };
    }, []);

    const renderActions = () => {
      return actions.map(action =>
        <button
          className='btn btn-outline-dark mr-2 mt-2 w-auto'
          type='button'
          key={action.name}
          onClick={action.action}>
          {action.name}
        </button>
      );
    };

    const modalInner = () => {
      return (
        <div className="row">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-12 col-md-8  col-lg-6 p-3 modal-inner">
            {content}
            <div>
              {renderActions()}
            </div>
          </div>
          <div className="col-md-2 col-lg-3"></div>
        </div>
      );
    };

    return createPortal(modalInner(), modalOuter.current);

  };

export default Modal;