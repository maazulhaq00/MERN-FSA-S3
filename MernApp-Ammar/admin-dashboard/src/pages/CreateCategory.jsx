import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';

import {
  Avatar,
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateCategory = () => {
  const apiUrl = "http://localhost:3001"

  const navigate = useNavigate()

  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })

  const handleCategoryInputChange = (e) => {
    let { name, value } = e.target
    // setCategory({
    //     ...category,
    //     [name]: value
    // })
    setCategory((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleCategorySubmit = async () => {
    try {
      const res = await axios.post(`${apiUrl}/categories`, category)
      console.log(res);
      if (res.data.success) {
        setAlert({
          success: true,
          message: "Category Added Successfully"
        })

        navigate('/categories')
      }
      else {
        setAlert({
          success: false,
          message: res.data.message
        })
      }
      setCategory({
        name: "",
        description: ""
      })
    }
    catch (err) {
      console.log(err);
      setAlert({
        success: false,
        message: err.response.data.message
      })
    }
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
                Create Category
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={3}
              >

                <Grid
                  xs={12}
                  md={8}
                >
                  <Card sx={{ p: 3 }}>
                    {
                      alert.message && <Alert sx={{ mb: 2 }} 
                      severity={alert.success ? "success" : "error"}>
                        {alert.message}
                      </Alert> 
                    }

                    <Box sx={{ maxWidth: 420 }}>

                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          label="Category Name"
                          name="name"
                          value={category.name}
                          onChange={handleCategoryInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Category Description"
                          name="description"
                          value={category.description}
                          onChange={handleCategoryInputChange}

                        />

                      </Stack>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="primary"
                          size="large"
                          type="submit"
                          variant="contained"
                          onClick={handleCategorySubmit}
                        >
                          Add Category
                        </Button>
                      </Box>
                    </Box>
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

export default CreateCategory;
