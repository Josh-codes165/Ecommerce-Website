import { useEffect } from 'react';
import './LoginModal.css'

export default function LoginModal({isOpen, onClose}) {
    useEffect(() => {
        const handleKey = (e) => {
            if(e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey)
    }, [onClose])
    if(!isOpen) return null;

    return (
        <div onClick={onClose} className='overlay'>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <h2>Log in</h2>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Submit</button>
            </div>
        </div>
    )
}