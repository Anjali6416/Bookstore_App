import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import { addItemtoCart } from "../../Redux/action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let newBook = {...item, quantity: 1};    
    addItemtoCart({ ...newBook }, dispatch);
    toast.success("Added to Cart", {
      position: "top-center",
      theme: "colored",
      autoClose: 500,
      hideProgressBar: true,
    });
  };
  return (
    <>
    <Card
      style={{ width: "18rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Card.Img
        style={{ padding: "10px", height: "300px" }}
        variant="top"
        src={
          item?.volumeInfo?.imageLinks?.thumbnail ||
          "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <ShowMoreText
                lines={1}
                more="..."
                less="less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                expanded={false}
                width={250}
                truncatedEndingComponent={""}
              >
                {item?.volumeInfo?.title}
              </ShowMoreText>
            </Card.Title>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Text>
              Rs. {item?.saleInfo?.listPrice?.amount || 1000}
            </Card.Text>
          </div>
          <div>
            <Card.Text>Rating:{item?.volumeInfo?.averageRating || 3}</Card.Text>
          </div>
        </div>

        <Card.Text>{item?.volumeInfo?.authors?.toString()}</Card.Text>
        <div className="d-flex justify-content-between">
          <div>
            <Button
              variant="success"
              onClick={() => {
                navigate(`/book-details/${item.id}`);
              }}
            >
              View
            </Button>
          </div>
          <div>
            <BsCart4
              style={{ fontSize: "30px", color: "green", cursor: "pointer" }}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
    <ToastContainer />
   </>
  );
}

export default BasicCard;
