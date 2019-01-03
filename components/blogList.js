import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import anime from 'animejs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';
import styles from './blogList.module.css';


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
        
        let posts = null;
        if (this.state.doc) {
            posts = this.state.doc.map((post) => {
                const document = post.data;
                return (
                    <Link href={"/blogPost?id=" + post.id}>
                        <a className={styles.post}>
                       
                        <div >
                            <div>
                                <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                            </div>
                            <div style={{fontSize: '1.5em'}}>
                                {RichText.asText(document.title)}
                            </div>
                            <div className={styles.date}>
                                <p>{document.date}</p>
                            </div>
                            <div style={{fontSize: '1em'}}>
                                {RichText.render(document.blurb, this.linkResolver)}
                            </div>
                        </div>
                   
                        </a>
                    </Link>
                );
            });
        }
        return (
            <div className="blog-container">
            
            <div className="blog-list-title">
                <div className="head">
                
                </div>
                <div className="blog-header">
                    <p style={{fontSize: '1.5em'}}>Latest Posts</p>
                    <p style={{fontSize: '0.5em'}}>These are posts I make. They can be about anything.</p>
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
                    display: flex;
                    flex-wrap: wrap;
                    width: 80%;
                    margin: auto;
                }
                .blog-list-title {
                    background: #BE90D4;
                    background-image: linear-gradient(-205deg, #6a11cb 0%, #884D80 100%);
                    color: #ECF0F1F0;
                    font-size: 2rem;
                }
                .blog-header{
                    width: 80%;
                    padding-left: 25px;
                    padding-bottom: 40px;
                    margin: auto;
                }
            `}</style>
            </div>
        );
          
    }
}

export default BlogList;