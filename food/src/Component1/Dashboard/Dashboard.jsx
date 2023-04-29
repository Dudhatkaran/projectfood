/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import style from './Dashboard.module.css'
import img1 from "../img/restaurant.jpg"
import BlogBox from '../BlogBox';



const Dashboard = () => {
    const [blogDatas, setBlogDatas] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            fetch(`https://blog-back-12xs.onrender.com/api/getAllBlogs`, {
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
    return (
        <>
            <section className={ style.hero }>
                <div>
                    <h1>Hello Foodeis</h1>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.  including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments</p>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                    </p><br /><br />
                    <a className={ style.cta }>Learn more</a>
                </div>
                <img src={ img1 } alt="" />
            </section>
            <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" } }>
                {
                    blogDatas.slice(0, 22).map((data, index) => (
                        <div style={ { margin: "10px 0" } } key={ index }>
                            <BlogBox data={ data } />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Dashboard