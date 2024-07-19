import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {

    const [bookData , setBookData] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            try{
               const res = await axios.get("http://localhost:4001/book")
               console.log("printing course data")
               console.log(res.data)
               setBookData(res.data)
            }
            catch(error)
            {
              console.log(error);
            }
        }

        getData();
    },[])

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

            <div className='pt-28 text-center'>
                <h1 className='text-2xl md:text-4xl'>
                  We're delighted to have you <span className='text-pink-500'>Here! :)</span>
                </h1>

                <p className='mt-12'>
                    Explore our Bestsellers section to discover the most popular titles captivating readers around the world. Stay updated with our New Arrivals and find your next favorite book among the latest releases. Browse through our extensive Genres collection, catering to every taste and interest. Additionally, check out our Recommended Reads, featuring handpicked selections tailored to your unique reading preferences.
                </p>

                <Link to="/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
                </Link>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    bookData.map( (item)=>(
                        <Card item={item} key={item.id} />
                     ) )
                }
            </div>

        </div>
    </>
  )
}

export default Course