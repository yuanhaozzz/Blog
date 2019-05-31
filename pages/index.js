import React from 'react';

import Layout from '../components/common/layout'
import Header from '../components/page/index/header'
import Main from '../components/page/index/main'
import Footer from '../components/page/index/footer'

function Home(props) {
	const { classes } = props;

	return (
		<Layout>
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</Layout>
	);
}

export default Home
