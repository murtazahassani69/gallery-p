import React , { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGride from './comps/ImageGride';
import footer from './comps/footer';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <footer />
      <UploadForm />
      <ImageGride setSelectedImg={setSelectedImg} />
     { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    
    </div>
  );
}

export default App;
