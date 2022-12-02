import React from 'react';
import s from './Contacts.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function MainContacts() {

  return (
    <div className={s.contacts}>
        <Container>
        <h1>Contacts</h1>
            <Row className={s.contacts_full}>
                <Col lg="6" className={s.main_info}>
                    <div className={s.left}>
                    <h1>Have an idea in mind?</h1>
                    <p>Reach out to us. We help you to create something unique together.</p>
                    <div className={s.allinfo}>
                        <div className={s.info}>
                            <li className={s.top}>Address</li>
                            <li className={s.bottom}>Vanadzor, Armenia</li>
                        </div>
                        <div className={s.info}>
                            <li className={s.top}>Email</li>
                            <li className={s.bottom}>support@ppx.design</li>
                        </div>
                        <div className={s.info}>
                            <li className={s.top}>Phone</li>
                            <li className={s.bottom}>+374(00)000-000</li>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col lg="6" className={s.contact_us}>
                    <div className={s.right}>
                        <h1>Contact Us</h1>
                        <div className={s.allinputs}>
                            <div className={s.input}>
                                <li>Name</li>
                                <input type="text" placeholder='Enter your full name'/>
                            </div>
                            <div className={s.input}>
                                <li>Email</li>
                                <input type="email" placeholder='Enter your email' />
                            </div>
                            <div className={s.input}>
                                <li>Details</li>
                                <input type="text" placeholder='Tell us what you have in your mind!' />
                            </div>
                        </div>
                        <Button className={s.send}>Send</Button>
                    </div>
                </Col>
                <div className={s.bottom_blue}>

                </div>
            </Row>
        </Container>
    </div>
  );
}

export default MainContacts;
