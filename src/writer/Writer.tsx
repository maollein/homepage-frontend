import React, { ChangeEvent, SyntheticEvent } from 'react';
import { IAction } from '../types/types';

const Writer: React.FC<
  {
    title: string,
    content: string,
    titleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    contentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    submitAction: IAction,
    actions: IAction[]
  }> =
  ({ title, content, titleChange, contentChange, submitAction, actions }) => {

    const handleSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      submitAction.action();
    };

    const renderOtherActions = () => {
      return actions.map(action =>
        <button
          className='form-control btn btn-outline-secondary ml-1 mt-2 w-auto'
          type='button'
          key={action.name}
          onClick={action.action}>
          {action.name}
        </button>
      );
    };

    return (
      <form className='mt-3' onSubmit={handleSubmit}>
        <input type='text' className='form-control border-dark' placeholder='Title' value={title} onChange={titleChange} />
        <textarea className='form-control border-dark mt-2' placeholder='content...' value={content} onChange={contentChange} />
        <button type='submit' className='form-control btn btn-outline-dark mt-2 w-auto'>{ submitAction.name }</button>
        {renderOtherActions()}
      </form>
    );
  };

export default Writer;