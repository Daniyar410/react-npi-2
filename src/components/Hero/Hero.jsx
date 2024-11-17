import React, { useEffect, useState } from 'react'
import './Hero.scss'

const Hero = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    }, [])


    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="wrap">

                    {data.map(products => (
                        <div key={products.id} className="card">
                            <h2>{products.title}</h2>
                            <b>{products.price}</b>
                            <p>{products.description}</p>
                            <p>{products.category}</p>
                            <img src={products.image} alt="" />
                            <h3>{products.rating.rate}</h3>
                        </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )


}

export default Hero