import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';
import Project from './project';


class BlogList extends Component {
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

        const apiEndpoint = 'https://tlusun-portfolio.prismic.io/api/v2';
  
        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'projects')).then(response => {
                console.log(response.results);
            if (response) {
                this.setState({ doc: response.results });
            }
            });
        });

    }

    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 

    render() {
        
        let posts = null;
        if (this.state.doc) {
            posts = this.state.doc.map((post) => {
                const document = post.data;
                return (<Project document={document}></Project>);
            });
        }
        return (
            <div className="projects-container">
            <div className="projects-list-title">
                <div className="head">
                
                </div>
                <div data-aos-delay="100" data-aos-anchor-placement="middle-bottom" data-aos="fade-in" className="projects-header">
                    <p style={{fontSize: '2em'}}>Projects</p>
                </div>
            </div>
            <div className="projects-list">
                {posts}
            </div>
            <style jsx>{`
                .head {
                    height: 80px;
                    width: 100%;
                }
                .projects-container {
                    min-height: 100vh;
                    // background: linear-gradient(180deg, #FFB3A7 0%, #BE90D4 35%, #BE90D4 100%);
                }
                .projects-list {                    
                    width: 100%;
                    margin: auto;
                }
                .projects-list-title {
                    // background-image: linear-gradient(-205deg, #6a11cb 0%, #5f72bd 100%);
                    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
                    color: #ECF0F1F0;
                    font-size: 2rem;
                }
                .projects-header{
                    width: 80%;
                    padding-bottom: 20px;
                    text-align: center;
                    margin: auto;
                }
            `}</style>
            </div>
        );
          
    }
}

export default BlogList;