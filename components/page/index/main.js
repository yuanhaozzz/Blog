import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ImportImage from '../../../components/common/importImage'

import compose from '../../../components/common/compose';

import { format } from '../../../utils/common'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	container: {
		display: 'flex',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		flex: '1 0 auto',
		margin: theme.spacing(1),
		fontSize: '26px;'
	},
});
/**
 * 
 * @param {*} articleList   文章列表
 */
function ArticleList ({articleList}) {
    return (
        articleList.map((item, index) => {
            return (
                <article className="main-article-list-item" key={ index }>
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
        this.state = {
            articleList: [
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289474639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 15592894124639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
                {
                    title: '面试官问：能否模拟实现JS的bind方法',
                    description: '面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法面试官问：能否模拟实现JS的bind方法',
                    date: 1559289454639
                },
            ]
        }
    }

    render () {
        return (
            <main className="main">
                {/* 栅格布局响应式 */}
                <Grid container justify="center" spacing={5}>
                    <Grid container item xs={12} sm={8} md={6} lg={5} xl={5}>
                        <section className="main-article-list">
                            {/* 文章列表 */}
                            <ArticleList articleList={ this.state.articleList }></ArticleList>
                        </section>
                    </Grid>
                    <Hidden only={['xs', 'sm']}>
                        <Grid item xs={12} sm={12} md={2} gl={2} xl={2}>
                            {/* 侧边栏 */}
                            <Aside></Aside>
                        </Grid>
                    </Hidden>
                    
                </Grid>
				
                <style jsx>{`
                    .main{
                    }
                    .main-article-list{
                        {/* width */}
                    }
                `}</style>
            </main>
        )
    }
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
};


export default compose(
	withStyles(styles),
	withWidth(),
)(Main);