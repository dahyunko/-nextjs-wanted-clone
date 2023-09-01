import React, {useState, useRef, useEffect} from 'react';
import Modal from '../modal/SiginupModal';

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
    
    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();

        if(usernameRef === passwordRef) console.log("same");
        console.log(usernameRef);
        console.log(passwordRef);

        //제약조건
        const usernamePattern = /^.*@.*$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!usernamePattern.test(username)){
            if (usernameRef.current !== null) {
                usernameRef.current.focus();
                setModalErrorMessage(userErrMsg);
                //setShowModal(true); 
            }
        }
        else if (!passwordPattern.test(password)) {
            if(passwordRef.current !== null){
                passwordRef.current.focus();
                setModalErrorMessage(pwErrMsg);
                //setShowModal(true); 
            }
        }
        else{
            console.log('Username: ', username);
            console.log('Password:', password);
        }
    };

    const closeModal = () =>{
        setShowModal(false);
    }

    //모달 꺼지고 focus
    useEffect(()=>{
        if(!showModal){
            setTimeout(() => {
                console.log(usernameRef.current);
                console.log(passwordRef.current);

                if (usernameRef.current !== null && usernameRef.current !== document.activeElement) {
                    usernameRef.current.focus();
                }
                else if (passwordRef.current !== null && passwordRef.current !== document.activeElement) {
                    passwordRef.current.focus();
                }
            }, 0);
        }
    }, [showModal]);

    return(
        <div>
            <div>
            <form onSubmit={handleSubmit} className='block items-center'>
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
                    <p className='text-gray-500 text-lg'>{userErrMsg}</p>
                </div>
                <div className='mb-10 '>
                    <label htmlFor="" className='font-bold text-gray-600 text-lg'>Password:</label>
                    <input className='mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                        type='password'
                        ref={passwordRef}
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <p className='text-gray-500 text-lg'>{pwErrMsg}</p>
                </div>
                <button type='submit' className='mb-2 w-full h-16 px-9 text-xl font-semibold rounded-full bg-blue-300 text-gray-900'>
                    Sign Up
                </button>
            </form>
            </div> 
        {/*모달*/}
        <Modal showModal={showModal} closeModal={closeModal} errorMessage={modalErrorMessage}></Modal>
        </div>
    );
};

export default SignupForm;