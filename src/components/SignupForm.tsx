import React, {useState, useRef} from 'react';

const SignupForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        console.log('Username: ', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return(
        <form onSubmit={handleSubmit} className='block'>
            <div className="block">
                <div className='mb-2'>
                    <label htmlFor="" className="font-bold text-gray-600 text-lg">Username:</label>
                </div>
                <input className='mb-9 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                    type='text'
                    ref={usernameRef}
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="" className='font-bold text-gray-600 text-lg'>Password:</label>
                <input className='mb-9 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                    type='password'
                    ref={passwordRef}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <label htmlFor="" className='font-bold text-gray-600 text-lg'>Confirm Password:</label>
                <input className='mb-9 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900'
                    type='password'
                    ref={confirmPasswordRef}
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />
            </div>
            <button type='submit' className='mb-9 w-full h-16 px-9 text-xl font-semibold rounded-full bg-blue-300 text-gray-900'>
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;