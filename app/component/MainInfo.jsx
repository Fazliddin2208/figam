import React from 'react'
import Kiwi from '@/public/kiwi.png'
import Pals from '@/public/pals.png'
import Juice from '@/public/juice.png'
import Image from 'next/image'

export default function MainInfo() {
    return (
        <div className='mainInfo'>
            <div className="mainInfo__left">
                <Image src={Kiwi} alt="img" width="140" placeholder='blur' quality={100} />
            </div>

            <div className="mainInfo__data">
                <div className="mainInfo__data__left">
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                </div>
                <div className="mainInfo__data__center">
                    <Image src={Juice} alt="img" width="250" placeholder='blur' quality={100} />
                </div>
                <div className="mainInfo__data__left">
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                    <div className="mainInfo__data__card">
                        <p>Triple Berry Smoothie</p>
                        <p>A smoothie is so much more than blended fruit. It's an art with all of it's different elements blending perfectly together.</p>
                    </div>
                </div>
            </div>

            <div className="mainInfo__right">
                <Image src={Pals} alt="img" width="175" placeholder='blur' quality={100} />
            </div>
        </div>
    )
}
