import {useState} from 'react'
import "./regfrm.css"
export const Regfrm = () => {
    const[user,setUser] = useState({
        name:"Shiva Safana",
        age:17,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:"Write something about youself"
    });

    function changeHandler(e) {
        const name= e.target.name;
        //console.log(name);
        const value=e.target.type==="checkbox" ? e.target.checked : e.target.value;
        setUser({...user,[name]:value})
    }
  return (
    <>
     <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{user.isMarried?"Married":"Not Married"}</td>
            </tr>
            <tr>
                <td> Country </td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
     </table>
     <form>
        <input type="text" placeholder="Full Name" value={user.name} onChange={changeHandler} name="name"/>
        <input type="number" placeholder="Age" value={user.age} name="age" onChange={changeHandler}/>
        <div className="gender">
            <label htmlFor="male">
                <input type="radio" name="gender" id="male" checked={user.gender=="Male"} value="Male" onChange={changeHandler}/>
                Male
            </label>
            <label htmlFor="female">
                 <input type="radio" name="gender" id="female" checked={user.gender=="Female"} value="Female" onChange={changeHandler}/>
                 Female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" name="isMarried" onChange={changeHandler} id="isMarried" checked={user.isMarried} />
            Is Married 
        </label>
        <div className="select-div">
            <label htmlFor="Country"> Select Country </label>
            <select name="country" id="country" value={user.country} onChange={changeHandler}>
                <option value="India"> India </option>
                <option value="USA">USA</option>
                <option value="Saudi Arabia"> Saudi Arabia </option>
            </select>
        </div>
        <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} onChange={changeHandler} placeholder="Write about You"></textarea>
     </form>
    </>
  );
};