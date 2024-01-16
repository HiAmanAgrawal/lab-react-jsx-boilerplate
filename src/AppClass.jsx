import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    return(
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='container'>
        {this.imageData().map((image) => (
          <div className="image" key={image.id}>
            <img src={image.img} alt={`Image ${image.id}`} />
          </div>
        ))}
        </div>
        <h6>You are watching code returning from AppClass.jsx</h6>
      </div>
    )
  }
}