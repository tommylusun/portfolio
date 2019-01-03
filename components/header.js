import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import styles from './header.module.css'
import Tooltip from '@material-ui/core/Tooltip';



class Header extends Component {

    state = {
        left: false
        }
    socialMedia=['https://google.com','https://instagram.com','https://linkedin.com'];
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
                        <Tooltip title={url} interactive>
                            <SocialIcon url={url}/>
                        </Tooltip>
                    </div>
                    <style jsx>{`
                        .social-icon {
                            transition-duration: 0.5s;
                        }
                        .social-icon:hover {
                            transform: scale(1);
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
                            <a>About</a>
                        </Link>
                        <Link prefetch href="/projects">
                            <a>Projects</a>
                        </Link>
                        <Link prefetch href="/blog">
                            <a>Blog</a>
                        </Link>
                    </div>
                    <div className={styles["social-tab"]}>
                        {socialMedia}
                    </div>
                        
                    
                </SwipeableDrawer>
                <div onClick={this.toggleDrawer}   className={styles["menu-button"]}>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                </div>
            </div>);
        const desktopNav = (<div className={styles['desktop-nav']}>
                <div className={styles['nav-tab']}>
                    <Link prefetch href="/about">
                        <a>About</a>
                    </Link>
                    <Link prefetch href="/projects">
                        <a>Projects</a>
                    </Link>
                    <Link prefetch href="/blog">
                        <a>Blog</a>
                    </Link>
                </div>
                <div className={styles['social-tab']}>
                    {socialMedia}
                </div>
            </div>);
        
        return (
            <div className={styles.header}>
                <div className={styles['header-content']}>
                    {navMenu}
                    <Link prefetch href="/">
                        <a className={styles['header-title']}>Tommy Lusun</a>
                    </Link>
                    {desktopNav}
                </div>
            </div>);
    }
}

export default Header;