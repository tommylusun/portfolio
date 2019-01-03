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
        let delay = 100;
        return (
            <div className={styles.projectContainer}>
                <div data-aos-offset="250" data-aos-anchor-placement="middle-bottom" data-aos="fade-up" className={styles.content}>

                    <div>
                    <label style={{fontSize: '3em'}}>{RichText.asText(document.project_name)}</label>
                    </div>

                    <div>
                        <div className={styles.linksSection}>
                            <div data-aos-offset="100" data-aos-delay="300"data-aos-anchor-placement="middle-bottom" data-aos="fade-up">
                                <Link href={typeof document.github_url.url === "undefined" ? "tlusun.ml" : document.github_url.url }>
                                    <a>Github Repo</a>
                                </Link>
                            </div>
                            <div data-aos-offset="100" data-aos-delay="400"data-aos-anchor-placement="middle-bottom" data-aos="fade-up">
                                <Link href={typeof document.project_url.url === "undefined" ? "tlusun.ml" : document.project_url.url}>
                                    <a >Live site</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.imageContainer}>
                            <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                        </div>
                        <div style={{fontSize: '1.1em'}}>
                            {RichText.render(document.description)}
                        </div>
                        <div className={styles.techSection}>
                            <h5>Stack</h5>
                            {document.technology_stack.split(' ').map( (stack) => {
                                delay += 100;
                                return (<span data-aos-offset="100" data-aos-delay={delay} data-aos-anchor-placement="middle-bottom" data-aos="fade-up" style={{padding: '20px'}}>{stack}</span>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
          
    }
}

export default Project;