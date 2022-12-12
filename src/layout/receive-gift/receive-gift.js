import React, {useState} from 'react';
import './receive-gift.css';
import {CardImg, Container, Image} from "react-bootstrap";
import ShowGift from "./show-gift/show-gift";
const ReceiveGift = () => {
    const [modalShow, setModalShow] = useState(false);
    const [nameGift, setNameGift] = useState("");
    const giftList = [
        {
            id : 'gift1',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift2',
            name : 'Trà sữa phúc long ( <= 50.000 VNĐ)'
        },
        {
            id : 'gift3',
            name : 'Nước tẩy dung tích ( > 300 ml)'
        },
        {
            id : 'gift4',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift5',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift6',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift7',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift8',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
        {
            id : 'gift9',
            name : 'Trà sữa phúc long ( > 70.000 VNĐ)'
        },
    ];
    const showReceiveGift = (nameGift) => {
        setModalShow(true);
        setNameGift(nameGift);
        console.log(nameGift);
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center h-100'>
            <div className='container-image'>
                <Image src={'/christmas-tree-large-animated.gif'}
                       className='christmas-tree'/>
                <Image src={'/gift-box-cutout_8477269_999.png'} className='gift' style={{left : '42%', top : '15%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-red-box-and-gold-bow-cutout_8477322_223.png'} className='gift' style={{left : '30%', top : '30%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-1.png'} className='gift' style={{right : '30%', top : '40%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-black-box-and-gold-bow-cutout_8477266_533.png'} className='gift' style={{left : '25%', top : '50%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-blue.png'} className='gift' style={{left : '40%', top : '60%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-red-yellow.png'} className='gift' style={{right : '20%', top : '65%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-red.png'} className='gift' style={{left : '10%', top : '70%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-yellow.png'} className='gift' style={{left : '30%', top : '80%'}}
                       onClick={() => setModalShow(true)}/>
                <Image src={'/gift-pink.png'} className='gift' style={{left : '60%', top : '80%'}}
                       onClick={() => setModalShow(true)}/>

                <Image src={'/gifts-1.png'} className='gifts-decorate' style={{left : '-150px', bottom : '0'}}/>
                <Image src={'/gifts-2.png'} className='gifts-decorate-2' style={{right : '-170px', bottom : '0', height : '180px !important'}}/>

            </div>


            <ShowGift
                show={modalShow}
                nameGift={nameGift}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
};

export default ReceiveGift;