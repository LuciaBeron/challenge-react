import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Form, Alert, Button, Spinner, Container } from 'react-bootstrap'
import NotFound from './NotFound'


export default function Edit() {

    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const [data, setData] = useState(null);
    const [loading, showLoad] = useState(true)
    const { id } = useParams();

    const [form, setForm] = useState({
        title:'',
        body: ''
      })
  
    const updateForm = e => {    
        setForm({
        ...form,
            [e.target.name] : e.target.value,
        })
        console.log(form);
    }

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.cypress.io/posts/${id}`)
        .then(res => {
            setData({
                title: res.data.title,
                body: res.data.body
            })
        })
        .catch(err => {
            console.log(err);
            showLoad(false);
        })
    })

    const handleSubmit = e => {
        e.preventDefault();
        const validate = validateForm();
     
        if (validate) {
          Axios.put(`https://jsonplaceholder.cypress.io/posts/${id}`,
            {
              data: {
                title: form.title,
                body: form.body,
            }})
          .then(res => {
            console.log(res);
            setAlert('Changes applied!');
          })
          .catch(err => console.log(err));
  
        }
      }

      const validateForm = e => {
        const { title, body } = form;
  
        if (title.length === 0 || body.length === 0) {
            setError('All fields are required');
            return false;
        } else {
          setError('');
        }
        return true;
      }

    return (

        <div>
        { data ?
        <Form className="p-3 border mt-4 border-secondary rounded mx-auto width-class"> 
            <h2>Post N° {id} - Edit</h2>      
            <Form.Group controlId="formTitle">
                <Form.Label className="pt-3">Title</Form.Label>
                <Form.Control onChange={updateForm} defaultValue={data.title} name="title" type="text" placeholder="Enter post title" />
            </Form.Group>

            <Form.Group controlId="formBody">
                <Form.Label>Post content</Form.Label>
                <Form.Control onChange={updateForm} defaultValue={data.body} name="body" as="textarea" rows={5} placeholder="Post content" />
            </Form.Group>       

            {error.length > 0 && <Alert variant={'danger'}>{error}</Alert>}
            {alert.length > 0 && <Alert variant={'success'}>{alert}</Alert>}

            <Button type="submit" onClick={handleSubmit}>
                Save Changes
            </Button>
        </Form>
        :  loading ?
        <Container className="d-flex align-items-center mt-5">
        <Spinner animation="border mx-auto" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner> 
        </Container>        
        : <NotFound /> 
        }

        </div>
    )
}
