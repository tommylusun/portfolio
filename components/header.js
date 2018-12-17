import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Link from 'next/link'

class Header extends Component {

    componentDidMount() {
        const isBrowser = typeof window !== 'undefined';
        const AOS = isBrowser ? require('aos') : undefined;

        this.aos = AOS;
        this.aos.init({
            duration: 500,
            anchorPlacement: 'bottom-top'
        });
    }
    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 

    render() {
        
        return (
        <div id="header" className="header">
            <Link href="/">
                <div className="header-title">Tommy Lusun</div>
            </Link>
            <div className="nav-tab">
                    <li>
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <p>Blog</p>
                        </Link>
                    </li>
            </div>
        <style jsx>{`
        .header {
            position: fixed;
            top: 0px;
            width: 100% ;
            padding-left: 10%;
            padding-right: 10%;
            height: 80px;
            background: #ECF0F1F0;
            z-index: 9999;
            display: flex;
            // justify-content: center;
            align-items: center;
        }
        .header-title {
            font-size: 2rem;
            cursor: pointer;
        }
        li {
            list-style: none;
            width: 100px;
            cursor: pointer;
        }
        p {
            font-size: 20px;
        }
        li:hover {
            color: gray;
        }
        .nav-tab{
            width: 50%;
            display: flex;
            flex-direction: row;
            text-align: center;
            margin-left: 50px;
        }
      `}</style>

      </div>
        );

    }
}

export default Header;