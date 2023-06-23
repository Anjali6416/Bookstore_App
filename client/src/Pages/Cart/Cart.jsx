import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillDelete } from "react-icons/ai";
import ShowMoreText from "react-show-more-text";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity, removeItemfromCart } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const { cartItems } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("cartItems:", cartItems);
  const handleUpdateQuantity = (ID, qnt) => {
    updateCartItemQuantity({ id: ID, quantity: qnt }, dispatch);
  };

  const handleDeleteItem = (id) => {
    removeItemfromCart(id, dispatch);
    toast.warn("Removed Item", {
      position: "top-center",
      theme: "colored",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const calSubTotal = () => {
    let sum = 0;
    cartItems.forEach((ele) => {
      sum += +(ele?.saleInfo?.listPrice?.amount || 1000) * ele.quantity;
    });
    return sum;
  };
  return (
    <div>
      <Container className="mt-5">
        <Row className="gx-5 gy-5">
          <Col xs={12} md={8} className="">
            {/* <div
              className="d-flex flex-wrap justify-content-between p-2 align-items-center"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1533000971552-6a962ff0b9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  height="50px"
                  width="80px"
                  style={{ visibility: "hidden" }}
                />
              </div>
              <div className="mt-3">
                <p>Product</p>
              </div>
              <div className="mt-3">
                <p>Price</p>
              </div>
              <div>
                <div className="mt-3">
                  <p>Quantity</p>
                </div>
              </div>

              <div className="mt-3">
                <p>Remove</p>
              </div>
            </div> */}
            {cartItems.length == 0 && <div><h2 className="text-center">No Items</h2></div>}
            {cartItems.map((elem) => {
              return (
                <div
                  className="d-flex flex-wrap justify-content-between p-3 align-items-center"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <div>
                    <img
                      src={elem?.volumeInfo?.imageLinks?.thumbnail}
                      height="50px"
                      width="80px"
                      alt="img2"
                    />
                  </div>
                  <div className="mt-3">
                    {/* <p>{elem?.volumeInfo?.title}</p> */}
                    <p>
                    <ShowMoreText
                      lines={1}
                      more="..."
                      less="less"
                      className="content-css"
                      anchorClass="show-more-less-clickable"
                      expanded={false}
                      width={180}
                      truncatedEndingComponent={""}
                    >
                      {elem?.volumeInfo?.title}
                    </ShowMoreText></p>
                  </div>
                  <div className="mt-3">
                    <p>Rs. {elem?.saleInfo?.listPrice?.amount || 1000}</p>
                  </div>
                  <div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                          if (elem.quantity > 1) {
                            handleUpdateQuantity(elem.id, -1);
                          }
                        }}
                      >
                        -
                      </button>
                      <button type="button" className="btn btn-light">
                        {elem.quantity}
                      </button>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                          if (elem.quantity < 5) {
                            handleUpdateQuantity(elem.id, 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <AiFillDelete
                      style={{
                        fontSize: "30px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        handleDeleteItem(elem.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Col>
          <Col xs={12} md={3}>
            <div
              className="p-3"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <div>
                <h3 className="text-center p-2 mb-4">Cart Totals</h3>
              </div>
              <div className="d-flex justify-content-between p-1 align-items-center">
                <div>SubTotal:</div>
                <div>Rs. {Math.floor(calSubTotal())}</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between p-1 align-items-center">
                <div>Final Price:</div>
                <div>Rs. {Math.floor(calSubTotal() * 0.9)}</div>
              </div>
              <hr />

              <div className="d-flex justify-content-center mt-5 mb-3 align-items-center">
                {" "}
                <button type="button" className="btn btn-success " onClick={()=>navigate("/checkout")}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Cart;
