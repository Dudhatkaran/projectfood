import React, { useEffect, useState } from 'react'
import style from "./List.module.css"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const List = () => {

    const [blogDatas, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:1234/api/getAllBlogs`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
                .then((data) => {
                    setBlogDatas(data.dataAdd)
                })
                .catch((error) => console.log('error::: ', error))
        }
        fetchApi();
    }, [])

    const deleteData = async (id) => {
        // console.log('id::: ', id);
        fetch(`http://localhost:1234/api/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => res.json())
            .then((data) => {
                // console.log('data::: ', data.message)
                if (data.Message === "The blog is remove") {
                    const delete_data = blogDatas.filter((ele, index) => ele._id !== id);
                    setBlogDatas(delete_data)
                    toast.error("Data removed !", {
                        position: toast.POSITION.TOP_LEFT
                    });
                }
            }
            ).catch((err) => {
                // console.log('err::: ', err)
            })
    }



    return (
        <>
            <center>
                <table className={ style.table } >
                    <thead>
                        <tr >
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Image</th>
                            <th colSpan={ 2 }>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogDatas.slice(0, 30).map((data, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ index + 1 }</td>
                                        <td>{ data.titel }</td>
                                        <td>{ data.type }</td>
                                        <td>{ data.Description }</td>
                                        <td>  <img src={ `http://localhost:1234/public/${data.Filepath}` } alt="ngn" height={ 50 } width={ 50 } /> </td>
                                        <td>
                                            <button className={ style.delete } onClick={ () => deleteData(data._id) }>Delete</button>
                                        </td>
                                        <td>
                                            <Link to={ `/add-blog?${data._id}` }><button className={ style.edit }>Edit</button></Link>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </center>
        </>
    )
}

export default List