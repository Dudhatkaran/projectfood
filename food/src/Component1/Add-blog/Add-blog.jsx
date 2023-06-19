/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'


const AddBlog = () => {
    let navi = useNavigate();
    const location = useLocation();
    console.log('location::: ', location.search.split('?')[1]);

    const [data, setData] = useState({
        titel: "",
        describe: "",
        type: "",
    })

    useEffect(() => {
        const id = location.search.split('?')[1];
        const editdata = async () => {
            fetch(`http://localhost:1234/api/getEditdata`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ my_id: id }),
                })
                .then((response) => response.json())
                .then((data) => {
                    setData({
                        ...data,
                        titel: data.datas.titel,
                        describe: data.datas.Description,
                        type: data.datas.type,
                    })
                }
                ).catch((err) => {
                    console.log('err::: ', err);
                })
        }
        editdata()
    }, [])


    const [file, setFile] = useState();
    console.log('file::: ', file);

    const handleChangeValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const saveData = () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('data', JSON.stringify(data));
        fetch(`http://localhost:1234/api/createBlog`, {
            method: "POST",
            body: formData
        }).then((res) => res.json())
            .then((data) => {
                console.log('data::: ', data.responce);

                if (data.responce === "sended") {
                    navi('/list');
                    toast("Data added !");
                }
            })
            .catch(err => console.log('err::: ', err))

        // var name = document.getElementById("input").value;
        // if (name === "") {
        //     document.getElementById("message").innerHTML = "*this field is required";
        //     document.getElementById("input").style.border = "1px solid red"
        // } else {
        //     document.getElementById("message").innerHTML = "";
        //     document.getElementById("input").style.border = "1px solid black"
        // }
    }



    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div style={ { width: "500px", margin: "auto" } }>
                    <h4 className="mb-3">Add Blog</h4>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="blog-title" className="form-label">Food title</label>
                            <input
                                type="text"
                                className="form-control"
                                name='title'
                                onChange={ handleChangeValue }
                                value={ data.title }
                                // id='input'
                                required="" />
                            {/* <span id="message" class='message'></span> */ }
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="blog-des" className="form-label">Food Description</label>
                            <div className="input-group has-validation">
                                <textarea
                                    name='describe'
                                    onChange={ handleChangeValue }
                                    value={ data.describe }
                                    // id='input'
                                    type="text" className="form-control" placeholder="Blog Description" required=""></textarea>
                                {/* <span id="message" class='message'></span> */ }
                                <div className="invalid-feedback">
                                    Your blog-des is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <label htmlFor="blog-type" className="form-label">Food type</label><br /><br />
                            <select name='type'
                                onChange={ handleChangeValue }
                                // id='input'
                                value={ data.type } className="form-select" required>
                                <option value="">Choose...</option>
                                <option>Burger</option>
                                <option>French-frice</option>
                                <option>Sandwich</option>
                                <option>Pizza</option>
                                <option>Subway</option>
                                <option>Sizzler</option>
                            </select>
                            {/* <span id="message" class='message'></span> */ }
                            <div className="invalid-feedback">
                                Please select option.
                            </div>
                        </div>
                        <div className="col-5">
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