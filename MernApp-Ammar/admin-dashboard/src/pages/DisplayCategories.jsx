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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
import { useNavigate } from 'react-router-dom';


const DisplayCategories = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate()
  

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

  const deleteCategories = async (id) => {
    try {
      const res = await axios.delete(`${apiUrl}/categories/${id}`)

      setAlert({
        success: res.data.success,
        message: res.data.message
      })

    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to delete"
      })

    }
    fetchCategories()

  }
  const editCategories = async (id) => {
    navigate(`/edit-category/${id}`)
  }

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
                            <TableCell align="right">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            categories.map((cat) => {
                              return <TableRow key={cat._id}>
                                <TableCell>{cat.name}</TableCell>
                                <TableCell>{cat.description}</TableCell>
                                <TableCell>
                                  <Stack direction="row" spacing={1}>
                                    <IconButton aria-label="delete" onClick={() => 
                                      editCategories(cat._id)}>
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => 
                                      deleteCategories(cat._id)}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </Stack>
                                </TableCell>
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
