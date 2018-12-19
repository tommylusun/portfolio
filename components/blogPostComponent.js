import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';


class BlogPostComponent extends Component {
    state = {
        doc: null,
      }

      	
    // Link Resolver
    linkResolver(doc) {
        // Define the url depending on the document type
        if (doc.type === 'page') {
        return '/page/' + doc.uid;
        } else if (doc.type === 'blog_post') {
        return '/blog/' + doc.uid;
        }
    
        // Default to homepage
        return '/';
    }
    componentDidMount() {
        const isBrowser = typeof window !== 'undefined';
        const AOS = isBrowser ? require('aos') : undefined;
        console.log("props: " + this.props);

        this.aos = AOS;
        this.aos.init({
            duration: 500,
            anchorPlacement: 'bottom-top'
        });

        const apiEndpoint = 'https://tlusun-portfolio.prismic.io/api/v2';
  
        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.id', this.props.id)).then(response => {
                console.log(response);
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
        
        let post = null;
        if (this.state.doc) {
            const document = this.state.doc[0].data;
            console.log(document);
            post = (
                    <div className="post">
                        <div className="post-header">
                            <div style={{fontSize: '3em'}}>
                                    {RichText.asText(document.title)}
                                </div>
                                <div className="date">
                                    <p>{document.date}</p>
                                </div>
                            <div >
                                {/* <img style={{maxWidth: '100%', margin: 'auto'}} src={document.image.url}></img> */}
                                {RichText.render(document.blurb, this.linkResolver)}

                            </div>
                        </div>
                            
                        <div className="post-body">

                            <div style={{fontSize: '1em'}}>
                                {RichText.render(document.body, this.linkResolver)}
                            </div>
                            {!!document.body_image_1.url ? (<div className="body-image">
                                <img style={{maxWidth: '100%'}} src={document.body_image_1.url}></img>
                            </div>) : null}
                        
                        </div>
                            
                        <div className="post-footer">
                        </div>
                        <style jsx>{`
                            .post {
                                display: block;
                                text-align: start;
                                width: 100%;
                                transition-duration: 1s;
                                background: #ECF0F180;
                            }
                            .post-header{
                                text-align: center;
                                background: #BE90D4;
                                color: #ECF0F1F0;
                                padding: 50px;
                            }
                            .date {
                                font-style: italic;
                                font-size: 0.75rem;
                            }
                            .post-body {
                                max-width: 50%;
                                margin: auto;
                                padding-top: 50px;
                            }
                            .body-image {
                                text-align: center;
                                
                                margin: auto;
                            }
                            .post-footer {
                                /* border-bottom: 1px solid grey; */
                                width: 300px;
                            }`}
                        </style>
                    </div>
                );
        }
        return (
            <div className="blog-container">
                <div className="head">               
                </div>
                <div className="blog-post">
                    {post}
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
                .blog-post {
                    display: flex;
                    width: 100%;
                    margin: auto;
                }
            `}</style>
            </div>
        );
          
    }
}

export default BlogPostComponent;