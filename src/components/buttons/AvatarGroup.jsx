import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

class GroupAvatars extends Component {

state = {
  images : []
}

componentDidMount=()=>{

  this.setState({
    images : this.props.test
  })
}
// let image=[];
//  test.map((item)=>{return item.individualNumberOfParticipants})
//  console.log(truc)

//   const image=[];
// const res= test.map((item, index) => {return item});
    // const resTwo = res.map((item)=>{return item.individualNbrOfParticipants.forEach((item)=>{image.push(item.image)})
    // })
    // console.log(res)
render() {
  
  
  // console.log("là", this.state)

  return (
    <AvatarGroup max={3}>
 
      <Avatar alt="Remy Sharp" src=""/>
   
      
 
    </AvatarGroup>
  );
    }
}

export default GroupAvatars;