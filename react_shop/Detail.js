import react, { useEffect, useState } from 'react';
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

    useEffect(()=>{
        let setitemea = setTimeout(()=>{
        itemeaC(true);
        },2000)

        return ()=>{ clearTimeout(setitemea);}


        /* return (()=>{}) *//* 컴포넌트가 사라질때 실행된다. */
        /* useEffect는 순서대로 실행이 된다. */
        /* input 랜더링이 일어날때마다 훅이 실행된다. */
        /* setTimeout은 페이지 이동간에 에러를 발생할 수 있기 때문에 clearTimeout 함수를 통해 에러를 방지해준다.
        clearTimeout은  타이머가 해제 된다. */
    },[]);
        /*[]안에 조건이 들어간다 변수가 실행 될때만 실행시킬 수 있다.조건안에 아무것도 없으면 1번 실행하고 끝난다.  */


    let { id } = useParams();
    let history = useHistory(); /* 방문기록이 남아있는 히스토리 useHistory 훅 history.push('/') 여길로 이동할수 있다. */
    let idList = data;
    let [itemea,itemeaC] = useState(true);
    let [intest,intestC] = useState('');
    let [intestB,intestBC] = useState('');

    return(
    <div className="container">
        <Boxlist>
            <Titlelist className='red' >테스트</Titlelist> {/* props문법 보낼이름={변수명} 보낼이름="일반문자" */}
        </Boxlist>

        <input onChange={(e)=>{intestC(e.target.value)}}/>
        <button onClick={()=>{intestBC(intest)}}>입력</button>
        {intestB}


        { itemea === false
          ?<Itemeaa />
          : null
        }
        <div className="row">
        <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">{idList[id].title}</h4>
            <p>{idList[id].content}</p>
            <p>{idList[id].price}</p>
            
            
            <button className="btn btn-danger" onClick={()=>{props.inventoryC([1,2,3,])}}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
        </div>
        </div>

        <Info inventory={props.inventory} />

    </div>
)
}

function Itemeaa(){
return(<div className='my-alert2'>
            <p>재고가 얼마 남지 않았습니다.</p>
        </div>)
}


function Info(props){
    return(
        <p>재고:{props.inventory[0]}</p>
    )
}

export default Detail;