import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';


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
                return (
                        <div className="post">
                            <p style={{fontSize: '3em'}}>{RichText.asText(document.project_name)}</p>
                            <div >
                                <div>
                                    <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                                </div>
                                <div style={{fontSize: '1em'}}>
                                    {RichText.asText(document.description)}
                                </div>
                                <div className="date">
                                    <p>{document.date}</p>
                                </div>
                            </div>
                       
                        <div className="post-footer">
                        </div>
                        <style jsx>{`
                            .post {
                                display: block;
                                text-align: center;
                                padding: 50px;
                                height: 400px;
                                margin-bottom: 150px;
                                margin-top: 80px;
                                background: #66a6ff;
                                background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
                                background-blend-mode: multiply,multiply;
                                box-shadow: 0px 10px 25px -9px rgba(0,0,0,0.3);
                                color: white;
                            }
                            .date {
                                font-style: italic;
                                font-size: 0.75rem;
                            }
                            `}
                        </style>
                        </div>
                );
            });
        }
        return (
            <div className="blog-container">
            <div className="blog-list-title">
                <div className="head">
                
                </div>
                <div className="blog-header">
                    <p style={{fontSize: '2em'}}>Projects</p>
                </div>
            </div>
            <div className="blog-list">
                {posts}
            </div>
            <style jsx>{`
                .head {
                    height: 80px;
                    width: 100%;
                }
                .blog-container {
                    min-height: 100vh;
                    // background: linear-gradient(180deg, #FFB3A7 0%, #BE90D4 35%, #BE90D4 100%);
                }
                .blog-list {                    
                    width: 100%;
                    margin: auto;
                }
                .blog-list-title {
                    background-image: linear-gradient(-205deg, #6a11cb 0%, #5f72bd 100%);
                    color: #ECF0F1F0;
                    font-size: 2rem;
                }
                .blog-header{
                    width: 80%;
                    padding-left: 25px;
                    padding-bottom: 40px;
                    text-align: center;
                    margin: auto;
                }
            `}</style>
            </div>
        );
          
    }
}

export default BlogList;