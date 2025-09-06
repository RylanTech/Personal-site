import { useState } from 'react';
import '../styles/Homepage.css'
import '../styles/index.css'
import { Container, Row } from 'react-bootstrap';
import Header from '../components/Header';

// Images
import myImage from '../assets/me-white-bg.JPG';
import githubImage from '../assets/githubb&w.png'
import linkedInImage from '../assets/linkedinb&w.png'
import youtubeImage from '../assets/youtubeb&w.png'

function Homepage() {

    return (
        <>
            <Container>
                <Header />
                <Row>
                    <div className='col-6'></div>
                </Row>
                <Row>
                    <div className='col-12 about-me-section'>
                        <Container>
                            <Row>
                                <div className='col-6 col-sm-3 col-lg-2'>
                                    <img src={myImage} alt="My Image" className="my-image col-12" />
                                </div>
                                <div className='name-and-title col-12 col-sm-9 col-lg-10'>
                                    <h1 className='google-sans-code' style={{ color: 'white' }}>Rylan Workman</h1>
                                    <h3 className='google-sans-code subheading'>Web Developer</h3>
                                </div>
                            </Row>
                            <Row>
                                <div className='col-12 col-md-6'>
                                    <p className='agdasima about-text-title'>
                                        About
                                    </p>
                                    <p className='about-text'>
                                        My goal is to fulfill your website needs. With 4 years of experince and having worked
                                        on projects such as <a className='about-rp-link' href='https://google.com'>Reactive Pass</a> and working with several business owners, I
                                        can provide you with a website for your portfolio, business, or project idea. I handle
                                        planning, designing, development, hosting, & maintaince.
                                    </p>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <p className='agdasima socials-text-title'>
                                        Socials
                                    </p>
                                    <Container>
                                        <Row>
                                            <a href='https://www.youtube.com/@RylanTech' target='_blank' className='social-card-link'>
                                                <div className='col-12 social-card'>
                                                    <Row>
                                                        <div className='col-2'>
                                                            <img src={youtubeImage} className='social-img' />
                                                        </div>
                                                        <div className='col-10 social-title'>
                                                            Youtube
                                                        </div>
                                                    </Row>
                                                </div>
                                            </a>
                                            <a href='https://www.linkedin.com/in/rylanworkman/' target='_blank' className='social-card-link'>
                                                <div className='col-12 social-card'>
                                                    <Row>
                                                        <div className='col-2'>
                                                            <img src={linkedInImage} className='social-img' />
                                                        </div>
                                                        <div className='col-10 social-title'>
                                                            LinkedIn
                                                        </div>
                                                    </Row>
                                                </div>
                                            </a>
                                            <a href='https://github.com/rylantech' target='_blank' className='social-card-link'>
                                                <div className='col-12 social-card'>
                                                    <Row>
                                                        <div className='col-2'>
                                                            <img src={githubImage} className='social-img' />
                                                        </div>
                                                        <div className='col-10 social-title'>
                                                            Github
                                                        </div>
                                                    </Row>
                                                </div>
                                            </a>

                                        </Row>
                                    </Container>
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