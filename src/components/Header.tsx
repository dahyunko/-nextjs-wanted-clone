import React from 'react';
//import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Wanted from '/public/wanted.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed z-20 top-0 w-full border-b-2 ">
      <div className=" mx-auto my-0 bg-white px-4 font-semibold text-gray-600 h-full w-7/12 ">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center justify-center">
            <button>
              <MenuIcon className="text-3xl" />
            </button>
            <Wanted className="ml-3 w-24 h-auto" />
          </div>
          <div className="flex justify-between items-center">
            <ul className="flex ">
              <li className="px-4 py-1">
                <Link href="">채용</Link>
              </li>
              <li className="px-4 py-1">
                <Link href="">이벤트</Link>
              </li>
              <li className="px-4 py-1">
                <Link href="">이력서</Link>
              </li>
              <li className="px-4 py-1">
                <Link href="">소셜</Link>
              </li>
              <li className="px-4 py-1">
                <Link href="">프리랜서</Link>
              </li>
              <li className="px-4 py-1">
                <Link href="">AI 합격예측</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center ">
            <ul className="flex justify-center items-center">
              <li className="p-2">
                <SearchIcon className="text-2xl" />
              </li>
              <li className="">
                <button type="button" onClick={() => router.push('/signup')}>
                  회원가입
                </button>
              </li>
              <li className="">
                <button type="button" onClick={() => router.push('/login')}>
                  /로그인
                </button>
              </li>
            </ul>
            <span className="mx-8">|</span>
            <button className="border-solid border-2 border-gray-300 rounded-full h-10 w-31 px-2 text-gray-500 ">
              기업 서비스
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
