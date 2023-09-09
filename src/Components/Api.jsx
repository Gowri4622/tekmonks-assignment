import React, { Component } from 'react'
import './Api.css'
import Data from '../Components/data.json'
import { Link } from "react-router-dom";


export class Api extends Component {
    

constructor(props){
    super(props)
    this.state={
        characters : [],
        errorMessage: ''
    }
}


 
  render() {
    

    return (
      <React.Fragment>  
       
      <div>
        <div className='title'>
        <h1>Latest Stories</h1>
        </div>
        
        {
            Data.map( record => { return(
            <div className="box"> 
            <Link style={{textDecoration:'none'}} to={record.link}>{record.title}</Link>
            
            </div>

            )
            })
        }
        </div>
        
        
        </React.Fragment>
     
       
     
    )
  }
}

export default Api