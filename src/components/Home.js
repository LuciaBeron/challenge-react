import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

import Axios from 'axios';

export default function Home() {

    const [ blogList, addBlog ] = useState(null);

    useEffect(() => {    

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            addBlog(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, [blogList])


    return (
        <div className="mt-3 w-50 mx-auto">
            <h3 className="text-center mt-4 mb-4">Posts</h3>
            <table className="table">

                <tbody className="table">
                { blogList && <BlogList blogList={blogList} />}
                </tbody>

            </table>

                       
        </div>
    )
}
