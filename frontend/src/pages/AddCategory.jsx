import { useState } from "react";
import axios from "axios"

function AddCategory() {

    const apiUrl = "http://localhost:3001"

    const [category, setCategory] = useState({
        name: "",
        description: ""
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
        const res = await axios.post(`${apiUrl}/categories`, category)
        console.log(res);
    }



    return (
        <>
            <div className="container my-4">
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