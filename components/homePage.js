import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';

class HomePage extends Component {

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
        anime({
            delay: 500,
            duration: 750,
            targets: 'polygon',
            points: '64 64 0 100 64 64 64 0 64 64 120 100',
            easing: [.91,-0.25,.29,1.56]
        });
    }
    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 

    render() {
        
        return (
        <div className="title-card title">
            <div className="full-card first-card" >
                {/* <svg className="welcome" style={{top: '30vh'}} width="428" height="428" viewBox="0 0 128 128">
                        <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"></polygon>
                </svg> */}
                <div className="header-text" >Hi, I'm a developer</div>
                {/* <div className="text">(but not a designer) </div> */}
                <div className="bottom-text"> <span className="down-arrow"></span></div>
            </div>
            <div className="full-card second-card">
                <div className="header-text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">Scroll down..</div>
            </div>

            <div className="full-card third-card">
                <div className="header-text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">for a special message</div>
            </div>

            <div className="full-card fourth-card">
                <div className="header-text" data-aos-id="super-duper" data-aos-offset="-300" data-aos-anchor-placement="center-center" data-aos-delay="500" data-aos="fade-in">Hi</div>
            </div>
            
        <style jsx>{`
        .header-text {
            font-size: 5em;
            width: 100%;
            margin: auto;
        }
        text {
            margin: auto;
            font-size: 1em;
        }
        .title-card {
            text-align: center;
        }
        .first-card {
            background: linear-gradient(180deg, #FFB3A7 0%, #FFB3A7 35%, #BE90D4 100%);
        }
        .second-card {
            background: #BE90D4;
            height: 50vh;
        }
        .third-card {
            background: linear-gradient(180deg, #BE90D4 0%, #BE90D4 35%, #1F4788 100%);
        }
        .fourth-card {
            background: linear-gradient(180deg, #1F4788 0%, #1F4788 35%, #264348 100%);
            color: white;
            height: 100vh;
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