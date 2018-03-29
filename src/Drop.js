/**
 * Created by sh267 on 2018/3/27.
 */
import React , { Component } from 'react';
import logo from './drop.gif';
import './drop.css';


class Drop extends Component {

    constructor(props){
        super(props);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drag = this.drag.bind(this);
    }

    drop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData('Text');
        ev.target.appendChild(document.getElementById(data))
    }

    allowDrop(ev){
        ev.preventDefault();
    }

    drag(ev){
        ev.dataTransfer.setData("Text",ev.target.id)
    }

    render(){
        return (
            <div className="Drop">
                <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}> </div>
                <br/>
                <img id="drag1" src={logo} draggable="true" onDragStart={this.drag} width="336" />
            </div>
        );
    }
}

export default  Drop;
