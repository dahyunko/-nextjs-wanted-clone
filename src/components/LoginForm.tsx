import React, { useState } from 'react';
import Modal from '../modal/SiginupModal';
//import firestore from '@/firebase/firestore';
//import { collection, getDocs } from 'firebase/firestore';
import { useUserFormState } from '@/components/SignupForm';
import { useRouter } from 'next/navigation';
import { authService } from '@/firebase/firebasedb';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

const LoginupForm = () => {
  const { username, password } = useUserFormState();

  const [modal, setModal] = useState<{
    open: boolean;
    message?: string;
    ref?: React.RefObject<HTMLInputElement | null>;
  }>({ open: false });

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        authService,
        username.state,
        password.state,
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log('로그인 성공: ', user);
        setPersistence(authService, browserSessionPersistence);
        window.localStorage.setItem('email', JSON.stringify(user.email));
        //window.sessionStorage.setItem('email', JSON.stringify(user.email));
      });
      const confirmation = window.confirm(
        '로그인 성공!!, 메인페이지로 이동합니다.',
      );
      if (confirmation) {
        router.push('/', { scroll: false });
      }

      /*
      const query = await getDocs(collection(firestore, 'user'));
      query.forEach((doc) => {
        const userData = doc.data();
        //userData와 username, password를 비교
        if (userData.name === username.state && userData.password === password.state) {
          // 회원 정보 일치, 로그인 성공
          console.log('로그인 성공');
          router.push('/', { scroll: false });
        }
        else{
          // 회원 정보가 없거나 일치하지 않는 경우
          console.log('회원 정보 없음 또는 로그인 실패');
          setModal({ open: true, message: '회원 정보 없음 또는 로그인 실패' });
        }
      });*/
    } catch (error) {
      console.error('Firestore에서 데이터를 가져오는 중 오류 발생:', error);
      const confirmation = window.confirm('로그인 실패');
      if (confirmation) {
        if (username.ref.current) username.ref.current.focus();
      }
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

export default LoginupForm;
