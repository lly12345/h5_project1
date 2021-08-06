import React from 'react'
import './index.less'

import top from '@/assets/top.png'

import title from '@/assets/four/title.png'
import ziqiao from '@/assets/four/ziqiao.png'
import rightImg from '@/assets/four/right-img.png'
import footTitle from '@/assets/four/footer-title.png'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
import footCenter from '@/assets/foot-center.png'


export default function Four(props) {
    const index = 4
    const current = props.currentIndex
    const show = (current == index)
    return (
        <div className={`${show ? "page-box__four" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className="title">
                <img className={`animated ${show ? "fadeInUp" : ''}`} src={title} alt="" />
            </div>
            <div className="main">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} src={rightImg} alt="" />
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} src={ziqiao} alt="" />

            </div>
            <div className="cook">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} src={footLeft} alt=""/>
            </div>
            <div  className={`${show ? "subtitle" : ''}`}>
                <img src={footRight} src={footTitle} alt="" />
            </div>
            <div className="footer-img">
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} src={footRight} alt="" />
            </div>
        </div>
    )
}
