import React, {useEffect, useState} from 'react';
import {CardImg, Image} from "react-bootstrap";
import './my-wish.css'
import {clear} from "@testing-library/user-event/dist/clear";

const MyWish = () => {
    const wish = 'Lorem ipsum dolor sit amet';
    const wordShow = wish.split(' ');
    const [wishShow, setWishShow] = useState('');
    const [index, setIndex] = useState(0);
    // console.log(index);
    useEffect(() => {
        const intervalId = (index < wordShow.length) && setInterval(() => {
            setWishShow(wishShow + " " + wordShow[index]);
            setIndex(index + 1);
        }, 600)

        return () => clearInterval(intervalId);

    }, [index])


    return (
        <>
            <div className={'cloud_message_box'}>
                <p>
                    {wishShow}
                </p>
            </div>
            <Image src='/santa-claus-png-0.png'/>
        </>
    );
};

export default MyWish;