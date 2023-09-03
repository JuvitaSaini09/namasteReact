import React from "react"
import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import ProfileClass from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile"


// const About2=()=>{
//   return (
// <div>
//     <h1>About Us</h1>
//     <p>This is About us Page</p>
//     <Link to="/">Go to Home Page</Link>
//     <Outlet />
//     <ProfileClass name={"Amit"} xyz={"xyz"} />
//     <ProfileFunctionalComponent name={"Juvita"} />
//     <Link to="profile">Profile</Link>
// </div>
//   )
// }

class About extends React.Component{

  constructor(props){
    super(props)
    // console.log("Parent constructor")
    this.state={
      counter:0,
    }
  }

  componentDidMount(){
    this.timer=setInterval(()=>{ console.log("Sri Ram") },1000)
  }
  componentDidUpdate(prevProps,prevState){
    console.log("hi, am component did update !!",prevProps,prevState)
  }

  componentWillUnmount(){
    console.log("bye bye !! component unmounted !!")
    clearInterval(this.timer)
  }

  render(){
    // console.log("Parent render");
    return (
<div>
    <h1>About Us</h1>
    <p>This is About us Page</p>
    <Link to="/">Go to Home Page</Link>
    <Outlet />
    <ProfileClass name={"Juvita"}  child={"first child"}/>
     <ProfileFunctionalComponent name={"Juvita"} /> 
   
    <Link to="profile" >Profile</Link>
    <p>counter : {this.state.counter}</p>
    <button onClick={()=>this.setState(
      {
        counter:1
      }
    )}>Counter update</button>
</div>
    )
  }

}

export default About;



