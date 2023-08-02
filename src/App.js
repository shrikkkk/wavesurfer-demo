import React from 'react';
import Waveform from './waveform';

const App = () => {

  const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
  
  return (
    <main style={{ padding: '16px' }}>
      <h1>WaveSurfer.js Demo For React.js</h1>
      <Waveform audio={url} />
      <footer style={{ marginTop: '32px' }}>
        <p> Made by Yumin Xia</p>
      </footer>
    </main>
  );
}

export default App;
