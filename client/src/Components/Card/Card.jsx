import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsCart4 } from "react-icons/bs";

function BasicCard() {
  return (
    <Card style={{ width: '18rem',boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <Card.Img style={{padding:'10px' , height:'200px'}} variant="top" src="https://plus.unsplash.com/premium_photo-1677151193419-9be7a26c02cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <div><Card.Title>Card Title</Card.Title></div>
        <div><Card.Title style={{color:'#198754'}}className='text-#BCF2DE'>$239</Card.Title></div>
        </div>
        <Card.Text>
          Some quick example text to build on the card title 
         
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <div>
        <Button variant="success">View</Button>
        </div>
        <div>
        <BsCart4 style={{fontSize:'30px',color:'green',cursor:'pointer'}}/>
        </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;