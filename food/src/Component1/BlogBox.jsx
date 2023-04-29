/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
const BlogBox = ({ data }) => {
    return (
        <>
            <div className="card" style={ { width: "20rem" } }>
                <img
                    src={ `https://blog-back-12xs.onrender.com/public/${data.fileprth}` }
                    className="d-block mx-lg-auto img-fluid"
                    lt="Bootstrap Themes"
                    loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title">{ data.titel }</h5>
                    <p className="card-text">{ data.type }</p>
                    <p className="card-text">{ data.Description }</p>
                    <a className="btn btn-primary">Go To Blog</a>
                </div>
            </div>
        </>
    )
}

export default BlogBox