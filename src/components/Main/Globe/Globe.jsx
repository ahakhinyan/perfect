import React, { Component } from 'react';
import s from './Globe.module.css'
import Lottie from 'react-lottie';
import animationData from './../../../img/Globe.json'


class Globe extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <div className={s.conta}>
               <Lottie
                options={defaultOptions}
                className={s.animation}
               />
            </div>
        )
    };  
}

export default Globe;
