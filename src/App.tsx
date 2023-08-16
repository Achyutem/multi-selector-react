import { Select, SelectOption } from "./select"
import { useState } from "react"
import "./App.css"
import Cheatsheet from "./cheatsheet"

const options = [
  {label: "First", value: 1 },
  {label: "Second", value: 2 },
  {label: "Third", value: 3 },
  {label: "Fourth", value: 4 },
  {label: "Fifth", value: 5 },
  {label: "Sixth", value: 6 },
]

export default function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  return (
    <div className="cont">
    <h2 className="pad">Multiple Select</h2>
    <Select 
    multiple
    options={options} 
    value={value1} 
    onChange={o => setValue1(o)}/>
    <br />
    <h2 className="pad">Single Select</h2>
    <Select options={options} value={value2} onChange={o => setValue2(o)}/>
    <br />
    < Cheatsheet />
    </div>
  )
} 
