import React from "react";
import "./form.css";
import Image from "next/image";

interface FormProps {
    primary?: boolean
    onClick: (data) => void
}

export const Form = ({
                         primary = true,
                         onClick
                     }: FormProps) => {
    const mode = primary ? 'storybook-link--primary' : 'storybook-link--secondary';

    onClick = (data) => {
        console.log(data)
    }

    return (
        <div
            className="background"
        >
            <form
                className={['storybook-form', mode].join(' ')}
            >
                <h2>Sign Up</h2>
                <div className="icons">
                    <Image src="google.svg" alt="google" width="36" height="36"/>
                    <Image src="git.svg" alt="git" width="36" height="36"/>
                </div>
                <div className="inputs">
                    <label htmlFor="username">Username</label>
                    <input className="username" type="text" placeholder="Login" id="login"/>
                </div>
                <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input className="email" type="text" placeholder="Email" id="password"/>
                </div>
                <div className="inputs password">
                    <label htmlFor="password">Password</label>
                    <input className="password" type="password" placeholder="******************" id="password"/>
                    <img src="eye-outline.svg" alt="visible" width="24" height="24"/>
                </div>
                <div className="inputs password">
                    <label htmlFor="password">Password confirmation</label>
                    <input className="password" type="password" placeholder="******************" id="password"/>
                    <img src="eye-outline.svg" alt="visible" width="24" height="24"/>
                </div>
                <button onClick={onClick} className="submit">Sign Up</button>
                <p className="signIn-title">Do you have an account?</p>
                <button onClick={onClick} className="signIn">Sign In</button>
            </form>
        </div>
    )
}