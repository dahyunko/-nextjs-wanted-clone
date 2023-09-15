### 컴포넌트화 방향

---

- **폴더 구조**
  ![image](https://github.com/dahyunko/nextjs-wanted-clone/assets/101400650/fa6e299b-50fe-49fa-a8a3-cc5c0f1e3f34)

1. home 페이지를 header, main, footer로 분할
   1. `Header.tsx` , `Main.tsx` , `Footer.tsx` 생성
   2. `page.tsx` 에 다음과 같이 구성

      ```tsx
      'use client';

      import '../style/global.css';
      import React from 'react';
      import Layout from './layout'; // Layout 컴포넌트를 가져옴
      import Header from '../components/Header';
      import Main from '../components/Main';
      import Footer from '../components/Footer';

      const Page: React.FC = () => {
        return (
          <Layout>
            <Header />
            <Main />
            <hr></hr>
            <Footer />
          </Layout>
        );
      };

      export default Page;
      ```
2. main의 회사 정보들을 component로 묶음

   1. 다음 그림과 같이 페이지 분리

      `MainArticle_1.tsx` , `MainArticle_2.tsx` , `MainArticle_3.tsx` 생성

      ![image](https://github.com/dahyunko/nextjs-wanted-clone/assets/101400650/387e2df6-14ea-46c2-875d-47988cc6b392)

   2. `Main.tsx` 에 다음과 같이 구성

      ```tsx
      import React from 'react';
      ...
      import MainArticle_1 from '../article/MainArticle_1';
      import MainArticle_2 from '../article/MainArticle_2';
      import MainArticle_3 from '../article/MainArticle_3';

      const Main: React.FC = () => {
          return (
              <main className="relative w-7/12 m-auto mt-20">
                  {
                      <section className="">

                          ...

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
      ```

3. MainArticle_1.tsx 컴포넌트화

   1. 아래 빨간색을 중심으로 아래와 같이 구성

      ```html
      <Red>
        <Green></Green>
        <Blue></Blue>
        <Blue></Blue>
      </Red>
      ```

      ![image](https://github.com/dahyunko/nextjs-wanted-clone/assets/101400650/3f80d8f2-b820-4c3a-bed6-1a70a144229a)

      - 코드
        `Article_info` 안에 Data 저장
        → `Article_info` 안에 `company_info`로 파란색 component의 정보 저장
        ```tsx
        const Article_info = [
          {
            title: '#유연근무',
            icon_img: 'https://image.wanted.co.kr/ ...',
            company_info: [
              {
                title: '카페 24',
                contents: 'IT, 컨텐츠',
                main_img:
                  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr...',
                com_img: 'https://image.wanted.co.kr/...',
              },
              {
                title: '웰하임',
                contents: '제조',
                main_img:
                  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages...',
                com_img: 'https://image.wanted.co.kr/...',
              },
            ],
          },
        ];
        ```
        `RenderArticleInfo` 안에 `Article_info.company_info.map(Data =>{return()})` 으로 component 여러개 띄움 ⇒ 이중 for문 원리
        ```tsx
        import React from 'react';
        import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

        const Article_info =[
        	{
        		...
        	}
        ]

        {빨간부분}
        **const RenderArticleInfo = Article_info.map(Article_info =>{**
            return(
                // eslint-disable-next-line react/jsx-key
                <div className="mb-20">
                    <header className="w-full">
                        ...{초록부분}
                    </header>
                    <div>
                        <div className='flex '>
                            {/* 회사 정보 컴포넌트 분리 */}
                            {
                                **Article_info.company_info.map(Data** =>{
                                    return(
                                        // eslint-disable-next-line react/jsx-key
                                        <div className='block w-1/2 mr-3'>
                                            ...{파랑부분}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        });
        ```

- **결과**
  ![image](https://github.com/dahyunko/nextjs-wanted-clone/assets/101400650/418e61be-4d9e-489f-9313-0fe2cd59c3c4)
