import React, { useState } from 'react';

import AuthorizeButton from './components/authorize-button';
import SignoutButton from './components/signout-button';

export default () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  return (
    <div className='container'>
      <div className='row mt-4'>
        <h4 className='col-auto'>Supertiny calendar</h4>
      </div>
      <div className='row mt-4'>
        <div className='col-auto'>
          {authorized ? (
            <SignoutButton onSuccess={() => setAuthorized(false)} />
          ) : (
            <AuthorizeButton onSuccess={() => setAuthorized(true)} />
          )}
        </div>
      </div>
    </div>
  );
};
