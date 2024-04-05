import { EditOutlined } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetClientaccountQuery } from 'state/api';
import Pageheader from 'ui-component/Pageheader';

const ClientAccounts = () => {
  const apiurl = process.env.REACT_APP_BASE_URL;
  //const alldata = useGetClientaccountQuery()
  const {data, isLoading} = useGetClientaccountQuery()
  
  //console.log('userDatalist', userDatalist)
  
  const [userData, setUserdata] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${apiurl}/client/clientaccounts`);
      console.log('response', response)
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
      field: 'accountName',
      headerName: 'Account Name',
      flex: 1
    },
    {
      field: 'vWebsite',
      headerName: 'Website',
      flex: 1
    },
    {
      field: 'notes',
      headerName: 'Notes',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (data) => {
        return (
          <>
            <Link to={`/updateaccount/${data?.row?._id}`}>
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
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
          <Pageheader title="Client Account" subtitle="Listing" />
          <Box>
            <Link to={'/createaccount'}>
              <Button>Create</Button>
            </Link>
          </Box>
        </div>
        <div style={{ height: '400px', widows: '100%' }}>
          {isLoading || <DataGrid columns={columns} rows={data} getRowId={(row) => row._id} />}
        </div>
      </Box>
    </>
  );
};

export default ClientAccounts;
