const userData =[
  {
    name: "Dog",
    city:"Ujjaini",
    description:"front End Developer",
    skills:["UI/UX","Front End Developer","HTML","CSS",
      "Javascript","React","Node"],
    online: false,
    profile:"Images/dog.jpg"
  },
  {
    name: "Cat",
    city:"Mecca",
    description:"Full stack web Developer",
    skills:["UI/UX","Full stack web Developer","Python","Node",
      "Javascript","React","Node"],
    online: true,
    profile:"Images/cat.jpg"
  },
  {
    name: "Tiger",
    city:"MM Hills",
    description:"Software Developer",
    skills:["C","C++","Python","React",
      "Javascript","C#","Assembly language"],
    online: false,
    profile:"Images/tiger.jpg"
  }
];

function User(props) {
return( 
<div className="card-container">
   <span className={props.online?"pro online":"pro offline"}>
    {props.online?"ONLINE":"OFFLINE"} </span>
   <img src={props.profile} className="img" alt="cat"/>
   <h3>{props.name}</h3>
   <h3>{props.city}</h3>
   <p>{props.description}</p>
   <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary outline">Following</button>
   </div>
   <div className="skills">
     <h6>Skills</h6>
     <ul>{props.skills.map((skill,index)=>(
      <li key={index}>{skill}</li>
     ))}</ul>
   </div>
</div>
);
};
export const Usercard = () => {
  return(
  <>
    {userData.map((user,index)=> (
      <User key={index} 
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}
      />
    ))}
  </>
  );
};

{/*  <User name="Dog" city="Ujjaini"  */}
//   description="FrontEnd Developer"  skills={["UI?UX","Front End Developer",
//     "HTML","CSS","Javascript","React","Node"]} online={true} profile="Images/dog.jpg"/>

User.propTypes={
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: propTypes.arrayof(propTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired,
}