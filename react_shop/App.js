import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
/* export 받은 것은 똑같이 중괄호랑 변수를 넣어준다. */

/* src는 이미지 압축한다. */
/* 부트스트랩 css 파일을 다운받아서 사용해도 된다. */
/* 원조 리액트 부트스트랩은 원조 class명을 사용해도된다. */
function App() {

  let [shoes, shoesC] = useState(data);

  

  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
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

<div class="jumbotron">
  <h1>Hello, world!</h1>
  <p>...</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>
{/* 리액트에 container 클래스가 존재 row. col-md-4 클래스 사용하면 자동으로 공간이 분리 된다. */}
    <div className="container">
      <div className="row">
        {
        shoes.map((a,i)=>{
          return <ShoesList shoes={shoes[i]} i={i} key={i} />
        }) /* function을 사용안해도 작동이된다. 이전 작업내용을 체크해보자. */
        }       
      </div>
    </div>
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