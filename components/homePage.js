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
            },
            // easing: [.91,-0.25,.29,1.56]
        });
        document.addEventListener('aos:in:second-card2', ({ detail }) => {
            console.log('animated in', detail);
            let ht = window.innerHeight + 'px';
		    let wt = window.innerWidth + 'px';
            this.setState({firstTrigger: !this.state.firstTrigger});
            if (this.state.firstTrigger){
                anime({
                    targets: '.first-card',
                    translateY: [0,-700],
                    easing: 'easeInOutQuad'
                });
                // anime({
                //     targets: '.background',
                //     scaleY: [0,1],
                // });
            } else {
                anime({
                    targets: '.first-card',
                    translateY: [-700,0],
                    easing: 'easeInOutQuad'
                });
                // anime({
                //     targets: '.background',
                //     scaleY: [1,0],
                //     easing: 'easeInOutQuad'
                // });
            }
        });
        document.addEventListener('aos:in:fourth-card', ({ detail }) => {
            console.log('animated in', detail);
            let ht = window.innerHeight + 'px';
		    let wt = window.innerWidth + 'px';
            this.setState({secondTrigger: !this.state.secondTrigger});
            if (this.state.secondTrigger){
                anime({
                    targets: '.background2',
                    opacity: 1,
                    easing: 'easeInOutQuad'
                });
                // anime({
                //     targets: '.background',
                //     scaleY: [0,1],
                // });
            } else {
                anime({
                    targets: '.background2',
                    opacity: 0,
                    easing: 'easeInOutQuad'
                });
                // anime({
                //     targets: '.background',
                //     scaleY: [1,0],
                //     easing: 'easeInOutQuad'
                // });
            }
        });
        
        
        
        

    }
    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 
    componentWillUnmount() {
        document.removeEventListener('aos:in:second-card2',()=>console.log('removed'));
        // document.removeEventListener('aos:out:second-card',()=>console.log('removed'));
    }

    render() {
        
        return (
        <div className="title-card title">
            <span className="background"></span>
            <span className="background2"></span>
            <div className="full-card first-card" >
                {/* <svg className="welcome" style={{top: '30vh'}} width="428" height="428" viewBox="0 0 128 128">
                        <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"></polygon>
                </svg> */}
                <div id="first-text" className="header-text" >Hi, I'm a developer</div>
                {/* <div className="text">(but not a designer) </div> */}
                <div className="bottom-text"> <span className="down-arrow"></span></div>
            </div>
            <div className="full-card second-card">
                <div data-aos-id="second-card2" className="header-text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">Scroll down..</div>
            </div>

            <div className="full-card third-card">
                <div data-aos-id="third-card" className="header-text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">for a special message</div>
            </div>
            <div className="full-card fourth-card">
                <div data-aos-id="fourth-card" className="header-text"  data-aos-offset="-300" data-aos-anchor-placement="center-center" data-aos-delay="300" data-aos="fade-in">Check out my blog</div>
            </div>
            
        <style jsx>{`
        .background {
            position:fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
        }
        .background2 {
            position:fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
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