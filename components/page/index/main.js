import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import ImportImage from '../../../components/common/importImage'

import { format } from '../../../utils/common'
/**
 * 
 * @param {*} articleList   文章列表
 */
function ArticleList (props) {
    console.log(props)
    return (
        props.articleList.map((item, index) => {
            return (
                <article className="main-article-list-item" key={ index } onClick={() => props.clickArticle()}>
                    <h2>{ item.title }</h2>
                    <p>{ item.description }</p>
                    <span>发布于：{ format(item.date, 'yyyy-MM-dd') }</span>
                    <style jsx>{`
                        @media only screen and (max-width: 768px) {
                            .main-article-list-item h2{
                                margin-bottom: 5px !important;
                            }
                            .main-article-list-item p{
                                margin-bottom: 10px !important;
                            }
                        }
                        
                        .main-article-list-item:nth-last-child(1){
                            border: none;
                        }
                        .main-article-list-item{
                            padding: 10px; 0;
                            border-bottom: 1px solid #eee;
                        }
                        .main-article-list-item:hover{
                            color: red !important;
                            cursor: pointer;
                        }
                        .main-article-list-item h2{
                            margin-bottom: 20px;
                        }
                        .main-article-list-item p{
                            color: #666;
                            font-size: 16px;
                            margin-bottom: 20px;
                            display: -webkit-box;
                            word-break: break-all;
                            text-overflow:ellipsis;
                            overflow: hidden;
                            white-space: pre-line;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp:2;
                        }
                        .main-article-list-item span{
                            font-size: 18px;
                            color: #999;
                        }
                    `}</style>
                </article>
            )
        })
    )
}

function Aside(props) {
    return (
        <aside className="aside">
            <ul className="aside-list">
                <li className="aside-list-item">
                    <h4>本站访问量：123123</h4>
                    <h4>文章访问总量：123123</h4>
                </li>
                <li className="aside-list-item">
                    <h4>关注我</h4>
                    <ImportImage path="code.jpg"></ImportImage>
                    <p style={{'color': '#888'}}>每周至少更新一篇文章，小伙伴们可以关注下，一起进步，有惊喜、福利呦！</p>
                </li>
            </ul>
            <style jsx global>{`
                .aside{
                    padding: 10px 10px;
                    background-color: #fff;
                    margin-left: 20px;
                }
                .aside img{
                    width: 150px;
                    margin: 0 auto;
                }
                .aside-list-item{
                    border-bottom: 1px solid #eee;
                }
            `}</style>
        </aside>
    )
}

class Main extends Component {
    constructor (props) {
        super(props)
    }

    clickArticle = e => {
         //页面向小程序发送消息
        //  wx.miniProgram.navigateTo({url: '/pages/logs/logs'})
        // wx.miniProgram.postMessage({ data:{foo: 'bar'} })
        wx.miniProgram.postMessage({ data: {foo: 'bar'} })
    }

    render () {
        return (
            <main className="main">
                {/* 栅格布局响应式 */}
                <Grid container justify="center">
                    <Grid container item xs={12} sm={8} md={6}>
                        <section className="main-article-list">
                            {/* 文章列表 */}
                            <ArticleList clickArticle={this.clickArticle} articleList={ this.props.articleList }></ArticleList>
                        </section>
                    </Grid>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item xs={12} sm={12} md={2}>
                            {/* 侧边栏 */}
                            <Aside></Aside>
                        </Grid>
                    </Hidden>
                </Grid>
                <style jsx>{`
                    .main{
                        padding: 10px 0;
                        background-color: #f6f6f6;
                        border-bottom: 1px solid #eaecef;
                    }
                    .main-article-list{
                        background-color: #fff;
                        {/* width */}
                    }
                `}</style>
                <style jsx global>{`
                    .MuiGrid-spacing-xs-5 > .MuiGrid-item{
                        
                    }
                `}</style>
            </main>
        )
    }
}
export default Main