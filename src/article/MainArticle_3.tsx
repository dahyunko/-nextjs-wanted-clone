import React from 'react';
import SaveIcon from '/public/save.svg';

const Article_info = [
  {
    title: '퍼보먼스 마케터',
    contents: '앱솔브랩(셀리맥스)',
    loc: '서울 한국',
    money: 100,
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4723%2Fi9mhk3t9t1i0j6vu__400_400.jpg&w=400&q=75',
  },
  {
    title: 'SCM 매니저 (중국어 가능자)',
    contents: '딥다이브',
    loc: '서울 한국',
    money: 100,
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22317%2Fuuqm6yslgrlqtu01__400_400.png&w=400&q=75',
  },
  {
    title: '온사이트 마케터',
    contents: '카티니',
    loc: '서울 한국',
    money: 100,
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26504%2Fwihiaybslso9chr2__400_400.png&w=400&q=75',
  },
  {
    title: '레진JP 플랫폼 전략기획 및 운영',
    contents: '레진엔터테인먼트',
    loc: '서울 한국',
    money: 100,
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F853%2F2fxappnyjl554wwe__400_400.jpg&w=400&q=75',
  },
];

const RenderArticleInfo = Article_info.map((Data) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <div className="block w-1/4 mr-3">
      <div>
        <div className="p-2">
          <a href="" className="block w-full">
            <div className="relative">
              <img
                className="object-cover w-full h-80 border-2 border-gray-300 rounded-md"
                src={Data.main_img}
                alt=""
              />
              <button className="absolute top-5 right-5">
                <SaveIcon />
              </button>
            </div>
            <div className="block mt-5 ml-2">
              <div className="flex flex-col justify-between mb-2">
                <span className="font-bold text-xl my-2">{Data.title}</span>
                <span className="text-lg font-semibold">{Data.contents}</span>
                <span className="text-gray-500 text-lg ">{Data.loc}</span>
              </div>
              <div className="flex">
                <span className="text-lg">채용보상금 {Data.money}만원</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
});

const MainArticle_2: React.FC = () => {
  return (
    <article className="my-10">
      <div className="mb-20">
        <header className="w-full">
          <div className="flex justify-center items-center flex-col">
            <h2 className="flex text-2xl justify-center items-center my-10 ">
              <a
                href=""
                className="flex justify-center items-center text-center"
              >
                <p className="font-bold ">요즘 뜨는 포지션</p>
              </a>
            </h2>
          </div>
        </header>
        <div>
          <div className="flex ">{RenderArticleInfo}</div>
        </div>
      </div>
    </article>
  );
};

export default MainArticle_2;
