import React from 'react';
import './show-gift.css';
import {Button, Card, CardImg, Col, Container, Modal, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const ShowGift = (props) => {
    const navigate = useNavigate();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Chúc mừng đã nhận được món quà {props.nameGift}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <div className='h-100 d-flex flex-column justify-content-between'>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                        </div>
                    </Col>
                    <Col xs={8}>
                        <CardImg className='gift_receive_show-gift' src='/tra_sua_phuc_long.png'/>
                    </Col>
                    <Col>
                        <div className='h-100 d-flex flex-column justify-content-between'>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                            <CardImg className='gift_show-gift' src='/tra_sua_phuc_long.png'/>
                        </div>
                    </Col>
                </Row>



            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => navigate('/my-wish')}>Tiếp tục</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowGift;