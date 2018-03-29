/**
 * Created by sh267 on 2018/3/29.
 */
import React , { Component } from 'react';

class  InputElement extends Component {
    render(){
        return(
            <div className="InputElement" id="right">
                <h2>InputElement</h2>
                <form action="" method="get">
                    <div>Username : <input type="text" name="userName"/></div>
                    <div>
                        url : <input type="url" list="url_list" name="link"/>
                        <datalist id="url_list">
                            <option label="w3school" value="http://www.w3school.com.cn"/>
                            <option label="google" value="http://www.google.com"/>
                        </datalist>
                    </div>
                    <div>Passport : <keygen name="password" /></div>
                    <output id="result" onforminput="resCalc"></output>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default InputElement;
