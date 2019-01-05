import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
class HomePage extends Component {

    state= {
        firstTrigger: false,
        secondTrigger: false
    };
    componentDidMount() {
        const isBrowser = typeof window !== 'undefined';
        const AOS = isBrowser ? require('aos') : undefined;
        

        this.aos = AOS;
        this.aos.init({
            duration: 500,
            anchorPlacement: 'bottom-top'
        });
        anime({
            targets: '#first-text',
            delay: 300,
            translateY: {
                value: [-500, 0]
            }
            // easing: [.91,-0.25,.29,1.56]
        });
    }
    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 
    componentWillUnmount() {
    }

    render() {
        
        return (
        <div className="title-card title">
            <span className="background"></span>
            {/* <span data-aos-duration="1000" data-aos-delay="100" data-aos="new-animation2" data-aos-anchor=".fourth-card" className="background2"></span> */}
            <div data-aos-id="second-card2" 
                className="header-text" 
                data-aos-offset="150" 
                data-aos-delay="100" 
                data-aos-anchor-placement="top-top" 
                data-aos-duration="1000"  
                data-aos="new-animation" 
                className="full-card first-card" >
                
                <div id="first-text" className="header-text" >Hi, I'm a developer</div>
                {/* <div className="text">(but not a designer) </div> */}
                <div className="bottom-text"> <span className="down-arrow"></span></div>
            </div>
            <div className="full-card second-card">
                <div id="second-text" data-aos-id="second-card2" className="header-text text2" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">Scroll down..</div>
            </div>

            <div className="full-card third-card">
                <div data-aos-id="third-card" className="header-text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">for a special message</div>
            </div>
            <div className="full-card fourth-card">
                <div data-aos-id="fourth-card" className="header-text"  data-aos-offset="-300" data-aos-anchor-placement="center-center" data-aos-delay="300" data-aos="fade-in">
                Check out my <a href="/projects">projects</a>
                </div>
            </div>
            
        <style jsx>{`
        [data-aos="new-animation"] {
            transform: translateY(0px);
            transition-property: transform, opacity;
            }
        [data-aos="new-animation"].aos-animate {
            transform: translateY(-100vh);
        }
        .background {
            position:fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
        }
        .full-card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 101vh;
            color: #353535;
            flex-flow: column;
            margin: -2px;
            overflow: hidden;
            /* padding-top:45vh; */
        }
        .header-text {
            font-size: 4em;
            font-weight: 500;
            //width: 100%;
            //padding: 15px;
            color: #DDDDDD;
            margin: auto;
            //background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
        }
        text {
            margin: auto;
            font-size: 1em;
        }
        .title-card {
            text-align: center;
            //  transform: translateY(-550px);
        }
        .first-card {
            background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
        }
        .second-card {
            //background: #BE90D4;
            height: 20vh;
        }
        .third-card {
            //background: linear-gradient(180deg, #BE90D4 0%, #BE90D4 35%, #1F4788 100%);
            height: 100vh;
        }
        .fourth-card {
            //background: linear-gradient(180deg, #1F4788 0%, #1F4788 35%, #264348 100%);
            color: white;
            height: 80vh;
        }
        .fourth-card a{
            display: inline-block;
            border: 3px solid black;
            padding-bottom: 10px;
            text-decoration: none;
            color: #DDDDDD;
            transition-duration: 0.5s;
        }
        
        .fourth-card a:hover{
            transform: scale(1.05);
            transition-duration: 0.5s;
            box-shadow: 0px 20px 45px -9px rgba(0,0,0,0.4);
        }
        .fourth-card a::before{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
            transition: 0.5s;
            opacity: 0;
            z-index: -1;
        }
        .fourth-card a:hover::before{
            opacity: 1;
        }
        .bottom-text {
            padding: 30px;
            text-align: center;
        }
        .down-arrow {
            border: solid black;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 15px;
            transform: rotate(45deg);
        }
      `}</style>

      </div>
        );

    }
}

export default HomePage;