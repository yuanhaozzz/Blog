import React, { Component } from 'react';

import Layout from '../components/common/layout'
import Header from '../components/page/index/header'
import Main from '../components/page/index/main'
import Footer from '../components/page/index/footer'

class Home extends Component{
	static async getInitialProps(params) {
        return {
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
			<Layout>
				<Header></Header>
				<Main articleList={ this.props.articleList }></Main>
				<Footer></Footer>
			</Layout>
		);
	}
}

export default Home
