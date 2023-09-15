/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // tailwind를 사용할 경로들을 입력
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tenada: ['Tenada'],
      },
      backgroundImage: {
        banner:
          "url('https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F2070%2F1c7540fe.jpg&w=1060&q=100')",
        article_1:
          "url('https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F4948%2Fd14ge6cpeqx91e4e__1080_790.jpg&w=520&q=100')",
      },
    },
  },
  plugins: [],
};
