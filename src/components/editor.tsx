import React, { useState } from 'react';

import Circle from './circle';

export default () => {
  const [radius, setRadius] = useState<number>(30);

  return (
    <div className='row'>
      <div className='col-8'>
        <Circle radius={radius} />
      </div>
      <div className='col-4'>
        <div className='row' />
        <div className='btn-group' role='group' aria-label='Radius'>
          <button
            type='button'
            className='btn btn-primary shadow-none'
            onClick={() => setRadius(radius - 5)}
          >
            -
          </button>
          <button type='button' className='btn btn-primary' disabled>
            {radius}
          </button>
          <button
            type='button'
            className='btn btn-primary shadow-none'
            onClick={() => setRadius(radius + 5)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
