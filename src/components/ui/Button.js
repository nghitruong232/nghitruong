import React from 'react';
import { Link} from "gatsby"
import {styles} from './styles';

const Button = props => {
    const {label='', href='', style={}} = props;
    const {link={}} = style;

    return (
        <span style={{...styles.button, ...style}}>
            <Link href={href} style={{...styles.link, ...link}}>{label}</Link>
        </span>
    )
}

export default Button;