import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MainArticle_1 from '../article/MainArticle_1';
import MainArticle_2 from '../article/MainArticle_2';
import MainArticle_3 from '../article/MainArticle_3';
//import Image from 'next/image';

const Main: React.FC = () => {
  return (
    <main className="relative w-7/12 m-auto mt-20">
      {
        <section className="">
          {/* slider */}
          <div className="">
            <div>
              <div className="relative inline-block w-full mt-5">
                <div className="">
                  <a className="">
                    <img
                      className="rounded-md h-auto w-full"
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2070%2F1c7540fe.jpg&w=1060&q=100"
                    ></img>
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 m-6 bg-white rounded-md w-96">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold">
                      누적 150억 투자받은 XYZ
                    </h2>
                    <h3 className="text-lg">
                      로봇으로 바꾸는 일상, 함께 만들어요.
                    </h3>
                  </div>
                  <hr />
                  <a
                    href=""
                    className="px-6 py-4 text-blue-500 flex items-center"
                  >
                    <span className="font-bold">바로가기</span>
                    <KeyboardArrowRightIcon className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* aside1 */}
          <aside className="mt-16">
            <div className="flex justify-center items-center mt-24 h-24 ">
              <a className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 text-white rounded-full w-full py-8  px-3 text-center text-bold text-xl">
                <SearchIcon className="text-5xl mr-2" />
                <span className="text-2lg font-bold">
                  채용 중인 포지션 보러가기
                </span>
              </a>
            </div>
          </aside>

          {/* aside2 */}
          <article className="mt-20">
            <div className="flex  justify-center">
              <div className="inline-block align-middle w-full ">
                <div className="flex rounded-2xl justify-between items-center p-9 h-40 bg-gradient-to-r from-neutral-50 via-green-50 to-neutral-50">
                  <ul>
                    <li className="text-2xl font-bold">
                      내가 관심있을 만한 포지션
                    </li>
                    <li className="text-xl font-medium text-gray-500">
                      회원가입 후, 이력서와 포지션 분석을 통해 적절한 포지션을
                      추천받으세요!
                    </li>
                  </ul>
                  <button className="rounded-full text-white bg-blue-500 h-14 text-center w-52 font-semibold ">
                    지금 시작하기
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* aside3 */}
          <article className="mt-20 flex justify-center">
            <div className="flex h-32 w-full">
              <div className="inline-block align-middle w-full">
                <div className="flex rounded-2xl justify-between items-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-9">
                  <div className="text-white text-2xl font-bold ">
                    내 연차에 이 연봉이 괜찮은가? 궁금할 땐
                  </div>
                  <button className="bg-white rounded-full p-2 text-blue-500 h-14 w-52 font-semibold">
                    커리어 중간점검
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* nav */}
          <nav className="mt-20 mb-24 flex justify-center text-xl ">
            <ul className="flex h-24 w-full">
              <li className="flex justify-center items-center bg-violet-50 w-1/2 rounded-es-full rounded-tl-full">
                <button className="flex justify-center items-center">
                  <PersonOutlineIcon className="text-4xl mr-2" />
                  <span>내 프로필</span>
                </button>
              </li>
              <li className="flex justify-center items-center bg-green-50 w-1/2 rounded-se-full rounded-br-full">
                <button className="flex justify-center items-center">
                  <ApartmentIcon className="text-4xl mr-2" />
                  <span>매치업</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* article 1 */}
          <MainArticle_1 />
          <hr></hr>

          {/* article 1 */}
          <MainArticle_2 />
          <hr></hr>

          {/* article 1 */}
          <MainArticle_3 />
        </section>
      }
    </main>
  );
};

export default Main;
