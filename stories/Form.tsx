import React from "react";
import "./form.css";

interface FormProps {
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    onClick: (data) => void
}

export const Form = ({
                         primary = true,
                         size = 'medium',
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
                className={['storybook-form', `storybook-form--${size}`, mode].join(' ')}
            >
                <h3>Login</h3>
                <input className="email" type="text" placeholder="Login"/>
                <input className="password" type="text" placeholder="Password"/>
                <div className="checkbox">
                    <input type="checkbox" id="rememberMe"/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button onClick={onClick}>Log In</button>
            </form>
        </div>
    )
}