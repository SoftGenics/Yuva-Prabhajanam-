import React from 'react'
import './TopCard.css'
import { Card, Container, Row } from 'react-bootstrap'
const TopCard = () => {
  return (
    <div>
        <Container fluid className='topcard'>
            <Row>
           
                    <Card>
                        <Card.Img src='images/allurifinal.jpg' />
                    </Card>
             
               
                    <Card>
                        <Card.Img src='images/apj.jpg'  />
                    </Card>
           
          
                    <Card>
                        <Card.Img src='images/srdhaar.jpg' />
                    </Card>
        
                    <Card style={{borderRadius:'50%'}}>
                        <Card.Img src='images/telugu-thalli.jpg' alt='teleguthali'style={{borderRadius:'50%'}} />
                    </Card>
       
                    <Card>
                        <Card.Img src='images/sreeramulu.jpg' />
                    </Card>
         
                    <Card>
                        <Card.Img src='images/subhash.jpg' />
                    </Card>
          
                    <Card>
                        <Card.Img src='images/rudramadevi.jpg' />
                    </Card>
                
            </Row>
        </Container>
    </div>
  )
}

export default TopCard