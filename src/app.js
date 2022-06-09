import { sum } from "./math";
import './app.css';
import testImage from './programmer.png'

window.addEventListener("DOMContentLoaded", () => {
  // dom 이 만들어 진 다음에 실행되는 코드
  sum(1, 2);
  const el = document.querySelector("#app");
  el.innerHTML = `
    <h1>1 + 2 = ${sum(1, 2)}</h1>
    <img src="${testImage}" alt="programmer" />
  `;
});
