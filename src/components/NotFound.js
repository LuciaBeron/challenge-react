import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container className="mt-5">
            <h1>Error</h1>
            <h3>Post not found</h3>
            <Link to="/home">
                <h4>Go back to the homepage</h4>
            </Link>            
        </Container>
    )
}
