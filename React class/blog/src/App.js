/* eslint-disable */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '부산 맛집';
  let [title,titleChange] = useState(['여자 봄옷 추천','저녁 추천','라면 신상 추천']); 
  let [따봉,따봉변경]=useState(0);
  function 제목바꾸기(){
    var newArray= [...title];
    newArray[0]='남자 봄옷 추천';
    titleChange(newArray)
    // titleChange(['남자 코드 추천','저녁 추천','라면 신상 추천']);

  }
 
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue',fontSize:'30px'}}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3> {title[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
        <p> 3월 3일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {title[1]} </h3>
        <p> 3월 4일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {title[2]} </h3>
        <p> 3월 5일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
