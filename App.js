import react, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  let [articleTitle, articleTitle_c] = useState(['노트북','게스크탑','테블릿']); /* useState 괄호에 신경을 쓰자.  */
  
  let [inList, inListC] = useState('');

  let [listB,listBc] = useState(false);

  let [artL,artLc] =useState('');

  let [hi,hic] = useState('안녕하세요');

  function button_sort(){
    let elecArray =[...articleTitle];
    elecArray.sort();
    articleTitle_c(elecArray);
  }



  return(
  <div className="App">
     <div className="black-nav">
     <div>test</div>
     
     </div>
     
      <button onClick={button_sort}>정렬</button>
      {/* onClick={}실행된다, ()=>{} 변경 */}


      {
      articleTitle.map(function(a,i){
      return <div className="list">
        <h1 onClick={()=>{artLc(i);
        hic(null);
        }}>{ a }</h1>
      </div>
      })
      
      }
      
      <div className='publish'>
      <input onChange={(e)=>{inListC(e.target.value)}}></input>{/* 괄호에 신경을쓰자. 변수.객체 이렇게 간다. 함수는 펑션 */}
      <button onClick={()=>
        {let inListArray = [...articleTitle];
         inListArray.unshift(inList); /* 변수만들어서 넣을 필요 없음. unshift로 실행을 시키 추가하면 됨. */
         articleTitle_c(inListArray);
          
      }}>입력</button>
      </div>
      
      <button onClick={ ()=>{listBc(!listB)}
        
      }>모달창</button>

        {
          (listB === true)
          ?<Modal articleTitle={articleTitle} artL={artL} hi={hi} />
          : null
        }

      
  
  </div>
  
  
  
  )
}


export default App;



function Modal(props){
return <div className='modal'>
    <h1>{props.hi}{props.articleTitle[props.artL]}</h1>
</div>

}