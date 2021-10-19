import React from 'react';

interface Props {
  onSuccess: () => void;
}

export default ({ onSuccess }: Props) => (
  <button type='button' className='btn btn-danger' onClick={onSuccess}>
    Sign out
  </button>
);
