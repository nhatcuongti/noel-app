import React, {useEffect, useState} from 'react';
import './receive-gift.css';
import {Button, CardImg, Col, Container, Image, Modal, Row} from "react-bootstrap";
import ShowGift from "./show-gift/show-gift";

const ReceiveGift = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalGiftShow, setModalGiftShow] = useState(false);
    const [nameGift, setNameGift] = useState("");
    const giftListTmp = [
        {
            id: 'gift1',
            name: 'Trà sữa phúc long ( > 70.000 VNĐ)',
            img_url: '/phuc_long-removebg-preview.png',
            img_gift_url: '/gift-box-cutout_8477269_999.png'
        },
        {
            id: 'gift2',
            name: 'Trà sữa ( <= 50.000 VNĐ)',
            img_url: '/tra_sua_binh_thuong.png',
            img_gift_url: '/gift-red-box-and-gold-bow-cutout_8477322_223.png'
        },
        {
            id: 'gift3',
            name: 'Nước tẩy trang( dung tích  > 150 ml)',
            img_url: '/nuoc-tay-trang-xanh.jpg',
            img_gift_url: '/gift-1.png'
        },
        {
            id: 'gift4',
            name: '150.000 hiện kim',
            img_url: '/tra_sua_phuc_long.png',
            img_gift_url: '/gift-black-box-and-gold-bow-cutout_8477266_533.png'
        },
        {
            id: 'gift5',
            name: 'Mũ vải',
            img_url: '/mu-bucket-vanh-cup-nhung-gan-768x768.jpg',
            img_gift_url: '/gift-blue.png'
        },
        {
            id: 'gift6',
            name: 'Bông tai',
            img_url: '/bong_tai.png',
            img_gift_url: '/gift-red-yellow.png'
        },
        {
            id: 'gift7',
            name: 'Trà sữa phúc long ( > 70.000 VNĐ)',
            img_url: '/tra_sua_phuc_long.png',
            img_gift_url: '/gift-red.png'
        },
        {
            id: 'gift8',
            name: 'Dây chuyền',
            img_url: '/day_chuyen.png',
            img_gift_url: '/gift-yellow.png'
        },
        {
            id: 'gift9',
            name: 'Mặt nạ',
            img_url: '/mat_na.webp',
            img_gift_url: '/gift-pink.png'
        },
    ];
    const [giftList, setGiftList] = useState([]);
    const getRandomArray = (left, right) => {
        // Create an array of length 10 with elements from 1 to 10
        const array = [];
        for (let i = left; i <= right; i++) array.push(i);

        // Use the Fisher-Yates shuffle algorithm to shuffle the array
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    const renderSnowAnimation = () => {
        const sizeRandom = getRandomArray(15, 30);
        const numberSnow = 30;
        const topPosition = [];
        const bottomPosition = [];

    }

    useEffect(() => {
        const giftListRandom = [];
        const randomIndexList = getRandomArray(0, 8);
        for (let i = 0; i < randomIndexList.length; i++) {
            giftListRandom.push(giftListTmp[randomIndexList[i]]);
        }
        renderSnowAnimation();
        setGiftList(giftListRandom);
    }, [])


    const onGiftClick = (idGift) => {
        for (let i = 0; i < giftList.length; i++) {
            giftList[i].choosen = undefined;
            if (giftList[i].id == idGift) giftList[i].choosen = true;
        }
        setGiftList([...giftList]);
        setModalShow(true);

        setTimeout(() => {
            setModalShow(false);
            setModalGiftShow(true);
        }, 2000)
    }
    return (
        <Container fluid className='d-flex justify-content-center align-items-center h-100'
                   style={{
                       backgroundImage: `url(${process.env.PUBLIC_URL}/christmas-background-illustrator.png)`,
                       backgroundPosition: '0% 90%', backgroundSize: 'cover', position: 'relative'
                   }}>
            <div className='container-image'>
                <Image src={process.env.PUBLIC_URL + '/christmas-tree-large-animated.gif'}
                       className='christmas-tree'/>
                <Image src={process.env.PUBLIC_URL + '/gift-box-cutout_8477269_999.png'} className='gift'
                       style={{left: '42%', top: '15%'}}
                       onClick={() => onGiftClick('gift1')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-red-box-and-gold-bow-cutout_8477322_223.png'}
                       className='gift' style={{left: '30%', top: '30%'}}
                       onClick={() => onGiftClick('gift2')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-1.png'} className='gift' style={{right: '30%', top: '40%'}}
                       onClick={() => onGiftClick('gift3')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-black-box-and-gold-bow-cutout_8477266_533.png'}
                       className='gift' style={{left: '25%', top: '50%'}}
                       onClick={() => onGiftClick('gift4')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-blue.png'} className='gift'
                       style={{left: '40%', top: '60%'}}
                       onClick={() => onGiftClick('gift5')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-red-yellow.png'} className='gift'
                       style={{right: '20%', top: '65%'}}
                       onClick={() => onGiftClick('gift6')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-red.png'} className='gift' style={{left: '10%', top: '70%'}}
                       onClick={() => onGiftClick('gift7')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-yellow.png'} className='gift'
                       style={{left: '30%', top: '80%'}}
                       onClick={() => onGiftClick('gift8')}/>
                <Image src={process.env.PUBLIC_URL + '/gift-pink.png'} className='gift'
                       style={{left: '60%', top: '80%'}}
                       onClick={() => onGiftClick('gift9')}/>
                <Image src={process.env.PUBLIC_URL + '/gifts-1.png'} className='gifts-decorate'
                       style={{left: '-150px', bottom: '0'}}/>
                <Image src={process.env.PUBLIC_URL + '/gift-decorate-3.png'}
                       style={{bottom: '-75px', left: '0', width: '135px', height: '135px', position: 'absolute'}}/>
                <Image src={process.env.PUBLIC_URL + '/gift-decorate-4.png'}
                       style={{bottom: '-75px', left: '150px', width: '135px', height: '135px', position: 'absolute'}}/>
                <Image src={process.env.PUBLIC_URL + '/gift-decorate-5.png'}
                       style={{bottom: '-60px', left: '290px', width: '80px', height: '80px', position: 'absolute'}}/>
                {/*<Image src={process.env.PUBLIC_URL + '/gifts-decorate-6.png'}*/}
                {/*       className='gifts-decorate' style={{left : '-150px', bottom : '0'}}/>*/}
                <Image src={process.env.PUBLIC_URL + '/gifts-2.png'}
                       className='gifts-decorate-2' style={{right: '-170px', bottom: '0', height: '180px !important'}}/>

                {/*Snow */}
            </div>
            <Image  className={'snow'}
                    style={{top : '0', left : '0', animationDelay : '1s', animationDuration : '1.5s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={15} height={15}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '30px', animationDelay : '0', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={20} height={20}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '100px', animationDelay : '0.5s', animationDuration : '3s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={20} height={20}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '200px', animationDelay : '0.3s', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={17} height={17}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '300px', animationDelay : '1.4s', animationDuration : '1.5s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={18} height={18}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '400px', animationDelay : '0', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={23} height={23}/>
            <Image  className={'snow'}
                    style={{top : '0', left : '500px', animationDelay : '0', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={21} height={21}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '500px', animationDelay : '0', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={23} height={23}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '450px', animationDelay : '2s', animationDuration : '2s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={25} height={25}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '400px', animationDelay : '1.5s', animationDuration : '2s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={17} height={17}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '300px', animationDelay : '2s', animationDuration : '1.5s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={18} height={18}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '200px', animationDelay : '1s', animationDuration : '1.5s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={23} height={23}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '100px', animationDelay : '0.5s', animationDuration : '3s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={19} height={19}/>

            <Image  className={'snow'}
                    style={{top : '0', right : '50px', animationDelay : '1s', animationDuration : '1.5s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={16} height={16}/>


            <Image  className={'snow'}
                    style={{top : '0', right : '5px', animationDelay : '3s', animationDuration : '1s'}}
                    src={process.env.PUBLIC_URL + '/snow.png'} width={20} height={20}/>

            <Image src={process.env.PUBLIC_URL + '/santa-claus-png-0.png'}
                   width={400} height={400}
                   style={{position: "absolute", bottom: '5%', right: '5%'}}/>

            <Image src={process.env.PUBLIC_URL + '/Snowman-Transparent-Images.png'}
                   width={250} height={250}
                   style={{position: "absolute", bottom: '5%', left: '5%'}}/>

            <Modal
                show={modalShow}
                aria-labelledby="contained-modal-title-vcenter"
                dialogClassName='modal-40w'
                centered>
                <Modal.Body className='modal-custom-image'>
                    <Image src={process.env.PUBLIC_URL + '/gift-cai-bup-ok.gif'}
                           style={{width: '100%', height: '100%'}}/>
                </Modal.Body>
            </Modal>

            <ShowGift
                show={modalGiftShow}
                giftList={giftList}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
};

export default ReceiveGift;