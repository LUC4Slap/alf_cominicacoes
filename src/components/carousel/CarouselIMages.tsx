/* eslint-disable @next/next/no-img-element */
'use client';
import { NextPage } from 'next';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import job1 from '../../../public/assets/job1.png';
import job2 from '../../../public/assets/job2.png';
import job3 from '../../../public/assets/job3.png';
const CarouselIMages: NextPage = ({}) => {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={job1}
          alt="First slide"
          width={800}
          height={660}
          quality={75}
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={job2}
          alt="First slide"
          width={800}
          height={660}
          quality={75}
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={job3}
          alt="First slide"
          width={800}
          height={660}
          quality={75}
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselIMages;
