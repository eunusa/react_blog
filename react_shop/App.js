import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';


/* axios ajax 라이브러리 */
/* export 받은 것은 똑같이 중괄호랑 변수를 넣어준다. */

/* src는 이미지 압축한다. */
/* 부트스트랩 css 파일을 다운받아서 사용해도 된다. */
/* 원조 리액트 부트스트랩은 원조 class명을 사용해도된다. */
import { Link, Route, Switch } from 'react-router-dom'; /* Link Route Switch는 항상 첫알파뱃을 대문자로 작성하기. */


function App() {

  let [shoes, shoesC] = useState(data); /* 중요한 state는 app에다가 저장하는게 국룰 */
  let [inventory,inventoryC] = useState([10,11,12]);


  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link> {/* Link 컴포넌트 사용한다. */}
        <Nav.Link as={Link} to="Detail">Detail</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




<Route exact path="/"> {/* exact path가 정확할때만 작동 된다. */}
  <div class="jumbotron">
    <h1>Hello, world!</h1>
    <p>...</p>
    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
  </div>

  <div className="container">
      <div className="row">
        {
        shoes.map((a,i)=>{
          return <ShoesList shoes={shoes[i]} i={i} key={i} />
        }) /* function을 사용안해도 작동이된다. 이전 작업내용을 체크해보자. */
        }       
      </div>
    
    <button className='btn btn-primary' onClick={()=>{

      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{
        console.log('성공했어요.');
        shoesC([...shoes, ...result.data]);
      })
      .catch(()=>{
        console.log('실패했어요.');
      })

    }}>더보기</button>
    
    </div>




</Route>

<Route path="/detail/:id"> {/* url 파라미터, 아무거나 입력 가능하다. */}
  
  <Detail shoes={shoes} inventory={inventory} inventoryC={inventoryC}/>
 
  
</Route>
{/* 모듈화라고도 한다. */}

<Route path="/:id">{/* 아무 문자나 보여준다. */}
  <div>아무거나 보여주세요.</div>
</Route>

<Route path="/detail2">
  <div>뭐지 보여주는데..??</div>
</Route>



 {/* 중복을 허용하지 않는다. 맨 위에 해당하는것만 보여준다. */}

{/* 리액트에 container 클래스가 존재 row. col-md-4 클래스 사용하면 자동으로 공간이 분리 된다. */}
</div>
  );
}

export default App;






function ShoesList(props){
 return (
 <div className="col-md-4">
 <img src={ "https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg" } width="100%"></img>
 {/* src에 변수넣으려면 중괄호를 사용하자, props 입력은 소괄호 */}
 <h4>{props.shoes.title}</h4>
 <p>{props.shoes.content} {props.shoes.price}</p>
</div>
)
}