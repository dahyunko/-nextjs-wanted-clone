import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Article_info = [
  {
    title: '#유연근무',
    icon_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F78563d98-9f6e-11ec-b909-0242ac120002.png&w=75&q=75',
    company_info: [
      {
        title: '카페 24',
        contents: 'IT, 컨텐츠',
        main_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4948%2Fd14ge6cpeqx91e4e__1080_790.jpg&w=520&q=100',
        com_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
      },
      {
        title: '웰하임',
        contents: '제조',
        main_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F43984%2Fpb7xdkwxjz73prx6__1080_790.jpg&w=520&q=100',
        com_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.f976d342.jpg&w=42&q=100',
      },
    ],
  },
  {
    title: '#연봉이 최고의 복지',
    icon_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=75&q=75',
    company_info: [
      {
        title: '케어랩스',
        contents: 'IT, 컨텐츠',
        main_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10313%2Fbcsqegdek3n5r128__1080_790.png&w=520&q=100',
        com_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.c8ce159e.png&w=42&q=100',
      },
      {
        title: '분당서울대학교병원',
        contents: '보건, 사회복지',
        main_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F43216%2Fms5v4ohzbazxle8i__1080_790.jpg&w=520&q=100',
        com_img:
          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.30514de5.jpg&w=42&q=100',
      },
    ],
  },
];

const RenderArticleInfo = Article_info.map((Article_info) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="mb-20">
      <header className="w-full">
        <div className="flex justify-center items-center flex-col">
          <h2 className="flex text-2xl justify-center items-center ">
            <a href="" className="flex justify-center items-center text-center">
              <p className="font-bold ">{Article_info.title}</p>
              <img
                className="h-8 mx-2"
                src={Article_info.icon_img}
                alt="user tag icon"
              ></img>
            </a>
            <span className=" font-medium">회사를 소개합니다</span>
          </h2>
          <div className="flex justify-center items-center my-3">
            <a href="" className="flex justify-center items-center ">
              <span className="text-gray-500 font-semibold text-lg">
                포지션으로 더보기
              </span>
              <KeyboardArrowRightIcon />
            </a>
          </div>
        </div>
      </header>
      <div>
        <div className="flex ">
          {/* 회사 정보 컴포넌트 분리 */}
          {Article_info.company_info.map((Data) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="block w-1/2 mr-3">
                <div>
                  <div className="p-2">
                    <a href="" className="block w-full">
                      <div>
                        <img
                          className="object-cover w-full h-80 border-2 border-gray-300 rounded-md"
                          src={Data.main_img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-start justify-between mt-5">
                        <div className="flex">
                          <img
                            className=" border-2 border-gray-300 w-14 h-14"
                            src={Data.com_img}
                            alt=""
                          />
                          <div className="flex flex-col justify-between ml-2">
                            <span className="font-bold text-lg">
                              {Data.title}
                            </span>
                            <span className="text-gray-500 font-semibold">
                              {Data.contents}
                            </span>
                          </div>
                        </div>
                        <button className=" w-32 border-2 border-blue-500 rounded-full p-3 font-bold text-lg text-blue-500">
                          팔로우
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

const MainArticle_1: React.FC = () => {
  return <article>{RenderArticleInfo}</article>;
};

export default MainArticle_1;
