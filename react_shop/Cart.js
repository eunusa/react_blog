import React, { useState } from "react";
import {Table} from "react-bootstrap"
import {connect} from "react-redux"




function Cart(props){
    return(
        <div>
            <Table striped bordered hover>
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
</div>
    )
}

function itemCart(state){
  return{
    cartName : state
  }
}
export default connect(itemCart)(Cart);