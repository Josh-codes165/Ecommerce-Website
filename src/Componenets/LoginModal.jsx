import { useEffect } from 'react';
import './LoginModal.css'
import Shopify from "../assets/Shopify.png"

export default function LoginModal({isOpen, onClose}) {
    // useEffect(() => {
    //     const handleKey = (e) => {
    //         if(e.key === "Escape") onClose();
    //     }
    //     document.addEventListener("keydown", handleKey);
    //     return () => document.removeEventListener("keydown", handleKey)
    // }, [onClose])
    // if(!isOpen) return null;

    return (
        <div onClick={onClose} className='overlay'>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <img src={Shopify} alt="" />
                <h2>Welcome to Shopify</h2>
                <p>Use your email or phone to log in or sign up.</p>
                <input type="email" placeholder="Email or Mobile Number*" />
                <button>Submit</button>
            </div>
        </div>
    )
}