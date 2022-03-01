import { useState } from 'react';
import './App.css';
import { InputShortener } from './InputSortener';
import { LinkResult } from './LinkResult';

function App() {

  const [inputValue, setInputValue] = useState("")

  return (
    <div className='container'>
      <InputShortener setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
