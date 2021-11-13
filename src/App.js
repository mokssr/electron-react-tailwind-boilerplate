import { useState } from 'react';
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div className="select-none mt-5">
      <div className="flex justify-center">
        <p>Count {count}</p>
      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-blue-200 px-5 py-2 rounded-md hover:bg-blue-300"
          onClick={handleAdd}>
          add counter
        </button>
        <button className="bg-red-200 px-5 py-2 rounded-md hover:bg-red-300 ml-4"
          onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
