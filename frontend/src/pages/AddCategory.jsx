function AddCategory() {
    return (
        <>
            <div className="container my-4">
                <h3>Add Category</h3>

                <div>
                    <div className="mb-3">
                        <label htmlFor="cname" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="cname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cdesc" className="form-label">Category Description</label>
                        <input type="text" className="form-control" id="cdesc" />
                    </div>

                    <div className="mb-3">
                        <button type="button" className="btn btn-dark">Add</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AddCategory;