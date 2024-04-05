import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import Pageheader from 'ui-component/Pageheader';

const Accountform = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ accountName: '', vWebsite: '', notes: '' });

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5001/client/clientaccounts/${id}`);
          console.log('dataedit', data)
          if (data) {
            setFormData({ accountName: data?.accountName || '', vWebsite: data?.vWebsite || '' , notes: data?.notes || '' });
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
      insData.append('accountName', formData.accountName);
      insData.append('vWebsite', formData.vWebsite);
      insData.append('notes', formData.notes);
      console.log('formData=>insert', formData)
      console.log('insData', insData)
      
      let response;
      if (id) {
        response = await axios.put(`http://localhost:5001/client/updateAccount/${id}`, formData);
      } else {
        response = await axios.post('http://localhost:5001/client/insertAccount', formData);
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
        <Formik initialValues={{ accountName: '', vWebsite: '', notes: '' }} onSubmit={handleSubmit}>
          <Form>
            <div>
              <Field
                id="accountName"
                name="accountName"
                value={formData.accountName}
                label="Account Name"
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
                id="vWebsite"
                name="vWebsite"
                value={formData.vWebsite}
                label="vWebsite"
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
                id="notes"
                name="notes"
                value={formData.notes}
                label="notes"
                type="text"
                as={TextField}
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
              />
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

export default Accountform;
