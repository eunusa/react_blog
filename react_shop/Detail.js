import react, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data.js';
import styled from 'styled-components';
import './Detail.scss' ;

let Boxlist = styled.div`
    padding-top :20px;
`;

let Titlelist = styled.h4`
    font-size :30px;
    color : ${props => props.색상}
`;/* 첫단어는 대문자로 사용해라.  */

/* useParams 훅  */
/* 데이터의 id를 사용하여 정렬을 통한 오류를 막는다. */




function Detail(props){

    let { id } = useParams();
    let history = useHistory(); /* 방문기록이 남아있는 히스토리 useHistory 훅 history.push('/') 여길로 이동할수 있다. */
    let idList = data;

    return(
    <div className="container">
        <Boxlist>
            <Titlelist className='red' >테스트</Titlelist> {/* props문법 보낼이름={변수명} 보낼이름="일반문자" */}
        </Boxlist>
        <div className='my-alert2'>
            <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        <div className="row">
        <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">{idList[id].title}</h4>
            <p>{idList[id].content}</p>
            <p>{idList[id].price}</p>
            
            
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
        </div>
        </div>
    </div>
)
}

export default Detail;