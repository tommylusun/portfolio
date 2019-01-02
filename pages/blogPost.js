
import {withRouter} from 'next/router'
import React, { Component } from 'react';
import BlogPostComponent from '../components/blogPostComponent';


const BlogPost2 = withRouter((props) => {
    return (
        <div className="main-background">
            <BlogPostComponent id={props.router.query.id}></BlogPostComponent>
        </div>
    )

});

export default BlogPost2;