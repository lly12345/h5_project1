import React,{useState} from 'react'
import './index.less'

import top from '@/assets/top.png'
import code from '@/assets/code.jpg'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
import process from '@/assets/process.png'



export default function One(props) {
    const index = 6
    const current = props.currentIndex
    const show = (current == index)
    
    return (
        <div className={`${show ? "page-box__six" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className="main">
                <div className="miniprogram-box">
                    <header>
                        <h6>扫码进入持加加</h6>
                        <p>长按二维码识别进入小程序</p>
                    </header>
                    <main>
                    {/* <a class="code-link" v-show="codeImg != ''" :href="codeImg" download="二维码.png">点击下载</a> */}
                        {/* <a className="down-img" href="https://h5.fuzhouxiaoyu.com/dakafanju/code.jpg" download="持加加.png">下载</a> */}
                        <img className="code" src={code} alt=""/>
                        <span>持加加团购流程</span>
                        <img className="process" src={process} alt=""/>
                        <button onClick={()=>props.setPopShow(true)}>详细流程</button>
                    </main>

                </div>
            </div>
            <div className="footer">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} alt="" />
                <img src="" alt="" />
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} alt="" />
            </div>
            
        </div>
    )
}
