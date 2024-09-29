// import React from 'react'

// export const Header = () => {
//     return React.createElement("div",null,React.createElement("h1",{className:"ssvvv"},"Shiva Safana"),React.createElement("p",{className:"maa"},"Be private vibe Alone"),React.createElement("h1",{className:"maaji"},"Grow in Silence"))

// };

export const Header = () => {
    let customCSS="error"
    const isLoggedIn=false;
    const greeting=isLoggedIn ? <p>welcome back</p> : <p> please login </p>;
    const items=["Item1","Item2","Item3","Item4"];
  return (
    <>
     <h1 className="ssvvv"> Shiva Safana </h1>
     <p className="maa"> Be private vibe Alone </p>
     <h1 className="maaji"> Grow in silence </h1>

     {/* javascript expression in jsx  */}
     <p className={customCSS} style={{fontSize:"50px",fontStyle:"italic"}}> 25+50={25+50}</p>
     {/* JSX with conditional rendering  */}
     {greeting}

     {/* JSX With lists */}
     <ul>
        {items.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
     </ul>
    </>
  )
}
