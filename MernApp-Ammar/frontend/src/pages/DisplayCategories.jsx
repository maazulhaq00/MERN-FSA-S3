import axios from 'axios'
import { useEffect, useState } from 'react';

function DisplayCategories() {

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
            <div className="container my-4">

                <h3>Categories</h3>

                {
                    alert.message && (<div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
                        {alert.message}
                    </div>)
                }

                {
                    categories.length>0 ?
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map((cat) => {
                                        return <tr>
                                            <td>{cat.name}</td>
                                            <td>{cat.description}</td>
                                        </tr>

                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div class="alert alert-light" role="alert">
                            No Categories Found
                        </div>
                }

            </div>

        </>
    );
}

export default DisplayCategories;