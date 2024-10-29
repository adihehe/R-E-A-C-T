import { useState, useCallback,useEffect,useRef} from 'react'


function App() {
  let [Password, setpassword] = useState("");
  let [length, setlength] = useState(8)
  let [number, setnumber] = useState(false);
  let [charecters, setcharecter] = useState(false);
  let setpass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (charecters) str += "!@#~$%^&*()";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str[char];

    }
    console.log(pass);
    setpassword(pass)

  }, [length, number, charecters,setpassword]);
  console.log(length);
  let caller = useEffect(()=>{setpass()},[length, number, charecters])
  let refernce = useRef(null);

  let copythetext = useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
    refernce.current?.select()
    
  },[Password])
  

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-cyan-500 text-fuchsia-300">
        <h1 className='text-fuchsia-300 text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={refernce}

          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copythetext}
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
         
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setnumber(!number);
          }}
      />
      <label htmlFor="numberInput" >Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charecters}
              id="characterInput"
              onChange={() => {
                  setcharecter(()=>{setcharecter(!charecters)})
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
 
 


        </div>
      </>
      )
}

      export default App
