import Header from '../components/header';
import BlogList from '../components/blogList';
import {withRouter} from 'next/router'
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import React, { Component } from 'react';


export default class BlogPost extends Component {

    static async getInitialProps(context) {
        console.log(context);
        const apiEndpoint = 'https://tlusun-portfolio.prismic.io/api/v2';
        const doc = await Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.id', context.query.id)).then(response => {
                console.log(response);
                if (response) {
                    return response.results[0].data;
                }
            });
        });
        return {
            post: doc
        };
    }
    render() {
        let post = null;
        console.log(this.props.post);
        if (this.props.post){
            const document = this.props.post;
            post = (
            <div className="post">
                <div>
                    <img style={{maxWidth: '100%'}} src={document.image.url}></img>
                </div>
                    <div style={{cursor: 'pointer'}}>
                        <div style={{fontSize: '1.5em'}}>
                            {RichText.asText(document.title)}
                        </div>
                        <div className="date">
                            <p>{document.date}</p>
                        </div>
                        <div style={{fontSize: '1em'}}>
                            {document.blurb[0].text}
                        </div>
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
            </div>);
        }
        return (
            <div className="main-background">
                <Header></Header>
                {post}
            </div>
        )

    }
}