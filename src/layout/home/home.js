import React, {useState} from 'react';
import {Button, CardImg, Container} from "react-bootstrap";
import './home.css';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [isMessageShow, setIsMessageShow] = useState(false);
    return (
        <Container fluid className='h-100 p-0'>
            <div className='d-flex justify-content-center align-items-center h-100'
                 style={isMessageShow ? {backgroundImage : `url(${process.env.PUBLIC_URL}/background.webp)`, backgroundSize : 'cover', } : {}}>
                {
                    !isMessageShow
                        ?
                    <CardImg src={process.env.PUBLIC_URL + '/envelope-with-love.png'} className='envelope' onClick={() => setIsMessageShow(true)}/>
                        :
                    <div className='container-letter'>
                            <div className='custom-paragraph'>
                                <p>Nhân dịp giáng sinh và em vừa thi xong, anh có một món quà đặc biệt muốn tặng cho em. </p>
                                {/*<p>Alias debitis dolores ea eaque eos et eum excepturi impedit incidunt, ipsum laudantium molestias nostrum provident rem, repellat tenetur, ullam vel velit! Adipisci amet non porro praesentium quia repellendus voluptate.</p>*/}
                                {/*<p>Eos, magnam, temporibus? Ipsum, molestias, possimus? Adipisci dolores explicabo fugit illo labore modi perspiciatis quaerat quam quod saepe! Ab, animi beatae debitis eius et eum molestiae nostrum quibusdam tenetur voluptas.</p>*/}
                            </div>
                        <div className='d-flex justify-content-end'>
                            <Button className='btn m-3' size='lg' variant='primary'
                                    onClick={() => navigate('/receive-gift')}>Next</Button>
                        </div>
                    </div>


                }

            </div>
        </Container>
    );
};

export default Home;