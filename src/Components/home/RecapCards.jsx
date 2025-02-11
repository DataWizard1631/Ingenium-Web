import React from 'react';

const RecapCards = () => {
  return (
    <div className="container mx-auto px-4 h-[800px]">
      <div className="grid grid-rows-5 grid-cols-4 gap-4 h-full">
        {/* First column: 2x1 and 3x1 */}
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-3 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second column: 2x1, RECAP 1x1, 2x1 */}
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 col-span-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">RECAP</h2>
        </div>
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third column: xl (3x1), 2x1, 2x1 */}
        <div className="row-span-3 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-1 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 7"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fourth column: 3x1 and 2x1 */}
        <div className="row-span-3 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-2 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="./public/1.jpg" 
            alt="Image 9"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecapCards;
