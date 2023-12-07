import React, { useState } from 'react';
import './Card.css'; // You'll need to create a CSS file for styling

const ScratchCard = () => {
  const [isScratched, setIsScratched] = useState(false);

  const handleScratch = () => {
    setIsScratched(true);
  };

  const getScratchPercentage = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const target = e.target;
    const boundingBox = target.getBoundingClientRect();
    const percentageX = (offsetX / boundingBox.width) * 100;
    const percentageY = (offsetY / boundingBox.height) * 100;

    return { percentageX, percentageY };
  };

  const handleMouseMove = (e) => {
    if (isScratched) return;

    const { percentageX, percentageY } = getScratchPercentage(e);

    // You can adjust the threshold as needed
    if (percentageX > 30 && percentageX < 70 && percentageY > 30 && percentageY < 70) {
      setIsScratched(true);
    }
  };

  return (
    <div className="scratch-card" onMouseMove={handleMouseMove} onClick={handleScratch}>
      {isScratched ? (
        <div className="revealed-content">
          <p>Congratulations! You won $10!</p>
        </div>
      ) : (
        <div className="hidden-content">
          <p>Scratch to reveal your prize</p>
        </div>
      )}
    </div>
  );
};

export default ScratchCard;
