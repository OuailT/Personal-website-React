import React from 'react'
import './Button.css';

const Styles = ["buttonV2", "buttonV1"];
const Sizes = ["regular", "medium"];

export const Button = ({
    checkStyle, checkSize,
     onClick, children, type }) => {

    const checkStylesButton = Styles.includes(checkStyle) ? checkStyle : Styles[0];
    const checkSizesButton = Styles.includes(checkSize) ? checkSize : Sizes[0];

    return (
        <>
        <button className={`${checkStylesButton} ${checkSizesButton}`}
                type={type}
                onClick={onClick}>
                {children}
        </button>  
        </>
    )
}


