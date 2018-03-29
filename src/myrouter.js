/**
 * Created by sh267 on 2018/3/27.
 */
import React,{ Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import Admin from './admin/Admin';
import InputType from './input/InputType';
import InputElement from './input/InputElement';
import InputAtrr from './input/InputAtrr';
import './myrouter.css'

class MyRouter extends Component{
    render(){
        return(
            <Router>
                <div id="left">
                        <ul>
                            <li><Link to="/inputType">InputType</Link></li>
                            <li><Link to="/inputElement">InputElement</Link></li>
                            <li><Link to="/inputAtrr">InputAtrr</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                        </ul>
                        <Route path="/inputType" component={InputType}></Route>
                        <Route path="/inputElement" component={InputElement}></Route>
                        <Route path="/inputAtrr" component={InputAtrr}></Route>
                        <Route path="/admin" component={Admin}></Route>
                </div>
            </Router>
        );
    }
}

export default MyRouter;
