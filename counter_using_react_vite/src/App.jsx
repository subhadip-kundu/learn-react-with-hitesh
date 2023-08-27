import { useState } from 'react'





function App() {
  // useState hook
  let [counter, setCounter] = useState(0)


  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
