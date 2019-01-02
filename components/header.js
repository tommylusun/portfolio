import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';


class Header extends Component {

    state = {
        left: false
        }
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
    toggleDrawer = () =>  {
        this.setState({left: !this.state.left});
    }

    render() {

        if (typeof window !== 'undefined' && window.innerWidth < 780){
            const socialMedia = this.socialMedia.map( (url) => {
                return (
                    <>
                        <div className="social-icon">
                            <SocialIcon url={url}/>
                        </div>
                        <style jsx>{`
                            .social-icon {
                                padding: 5px;
                                transition-duration: 0.5s;
                            }
                            .social-icon:active {
                                transform: scale(1.1);
                                transition-duration: 0.1s;
                            }
                        `}</style>
                    </>
                );
            });
            return (
            <div id="header" className="header">
                <div className="header-content">
                    <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer}
                    onOpen={this.toggleDrawer}
                    >
                        <div className="drawer-list" onClick={this.toggleDrawer}
                            onKeyDown={this.toggleDrawer}>
                            <Link prefetch href="/about">
                                <li>
                                    <p>About</p>
                                </li>    
                            </Link>
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
                            <div className="social-icons">
                                {socialMedia}
                            </div>
                            
                        </div>
                    </SwipeableDrawer>
                    <div onClick={this.toggleDrawer}   className="menu-button">
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon fontSizeLarge/>
                        </IconButton>
                    </div>
                    
                    <Link prefetch href="/">
                        <div className="header-title">Tommy Lusun</div>
                    </Link>
                </div>
            <style jsx>{`
                .menu-button{
                    position: absolute;
                    width: 150px;
                    left: 15px;
                }
                .header {
                    position: fixed;
                    top: 0px;
                    width: 100%;
                    height: 80px;
                    background: #00000080;
                    z-index: 1;
                    color: #B5B5B5;
                }
                .header-content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }
                .header-title {
                    font-size: 3rem;
                    text-align: center;
                    cursor: pointer;
                    transition-duration: 0.8s;
                }
                .drawer-list {
                    margin-top: 50px;
                }
                li {
                    list-style: none;
                    width: 150px;
                    height: 95%;
                    cursor: pointer;
                    transition-duration: 0.8s;
                    border-bottom: 1px solid rgba(0,0,0,1);
                    margin: 15px;
                }
                p {
                    font-size: 1.2em;
                }
                .social-icons {
                    display: flex;
                    flex-wrap: wrap;
                    width: 170px;
                    padding: 10px;
                }
            `}</style>

      </div>
        );

        } else {
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
                <div className="header-content">
                    <Link prefetch href="/">
                        <div className="header-title">Tommy Lusun</div>
                    </Link>
                    <div className="nav-tab">
                        <Link prefetch href="/about">
                            <li>
                                <p>About</p>
                            </li>    
                        </Link>
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
                </div>
            <style jsx>{`
            .header {
                position: fixed;
                top: 0px;
                width: 100%;
                height: 80px;
                background: #00000080;
                
                z-index: 9999;
                
                color: #B5B5B5;
            }
            @media (max-width: 780) {
    
            }
            .header-content {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            .header-title {
                font-size: 2rem;
                width: 20%;
                cursor: pointer;
                transition-duration: 0.8s;
    
            }
            .header-title:hover {
                color: rgba(255,255,255,1);
                transition-duration: 0.4s;
    
            }
            li {
                list-style: none;
                width: 100px;
                height: 95%;
                cursor: pointer;
                transition-duration: 0.8s;
                border-bottom: 1px solid rgba(0,0,0,0);
            }
            p {
                font-size: 1.2em;
            }
            li:hover {
                color: rgba(255,255,255,1);
                border-bottom: 1px solid rgba(255,255,255,1);
                transition-duration: 0.4s;
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
}

export default Header;