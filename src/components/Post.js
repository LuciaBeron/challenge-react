import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Axios from 'axios';

export default function Post() {

    const [ post, showPost ] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.cypress.io/posts/${id}`)
        .then(res => {
            showPost({
                title: res.data.title,
                body: res.data.body
            })
            console.log(post);
        })
            
    }, [])

    return (
        <div>
            { post &&
                <Container className="mt-3">
                    <h2>Post - {post.title}</h2>
                    <p>
                        {post.body}
                    </p>
                </Container>
            }
            
        </div>
    )
}
