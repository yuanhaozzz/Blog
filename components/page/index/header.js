import React, { Component } from 'react'

function RenderNavList ({list}) {
    return (
        list.map(item => {
            return (
                <li key={ item.name }><strong>{ item.name }</strong></li>
            )
        })
    )
}

class Header extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isShowNav: false,
            navList: [
                {
                    name: 'Home'
                },
                {
                    name: 'About'
                }
            ]
        }
    }

    handleMore = e => {
        this.setState({
            isShowNav: !this.state.isShowNav
        })
    }

    render () {

        let showNavList = 'nav-list'

        if (this.state.isShowNav) {
            showNavList = 'nav-list show'
        }

        return (
            <header className="header-container">
                <nav>
                    <h1 className="header-author">茄子也会笑的博客</h1>
                    <div className="nav-menu-box">
                        <ul className="nav-menu">
                            <RenderNavList list={ this.state.navList }></RenderNavList>
                        </ul>
                    </div>
                    <div className="nav-button-box">
                        <button className="nav-more" onClick={ this.handleMore }>
                            <p></p>
                            <p></p>
                            <p></p>
                        </button>
                        <ul className={ showNavList } >
                            <RenderNavList list={ this.state.navList }></RenderNavList>
                        </ul>
                    </div>
                </nav>
               <section className="header-content">
                    <h2 className="header-title">一起成长，共同进步</h2>
                    <p className="header-sub-title">相信自己，你可以的！</p>
               </section>
               {/* 样式 */}
                <style jsx global>{`
                @media screen and (max-width: 768px){
                    .nav-button-box {
                        display: block!important;
                    }
                    .nav-menu-box {
                        display: none!important;
                    }
                    .header-title {
                        font-size: 30px !important;
                    }
                    .header-sub-title {
                        font-size: 20px !important;
                    }
                    .header-author{
                        font-size: 16px!important;
                    }
                }
                    .header-container{
                        width: 100%;
                        height: 250px;
                        background: url(/static/img/index/header.jpg) no-repeat;
                        background-position: center;
                        background-size: cover;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    nav{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #fff;
                    }
                    nav ul {
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .nav-menu li{
                        margin-left: 20px;
                        font-size: 18px;
                        cursor: pointer
                    }
                    nav ul li:hover {
                        color: rgba(255,255,255,.8);
                    }
                    .header-title, .header-sub-title{
                        text-align: center;
                        color: #fff;
                        font-size: 54px;
                    }
                    .header-sub-title{
                        text-align: center;
                        color: #fff;
                        font-size: 24px;
                    }
                    .nav-button-box{
                        display: none;
                        position: relative;
                    }
                    .nav-menu-box{
                        
                    }
                    .nav-more{
                        display: flex;
                        flex-direction: column;
                        border: none;
                        outline: none;
                        background-color:rgba(0, 0, 0, 0);
                        cursor: pointer;
                    }
                    .nav-more:active {
                        background-color: rgba(255,255,255,.25) !important;
                    }
                    .nav-more p{
                        width: 20px;
                        height:3px;
                        background-color: #fff;
                        margin: 2px;
                    }
                    .header-content{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 70%;
                        flex-direction: column;
                    }
                    .nav-list{
                        position: absolute;
                        top: 10px;
                        right: -5px;
                        background-color: #fff;
                        display: flex;
                        flex-direction: column;
                        padding: 10px 15px;
                        color: #333;
                        opacity: 0;
                        transition: 0.5s all;
                    }
                    .nav-list li{
                        height: 40px;
                        line-height: 40px;
                        width: 130px;
                        border-bottom: 1px solid #eee;
                        cursor: pointer;
                    }
                    .nav-list li:nth-last-child(1){
                        border: none;
                    }
                    .nav-list li:hover{
                        color: #777;
                    }
                    .show{
                        transition: 0.5s all;
                        opacity: 1;
                    }
                `}</style>
            </header>
        )
    }
}

export default Header