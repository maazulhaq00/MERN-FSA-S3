import { Helmet } from 'react-helmet-async';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateProduct = () => {
  const apiUrl = "http://localhost:3001"

  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  })

  const [alert, setAlert] = useState({
    success: true,
    message: ""
  })

  const [categories, setCategories] = useState([])

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
        message: "Fail to fetch categories"
      })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleProductInputChange = (e) => {
    let { name, value } = e.target
    // setCategory({
    //     ...category,
    //     [name]: value
    // })
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleProductSubmit = async () => {
    try {
      const res = await axios.post(`${apiUrl}/products`, product)
      console.log(res);
      if (res.data.success) {
        setAlert({
          success: true,
          message: "Product Added Successfully"
        })

        navigate('/products')
      }
      else {
        setAlert({
          success: false,
          message: res.data.message
        })
      }
      setProduct({
        name: "",
        description: "",
        price: "",
        image: "",
        category: ""
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
          Product | Ecomm App
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
                Create Product
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
                          label="Product Name"
                          name="name"
                          value={product.name}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Description"
                          name="description"
                          value={product.description}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Price"
                          name="price"
                          value={product.price}
                          onChange={handleProductInputChange}

                        />
                        <TextField
                          fullWidth
                          label="Product Image"
                          name="image"
                          value={product.image}
                          onChange={handleProductInputChange}

                        />
  
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-helper-label">
                          Product Category</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            name='category'
                            value={product.category}
                            label="Product Category"
                            onChange={handleProductInputChange}
                          >
                             {
                              categories.map((cat) => {
                                return <MenuItem key={cat._id} value={cat._id}>
                                  {cat.name}</MenuItem>
                              })
                            }
                            
                          </Select>
                        </FormControl>

                      </Stack>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          color="primary"
                          size="large"
                          type="submit"
                          variant="contained"
                          onClick={handleProductSubmit}
                        >
                          Add Product
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

export default CreateProduct;
