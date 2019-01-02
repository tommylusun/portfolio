import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from './header.module.css'


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
        const navMenu = (
            <div className={styles['mobile-nav']}>
                <SwipeableDrawer
                open={this.state.left}
                onClose={this.toggleDrawer}
                onOpen={this.toggleDrawer}
                >
                    <div className={styles["drawer-list"]} onClick={this.toggleDrawer}
                        onKeyDown={this.toggleDrawer}>
                        <Link prefetch href="/about">
                            <li>
                                <label>About</label>
                            </li>    
                        </Link>
                        <Link prefetch href="/projects">
                            <li>
                                <label>Projects</label>
                            </li>
                        </Link>
                        <Link prefetch href="/blog">
                            <li>
                                <label>Blog</label>
                            </li>
                        </Link>
                        <div className={styles["social-tab"]}>
                            {socialMedia}
                        </div>
                        
                    </div>
                </SwipeableDrawer>
                <div onClick={this.toggleDrawer}   className={styles["menu-button"]}>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                </div>
            </div>);
        
            
        return (
            <div className={styles.header}>
                <div className={styles['header-content']}>
                    {navMenu}
                    <Link prefetch href="/">
                        <div className={styles['header-title']}>Tommy Lusun</div>
                    </Link>
                    <div className={styles['desktop-nav']}>
                        <div className={styles['nav-tab']}>
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
                        <div className={styles['social-tab']}>
                            {socialMedia}
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Header;