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
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditCategory = () => {
  const apiUrl = "http://localhost:3001"
  const navigate = useNavigate()
  const { id } = useParams()

  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })

  const fetchCategory = async () => {
    try {

      let res = await axios.get(`${apiUrl}/categories/${id}`)

      // console.log(res);

      setCategory(res.data.category)

    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to fetch categroy"
      })
    }

  }

  useEffect(() => {
    fetchCategory()
  }, [])



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

  const handleCategoryEdit = async () => {

    try {

      let res = await axios.put(`${apiUrl}/categories/${id}`, category)

      setAlert({
        success: res.data.success,
        message: res.data.message
      })

      navigate('/categories')

    }
    catch (err) {
      console.log(err);

      setAlert({
        success: false,
        message: "Fail to update categroy"
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
                Edit Category
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
                          onClick={handleCategoryEdit}
                        >
                          Update Category
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

export default EditCategory;
