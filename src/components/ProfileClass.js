import React from "react"

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
           name:"",
           login:"",
           followers:"",
           bio:""
        }

        console.log(this.props.child,"Child constructor")
    }

    async componentDidMount(){
        const response=await fetch("https://api.github.com/users/JuvitaSaini09");
        const user=await response.json();
        console.log("json data",user);
        this.setState({
             name:user.name,
           login:user.login,
           followers:user.followers,
           bio:user.bio
        })
        console.log(this.props.child,"Child componentDidMount");

    }



   render(){
    console.log(this.props.child,"Child render")
    const {count}=this.state;
    return (
        <div>
            <h1>Profile Class</h1>
            <h2>Name :{this.props.name}</h2>
            <h3>Github Name: {this.state.name}</h3>
            <h3>Login: {this.state.login}</h3>
            <h3>Followers: {this.state.followers}</h3>
            <p>Bio: {this.state.bio}</p>
            
            
        </div>
    )
   }
}

export default ProfileClass;