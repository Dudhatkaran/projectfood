/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    let navi = useNavigate();
    const [data, setData] = useState({
        title: "",
        describe: "",
        type: "",
    })
    const [file, setFile] = useState();
    console.log('file::: ', file);

    const handleChangeValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const saveData = () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('data', JSON.stringify(data));
        fetch("https://blog-back-12xs.onrender.com/api/BlogAPI", {
            method: "POST",
            body: formData
        }).then((res) => res.json())
            .then((data) => {
                console.log('data::: ', data.responce);
                if (data.responce === "sended") {
                    navi('/');
                }
            })
            .catch(err => console.log('err::: ', err))

        var name = document.getElementById("input").value;
        if (name === "") {
            document.getElementById("message").innerHTML = "*this field is required";
            document.getElementById("input").style.border = "1px solid red"
        } else {
            document.getElementById("message").innerHTML = "";
            document.getElementById("input").style.border = "1px solid black"
        }
    }

    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div style={ { width: "500px", margin: "auto" } }>
                    <h4 className="mb-3">Add Blog</h4>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="blog-title" className="form-label">Blog title</label>
                            <input
                                type="text"
                                className="form-control"
                                name='title'
                                onChange={ handleChangeValue }
                                value={ data.title }
                                id='input'
                                required="" />
                            <h1 id="message" class='message'></h1>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="blog-des" className="form-label">Blog Description</label>
                            <div className="input-group has-validation">
                                <textarea
                                    name='describe'
                                    onChange={ handleChangeValue }
                                    value={ data.describe }
                                    id='input'
                                    type="text" className="form-control" placeholder="Blog Description" required=""></textarea>
                                <h1 id="message" class='message'></h1>
                                <div className="invalid-feedback">
                                    Your blog-des is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <label htmlFor="blog-type" className="form-label">Blog type</label>
                            <select name='type'
                                onChange={ handleChangeValue }
                                id='input'
                                value={ data.type } className="form-select" required>
                                <option value="">Choose...</option>
                                <option>Food</option>
                                <option>Gameing</option>
                                <option>Traveling</option>
                                <option>Finace</option>
                            </select>
                            <h1 id="message" class='message'></h1>
                            <div className="invalid-feedback">
                                Please select option.
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="formFile" className="form-label">Default file input example</label>
                            <input onChange={ (e) => setFile(e.target.files[0]) } className="form-control" type="file" accept='image/jpg, image/png, image/jpeg' id="formFile" />
                        </div>
                    </div>
                    <hr />
                    <button onClick={ saveData } className="w-100 btn btn-primary btn-lg" type="submit">Add Blog</button>
                </div>
            </div>
        </>
    )
}

export default AddBlog