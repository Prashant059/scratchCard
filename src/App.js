import './App.css';
import React from 'react';
import ScratchCard from 'react-scratchcard';
import card from './Assets/google-scratch-card (1).jpg'

const setting = {
  width: 250,
  height: 250,
  image: card,
  finishPercent: 85,
  onComplete: () => console.log('The card is now clear!')
};

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <ScratchCard {...setting} className="card">
          <p className='head'>
            30% off on levis jeans
          </p>
        </ScratchCard>
      </header>

    </div>


  );
}

export default App;
