import React, {useEffect, useState} from 'react';
import {Button, CardImg, Col, Image, Row} from "react-bootstrap";
import './my-wish.css'

const MyWish = () => {

    useEffect(() => {

    }, [])


    return (
        <>
            <Row style={{width : '100', height : '100%',
                 backgroundImage : `url(${process.env.PUBLIC_URL}/bg-my-wish.png)`, backgroundSize : '150% 135%',
                 backgroundPositionX : '0%', backgroundPositionY : '10%', backgroundRepeat : 'no-repeat'}}>
                <Image src={`${process.env.PUBLIC_URL}/Santa-Claus-Father.png`}
                       style={{width : '40%', height : '60%', position : 'absolute', left : '100px', bottom : '30px'}}/>

                <Image src={`${process.env.PUBLIC_URL}/letter-scroll-1.png`}
                       className='letter_scroll'
                       style={{position : 'absolute', left : '31%', top : '40%',
                           width : '15%', height : '15%',}}/>

                <Image src={`${process.env.PUBLIC_URL}/moon.png`}
                       style={{position : 'absolute', left : '35%', top : '0',
                           width : '20%', height : '35%',}}/>

                <Image src={`${process.env.PUBLIC_URL}/santa_with_sleigh.png`}
                       style={{position : 'absolute', left : '40%', top : '90px',
                           width : '10%', height : '10%',}}/>

            </Row>
        </>
    );
};

export default MyWish;