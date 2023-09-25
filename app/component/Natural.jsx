import React from 'react'
import { Waiting_for_the_Sunrise, Quicksand } from 'next/font/google'
import Image from 'next/image'

const wfts = Waiting_for_the_Sunrise({
    weight: '400',
    subsets: ['latin']
})

const quick = Quicksand({
    weight: '400',
    subsets: ['latin']
})

const juices = [
    {
        image: '/juice1.png',
        title: 'Fresh Smoothies',
        price: '13.00'
    },
    {
        image: '/juice2.png',
        title: 'Natural Juice',
        price: '11.00'
    },
    {
        image: '/juice3.png',
        title: 'Ice Smoothies',
        price: '7.00'
    },
    {
        image: '/juice4.png',
        title: 'Fresh Smoothie Cream',
        price: '3.00'
    },
    {
        image: '/juice5.png',
        title: 'Fruits Smoothie',
        price: '13.00'
    },
    {
        image: '/juice6.png',
        title: 'Natural Ice Juice',
        price: '11.00'
    },
    {
        image: '/juice7.png',
        title: 'Pink Smoothie',
        price: '7.00'
    },
    {
        image: '/juice8.png',
        title: 'Fresh Smoothie',
        price: '3.00'
    },
]

export default function Natural() {
    return (
        <div className='natural'>
            <div className="natural__title">
                <h2 className={quick.className}>Natural Smoothies</h2>
                <p className={wfts.className}>Drink natural to be stronger</p>
            </div>

            <div className="natural__cards">
                {juices?.map((juice, index) => (
                    <div key={index} className="natural__card">
                        <Image src={juice.image} alt='juice image' width={200} height={250} priority='blur' quality={100} />
                        <p className={quick.className}>{juice.title}</p> <br />
                        <p className={wfts.className}>£ {juice.price}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}
