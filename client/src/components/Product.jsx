import React,{useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingImg from "/src/assets/Star.png";
import products from "../product.json";
import CartContext from "../context/CartContext";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data,setData] = useState([])
  const getData = async()=>{
    try {
      setIsLoading(true);
      const req = await fetch("http://localhost:3000/api/product/products");
      const res = await req.json();
      console.log(res.product);
      setData(res.product);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      
    }

  } 

  useEffect(()=>{
    getData()
  },[])

  // useEffect(()=>{})
 const {handleAddToCart,cart} = useContext(CartContext)
   const isItemInCart = (itemId)=> cart.some((product)=>product._id === itemId)
 
  return (
    <>
     <div className="text-center" >
      {isLoading ? <h1 className="text-success">Loading...</h1> : null}

    </div>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {data.map((product) => {
          const { image, _id, title, price, discountPrice, rateCount, rating } = product;
          return (
            <Card className="card-container" key={_id}>
              <Card.Img variant="" className="w-100 card-img" src={image} />
              <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <div className="d-flex gap-1">
                  <div className="pt-1">
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                    <img src={ratingImg} alt="rating-img" />
                  </div>
                  <div className="d-flex gap-2 pt-2">
                    <p> {rating} </p>
                    <p> ({rateCount}) </p>
                  </div>
                </div>
                <Card.Text className="d-flex align-items-center gap-2 pt-2">
                  <span className="card-price">#{price}</span>
                  <span className="card-discount-price text-decoration-line-through">
                    #{discountPrice}
                  </span>
                </Card.Text>
                <button
                  disabled={isItemInCart(_id)}
                  onClick={() => handleAddToCart(product)}
                  className="add-to-card-btn w-100">
                  {isItemInCart(_id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </main>
    </>
  );
};

export default Product;
