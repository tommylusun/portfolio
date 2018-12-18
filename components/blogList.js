import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';


class BlogList extends Component {
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
        

        this.aos = AOS;
        this.aos.init({
            duration: 500,
            anchorPlacement: 'bottom-top'
        });

        const apiEndpoint = 'https://tlusun-portfolio.prismic.io/api/v2';
  
        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'blog_post')).then(response => {
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
        if (this.state.doc) {
            const posts = this.state.doc.map((post) => {
                const document = post.data;
                return (
                    <div className="post">
                        <div>
                            <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                        </div>
                        <div>
                            <label style={{fontSize: '1.5em'}}>{RichText.asText(document.title)}</label>
                        </div>
                        <div className="date">
                            <p>{document.date}</p>
                        </div>
                        <div style={{fontSize: '1em'}}>
                            {RichText.render(document.blurb, this.linkResolver)}
                        </div>
                        <div className="post-footer">
                        </div>
                        <style jsx>{`
                            .post {
                                display: block;
                                text-align: start;
                                border-radius: 5px;
                                margin: 10px;
                                padding: 10px;
                                max-width: 25%;
                                min-width: 200px;
                                transition-duration: 1s;
                                background: #ECF0F180;
                            }
                            .post:hover{
                                transform: scale(1.025);
                                transition-duration: 0.5s;
                                background: #ECF0F1F0;
                                box-shadow: 0px 20px 45px -9px rgba(0,0,0,0.4);
                            }
                            .date {
                                font-style: italic;
                                font-size: 0.75rem;
                            }
                            .post-footer {
                                /* border-bottom: 1px solid grey; */
                                width: 300px;
                            }`}
                        </style>
                    </div>
                );
            });
            return (
              <div className="blog-container">
                <div className="head">
                    
                </div>
                <div className="blog-list-title">
                    <p>Latest Posts</p>
                </div>
                <div className="blog-list">
                    {posts}
                </div>
                <style jsx>{`
                    .head {
                        height: 100px;
                        width: 100%;
                    }
                    .blog-container {
                    }
                    .blog-list {
                        display: flex;
                        width: 80%;
                        margin: auto;
                    }
                    .blog-list-title {
                        display: flex;
                        width: 80%;
                        padding-left: 25px;
                        font-size: 2rem;
                        margin: auto;
                    }
                `}</style>
              </div>
            );
          }
          return (
                <div className="">
                    <div className="head">
                    </div>
                    <div className="blog-list-title">
                    </div>
                </div>);
    }
}

export default BlogList;