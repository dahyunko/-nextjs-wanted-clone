import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-7/12 m-auto">
      <div className="my-10 flex justify-between items-center">
        <div className="flex">
          <a href="" className="mr-5">
            <img
              className="w-40 h-auto"
              src="https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png"
              alt=""
            />
          </a>
          <div className="text-gray-700 text-lg ">
            <a href="" className="mr-3">
              기업소개
            </a>
            <a href="" className="mr-3">
              고객센터
            </a>
            <a href="" className="mr-3">
              원티드 블로그
            </a>
            <a href="" className="mr-3">
              이용약관
            </a>
            <a href="" className="mr-3 font-semibold">
              개인정보 처리방침
            </a>
          </div>
        </div>
        <div className="flex">
          <a href="" className="mr-2">
            <InstagramIcon className="text-3xl text-gray-500" />
          </a>
          <a href="" className="mr-2">
            <YouTubeIcon className="text-3xl text-gray-500" />
          </a>
          <a href="" className="mr-2">
            <FacebookIcon className="text-3xl text-gray-500" />
          </a>
          <a href="" className="mr-2">
            <TwitterIcon className="text-3xl text-gray-500" />
          </a>
          <a href="" className="mr-2">
            <AppleIcon className="text-3xl text-gray-500" />
          </a>
          <a href="" className="mr-2">
            <GoogleIcon className="text-3xl text-gray-500" />
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="mt-10 mb-20 font-semibold">
        <p className="text-gray-500 text-sm">
          {
            '(주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송'
          }
          <br></br>
          {
            '유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118'
          }
          <br></br>© Wantedlab, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
