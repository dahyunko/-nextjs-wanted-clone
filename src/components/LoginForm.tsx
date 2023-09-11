import React, {useState, useRef} from 'react';
import Modal from '../modal/SiginupModal';
import { useRouter } from 'next/navigation';

const SignupForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalErrorMessage, setModalErrorMessage] = useState('');
    // const [usernameError, setUsernameError] = useState('');
    // const [passwordError, setPasswordError] = useState('');
    const userErrMsg = 'Username must include "@" and have text before and after it.';
    const pwErrMsg = 'Password must be at least 8 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character.';

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();

        if(username !== "helloworld@example.com"){
            if (usernameRef.current !== null) {
                setModalErrorMessage(userErrMsg);
                setShowModal(true); 
            }
        }
        else if (password !== "Qwer!234") {
            if(passwordRef.current !== null){
                setModalErrorMessage(pwErrMsg);
                setShowModal(true); 
            }
        }
        else{
            console.log('Username: ', username);
            console.log('Password:', password);
            router.push('/');
        }
    };

    const closeModal = () =>{
        setShowModal(false);
    }

    return(
        <div>
            <div>
            <form onSubmit={handleSubmit} className='block'>
                <div className="mb-10 ">
                    <div className=''>
                        <label htmlFor="" className="font-bold text-gray-600 text-lg">Username:</label>
                    </div>
                    <input className='mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                        type='text'
                        ref={usernameRef}
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
                <div className='mb-10 '>
                    <label htmlFor="" className='font-bold text-gray-600 text-lg'>Password:</label>
                    <input className='mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                        type='password'
                        ref={passwordRef}
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='mb-9 w-full h-16 px-9 text-xl font-semibold rounded-full bg-blue-300 text-gray-900'>
                    Log In
                </button>
            </form>
            </div> 
        {/*모달*/}
        <Modal openModal={showModal} closeModal={closeModal} errorMessage={modalErrorMessage}></Modal>
        </div>
    );
};

export default SignupForm;