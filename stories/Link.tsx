import React from 'react';
import './link.css';

interface LinkProps {
    primary?: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    label: string
    path: '#'
}

export const Link = ({
                         primary = false,
                         backgroundColor = 'blue',
                         size = 'medium',
                         label,
                         path = '#',
                         ...props
                     }: LinkProps) => {
    const mode = primary ? 'storybook-link--primary' : 'storybook-link--secondary';
    return (
        <a
            className={['storybook-link', `storybook-link--${size}`, mode].join(' ')}
            href={path}
            {...props}
        >
            {label}
            <style jsx>
                {`link {
                    background-color: ${backgroundColor};
                }`}
            </style>
        </a>
    )
}