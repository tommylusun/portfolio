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
        window.addEventListener('aos:in', ({ detail }) => {
            console.log('animated in', detail);
        });

        // window.onscroll = function() {
        //     if (window.pageYOffset >= 1) {
        //         header.classList.add("sticky");
        //       } else {
        //         header.classList.remove("sticky");
        //       }
        // };
        // var header = document.getElementById("header");
        // var sticky = header.offsetTop;

        console.log(window);
    }
    myFunction() {
        
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
                            <h3>About</h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <h3>Contact</h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <h3>Projects</h3>
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