import React, { useState, useEffect } from 'react'
import { get, post } from 'utils/request'
import { getTime } from 'utils/time'
import './index.less'
import { Cell, DateSelect, DatePickerView, DatePicker } from 'zarm';
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import Six from './Six'
import popImg from '@/assets/pop-content.png'

export default function index() {
    let dom, startY, endY
    const [currentIndex, setCurrentIndex] = useState(1)
    const [popShow, setPopShow] = useState(false)
    const [visible, setVisible] = useState(false)
    const [time, setTime] = useState('')


    useEffect(() => {
        dom = document.querySelector('.current')
    }, [currentIndex])
    useEffect(() => {
        // let token = getQuery('token') || window.localStorage.getItem('token')
        // post('/user/token-login', { token }).then(res => {
        //   window.localStorage.setItem('token', res.data.token)
        //   window.localStorage.setItem('uid', JSON.stringify(res.data.uid))
        // })
        const url = window.encodeURI(window.location.href);
        get(
            `/weixin/ydcj-wx-config?url=${url}`
        ).then(res => {

            wx.config({
                debug: false,
                appId: 'wx569951161804e340',
                timestamp: res.data.timestamp,
                nonceStr: res.data.noncestr,
                signature: res.data.signature,
                jsApiList: [
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                ]
            });
            wx.ready(function () {
                wx.updateAppMessageShareData({
                    title: '大咖饭局-邀请函', // 分享标题
                    desc: '品珍馐美味 聊百业思潮', // 分享描述
                    link: `https://h5.fuzhouxiaoyu.com/dakafanju/index.html?sid=${window.localStorage.getItem('sid')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://h5.fuzhouxiaoyu.com/dakafanju/img.png',
                    success: function (res) {
                        // 设置成功
                        console.log(res);
                    },
                    cancel: function (res) {
                        console.log(res);
                    }
                })
                wx.updateTimelineShareData({
                    title: '大咖饭局', // 分享标题
                    link: `https://h5.fuzhouxiaoyu.com/dakafanju/index.html?sid=${window.localStorage.getItem('sid')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://h5.fuzhouxiaoyu.com/dakafanju/img.png',
                    success: function (res) {
                        // 设置成功
                        console.log(res);
                    },
                    cancel: function (res) {
                        console.log(res);
                    }
                })
                // wx.onMenuShareTimeline({
                //     title: '大咖饭局', // 分享标题
                //     link: `https://h5.fuzhouxiaoyu.com/dakafanju/index.html?sid=${window.localStorage.getItem('sid')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                //     imgUrl: 'https://h5.fuzhouxiaoyu.com/dakafanju/img.png', // 分享图标
                //     success: function () {
                //         // 用户点击了分享后执行的回调函数
                //     }
                // })
                // wx.onMenuShareAppMessage({
                //     title: '大咖饭局', // 分享标题
                //     desc: '', // 分享描述
                //     link: `https://h5.fuzhouxiaoyu.com/dakafanju/index.html?sid=${window.localStorage.getItem('sid')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                //     imgUrl: 'https://h5.fuzhouxiaoyu.com/dakafanju/img.png', // 分享图标
                //     type: '', // 分享类型,music、video或link，不填默认为link
                //     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                //     success: function () {
                //         // 用户点击了分享后执行的回调函数
                //     }
                // });
            });

        })
    }, [])

    const handleTouchStart = (e) => {
        startY = e.targetTouches[0].pageY
    }

    const handleTouchMove = (e) => {
        if (!dom) return
        endY = e.targetTouches[0].pageY
        // console.log(currentIndex);
        // console.log(startY - endY);
        if ((startY - endY) > 100 && currentIndex < 6) {

            dom.style.transform = `translateY(-${startY - endY}px)`;
        } else if ((startY - endY) < 100 && currentIndex !== 1) {
            dom.style.transform = `translateY(${endY - startY}px)`;
        } else {
            dom.style.transform = `translateY(0)`;
        }
    }

    const handleTouchEnd = (e) => {
        if (!dom) return

        dom.style.transition = `transform 0.8s ease`
        if ((startY - endY) > 100 && currentIndex < 6) {
            dom.style.transform = `translateY(-1000px)`;
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1)
                dom.style.transform = `translateY(0)`
                dom.style.transition = ``
            }, 500)

        } else if ((startY - endY) < 100 && currentIndex !== 1) {
            dom.style.transform = `translateY(1000px)`;
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1)
                dom.style.transform = `translateY(0)`
                dom.style.transition = ``
            }, 500)
        } else {
            dom.style.transform = `translateY(0)`;
        }
    }

    return (
        <div className="content" >
            <div className="content-box" onTouchStart={(e) => handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)} onTouchEnd={handleTouchEnd}>
                <section className={`part part1 ${currentIndex == 1 ? 'current' : ''}`} >
                    <One currentIndex={currentIndex} />
                </section>
                <section className={`part part2 ${currentIndex == 2 ? 'current' : ''}`} >
                    <Two currentIndex={currentIndex} />
                </section>
                <section className={`part part3 ${currentIndex == 3 ? 'current' : ''}`} >
                    <Three currentIndex={currentIndex} />
                </section>
                <section className={`part part4 ${currentIndex == 4 ? 'current' : ''}`} >
                    <Four currentIndex={currentIndex} />
                </section>
                <section className={`part part5 ${currentIndex == 5 ? 'current' : ''}`} >
                    <Five currentIndex={currentIndex} setVisible={setVisible} time={time} setCurrentIndex={setCurrentIndex} />
                </section>
                <section className={`part part6 ${currentIndex == 6 ? 'current' : ''}`} >
                    <Six currentIndex={currentIndex} setPopShow={setPopShow} />
                </section>

            </div>
            {/* 弹窗 */}
            <div className="pop" style={{ display: popShow ? 'flex' : 'none' }}>
                <div className="pop-main" >
                    <img src={popImg} alt="" />
                </div>
                <button onClick={() => setPopShow(false)}></button>
            </div>
            <DatePicker
                visible={visible}
                mode="date"
                value={time}
                onOk={(value) => {
                    const fmtTime = getTime("yyyy-MM-dd", value)
                    console.log(fmtTime);
                    setTime(fmtTime)
                    setVisible(false)
                }}
                onCancel={() => setVisible(false)}
            />

        </div>
    )
}
