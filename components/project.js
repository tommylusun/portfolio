import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';
import styles from './project.module.css';


class Project extends Component {
    state = {
        doc: null,
    }

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
        let document = this.props.document;
        return (
            <div className={styles.projectContainer}>
                <div className={styles.content}>

                
                    <div data-aos-offset="100" data-aos-anchor-placement="top-bottom" data-aos="fade-in">
                    <label style={{fontSize: '3em'}}>{RichText.asText(document.project_name)}</label>
                    </div>

                    <div>
                        <div>
                            <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                        </div>
                        <div style={{fontSize: '1.25em'}}>
                            {RichText.asText(document.description)}
                        </div>
                        <div className={styles.date}>
                            <p>{document.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
          
    }
}

export default Project;