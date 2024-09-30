import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { searchWithKey } from "../Redux/Slices/productSlice";

function Header() {

  const {items}=useSelector((state)=>state.wishReducer)
  const { cart } = useSelector((state) => state.cartReducer);

  const [key,setKey]=useState("")
  const dispatch=useDispatch()

  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="/" style={{color:"navy",textShadow:"0 0 2px white"}}>
          <i className="fa-solid fa-dumpster fa-xl" style={{color:'#0e47aa'}}/>
            {' '}
            E-Kart
          </Navbar.Brand>
          <div className="d-flex">
            <div className="d-flex">
              <input type="text" onChange={(e)=>setKey(e.target.value)} placeholder="search your product" className="form-control"/>
              <button className="btn btn-info me-4" onClick={()=>dispatch(searchWithKey(key))}>Search</button>
            </div>
            <Link className="btn border border-1 border-dark me-3 bg-light" to={'/wish'}>
            <i className="fa-solid fa-heart" size="xs" style={{color: "#f60909",}} />
            WishList
            {' '}
            <span className="badge bg-secondary">{items?.length}</span>
            </Link>            
            <Link className="btn border border-1 border-dark me-3 bg-light" to={'/cart'}>
            <i className="fa-solid fa-cart-plus" style={{color: "#064cc6",}} />
            Cart
            {' '}
            <span className="badge bg-secondary">{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
