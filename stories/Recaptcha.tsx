import React, {useState} from "react";
import "./recaptcha.css";
import Image from "next/image";

interface FormProps {
    primary?: boolean
}

export const Recaptcha = ({
                         primary
                     }: FormProps) => {
    const mode = primary ? 'storybook-recaptcha--primary' : 'storybook-recaptcha--secondary';

    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);


    const onClick = () => {
        setIsLoading(!isLoading);

        setTimeout(() => {
            setIsLoading(!isLoading);
            setIsChecked(true);
        }, 1500);
    };

    return (
        <div
            className={mode}
        >
            <div
                className="recaptcha"
            >
                <div
                    className="agreement"
                >
                    <div
                        className={`customCheckbox ${isLoading ? 'hidden' : ''}`}
                        onClick={onClick}
                    >
                    </div>
                    <div
                        className={`lds-ring ${!isLoading || isChecked ? 'hidden' : ''}`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Image
                        src={Checked}
                        className={`checked ${!isChecked ? 'hidden' : ''}`}
                    />
                    <label>I&apos;m not a robot</label>
                </div>
                <div
                    className="privacy"
                >
                    <Image
                        src={Privacy}
                        width="44"
                        height="55"
                    />
                </div>
            </div>
            <p
                className={`error-text`}
            >Please verify that you are not a robot</p>
        </div>
    )
}