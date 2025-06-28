import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Elem from './components/Elem'
import { C1, C2,C3,C4,C5 } from './components/Various'
import InputR from './components/InputR'
import InputS from './components/InputS'
import {ElemE} from './components/ElemE'
import { AppRoutes } from './pages/Routes'

function App() {
  const [count, setCount] = useState(0)
 if(0 < 10){
   return (
    <>
      <div
      style={{
        display:"none"
      }}
      className="card">
        <button onClick={
          () => setCount(
            (count) => count + 1
          )
            }>
          count is {count}
        </button>
      </div>
      <Elem v1="p1" v2="p2"/>
      <C1 p1="props1" p2="props2"/>
      <C2 p1={"props.p1"} p2={"props.p2"}/>
      <C3 >
      children(entre tags) 
      </C3>
      <C4>Na chamada</C4>
      <C5 tipo="A" />
      <InputS />
      <InputR />
      <ElemE />
    </>
  )

 }else{
  return(
    <AppRoutes />
  )
 }
}

export default App
