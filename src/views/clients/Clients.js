import { EditOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pageheader from 'ui-component/Pageheader';
//import { useGetProductQuery } from "state/api";

const Clients = () => {
  //const alldata = useGetProductQuery()
  const [userData, setUserdata] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get('http://localhost:5001/client/clientaccounts');
      setUserdata(response.data);
      console.log('userData', userData);
    };
    fetchUser();
  }, []);

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 0.5
    },
    {
      field: 'occupation',
      headerName: 'Occupation',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (data) => {
        return (
          <>
            <Link to={`/external/${data?.row?._id}`}>
              <IconButton>
                <EditOutlined />
              </IconButton>
            </Link>
            {/* <div>
              <IconButton>
                <DeleteOutline />
              </IconButton>
            </div> */}
          </>
        );
      }
    }
  ];

  return (
    <>
      <Box m="1rem 2rem">
        <div>
          <Pageheader title='Client' subtitle='Listing' />
        </div>
        <div style={{ height: '400px', widows: '100%' }}>
          {userData && <DataGrid columns={columns} rows={userData} getRowId={(row) => row._id} />}
        </div>
      </Box>
    </>
  );
};

export default Clients;
