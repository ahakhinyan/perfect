import React from 'react';
import s from './Post.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nreni from './../../../img/Nreni.svg'
import Client from './../../../img/client.svg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5,
    itemsFit: 'contain' },
};


const items = [
  <img src={Nreni} data-value="1" role="presentation" alt='Nreni' />,
  <img src={Client} data-value="2" role="presentation" alt='Partner' />,
  <img src={Client} data-value="3" role="presentation" alt='Partner' />,
  <img src={Client} data-value="4" role="presentation" alt='Partner' />,
  <img src={Client} data-value="5" role="presentation" alt='Partner' />,
];

function Post() {
  return (
    <div className={s.post}>
      <Container>
      <Row>
      <AliceCarousel
        disableButtonsControls
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
    />
      </Row>
      </Container>
    </div>
  );
}

export default Post;
