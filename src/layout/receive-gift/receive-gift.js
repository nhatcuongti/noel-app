import React from 'react';
import './receive-gift.css';
import {Container} from "react-bootstrap";
const ReceiveGift = () => {
    const giftList = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7'];
    const showReceiveGift = (nameGift) => {
        console.log(nameGift);
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center h-100'>
            <div className='christmas-tree'>
                Christmas tree
                <div className='gift' style={{left : '-32px', top : '50px'}}
                     onClick={() => showReceiveGift(giftList[0])}></div>
                <div className='gift' style={{left : '-32px', top : '50%'}}
                     onClick={() => showReceiveGift(giftList[1])}></div>
                <div className='gift' style={{right : '-32px', top : '20%'}}
                     onClick={() => showReceiveGift(giftList[2])}></div>
                <div className='gift' style={{right : '-32px', top : '80%'}}
                     onClick={() => showReceiveGift(giftList[3])}></div>
                <div className='gift' style={{left : '-32px', bottom : '10%'}}
                     onClick={() => showReceiveGift(giftList[4])}></div>
                <div className='gift' style={{right : '-32px', top : '0'}}
                     onClick={() => showReceiveGift(giftList[5])}></div>
                <div className='gift' style={{right : '-32px', top : '130px'}}
                     onClick={() => showReceiveGift(giftList[6])}></div>
            </div>
        </Container>
    );
};

export default ReceiveGift;