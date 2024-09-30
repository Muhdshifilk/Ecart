import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../Redux/Slices/wishSlice";
import { addToCart } from "../Redux/Slices/cartSlice";

function Wish() {
  const {items}=useSelector((state)=>state.wishReducer)
  console.log(items);
  
  const dispatch=useDispatch()

  const handleAddToCart=(data)=>{
    dispatch(addToCart({...data}))
    dispatch(removeFromWishList(data.id))
  }

  return (
    <>
    <h3 className="my-3 text-center">WishList</h3>
      <div className="row container-fluid p-3">
        {
          items?.length>0 ?
          items?.map((wish)=>(
          <div className="col-3">
          <div className="card h-100">
            {/* <!-- Product image--> */}
            <img
              className="card-img-top"
              src={wish.thumbnail}
              alt="..."
            />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{wish.title}</h5>
                {/* <!-- Product price--> */}
                ${wish.price}
              </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <button className="btn" onClick={()=>(dispatch(removeFromWishList(wish.id)))}>
                <i className="fa-solid fa-heart-circle-xmark" style={{color: "#f02805",}} />
                </button>
                <button className="btn" onClick={()=>{handleAddToCart(wish)}}>
                <i className="fa-solid fa-cart-plus text-info" />
                </button>
              </div>
            </div>
          </div>
        </div>
        ))
        :
        (
          <h3 className="text-center " style={{color:'red'}}>No Items Added!!</h3>
        )
      }
      </div>
    </>
  );
}

export default Wish;
