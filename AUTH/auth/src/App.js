import { Col, Container, Row } from "react-bootstrap";
// import { Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Thank from "./components/Thank";

function App() {
  return (
    <Container>
      
      <Row>
        <Col className="text-center">
          <h1>REACT</h1>
          <Navbar />
        </Col>
      </Row>

      <Routes>
          <Route path='/register' element={
              <Col xs={12} sm={12} md={6} lg={6}>
                  <Register />
              </Col>
          } />
          <Route path='/login' element={
              <Col xs={12} sm={12} md={6} lg={6}>
                  <Login />
              </Col>
          } />
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/thank" element={<Thank />} />
      </Routes>

      {/* <Routes >
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Routes> */}

      {/* <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <Login />
        </Col>
      </Row> */}
    </Container>
  );
}

export default App;