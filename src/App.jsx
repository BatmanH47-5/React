import { useState } from 'react'
import { Header } from './components/Header'
import { Student } from './components/student'
 import './CSS/app.css'
import { Multitypecomponent } from './components/Multitypecomponent'
import { Functionsample } from './components/Functionsample'
import { Oneofsample } from './components/Oneofsample'
import { Arraysample } from './components/Arraysample';
import { ChildComponents } from './components/ChildComponents'
import { LearnComponents } from './components/LearnComponents'

function App() {
  const items = [
    { id:1,name:"Item 1"},
    { id:2,name:"Item 2"},
    { id:3,name:"Item 3"},
  ];
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  return (
    <>
   <div> Shiva Safana </div>
   <LearnComponents/> 
   <Header/>
    <Student name="Shiva" age={17} ismarried={true}/>
   <Student name="Safana" age={17} ismarried={true}/>
   <Student name="Shajitha" age={24} ismarried={true}/>
   <Student />

   <ChildComponents>
    <p> This is a first component </p>
    <p> This is a second component </p>
    <p> This ia a third component </p>
   </ChildComponents> 
   <Arraysample items={items}/>
    <Oneofsample color="orange"/> 
    <Multitypecomponent value="Hello"/>
   <Multitypecomponent value={46}/>
   <Multitypecomponent value={true}/>
   <div>
    <h2> Parent Component </h2>
   </div>
   <Functionsample handleClick={handleClick}/>
   </>
  )
}

export default App