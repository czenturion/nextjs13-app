import React from 'react';
import './link.css';

interface LinkProps {
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
    label: string
}

export const Link = ({
                         primary = false,
                         size = 'medium',
                         label,
                         ...props
                     }: LinkProps) => {
    const mode = primary ? 'storybook-link--primary' : 'storybook-link--secondary';
    return (
        <a
            className={['storybook-link', `storybook-link--${size}`, mode].join(' ')}
            href='#'
            {...props}
        >
            {label}
        </a>
    )
}