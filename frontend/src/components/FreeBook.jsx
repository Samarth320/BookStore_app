import React from 'react'
import Slider from "react-slick";
import Card from './Card';

// mark
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../Data/list.json"

const FreeBook = () => {

    const filterData = list.filter( (data)=>data.category === "Free" )
    console.log(filterData);

    // mark
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1> 
                <p>Unlock your potential with our comprehensive free courses, designed to fit all learning styles. Dive into a world of knowledge and skill-building at no cost. Start your learning journey today and achieve your goals.</p>
            </div>
       
       
            <div>
                <Slider {...settings}>
                    {
                        filterData.map( (item)=>(
                            <Card item={item} key={item.id} />
                        ) )
                    }
                </Slider>

            </div>

       </div> 
    </>
  )
}

export default FreeBook

// import React, { useEffect, useState } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import axios from "axios";

// import Cards from "./Cards";
// function Freebook() {
//   const [book, setBook] = useState([]);
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");

//         const data = res.data.filter((data) => data.category === "Free");
//         console.log(data);
//         setBook(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div>
//           <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//             corporis nulla non suscipit, iure neque earum?
//           </p>
//         </div>

//         <div>
//           <Slider {...settings}>
//             {book.map((item) => (
//               <Cards item={item} key={item.id} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Freebook;
