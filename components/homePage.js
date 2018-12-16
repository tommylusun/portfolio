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
            duration: 1000,
            targets: 'polygon',
            points: '64 64 0 100 64 64 64 0 64 64 120 100'
        });
        console.log(window);
    }
    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 

    render() {
        
        return (
        <div className="title-card title">
            <div className="full-card first-card" >
            <svg className="welcome" style={{top: '30vh'}} width="428" height="428" viewBox="0 0 128 128">
                    <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"></polygon>
            </svg>
            <div className="text" >Welcome</div>


            </div>
            <div className="full-card second-card">
                <div className="text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">Scroll down..</div>
            </div>

            <div className="full-card third-card">
                <div className="text" data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-left">for a special message</div>
            </div>

            <div className="full-card fourth-card">
                
                <div className="text" data-aos-id="super-duper" data-aos-offset="-200" data-aos-anchor-placement="center-center" data-aos-delay="500" data-aos="fade-in">Hi</div>
            </div>
            

        <style jsx>{`
        .welcome {
            position: absolute;
            top: 50vh;
        }
        .title-card {
            text-align: center;
        }
        .first-card {
            background: linear-gradient(180deg, #d87093 0%, #d87093 35%, #7d348f 100%);
        }
        .second-card {
            background: #7d348f;
            height: 35vh;
        }
        .third-card {
            background: linear-gradient(180deg, #7d348f 0%, #7d348f 35%, #2417d3 100%);
        }
        .fourth-card {
            background: linear-gradient(180deg, #2417d3 0%, #2417d3 35%, #080441 100%);
            color: white;
            position: relative;
        }
      `}</style>

      </div>
        );

    }
}

export default HomePage;