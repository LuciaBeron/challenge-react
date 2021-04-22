import React, { useState } from 'react'
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import Axios from 'axios';

export default function NewPost() {

    const [number, posts] = useState(101);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const [form, setForm] = useState({
      title:'',
      body: ''
    })

    const updateForm = e => {
      setForm({
        ...form,
        [e.target.name] : e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault();
      const validate = validateForm();
   
      if (validate) {
        handleClose();
        Axios.post('https://jsonplaceholder.typicode.com/posts',
          {
            data: {
              title: form.title,
              body: form.body,
              id:number
          }})
        .then(res => {
          console.log(res);
          posts(number++);
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
      <>
        <Button className="d-block mx-auto mb-4" onClick={handleShow}>
          Add post
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Form className="p-3">            
            <Modal.Header closeButton>
                <Modal.Title>New post</Modal.Title>
            </Modal.Header>        
          
            <Form.Group controlId="formTitle">
                <Form.Label className="pt-3">Title</Form.Label>
                <Form.Control onChange={updateForm} name="title" type="text" placeholder="Enter post title" />
            </Form.Group>

            <Form.Group controlId="formBody">
                <Form.Label>Post content</Form.Label>
                <Form.Control onChange={updateForm} name="body" as="textarea" rows={5} placeholder="Post content" />
            </Form.Group>       

            {error.length > 0 && <Alert variant={'danger'}>{error}</Alert>}

            <Button type="submit" onClick={handleSubmit}>
                Submit
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
       


