import Header from '../components/header';
import BlogList from '../components/blogList';
import {withRouter} from 'next/router'
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import React, { Component } from 'react';
import BlogPostComponent from '../components/blogPostComponent';


const BlogPost2 = withRouter((props) => {
    console.log(props);
    return (
        <div className="main-background">
            <Header></Header>
            <BlogPostComponent id={props.router.query.id}></BlogPostComponent>
        </div>
    )

});

export default BlogPost2;