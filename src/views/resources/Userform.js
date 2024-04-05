import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import Pageheader from 'ui-component/Pageheader';

const Userform = () => {
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5001/general/user/${id}`);
          if (data) {
            setFormData({ name: data?.name || '', email: data?.email || '' });
          }
        } catch (error) {
          console.log('Error fetching user data:', error);
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async () => {
    console.log('formData-insert', formData)
    try {
      const insData = new FormData();
      insData.append('name', formData.name);
      insData.append('email', formData.email);
      if (selectedFile) insData.append('profileImage', selectedFile);

      let response;
      if (id) {
        response = await axios.put(`http://localhost:5001/client/updateCustomer/${id}`, insData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        response = await axios.post('http://localhost:5001/client/insertCustomer', insData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box>
            <Pageheader title="User" subtitle="Create" />
          </Box>
        </Grid>
      </Grid>
      <Grid item sm={8}>
        <Formik initialValues={{ name: '', email: '' }} onSubmit={handleSubmit}>
          <Form>
            <div>
              <Field
                id="name"
                name="name"
                value={formData.name}
                label="Name"
                type="text"
                as={TextField}
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
              />
            </div>
            <div>
              <Field
                id="email"
                name="email"
                value={formData.email}
                label="Email"
                type="email"
                as={TextField}
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
              />
            </div>
            <div style={{ display: id ? 'none' : 'block' }}>
              <Field
                id="password"
                name="password"
                label="Password"
                type="password"
                as={TextField}
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
              />
            </div>
            <div style={{ margin: '10px 10px' }}>
              <input type="file" name="profileImage" onChange={handleFileChange} />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Grid>
    </>
  );
};

export default Userform;
