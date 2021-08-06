import React, { useState,useEffect } from 'react'
import { post } from 'utils/request'
import { getTime } from 'utils/time'

import { Cell, DateSelect, DatePickerView, DatePicker } from 'zarm';
import './index.less'

import top from '@/assets/top.png'

import title from '@/assets/five-title.png'

import note from '@/assets/two/note.png'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
import btn from '@/assets/btn.png'

const initialState = {
    salesmanId: window.localStorage.getItem('sid') || 0,
    name: '',
    phone: '',
    time: '',
    title: '',
    salesman: ''
}

export default function Five(props) {
    const index = 5
    const current = props.currentIndex
    const show = (current == index)

    const [form, setForm] = useState(initialState)
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('');

    useEffect(()=>{
        setForm({ ...form, time: props.time })
    },[props.time])
    //    提交报名信息
    const handleSubmit = () => {
        console.log(form);
        
        if(!form.name) return alert("请填写姓名")
        if(!form.time) return alert("请填写用餐时间")
        if(!form.salesman) return alert("请填写毛铺业务负责人")
        if(!form.title) return alert("请填写职务")
        if (!(/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(form.phone))) return alert("请填写正确的电话号码")
        post('/dakafanju/register', form).then(res => {
            if (!res.success) return alert(res.msg)
            confirm('提交成功')
            props.setCurrentIndex(6)
        })
    }

    const handleChange = (e, flag) => {
        setForm({ ...form, [flag]: e.target.value })
    }
    



    return (
        <div className={`${show ? "page-box__five" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className="form">
                <div className="top">
                    <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={title} alt="" />
                    <div className={`right animated ${show ? "slideInRight slow" : ''}`}>
                        <input type="text" value={form.name} onChange={(e) => handleChange(e, 'name')} placeholder="客户姓名" />
                        <input type="text" value={form.phone} onChange={(e) => handleChange(e, 'phone')} placeholder="客户电话" />
                        <input type="text" value={form.title} onChange={(e) => handleChange(e, 'title')} placeholder="所属公司名称-职务" />
                        {/* <input type="text" onClick={() =>setVisible(true)} value={form.time} onChange={(e) => handleChange(e, 'time')} placeholder="用餐时间" /> */}


                    </div>
                </div>
                <div className={`bottom animated ${show ? "slideInRight slow" : ''}`}>
                    {/* <div className="time">
                        <span>用餐时间</span>
                        <input type="date" value={form.time} onChange={(e) => handleChange(e, 'time')} placeholder="用餐时间" />
                    </div> */}
                    <Cell title="用餐时间" id="open-btn" onClick={() => props.setVisible(true)}>
                        <div>{form.time?form.time:"点击选择用餐时间"}</div>
                        {/* <DateSelect
                            visible={visible}
                            className="test-dateSelect"
                            title="用餐时间"
                            placeholder="请选择日期"
                            mode="date"
                            value={form.time}
                            onOk={(value) => {
                                console.log('DateSelect onOk: ', value);
                                handleChange(getTime("yyyy-MM-dd",value), 'time')
                                console.log(visible);
                            }}
                        /> */}
                        {/* <DatePicker
                            visible={visible}
                            mode="date"
                            value={form.time}
                            onOk={(value) => {
                                console.log(value);
                                setValue('date', value);

                            }}
                            onCancel={() => toggle('date')}
                        /> */}
                    </Cell>

                    <input type="text" value={form.salesman} onChange={(e) => handleChange(e, 'salesman')} placeholder="毛铺业务负责人" />
                </div>
            </div>
            <div className="cook">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} alt="" />
            </div>
            <div className="btn" onClick={handleSubmit}>
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={btn} alt="" />
            </div>
            <div className="footer">
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} alt="" />
            </div>
        </div>
    )
}
