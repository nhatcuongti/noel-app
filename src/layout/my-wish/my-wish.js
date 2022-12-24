import React, {useEffect, useState} from 'react';
import {Button, Card, CardImg, Col, Image, Row} from "react-bootstrap";
import './my-wish.css'

const MyWish = () => {

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

    const getRandomStars = () => {
        const posX = getRandomArray(0, 30);
        const posY = getRandomArray(0, 30);
    }

    useEffect(() => {
        getRandomStars();
    }, [])
    const [isLetterDetailShow, setIsLetterDetailShow] = useState(false);



    const onLetterScroolClick = () => {
        setIsLetterDetailShow(true);
    }

    return (
        <>
            <Row style={{width : '100', height : '100%',
                 backgroundImage : `url(${process.env.PUBLIC_URL}/bg-my-wish.png)`, backgroundSize : '150% 135%',
                 backgroundPositionX : '0%', backgroundPositionY : '10%', backgroundRepeat : 'no-repeat',
                 }}>

                {/*Background*/}
                <div className="stars"
                     style={{background : `#000 url(${process.env.PUBLIC_URL}/stars.png) repeat top center`}}>

                </div>

                {/*Moon */}
                <Image src={`${process.env.PUBLIC_URL}/moon.png`}
                       style={{position : 'absolute', left : '31%', top : '0',
                           width : '20%', height : '35%',}}/>

                {/*Santa with sleigh */}
                <Image src={`${process.env.PUBLIC_URL}/santa_with_sleigh.png`}
                       style={{position : 'absolute', left : '36%', top : '90px',
                           width : '10%', height : '10%',}}/>

                {/*List star */}
                <Image src={`${process.env.PUBLIC_URL}/star-1.png`}
                       style={{position : 'absolute', left : '0', top : '0',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-2.png`}
                       style={{position : 'absolute', left : '0', top : '10%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-3.png`}
                       style={{position : 'absolute', left : '10%', top : '0',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-4.png`}
                       style={{position : 'absolute', left : '10%', top : '20%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-1.png`}
                       style={{position : 'absolute', left : '20%', top : '15%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-2.png`}
                       style={{position : 'absolute', left : '5%', top : '30%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-3.png`}
                       style={{position : 'absolute', left : '17%', top : '25%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-4.png`}
                       style={{position : 'absolute', right : '20%', top : '0',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-1.png`}
                       style={{position : 'absolute', right : '10%', top : '5%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-2.png`}
                       style={{position : 'absolute', right : '0%', top : '0',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-3.png`}
                       style={{position : 'absolute', right : '30%', top : '10%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-4.png`}
                       style={{position : 'absolute', right : '15%', top : '17%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-1.png`}
                       style={{position : 'absolute', right : '36%', top : '20%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-5.png`}
                       style={{position : 'absolute', right : '25%', top : '20%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-5.png`}
                       style={{position : 'absolute', right : '40%', top : '30%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-2.png`}
                       style={{position : 'absolute', right : '0', top : '30%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-3.png`}
                       style={{position : 'absolute', right : '20%', top : '34%',
                           width : '3%', height : '3%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/star-5.png`}
                       style={{position : 'absolute', top : '10%', left : '30%',
                           width : '3%', height : '3%',}}/>

                {/*Sao bang*/}
                <Image src={`${process.env.PUBLIC_URL}/sunshine-1.png`}
                       style={{position : 'absolute', top : '5%', right : '35%',
                           width : '8%', height : '12%',}}/>

                <Image src={`${process.env.PUBLIC_URL}/sunshine-2.png`}
                       style={{position : 'absolute', top : '20%', right : '0',
                           width : '12%', height : '7%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/sunshine-3.png`}
                       style={{position : 'absolute', top : '16%', left : '23%',
                           width : '10%', height : '10%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/sunshine-3.png`}
                       style={{position : 'absolute', top : '17%', left : '29%',
                           width : '6%', height : '6%',}}/>
                <Image src={`${process.env.PUBLIC_URL}/sunshine-6.png`}
                       style={{position : 'absolute', top : '6%', left : '7%',
                           width : '10%', height : '10%',}}/>


                {/*Content*/}
                {/*Santa claus */}
                <Image src={`${process.env.PUBLIC_URL}/Santa-Claus-Father.png`}
                       style={{width : '40%', height : '60%', position : 'absolute', left : '100px', bottom : '30px'}}/>

                {/*letter_scroll*/}
                <Image src={`${process.env.PUBLIC_URL}/letter-scroll-1.png`}
                       hidden={isLetterDetailShow}
                       className='letter_scroll'
                       style={{position : 'absolute', left : '31%', top : '40%',
                           width : '15%', height : '15%',}}
                       onClick={() => onLetterScroolClick()}/>

                <Image src={`${process.env.PUBLIC_URL}/letter-detail.png`}
                       hidden={!isLetterDetailShow}
                       style={{position : 'absolute', left : '45%', top : '7%',
                           width : '50%', height : '95%',}}/>

                <div style={{position : 'absolute', top : '30%', left : '54%', width: '32%', height : '60%'}}
                     hidden={!isLetterDetailShow}
                     className='text-start custom-paragraph-my-wish'>
                    <p>Giáng sinh an lành ☃</p>
                    <p>Chúc Nho 1 mùa giáng sinh vui vẻ bên người thân và tiếp thu nhiều năng lượng tích cực từ vũ trụ nhé ❤ Nếu Nho thích món quà này thì review cho anh biết nhé 😊 (này tâm huyết lắm ớ)</p>
                    <p>With love</p>
                    <p>Merry Christmas Nho 🎅</p>
                    <p>From distant and same frequency friend!</p>

                </div>


            </Row>
        </>
    );
};

export default MyWish;