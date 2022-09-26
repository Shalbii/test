import React from "react";

import "./style/signup.css";
import Logo from "./m.png";
export default function Signin() {
    return (

        <div className="Signin_out">
            <div className="Signin_in">
                <div className=" Signin_in_r1">
                    <img src={Logo}></img>
                    <label>LOGO</label>
                </div>
                <div className="Signin_in_r2">
                    <label>Welcome</label>
                </div>
                <div className="Signin_in_r3">
                    <label>Please sign up your account</label>
                </div>
                <div className="Signin_in_r4">
                    <div className="Signin_in_r4_input">
                        <input type="text" placeholder="FirstName"></input>
                    </div>

                    <div className="Signin_in_input_1">
                        <input type="text" placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="Signin_in_r5">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="Signin_in_r6">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="Signin_in_r7">
                    <input type="password" placeholder="RE-Password" />
                    </div>
                    <div className="Signin_in_r8">
                        <input type="checkbox" ></input>
                        {/* <div className="Signin_in_r9"> */}
                            <label>By clicking on Register,you agree to our <span>Terms and Conditions </span> of use</label>
                        {/* </div> */}
                    </div>

                    <div className="Signin_in_button">
                        <button className="button">REGISTER</button>
                    </div>
               
            </div>
        </div>

    );

}