import { useCallback, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if(numberAllowed) str += "012345679";
    if(charAllowed) str += "!@#$%^&*()_+/;'<>.,[{]}`~";

    for(let i = 0; i < length; i++){
      let index = Math.random() * str.length + 1;
      pass += str.charAt(index);
    }

    setPassword(pass);

  }, [numberAllowed, charAllowed, length]);

  return <div className='bg-black h-screen w-full py-8'>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center mb-3'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly/>
        <button className='outline-none bg-orange-500 text-white px-3 py-1 flex flex-col justify-center' onClick={passwordGenerator}>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}/>
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <label className='text-white'>Number</label>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev => !prev))}/>
        </div>
        <div className='flex items-center gap-x-1'>
          <label className='text-white'>Character</label>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => setCharAllowed((prev => !prev))}/>
        </div>
      </div>
    </div>
  </div>
}

export default App
