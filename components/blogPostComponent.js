import { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';

class BlogPostComponent extends Component {
    state = {
        doc: null,
      }

    // Function to add unique key to props
    propsWithUniqueKey = function(props, key) {
        return Object.assign(props || {}, { key });
    };
    
    // -- HTML Serializer
    // This function will be used to change the way the HTML is loaded
    htmlSerializer = (type, element, content, children, key) => {
        var props = {};
        console.log(type);
        switch(type) {
            case RichText.Elements.paragraph:
                props = {style: {lineHeight: '1.7em'}};
                return React.createElement('p', this.propsWithUniqueKey(props, key), children);

            // Don't wrap images in a <p> tag
            case RichText.Elements.image: 
                props = { src: element.url , alt: element.url || '', style: {width: '100%', maxWidth: '100%'} };
                return React.createElement('img', this.propsWithUniqueKey(props, key));
            
            case RichText.Elements.embed: // Embed
                props = Object.assign({
                  "data-oembed": element.oembed.embed_url,
                  "data-oembed-type": element.oembed.type,
                  "data-oembed-provider": element.oembed.provider_name,
                  style: {width: '100%', maxWidth: '100%'}
                }, element.label ? {className: element.label} : {});
                const embedHtml = React.createElement('div', {dangerouslySetInnerHTML: {__html: element.oembed.html,style: {width: '100%', maxWidth: '100%'}}});
                return React.createElement('div', this.propsWithUniqueKey(props, key), embedHtml);

            // Return null to stick with the default behavior
            default: 
                return null;
        }
    };
      	
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
            let color = "#A8BFFF";
            if (!!document.primary_color){
                color = document.primary_color;
            };
            post = (
                    <div className="post">
                        <div className="post-header">
                        <div className="head">               
                            </div>
                            <div className="header-content">
                                <div style={{fontSize: '3em'}}>
                                    {RichText.asText(document.title)}
                                </div>
                                <div className="date">
                                    <p>{document.date}</p>
                                </div>
                                <div style={{fontSize: '1em'}}>
                                    {/* <img style={{maxWidth: '100%', margin: 'auto'}} src={document.image.url}></img> */}
                                    {RichText.render(document.blurb, this.linkResolver)}

                                </div>
                            </div>
                        </div>
                            
                        <div className="post-body">

                            <div style={{fontSize: '1.05em'}}>
                                {RichText.render(document.body, this.linkResolver, this.htmlSerializer)}
                            </div>
                            {!!document.body_image_1.url ? (<div className="body-image">
                                <img style={{maxWidth: '100%'}} src={document.body_image_1.url}></img>
                            </div>) : null}
                        
                        </div>
                            
                        <div className="post-footer">
                        </div>
                        <style jsx>{`
                            .head {
                                height: 80px;
                                width: 100%;
                            }
                            .post {
                                display: block;
                                text-align: start;
                                width: 100%;
                                transition-duration: 1s;
                                background: #ECF0F180;
                            }
                            .post-header{
                                text-align: center;

                                //background: ${color};
                                //background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
                                background-image: linear-gradient(-205deg, ${color} 0%, #884D80 100%);
                                color: #ECF0F1F0;
                            }
                            .header-content {
                                margin: auto;
                                max-width: 700px;
                                padding: 50px;
                            }
                            .date {
                                font-style: italic;
                                font-size: 1rem;
                            }
                            .post-body {
                                max-width: 700px;
                                margin: auto;
                                padding: 40px;
                            }
                            .body-image {
                                text-align: center;
                                
                                margin: auto;
                            }
                            .post-footer {
                                /* border-bottom: 1px solid grey; */
                                width: 300px;
                            }
                            img {
                                width: 100%;
                                max-width: 100%;
                            }
                            `}
                        </style>
                    </div>
                );
        }
        return (
            <div className="blog-container">
                <div className="blog-post">
                    {post}
                </div>
            <style jsx>{`
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