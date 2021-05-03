/** @format */

import React, { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';

const UploadFile = () => {
  const [file, setFile] = useState();

  const ImageUploadHandler = (e) => {
    let selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <form>
      <label>
        <input
          type='file'
          onChange={ImageUploadHandler}
          accept='image/png,image/jpeg'
        />
        <span>+</span>
      </label>
      <div className='output'>
        {file && <div>{file.name}</div>}
        {file && (
          <div>
            <ProgressBar file={file} setFile={setFile} />
          </div>
        )}
      </div>
    </form>
  );
};

export default UploadFile;
