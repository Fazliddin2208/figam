"use client"

import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import SlideImg1 from '@/public/slider1.jpg'
import SlideImg2 from '@/public/slider2.jpg'
import SlideImgBack from '@/public/slideback.png'

export default function MainSlider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='carousel'>
            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                slidesToSlide={1}

            >
                <div className='slider'>
                    <div className='slider__back'>
                        <Image src={SlideImgBack} alt='image' width={400} quality={100} placeholder='blur' />
                    </div>
                    <Image src={SlideImg1} alt='image' width={400} quality={100} placeholder='blur' />
                </div>
                <div className='slider'>
                    <div className='slider__back'>
                        <Image src={SlideImgBack} alt='image' width={400} quality={100} placeholder='blur' />
                    </div>
                    <Image src={SlideImg2} alt='image' width={400} quality={100} placeholder='blur' />
                </div>
                <div className='slider'>
                    <div className='slider__back'>
                        <Image src={SlideImgBack} alt='image' width={400} quality={100} placeholder='blur' />
                    </div>
                    <Image src={SlideImg1} alt='image' width={400} quality={100} placeholder='blur' />
                </div>
                <div className='slider'>
                    <div className='slider__back'>
                        <Image src={SlideImgBack} alt='image' width={400} quality={100} placeholder='blur' />
                    </div>
                    <Image src={SlideImg2} alt='image' width={400} quality={100} placeholder='blur' />
                </div>
                <div className='slider'>
                    <div className='slider__back'>
                        <Image src={SlideImgBack} alt='image' width={400} quality={100} placeholder='blur' />
                    </div>
                    <Image src={SlideImg1} alt='image' width={400} quality={100} placeholder='blur' />
                </div>
            </Carousel>
        </div>
    )
}
