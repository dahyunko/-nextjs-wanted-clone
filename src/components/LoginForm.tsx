import React, { useState } from 'react';
import Modal from '../modal/SiginupModal';
//import firestore from '@/firebase/firestore';
//import { collection, getDocs } from 'firebase/firestore';
import { useUserFormState } from '@/components/SignupForm';
import { authService } from '@/firebase/firebasedb';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  User,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

const LoginupForm = () => {
  const { username, password } = useUserFormState();
  const [infoError, setinfoError] = useState<null | string>(null);
  const [modal, setModal] = useState<{
    open: boolean;
    message?: string;
    ref?: React.RefObject<HTMLInputElement | null>;
  }>({ open: false });

  const router = useRouter();

  //로컬 스토리지 저장
  const localStorageSave = (user: User) => {
    try {
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          //로컬 생성
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      );

      router.push('/', { scroll: false });
      //cross-origin으로 window 조작 못함
      // const confirmation = window.confirm(
      //   '로그인 성공!!, 메인페이지로 이동합니다.',
      // );
      // if (confirmation) {
      //   router.push('/', { scroll: false });
      // }
    } catch (error) {
      console.error(
        '로컬 스토리지에 사용자 정보를 저장하는 중 오류 발생:',
        error,
      );
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        authService,
        username.state,
        password.state,
      ).then((userCredential) => {
        setPersistence(authService, browserSessionPersistence); //세션 생성
        localStorageSave(userCredential.user);
      });
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
      setinfoError(null); //비밀번호 초기화
    } catch (error) {
      console.error('Firestore에서 데이터를 가져오는 중 오류 발생:', error);
      // const confirmation = window.confirm('로그인 실패');
      // if (confirmation) {
      //   if (username.ref.current) username.ref.current.focus();
      // }
      setinfoError('아이디 혹은 비밀번호가 올바르지 않습니다.');
      if (username.ref.current) username.ref.current.focus();
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((userCredential) => {
        setPersistence(authService, browserSessionPersistence);
        // username.set(username.state); // user data 설정
        console.log(userCredential); // console에 UserCredentialImpl 출력
        localStorageSave(userCredential.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authService, provider)
      .then((userCredential) => {
        setPersistence(authService, browserSessionPersistence);
        // username.set(username.state); // user data 설정
        console.log(userCredential); // console에 UserCredentialImpl 출력
        const user = userCredential.user;
        localStorageSave(user);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <div>
              <label htmlFor="" className="font-bold text-gray-600 text-lg">
                이메일:
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
              비밀번호:
            </label>
            <input
              className="mb-1 w-full h-14 px-9 text-xl border-2 font-semibold rounded-lg border-gray-300 text-gray-900"
              type="password"
              ref={password.ref}
              value={password.state}
              onChange={(e) => password.set(e.target.value)}
            />
            <p className="text-gray-500 text-lg">{infoError}</p>
          </div>
          <button
            type="submit"
            className="mb-2 w-full h-16 px-9 text-xl font-semibold rounded-full bg-blue-300 text-gray-900"
          >
            이메일로 계속하기
          </button>
        </form>
        <br></br>
        <div className="text-center">
          <span>또는</span>
        </div>
        <br></br>
        <div className="flex w-20 ml-24">
          <button onClick={handleGoogleLogin}>
            <GoogleIcon className="text-7xl text-gray-500" />
            Google
          </button>
          <button onClick={handleGithubLogin}>
            <GitHubIcon className="text-7xl text-gray-500" />
            GitHub
          </button>
        </div>
      </div>
      {/*모달*/}
      <Modal openModal={modal} closeModal={closeModal}></Modal>
    </div>
  );
};

export default LoginupForm;