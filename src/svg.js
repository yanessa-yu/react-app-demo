/**
 * Created by sh267 on 2018/3/27.
 */
import React , { Component } from 'react';
import './svg.css';
class svg extends Component{
    render(){
         return(
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
             <polygon id="polygon" points="100,10 40,180 190,60 10,60 160,180"></polygon>
             </svg>
         );
    }
}

export default svg;

