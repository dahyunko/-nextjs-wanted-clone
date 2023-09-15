'use client';

import '/src/style/global.css';
import SignupForm from '@/components/SignupForm';
import React from 'react';
import Wanted from '/public/wanted.svg';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <>
      <main className=" bg-neutral-100 flex justify-center items-center w-full h-screen m-auto">
        <div className=" relative w-1/5 m-auto">
          <div className="border-2 border-gray-300 rounded-lg p-5 bg-white w-full">
            <div className="flex items-center justify-center py-4">
              <div className="inline-block text-center">
                <Wanted className=" w-44 h-auto" />
                <span className="text-xl font-semibold">회원가입</span>
              </div>
            </div>
            <SignupForm />
            <div className="flex justify-center items-center w-full text-center">
              <Link href="/login" className="text-blue-700">
                로그인 하러가기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
