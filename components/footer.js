import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';


class Footer extends Component {

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
        
        return (
        <div id="header" className="footer">
            <div>
                <a>tommy.lusun@gmail.com</a>
            </div>
            
        <style jsx>{`
        .footer {
            width: 100% ;
            height: 80px;
            background: #151515;
            color: #ECF0F1F0;
            z-index: 9999;
            display: flex;
            // justify-content: center;
            align-items: center;
        }
        a {
            padding-left: 50px;
        }
      `}</style>

      </div>
        );

    }
}

export default Footer;