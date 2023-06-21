import React from 'react'
import style from './home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicCard from '../Card/Card';
const Home = () => {
  return (
    <>
    <div className={style.main}>
       
     
    <Container>
    
      <Row >
        <Col xs={12} md={6}>
            <div className={style.textDiv}>
          <h1>Buy and Sell your textbooks for best Prices </h1> 
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed 
          Eo reiciendis, obcaecati ea sint dolore nisi architecto blanditiis iusto?
         </p>
         <nav className="navbar navbar-light bg-#ECEFEC">
         <div className="container-fluid ">
        <div className="d-flex">
         <input className="form-control me-3"   type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</nav>
 </div></Col>
        <Col xs={12} md={6} >
          <div className={style.imageDiv}>
          <img src="https://i.pinimg.com/originals/47/ba/bb/47babb5dda082f490ebe21390a9cad2c.png"/>
          </div>
          </Col>
      </Row>
      
    </Container>
     
    </div>
   <div className='border-red p-4 ' style={{background:'#ECEFEC'}}>
    <h1 className='text-center p-4'>Books</h1>
   <Container>
      <Row className='gx-5 gy-5'>
                <Col xs={12} sm={6} md={3}> <BasicCard/></Col>
                <Col xs={12} sm={6} md={3}> <BasicCard/></Col>
                <Col xs={12} sm={6} md={3}> <BasicCard/></Col>
                <Col xs={12} sm={6} md={3}> <BasicCard/></Col>
              </Row>
          </Container>
  
</div>
</>
  )
}

export default Home