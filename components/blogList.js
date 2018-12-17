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
                this.setState({ doc: response.results[0] });
            }
            });
        });

    }

    componentWillReceiveProps (){ 
        this.aos.refresh(); 
    } 

    render() {
        if (this.state.doc) {
            const document = this.state.doc.data;
            console.log(document);

            return (
              <div className="">
                <div className="head">

                </div>
                <div className="post">
                    <div>
                        <h1>{RichText.asText(document.title)}</h1>
                    </div>
                    <div>
                        {RichText.render(document.body, this.linkResolver)}
                    </div>
                </div>
                
                <style jsx>{`
                    .head {
                        height: 100px;
                        width: 100%;
                    }
                    .post {
                        display: block;
                        border-radius: 5px;
                        border: 1px solid grey;
                        margin: 25px;
                        padding: 10px;
                    }
                `}</style>
              </div>
            );
          }
          return <h1>Loading...</h1>;
    }
}

export default BlogList;