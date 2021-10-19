import React, { useState } from 'react';

import Circle from './circle';

export default () => {
  const [radius, setRadius] = useState<number>(30);

  return (
    <>
      <div className='row'>
        <div className='col-12'>
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
      <div className='row mt-4'>
        <div className='col-12'>
          <Circle radius={radius} />
        </div>
      </div>
    </>
  );
};
