import React from "react";
import { useState } from "react";
import Inputbox from "./components/Input";
import Usecurrencyinfo from "./baap";


function App() {
  const  [amount,setAmount] = useState(0);
  const [fromcurr,setFromcurr] = useState("usd")
  const [tocurr,settocurr] = useState("inr")
   const [convertedAmount,setconvertedAmount] = useState(0)
   const currencyinfo = Usecurrencyinfo(fromcurr)
   const option = Object.keys(currencyinfo)
   const swap = ()=>{
    setFromcurr(tocurr)
    settocurr(fromcurr)
    setAmount(convertedAmount)
    setconvertedAmount(amount)
   }
   const convert = () =>
   {setconvertedAmount(amount*currencyinfo[tocurr])
   }
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <Inputbox
                              label="From"
                              Amount={amount}
                              selectcurrency = {fromcurr}
                              currencyoption = {option}
                              onAmountChange={(val)=>setAmount(val)}
                              onCurrencychange={(val)=>setFromcurr(val)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <Inputbox
                              label="To"
                              Amount={convertedAmount}
                              selectcurrency = {tocurr}
                              currencyoption = {option}
                              onAmountChange={(val)=>setconvertedAmount(val)}
                              onCurrencychange={(val)=>settocurr(val)}
                              amountdisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {fromcurr} to {tocurr}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;