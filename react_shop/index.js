import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'; // 라이브러리 이름
//HashRouter 사용 가능

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let 초기값 = [{id :0, name :'멋진신발', quan :2},{id :1, name :'아디다스', quan :4}];

let popup = true;

function reducer2(state = popup, 액션){
  if(액션.type ==='popUpclose'){
    
    let popup = state;
    popup = false;
    return popup
  } else {return state}
} //연습으로 만든거지 작은 서비스는 useState를 사용해서 하면 짱편한다.



function reducer(state = 초기값, 액션){ //dipatch()할때 모든 오브젝트
  if(액션.type==='항목추가'){

      let found = state.findIndex((a)=>{return a.id === 액션.payload.id})
      console.log(found); // a는 하나의 데이터를 모두 비교한다.
      if (found>=0){

        let copy = [...state];
        copy[found].quan++;
        return copy
      } else{let copy = [...state];
        copy.push(액션.payload);
        return copy}
    
  }
  else if (액션.type === '수량증가'){
    let copy = [...state];
    copy[액션.데이터].quan++;
    return copy
  } else if (액션.type ==='수량감소' && 액션.수량 >0){
 
    let copy = [...state];
      copy[액션.데이터].quan--;
      return copy
  }
  
  else {return state}
}


let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
