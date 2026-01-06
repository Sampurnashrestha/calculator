import { evaluate } from "mathjs";
import React, { useState } from "react";

const Calculator = () => {

    const[input,setInput] = useState("");

    const handleClick = (value) =>  {
        setInput((prev)=> prev + value); 
    };
    
    const handleClear =()=>{
        setInput("")
    }

    const handleDelete = () =>{
        setInput((prev) => prev.slice(0, -1))
    }

    const handleCalculate = () =>{
        try {
            const result = evaluate(input);
            setInput(result.toString())
            
        } catch (error) {
            setInput("Error");
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-5 rounded-xl shadow-xl w-80">
        <div className="bg-black text-green-400 text-right text-3xl p-4 rounded mb-4 font-mono shadow-inner">
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
          onClick={handleClear}
          className="bg-red-600 text-white text-xl p-4 rounded-lg hover:bg-red-700 shadow-md">
            C
          </button>
          <button 
          onClick={handleDelete}
          className="bg-yellow-500 text-black text-xl p-4 rounded-lg hover:bg-yellow-600 shadow-md">
            Del
          </button>
          <button
          onClick={()=> handleClick("%")}
          className="bg-blue-600 text-white text-xl p-4 rounded-lg hover:bg-blue-700 shadow-md">
            %
          </button>
          <button
          onClick={()=> handleClick("/")}
          className="bg-blue-600 text-white text-xl p-4 rounded-lg hover:bg-blue-700 shadow-md">
            /
          </button>

          <button 
          onClick={()=> handleClick("7")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            7
          </button>
          <button 
          onClick={()=> handleClick("8")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            8
          </button>
          <button 
          onClick={()=> handleClick("9")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            9
          </button>
          <button 
          onClick={()=> handleClick("*")}
          className="bg-blue-600 text-white text-xl p-4 rounded-lg hover:bg-blue-700 shadow-md">
            *
          </button>

          <button
          onClick={()=> handleClick("4")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            4
          </button>
          <button 
          onClick={()=> handleClick("5")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            5
          </button>
          <button
          onClick={()=> handleClick("6")}
           className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            6
          </button>
          <button
          onClick={()=> handleClick("-")}
          className="bg-blue-600 text-white text-xl p-4 rounded-lg hover:bg-blue-700 shadow-md">
            -
          </button>

          <button 
          onClick={()=> handleClick("1")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            1
          </button>
          <button 
          onClick={()=> handleClick("2")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            2
          </button>
          <button
          onClick={()=> handleClick("3")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            3
          </button>
          <button
          onClick={()=> handleClick("+")}
          className="bg-blue-600 text-white text-xl p-4 rounded-lg hover:bg-blue-700 shadow-md">
            +
          </button>

          <button 
          onClick={()=> handleClick("0")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md col-span-2">
            0
          </button>
          <button
          onClick={()=> handleClick(".")}
          className="bg-gray-700 text-white text-xl p-4 rounded-lg hover:bg-gray-600 shadow-md">
            .
          </button>
          <button
          onClick={handleCalculate}
          className="bg-green-600 text-white text-xl p-4 rounded-lg hover:bg-green-700 shadow-md">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
