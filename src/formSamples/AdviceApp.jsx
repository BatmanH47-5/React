import {useEffect, useState} from 'react';
import "./Advice.css";
export const AdviceApp = () => {
  const [advice,setAdvice] = useState("Please click button to get advice");
  const [count,setCount] = useState(0);
async function getAdvice(){
    const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
  }

  useEffect(function(){
    getAdvice();
  },[]);
  return (
    <div>
      <h1> {advice} </h1>
      <button onClick={getAdvice}> Get Advice </button>
      <p> You Have read <b>{count}</b> pieces of adivice </p>
      <counter count={count}/>
    </div>
  );
};

function counter(props){
  return(
  <p>
    You Have read <p>{propscount}</p> pieces of advice
  </p>
  );
};