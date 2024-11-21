import React from "react";

class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        // Create state over here.
        this.state = {
            count : 0,
            count2 : 1,
            userInfo : {
                name : "",
                company : "",
                location : "",
              }
        }
        console.log("Chlid - Constructor")
    }

    async componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Arpit")
        },1000)
        // Best place to make an API Call
        const data = await fetch("https://api.github.com/users/ArpitRathi1");
        const json = await data.json()
        this.setState({
          userInfo : json
        })
        console.log("Child - ComponentDidMount")
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2){
            // Code
        }
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("componentWillUnmount")
    }

    render() {
        console.log("Chlid - render")
        const {count2} = this.state
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Age : {this.props.age}</h2>
                <h2>Count : {this.state.count}</h2>
                <h2>Count2 : {count2}</h2>
                <button onClick={() => {
                    // We don't mutate state directly, 
                    // Never do this.state = something
                    // We can update multiple state varible together.
                    this.setState({
                        count : this.state.count + 1,
                        count2 : 2
                    })
                }}>Increase Count</button>
                <div>
                    <h1>Git Info</h1>
                    <h2>Name : {this.state.userInfo.name}</h2>
                    <h2>company : {this.state.userInfo.company}</h2>
                    <h2>location : {this.state.userInfo.location}</h2>
                    <img src={this.state.userInfo.avatar_url}></img>
                </div>
            </div>
        )
    }
}

export default ProfileClass;