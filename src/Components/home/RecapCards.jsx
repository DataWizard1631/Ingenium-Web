import React from 'react';

const RecapCards = () => {
  return (
    <div className="container mx-auto px-4 h-[800px] md:h-[600px] lg:h-[800px] mt-48 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-20 md:grid-rows-4 gap-4 h-full">
        {/* First column: 2x1 and 2x1 */}
        <div className="row-span-1 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/1.jpg" 
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-3 col-span-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/swati.png" 
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second column: 2x1, RECAP 1x1, 1x1 */}
        <div className="col-span-1 row-span-2 md:col-start-2 md:row-start-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/1.jpg" 
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-start-2 row-start-3 row-span-1 rounded-2xl flex items-center justify-center">
          <h2 className="text-7xl font-primaryFont font-bold text-white">RECAP</h2>
        </div>
        <div className="col-span-1 row-span-1 md:col-start-2 md:row-start-4 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/1.jpg" 
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Third column: 3x1, 1x1 */}
        <div className="col-span-1 row-span-3 md:col-start-3 md:row-start-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/samay-raina.png" 
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 md:col-start-3 md:row-start-4 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/1.jpg" 
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Fourth column: 2x1 and 2x1 */}
        <div className="col-span-2 md:col-span-1 row-span-2 md:col-start-4 md:row-start-1 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/1.jpg" 
            alt="Image 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 md:col-span-1 row-span-2 md:col-start-4 md:row-start-3 rounded-2xl overflow-hidden bg-gray-200">
          <img 
            src="/Images/chirayu-mistry.png" 
            alt="Image 8"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default RecapCards;
