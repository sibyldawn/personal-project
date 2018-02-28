import React, { Component } from 'react';

import './Home.css';

import Header from '../Header/Header.js';
import Featured from '../Featured/Featured';

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Header /> 
                <div className="title-content-container">
                    <video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="" width="300" height="150">
                        <source src="//cdn.shopify.com/s/files/1/0134/5202/t/27/assets/bg.mp4?17739639483927447076" type="video/mp4" />
                    </video>    
                    <h1 className="title-content-text">GENERIC SHOP TITLE</h1>
                    <span />
                    <h4 className="title-content-text">"Leading innovator in E-Commerce" -Prestige World Wide</h4>
                    <span />
                    <div>
                        <button className="shop-button">SHOP NOW</button>
                    </div>    
                </div>
                <Featured />
            </div>
        );
    }
}