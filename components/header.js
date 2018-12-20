import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';


class Header extends Component {

    socialMedia=['twitter.com','google.com','instagram.com','linkedin.com'];
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

        const socialMedia = this.socialMedia.map( (url) => {
            return (
                <>
                    <div className="social-icon"style={{display: 'inline', padding: '5px'}}>
                        <SocialIcon url={url}/>
                    </div>
                    <style jsx>{`
                        .social-icon {
                            transition-duration: 0.5s;
                        }
                        .social-icon:hover {
                            transform: scale(1.1);
                            transition-duration: 0.1s;
                        }
                    `}</style>
                </>
            );
        });
        
        return (
        <div id="header" className="header">
            <Link prefetch href="/">
                <div className="header-title">Tommy Lusun</div>
            </Link>
            <div className="nav-tab">
                <Link prefetch href="/about">
                    <li>
                        <p>About</p>
                    </li>    
                </Link>
                {/* <Link prefetch href="/contact">
                <li>
                    <p>Contact</p>
                </li>
                </Link> */}
                <Link prefetch href="/projects">
                    <li>
                        <p>Projects</p>
                    </li>
                </Link>
                <Link prefetch href="/blog">
                    <li>
                        <p>Blog</p>
                    </li>
                </Link>
            </div>
            <div className="social-tab">
                {socialMedia}
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
            color: #454545;
        }
        .header-title {
            font-size: 2rem;
            width: 20%;
            cursor: pointer;
        }
        li {
            list-style: none;
            width: 100px;
            cursor: pointer;
        }
        p {
            font-size: 1.2em;
            border-bottom: 1px solid rgba(0,0,0,0);
        }
        li:hover {
            color: gray;
            border-bottom: 1px solid gray;
        }
        .nav-tab{
            width: 40%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
        }
        .social-tab {
            width: 20%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
      `}</style>

      </div>
        );

    }
}

export default Header;