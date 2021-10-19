import React from 'react';

import Editor from './components/editor';

export default () => (
  <div className='container'>
    <div className='row mt-4'>
      <h4 className='col-auto'>Graph editor</h4>
    </div>
    <div className='row mt-4'>
      <div className='col-12'>
        <Editor />
      </div>
    </div>
  </div>
);
