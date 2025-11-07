import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {

  Box,
  Button,
  Card,
  Container,
  FormHelperText,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { useState, useEffect } from 'react';


const DisplayCategories = () => {
  const [categories, setCategories] = useState([]);

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })

  const apiUrl = "http://localhost:3001"

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`)

      console.log(res);

      setCategories(res.data.categories)

    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to fetch"
      })

    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])


  return (
    <>
      <Helmet>
        <title>
          Category | Ecomm App
        </title>
      </Helmet>
      <Box
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">
                Categories
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >

                <Grid
                  xs={12}
                  md={10}
                >
                  <Card sx={{ p: 3 }}>
                    {
                      alert.message && <Alert sx={{ mb: 2 }}
                        severity={alert.success ? "success" : "error"}>
                        {alert.message}
                      </Alert>
                    }


                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Category Name</TableCell>
                            <TableCell align="left">Description</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>

                          {
                            categories.map((cat) => {
                              return <TableRow key={cat._id}>
                                <TableCell>{cat.name}</TableCell>
                                <TableCell>{cat.description}</TableCell>
                              </TableRow>
                            })
                          }

                        </TableBody>
                      </Table>
                    </TableContainer>

                  </Card>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default DisplayCategories;
