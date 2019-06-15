
import {Component} from 'react'

import Head from 'next/head'

import { globalStyle } from '../../assets/css/reset'
export default class extends Component {
    
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
              FastClick.attach(document.body);
            }, false);
          }
          if(!window.Promise) {
            document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
          }
    }

    render () {
        return (
            <div>
                <style jsx={true} global={true}>{globalStyle}</style>
                <Head>
                    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
                    {/* 微信SDK */}
                    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
                    <title>茄子也会笑-个人博客</title>
                </Head>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}