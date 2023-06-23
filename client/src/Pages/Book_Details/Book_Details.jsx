import { useEffect, useState } from "react";
import "./Book_Details.css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { addItemtoCart } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { updateCartItemQuantity } from "../../Redux/action";

let desc =
  "If you're ready to create web pages more complex than those you can build with HTML and CSS, Head First PHP & MySQL is the ultimate learning guide to building dynamic, database-driven websites using PHP and MySQL. Packed with real-world examples, this book teaches you all the essentials of server-side programming, from the fundamentals of PHP and MySQL coding to advanced topics such as form validation, session IDs, cookies, database queries and joins, file I/O operations, content management, and more.";

const Book_Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  const [currentImg, setCurrentImg] = useState(
    book?.volumeInfo?.imageLinks?.thumbnail ||
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
  );
  const handleImageMouseOver = (e) => {
    setCurrentImg(e.target.src);
  };
  const handleAddToCart = () => {
    let newBook = {...book, quantity: 1};
    // newBook.saleInfo.listPrice.amount = newBook?.saleInfo?.listPrice?.amount  || 1000;
    addItemtoCart({ ...newBook }, dispatch);
    toast.success("Added to Cart", {
      position: "top-center",
      theme: "colored",
      autoClose: 500,
      hideProgressBar: true,
    });
  };
  
  const getSingleBook = async () => {
    try {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      let data = await res.json();
      // console.log("data", data);
      setBook(data);
      setCurrentImg(data?.volumeInfo?.imageLinks?.thumbnail);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleBook();
  }, []);

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="product-div">
          <div className="product-div-left">
            <div className="img-container">
              <img src={currentImg} alt="img2" />
            </div>
            <div className="hover-container">
              <div>
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt="img2"
                  onMouseOver={handleImageMouseOver}
                />
              </div>
              <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60&h=695"
                  }
                  alt="img2"
                  onMouseOver={handleImageMouseOver}
                />
              </div>
              <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60&h=695"
                  }
                  alt="img2"
                  onMouseOver={handleImageMouseOver}
                />
              </div>

             
            </div>
          </div>
          <div className="product-div-right">
            <span className="product-name">{book?.volumeInfo?.title}</span>
            <span className="product-price">
              Rs. {book?.saleInfo?.listPrice?.amount || 1000}
            </span>
            <div className="product-rating">
              {new Array(book?.volumeInfo?.averageRating || 3)
                .fill(1)
                .map((rtn, i) => {
                  return (
                    <span key={i}>
                      <AiFillStar style={{ color: "#FF9F00" }} />
                    </span>
                  );
                })}

              <span>({book?.volumeInfo?.ratingsCount} ratings)</span>
            </div>
            <p className="product-description">
              {book?.volumeInfo?.description?.split("<")[1]?.slice(2) || desc}
            </p>
            <div className="btn-groups">
              <button
                type="button"
                className="add-cart-btn"
                onClick={handleAddToCart}
              >
                <i className="fas fa-shopping-cart"></i>add to cart
              </button>
              <button
                type="button"
                className="buy-now-btn"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="fas fa-wallet"></i>buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Book_Details;
