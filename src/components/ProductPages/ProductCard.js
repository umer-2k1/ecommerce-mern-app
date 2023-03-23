import React from "react";
import ReactStars from "react-rating-stars-component";
import "../../Style/ProductCard.css";

import { Link } from 'react-router-dom';


function ProductCard({ prod }) {
  // window.scrollTo(0, 0)
  const options = {
    edit: false,
    activeColor: "tomato",
    color: "rgba(20,20,20,0.2)",
    value: prod.rattings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  return (
<>
    
      {/* <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="flex md:items-center md:justify-start justify-center  flex-wrap -m-4"> */}
            <Link  to={`/product/getProductDet/${prod._id}`}  className="card mb-6 h-[72vh] mx-12 cursor-pointer lg:w-1/5 md:w-1/3  w-2/3" >
              <div className="relative w-max-sm overflow-hidden">
<img  alt="ecommerce" className="w-full h-[38vh]"  src={prod.images[0].url}/>
              </div>
              <div className="mt-4 p-3">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {prod.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {prod.title}
                </h2>
                <div>
                  <ReactStars {...options} /> <span>({prod.nofReviews} reviews)</span>
                </div>
                <p className="mt-1 text-orange-700 text-lg font-bold">Rs. {prod.prize}</p>
              </div>
            </Link>

          {/* </div>
        </div>
      </section> */}

      </>
  );
}

export default ProductCard;
