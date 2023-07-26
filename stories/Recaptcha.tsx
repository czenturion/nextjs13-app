import React from "react";
import "./recaptcha.css";
import Image from "next/image";

interface FormProps {
    primary?: boolean
    onClick: (data) => void
}

export const Recaptcha = ({
                         primary = true,
                         onClick
                     }: FormProps) => {
    const mode = primary ? 'storybook-recaptcha--primary' : 'storybook-recaptcha--secondary';

    onClick = (data) => {
        console.log(data)
    }

    return (
        <div
            className="recaptcha"
        >
            <div
                className="agreement"
            >
                <div className="customCheckbox"></div>
                <label>I&apos;m not a robot</label>
            </div>
            <div
                className="privacy"
            >
                <Image src="recaptcha.svg" width="44" height="55"/>
            </div>
        </div>
    )
}