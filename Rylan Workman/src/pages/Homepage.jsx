import { useState } from 'react';
import '../styles/Homepage.css'
import '../styles/index.css'
import { Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import myImage from '../assets/me-white-bg.JPG';

function Homepage() {

    return (
        <>
            <Container>
                <Header/>
                <Row>
                    <div className='col-6'></div>
                </Row>
                <Row>
                    <div className='col-12 about-me-section'>
                        <Container>
                            <Row>
                                <div className='col-6 col-sm-3 col-lg-2'>
                                    <img src={myImage} alt="My Image" className="my-image col-12"/>
                                </div>
                                <div className='name-and-title col-12 col-sm-9 col-lg-10'>
                                    <h1 className='google-sans-code' style={{color: 'white'}}>Rylan Workman</h1>
                                    <h3 className='google-sans-code subheading'>Web & App Developer</h3>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </>
    );
}
export default Homepage;