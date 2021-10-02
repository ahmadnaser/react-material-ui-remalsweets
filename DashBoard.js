import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
class DashBoard extends Component{
  constructor(){
    super();
     this.floatButtonStyle ={
      float: 'right',
      top: '10px',
      left: '-18px',
      position: 'relative'
    }
  }

  render(){
    return(
      <div>
      <Card containerStyle={{marginBottom:'15px',marginTop:'15px'}} zDepth={2}>
        <FloatingActionButton mini={true}  style={this.floatButtonStyle} >
          <ContentAdd />
        </FloatingActionButton>
        <CardTitle title="Expenses"  />
        <CardText>
          4500
           
        </CardText>
      </Card>
      <Card containerStyle={{marginBottom:'15px',marginTop:'15px'}}  zDepth={2}>
      <FloatingActionButton mini={true} style={this.floatButtonStyle} >
          <ContentAdd />
        </FloatingActionButton>
        <CardTitle title="Income"/>
        <CardText>
          10000
        </CardText>
      </Card>
      </div>
    )
  }
}

export default DashBoard;