import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import './home.css';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [isMessageShow, setIsMessageShow] = useState(false);
    return (
        <Container fluid className='h-100'>
            <div className='d-flex justify-content-center align-items-center h-100' >
                {
                    !isMessageShow
                        ?
                    <Button variant='info'
                                            onClick={() => setIsMessageShow(true)}>
                        Button click
                    </Button>
                        :
                    <div className='h-50 w-50 message-box d-flex flex-column justify-content-between' >
                            <div className='custom-paragraph'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam asperiores atque fugiat illum iure minima modi molestias nesciunt, nobis praesentium quaerat quas repudiandae sunt vitae. Ad fugiat quae repudiandae.</p>
                                <p>Alias debitis dolores ea eaque eos et eum excepturi impedit incidunt, ipsum laudantium molestias nostrum provident rem, repellat tenetur, ullam vel velit! Adipisci amet non porro praesentium quia repellendus voluptate.</p>
                                <p>Eos, magnam, temporibus? Ipsum, molestias, possimus? Adipisci dolores explicabo fugit illo labore modi perspiciatis quaerat quam quod saepe! Ab, animi beatae debitis eius et eum molestiae nostrum quibusdam tenetur voluptas.</p>
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