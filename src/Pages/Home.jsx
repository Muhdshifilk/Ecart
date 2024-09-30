import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductThunk ,prevPage,nextPage} from "../Redux/Slices/productSlice";
import { Spinner } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const { products, error, loading, ProductsPerPage, currentPage } =
    useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProductThunk());
    console.log(products);
  }, []);

  const totalPages = Math.ceil(products?.length / ProductsPerPage);
  const lastProductIndex = currentPage * ProductsPerPage;
  const firstProductIndex = lastProductIndex - ProductsPerPage;
  const visibleProducts = products?.slice(firstProductIndex, lastProductIndex);

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(prevPage());
    }
  };

  return (
    <>
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <Carousel>
              <Carousel.Item>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                  className=""
                  width={"80%"}
                  height={"400px"}
                  alt="img1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                  className=""
                  width={"80%"}
                  height={"400px"}
                  alt="img2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
                  className=""
                  width={"80%"}
                  height={"400px"}
                  alt="img3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading ? (
              <h3>
                <Spinner
                  className="text-info"
                  animation="border"
                  role="status"
                ></Spinner>
                <span>Loading...</span>
              </h3>
            ) : error ? (
              <h3>{error}</h3>
            ) : (
              <>
                {products?.length > 0 &&
                  visibleProducts?.map((item) => (
                    <div className="col mb-5">
                      <div className="card h-100">
                        {/* <!-- Product image--> */}
                        <img
                          className="card-img-top"
                          src={item?.thumbnail}
                          alt="..."
                        />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                          <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{item.title}</h5>
                            {/* <!-- Product price--> */}
                            {item.price}
                          </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            <Link
                              to={`/view/${item?.id}`}
                              className="btn btn-outline-info"
                            >
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </section>
      <div className="mt-4 d-flex justify-content-center">
        <div className="d-flex align-items-center">
        <button className="btn">
            <i className="fa-solid fa-angles-left" onClick={handlePrev} />
          </button>
          <span className="mx-2">{currentPage} / {totalPages}</span>
          <button className="btn">
            <i className="fa-solid fa-angles-right" onClick={handleNext}/>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
