import { useState } from "react";
import axios from "axios"

function AddCategory() {

    const apiUrl = "http://localhost:3001"

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
            <div className="container my-4">

                {
                    alert.message && (<div className={`alert ${alert.success ? "alert-success" : "alert-danger"}`} role="alert">
                        {alert.message}
                    </div>)
                }



                <h3>Add Category</h3>

                <div>
                    <div className="mb-3">
                        <label htmlFor="cname" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="cname"
                            name="name" value={category.name} onChange={handleCategoryInputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cdesc" className="form-label">Category Description</label>
                        <input type="text" className="form-control" id="cdesc"
                            name="description" value={category.description} onChange={handleCategoryInputChange} />
                    </div>

                    <div className="mb-3">
                        <button type="button" className="btn btn-dark" onClick={handleCategorySubmit}>Add</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AddCategory;