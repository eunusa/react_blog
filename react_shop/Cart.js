import React, { useState } from "react";
import {Table} from "react-bootstrap"
import {connect} from "react-redux"


function itemCart(state){
  return{
    cartName : state.reducer,
    popup : state.reducer2 //state를 cartName으로 쓰겠습니다.
  }
} //redux store 데이터를 가져와서 props로 변환해주는 함수

function Cart(props){
    return(
        <div>
            <Table  className='mt-5' striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경</th>
    </tr>
  </thead>
  <tbody>
      {
        props.cartName.map((a,i)=>{
          return(<tr>
          <td>{a.id}</td>
          <td>{a.name}</td>
          <td>{a.quan}</td>
          <td><button onClick={()=>{ props.dispatch({type : '수량증가'}) }}>+</button><button onClick={()=>{{ props.dispatch({type : '수량감소'}) } }}>-</button></td>
          
          </tr>)
        })
      }
  </tbody>
</Table>

      {props.popup === true
        ?(<div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={()=>{props.dispatch({type : 'popUpclose'})}}>닫기</button>
          </div>)
        :null
      } {/* 연습으로 만든거지 useState를 사용해서 하면 짱편한다. */}
</div>
    )
}


export default connect(itemCart)(Cart); // itemCart, Cart에 redux 연결