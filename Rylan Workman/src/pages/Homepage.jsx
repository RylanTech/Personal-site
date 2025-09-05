import { useState } from 'react';
import '../styles/Homepage.css'
import '../styles/index.css'
import { Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import myImage from '../assets/me.png'

function Homepage() {

    return (
        <>
            <Container>
                <Header/>
                <Row>
                    <div className='col-6'></div>
                    <img src={myImage} className='my-image col-6' alt='Rylan Workman'/>
                </Row>
                <Row>
                    <div className='about-me-section col-12'>
                        test
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Homepage;