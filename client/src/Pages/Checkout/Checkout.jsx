import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { makePayment } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePayment = (e) => {
    e.preventDefault();
    makePayment([], dispatch);
    toast.success("Payment Successful", {
      position: "top-center",
      theme: "colored",
      autoClose: 1000,
      hideProgressBar: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div style={{ background: "#ECEFEC" }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Credit_or_Debit_Card_Flat_Icon_Vector.svg/1024px-Credit_or_Debit_Card_Flat_Icon_Vector.svg.png?20180301080914"
              alt="img1"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex flex-wrap justify-content-center p-2 align-items-center">
              <form
                className="mt-5 p-5 "
                style={{
                  background: "white",
                  width: "350px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <h2 className="mb-3">Payment Details</h2>
                <div className="mb-3 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 ">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Month"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 ">
                  <div className="d-flex flex-wrap justify-content-between mt-4">
                    <div>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          navigate("/cart");
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={handlePayment}
                      >
                        Confirm and Pay
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Checkout;
