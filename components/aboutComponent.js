import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import Prismic from 'prismic-javascript';
import {Helmet} from "react-helmet";


class AboutComponent extends Component {

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
            <div className="about-container">
                <Helmet>
                    <title>Software Developer Resume and Life Story - Tommy Lusun</title>
                    <meta name="description" content="" />
                </Helmet>
                <div className="about-title">
                    <div className="head">
                    </div>
                    <div data-aos-delay="100" data-aos-anchor-placement="middle-bottom" data-aos="fade-in" className="about-header">
                        <p style={{fontSize: '2em'}}>About</p>
                    </div>
                </div>
                <div data-aos-delay="500" data-aos-anchor-placement="middle-bottom" data-aos="fade-in" className="about-header">
                        <h2>Coming Soon</h2>
                </div>
                <style jsx>{`
                    .head {
                        height: 80px;
                        width: 100%;
                    }
                    .about-container {
                        min-height: 100vh;
                        // background: linear-gradient(180deg, #FFB3A7 0%, #BE90D4 35%, #BE90D4 100%);
                    }
                    .about-title {
                        // background-image: linear-gradient(-205deg, #6a11cb 0%, #5f72bd 100%);
                        background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
                        color: #ECF0F1F0;
                        font-size: 2rem;
                    }
                    .about-header{
                        width: 80%;
                        padding-left: 25px;
                        padding-bottom: 20px;
                        text-align: center;
                        margin: auto;
                    }
                `}</style>
            </div>
        );
          
    }
}

export default AboutComponent;