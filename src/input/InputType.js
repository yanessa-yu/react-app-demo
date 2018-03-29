/**
 * Created by sh267 on 2018/3/29.
 */
import React , { Component } from 'react';

class InputType extends Component {
    render(){
        return(
            <div className="InputType" id="right">
                <h2>InputType</h2>
                <form action="" method="get">
                    <div>E-mail <input type="email" name="user_email"/></div>
                    <div>Url <input type="url" name="user_url"/></div>
                    <div>Number<input type="number" name="user_number" min="1" max="10" /></div>
                    <div>Range<input type="range" name="user_rangeß" min="1" max="10" /></div>
                    <div>Date<input type="date" name="user_date"/></div>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default InputType;