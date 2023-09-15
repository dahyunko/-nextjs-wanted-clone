import React, { useState, useRef, SetStateAction, Dispatch } from 'react';
import Modal from '../modal/SiginupModal';
import firestore from '@/firebase/firestore';
import { collection, getDocs, addDoc } from 'firebase/firestore';

interface FormStateType {
  state: string;
  set: Dispatch<SetStateAction<string>>;
  errorMsg: string;
  pattern: RegExp;
  ref: React.RefObject<HTMLInputElement>;
  //ref: React.RefObject<HTMLInputElement | null>; // type에는 null을 사용하면 안됨
}

interface UserFormStateType {
  username: FormStateType;
  password: FormStateType;
}

export const useUserFormState = (): UserFormStateType => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return {
    username: {
      state: username,
      set: setUsername,
      errorMsg: 'Username must include "@" and have text before and after it.',
      pattern: /^.*@.*$/,
      ref: useRef<HTMLInputElement>(null),
    },
    password: {
      state: password,
      set: setPassword,
      errorMsg:
        'Password must be at least 8 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character.',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ref: useRef<HTMLInputElement>(null),
    },
  };
};

const SignupForm = () => {
  const { username, password } = useUserFormState();

  const [modal, setModal] = useState<{
    open: boolean;
    message?: string;
    ref?: React.RefObject<HTMLInputElement | null>;
  }>({ open: false });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!username.pattern.test(username.state)) {
      if (username.ref.current) {
        setModal({ open: true, message: username.errorMsg, ref: username.ref });
      }
    } else if (!password.pattern.test(password.state)) {
      if (password.ref.current) {
        setModal({ open: true, message: password.errorMsg, ref: password.ref });
      }
    } else {
      //id 추가
      await addDoc(collection(firestore, 'user'), {
        name: username.state,
        password: password.state,
      });
      const query = await getDocs(collection(firestore, 'user'));
      console.log(query);
      query.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    }
  };

  const closeModal = () => {
    setModal({ open: false });
    if (modal.ref?.current) modal.ref.current.focus();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="block items-center">
          <div className="mb-10 ">
            <div className="">
              <label htmlFor="" className="font-bold text-gray-600 text-lg">
                Username:
              </label>
            </div>
            <input
              className="mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900"
              type="text"
              ref={username.ref}
              value={username.state}
              onChange={(e) => username.set(e.target.value)}
            />
            <p className="text-gray-500 text-lg">{username.errorMsg}</p>
          </div>
          <div className="mb-10 ">
            <label htmlFor="" className="font-bold text-gray-600 text-lg">
              Password:
            </label>
            <input
              className="mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900"
              type="password"
              ref={password.ref}
              value={password.state}
              onChange={(e) => password.set(e.target.value)}
            />
            <p className="text-gray-500 text-lg">{password.errorMsg}</p>
          </div>
          <button
            type="submit"
            className="mb-2 w-full h-16 px-9 text-xl font-semibold rounded-full bg-blue-300 text-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
      {/*모달*/}
      <Modal openModal={modal} closeModal={closeModal}></Modal>
    </div>
  );
};

export default SignupForm;
