/** @format */

import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid.jsx';
import Modal from './components/Modal.jsx';
import Title from './components/Title.jsx';
import UploadFile from './components/UploadFile.jsx';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);
  return (
    <div className='App'>
      <Title />
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
