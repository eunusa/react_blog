import react, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data.js';
import styled from 'styled-components';
import './Detail.scss' ;
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

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
        itemeaC(false);
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
    let [pushtab,pushtabC] = useState(0);
    let [wowB,wowBC] = useState(true);

    return(
    <div className="container">
        <Boxlist>
            <Titlelist className='red' >{idList[id].title}</Titlelist> {/* props문법 보낼이름={변수명} 보낼이름="일반문자" */}
        </Boxlist>

      {/*   <input onChange={(e)=>{intestC(e.target.value)}}/>
        <button onClick={()=>{intestBC(intest)}}>입력</button>
        {intestB} */}


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
            
            
            <button className="btn btn-danger" onClick={()=>{props.inventoryC([1,2,3,]);
            props.dispatch({type:'항목추가',payload : {id:idList[id].id, name:idList[id].title,quan:1}});
            history.push('/cart');
            }}>주문하기</button> 
            <button className="btn btn-danger" onClick={()=>{history.goBack();}}>뒤로가기</button> 
        </div>
        </div>

        <Info inventory={props.inventory} />

        <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0"> {/* defaultActiveKey 디폴트 탭 입력가능 */}
            <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{pushtabC(0); wowBC(false)}}>제품상세정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{pushtabC(1); wowBC(false)}}>회사정보</Nav.Link>
            </Nav.Item>
            
        </Nav>

        <CSSTransition in={wowB} classNames="wow" timeout={500}>
        <PushtabF pushtab={pushtab} wowBC={wowBC}/>
        </CSSTransition> 
     </div>
    )
}

function PushtabF(props){

    useEffect(()=>{
        props.wowBC(true);
    });
    /* false에서 true 변할때 애니매이션이 작동 된다.
    상위 탭 wowBC에서 false을 주고 재 랜더링 되면서 pushtabF를 실행시켜서 애니메이션을 실행한다. */

    if(props.pushtab === 0){
        return <div> 상세정보 공간입니다.</div>
    } else if(props.pushtab === 1){
        return <div> 회사정보 공간입니다.</div>
    }
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


function itemCart(state){
    return{
      cartName : state.reducer,
      popup : state.reducer2 //state를 cartName으로 쓰겠습니다.
    }
  }


export default connect(itemCart)(Detail);