import { useEffect, useState } from 'react';
import './button.css'
import iconCart from '../../local_grocery_store.svg'

export default function Button({ children, variant, disableShadow, disable, startIcon, endIcon, size, color }) {
    const [icon, setIcon] = useState(null)
    let btnClass = 'btn'
    
    if (variant) {
        if(variant === 'outline'){
            btnClass += ' outline'
        }
        else if (variant === 'text') {
            btnClass += ' text'
        }
    }
    if (disableShadow) {
        btnClass += ' disableShadow'
    }
    if (disable) {
        btnClass += ' disable'
    }
    if (startIcon) {
        btnClass += ' startIcon'
    }
    if (endIcon) {
        btnClass += ' endIcon'
    }
    if (size) {
        if (size === 'sm') {
            btnClass += ' btn-sm'
        } else if(size === 'lg') {
            btnClass += ' btn-lg'
        }
    }
    if (color) {
        if (color === 'primary') {
            btnClass += ' primary'
        } else if(color === 'secondary') {
            btnClass += ' secondary'
        } else if(color === 'danger'){
            btnClass += ' danger'
        }
    }
    useEffect(()=>{

    }, [])
    console.log(btnClass)
    return(
        <button className={btnClass}>
            {startIcon ? <img src={iconCart} alt="" /> : ''}
            <span>{ children }</span>
            {endIcon ? <img src={iconCart} alt="" /> : ''}
        </button>
    )
}