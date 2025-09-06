import { useState } from 'react';
import '../styles/Homepage.css'
import '../styles/index.css'
import { Container, Row } from 'react-bootstrap';

function Header() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    function handleResize() {
        if (window.innerWidth < 768) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }

    window.addEventListener('resize', handleResize);

    return (
        <>
            <Row>
                <div className="col-12 header">
                    <div className='col-12'>
                        <Container>
                            <Row className="align-items-center">
                                <h1 className='header-text google-sans-code col-12 col-sm-8 col-md-4'>Rylan Workman</h1>
                                {!isSmallScreen && (
                                    <div className='col-4 d-flex justify-content-between'>
                                        <div className='header-links google-sans-code'>Projects</div>
                                        <div className='header-links google-sans-code'>Skills</div>
                                        <div className='header-links google-sans-code'>Contact</div>
                                    </div>
                                )}
                                <div className='col-4'></div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Row>
        </>
    );
}
export default Header;