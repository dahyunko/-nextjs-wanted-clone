import React from 'react';

const Article_info = [
  {
    title: '2023 여름 인턴십',
    contents: '인턴십도 원티드에서, 다양한 경험과 커리어를 시작하세요!',
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F443_39c92dfe.jpg&w=520&q=100',
    com_img: [
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
    ],
  },
  {
    title: '연봉 Flex! 연봉 상위 10% 기업',
    sub_title: '연봉 상위 10%',
    contents: '업계별 상위 연봉을 제시하는 기업을 소개합니다.',
    main_img:
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2Fthemes%2F264_aa39c308.png&w=520&q=100',
    com_img: [
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
      'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_4.b9f09c72.jpg&w=42&q=100',
    ],
  },
];

const RenderArticleInfo = Article_info.map((Data) => {
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
            <div className="block mt-5 ml-2">
              <div className="flex flex-col justify-between mb-3">
                <span className="font-bold text-2xl">{Data.title}</span>
                <span className="text-gray-500 text-lg font-semibold">
                  {Data.contents}
                </span>
              </div>
              <div className="flex">
                {Data.com_img.map((Icon, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <img
                      key={index}
                      className="mr-2 border-2 border-gray-300 w-10 h-10"
                      src={Icon}
                      alt=""
                    />
                  );
                })}
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
    <article className="my-14">
      <div className="mb-10">
        <header className="w-full">
          <div className="flex justify-center items-center flex-col">
            <h2 className="flex text-2xl justify-center items-center my-10 ">
              <a
                href=""
                className="flex justify-center items-center text-center"
              >
                <p className="font-bold ">태마로 모아보는 요즘 채용</p>
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
