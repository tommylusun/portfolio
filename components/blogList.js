import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import Link from 'next/link';
import styles from './blogList.module.css';
import {Helmet} from "react-helmet";


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
            api.query(Prismic.Predicates.at('document.type', 'blog_post'),
            { orderings : '[document.first_publication_date desc]' }).then(response => {
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
            let delay = 100;
            posts = this.state.doc.map((post) => {
                delay += 100;
                const document = post.data;
                return (
                        <Link key={post.id} href={"/blogPost?id=" + post.id}>
                        <a className={styles.post}>
                       
                            <div data-aos-offset="100" data-aos-delay={delay} data-aos-anchor-placement="middle-bottom" data-aos="fade-up">
                                <div>
                                    <img className={styles.image} src={document.image.url}></img>
                                </div>
                                <div className={styles.title}>
                                    {RichText.asText(document.title)}
                                </div>
                                <div className={styles.date}>
                                    <p>{document.date}</p>
                                </div>
                                <div className={styles.blurb}>
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
            
            <Helmet>
                <title>My blog - Thoughts from a developer</title>
                <meta name="description" content="These are posts I write. They can be about anything. Hopefully they're useful things." />
            </Helmet>

            <div className="blog-list-title">
                <div className="head">
                
                </div>
                <div data-aos-delay="100" data-aos-anchor-placement="middle-bottom" data-aos="fade-in" className="blog-header">
                    <p style={{fontSize: '1.5em'}}>Latest Posts</p>
                    <p style={{fontSize: '0.5em'}}>These are posts I write. They can be about anything.</p>
                </div>
            </div>
            <div className={styles.blogList}>
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