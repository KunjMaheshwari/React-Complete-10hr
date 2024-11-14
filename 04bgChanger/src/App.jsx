import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive'); // Initial background color

  // // Function to change the background color
  // function changeColor(newColor) {
  //   setColor(newColor);
  // }

  return (
    <>
      <div className='w-screen h-screen duration-200 flex items-center justify-center'
           style={{ backgroundColor: color }}>

        <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button
              onClick={() => setColor('red')}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{ backgroundColor: 'red' }}
            >
              Red
            </button>

            <button
              onClick={() => setColor('blue')}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{ backgroundColor: 'blue' }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
