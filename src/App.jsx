import { useState } from "react"

function App() {

  const [height,setHeight] = useState("")
  const [weight,setWeight] = useState("")
  const [bmi,setBmi] = useState("")
  const [bmiStatus,setBmistatus] = useState()
  const [err,setErr] = useState('')

  const Calbmi = () => {
    const isValidHeight = /^\d+$/.test(height)
    const isValidWeight = /^\d+$/.test(weight)

    if(isValidHeight && isValidWeight)
      {
        let heightInMeter = height/100;
        let bmiValue = weight / (heightInMeter + heightInMeter)
        setBmi(bmiValue.toFixed(2))
        if(bmiValue < 18.5){
          setBmistatus("Underweight")
        }else if (bmiValue >= 18.5 && bmiValue < 24.9){
          setBmistatus("Normal Weight")
        }else if (bmiValue >= 25 && bmiValue < 29.9){
          setBmistatus("Overweight")
        }else{
          setBmistatus("Obesity")
        }
        setErr()
      }else{
        setErr("pls enter a valid Numeric value")
        setBmi()
        setBmistatus()
      }
    }

    const handleclear = () =>{
      setHeight('')
      setWeight('')
      setBmi(null)
      setBmistatus()
    }
  return (
    <>
    <div className="h-screen w-screen bg-slate-400 flex justify-center items-center">
      <div className="h-4/5 w-3/5 bg-white rounded-lg flex">
            <img className="h-full object-cover w-3/5 rounded-lg" src="https://thumbs.dreamstime.com/b/balanced-diet-young-man-cartoon-vector-illustration-graphic-design-136913919.jpg"/>
        <div className="w-3/5"> 
            <h3 className="text-blue-400 font-bold text-2xl pt-8">BMI CALCULATOR</h3>
            {<p className="text-red-600 mt-3">{err}</p>}

            {/* Body */}
            <div className="mt-8">
                  <label className="text-lg block mt-3" value={height}>Height (cm)</label>
                  <input  type="text" className="border-gray-400 border-2 w-3/4 mt-3 p-3 h-10 rounded-sm" onChange={(e)=> setHeight(e.target.value)}/>
                  <label className="text-lg block mt-3" value={weight}>Weight (Kg)</label>
                  <input type="text" className="border-gray-400 border-2 w-3/4 mt-3 p-3 h-10 rounded-sm" onChange={(e)=>setWeight(e.target.value)}/>
                  <div className="mt-10 font-bold flex justify-between w-3/4">
                      <button className="bg-blue-400 text-white p-2 rounded w-30 " onClick={Calbmi}>Calculate</button>
                      <button className="bg-red-400 text-white p-2 rounded w-20" onClick={handleclear}>Clear</button>
                  </div>

              {/* Calculate */}

              { bmi && 
              <div className="mt-16 border-blue-400 border-2 w-3/4 h-24 p-5 rounded font-semibold">
              <h4 className="text-blue-400">Your BMI is : {bmi}</h4>
              <p>Status : {bmiStatus}</p>
            </div>
            }
      
            </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default App
