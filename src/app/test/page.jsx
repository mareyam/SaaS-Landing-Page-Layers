'use client'

import { useState } from 'react';

const ToggleBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Button on top */}
      <button
        onClick={toggleBox}
        className="bg-blue-500 text-white p-4 rounded z-10 relative"
      >
        Toggle
      </button>

      {/* Box behind the button when clicked */}
      {isOpen && (
        <div className="absolute top-0 left-0 p-4 bg-gray-300 border rounded z-0">
          This is the box behind the button.
        </div>
      )}
    </div>
  );
};

export default ToggleBox;