import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() 

                          //IF ELSE
    //{
    // if (this.state.isLoggedIn) {
    //   return <div>Is loggedIn</div>;
    // } else {
    //   return <div>Is LoggedOut</div>;
    // }
// } 



                            // Element Variables
//     {
//     let message
//     if(this.state.isLoggedIn){
//         message = <div>Is loggedIN</div>
//     } else {
//         message = <div>Is LoggedOut</div>
//     }
//     return ( <div>{message}</div>)
// }



                            // Ternary conditional operator
//  {
//     return(
        
//         this.state.isLoggedIn ? <div>Is loggedIn</div> : <div>Is loggedOut</div>
        
//     )
//  }



    // return (
    //   <>
    //     <div>Learning conditional rendering</div>
    //     <div>if logged in, this message will be displayed</div>
    //     <div>if logged out, this message will be displayed</div>
    //   </>
    // );

}

export default ConditionalRendering;
