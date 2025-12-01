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


const Login = () => {
    const apiUrl = "http://localhost:3001"

    const navigate = useNavigate()

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })


    const handleLoginInputChange = (e) => {
        let { name, value } = e.target

        setLoginDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    const handleLogin = async () => {

        try {


            const res = await axios.post(`${apiUrl}/login`, loginDetails)

            console.log(res);
            if (res.data.success) {

                localStorage.setItem("token", res.data.token)

                if (res.data.role == "admin") {
                    navigate("/add-category")
                }
                else {
                    navigate("/categories")

                }

            }
            else {
                // setAlert({
                //     success: false,
                //     message: res.data.message
                // })

                console.log(res.data.message)
            }

        }
        catch (err) {
            console.log(err);

        }

    }


    return (
        <>
            <Helmet>
                <title>
                    Login | Ecomm App
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
                                Login
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


                                        <Box sx={{ maxWidth: 420 }}>

                                            <Stack spacing={3}>
                                                <TextField
                                                    fullWidth
                                                    label="Email"
                                                    name="email"
                                                    type='email'
                                                    value={loginDetails.email}
                                                    onChange={handleLoginInputChange}

                                                />
                                                <TextField
                                                    fullWidth
                                                    label="Password"
                                                    name="password"
                                                    value={loginDetails.password}
                                                    onChange={handleLoginInputChange}

                                                />

                                            </Stack>

                                            <Box sx={{ mt: 3 }}>
                                                <Button
                                                    color="primary"
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    onClick={handleLogin}
                                                >
                                                    Login
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

export default Login;
