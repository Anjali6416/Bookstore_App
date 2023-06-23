import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicCard from "../../Components/Card/Card";
import { Accordion, Form } from "react-bootstrap";


const Home = () => {
 
  const [allBooks, setAllBooks] = useState([]);
  const [input, setInput] = useState("");
  const [eng, setEng] = useState(true);
  const [hnd, setHnd] = useState(true);
  const [sortState, setSortState] = useState("");

  const handleBookSerch = async () => {
    try {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&key=%20%20AIzaSyBNMGBuQZI1jXLtcDWD1ngvae7r3m2_y80`
      );

      let data = await res.json();
      // console.log("Search", data.items);
      setAllBooks(data.items);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q={search_query}&key=%20%20AIzaSyBNMGBuQZI1jXLtcDWD1ngvae7r3m2_y80`
      );

      let data = await res.json();
      // console.log(data.items);
      setAllBooks(data.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className={style.main}>
        <Container style={{ paddingTop: "100px", paddingBottom: "80px" }}>
          <Row>
            <Col xs={12} md={6}>
              <div className={style.textDiv}>
                <h1>Buy and Sell your textbooks for best Prices </h1>
                <p>
                “If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”
                </p>
                <nav className="navbar navbar-light bg-#ECEFEC">
                  <div className="container-fluid ">
                    <div className="d-flex" style={{ marginLeft: "-11px" }}>
                      <input
                        className="form-control me-3"
                        type="search"
                        placeholder="Search for Books .."
                        aria-label="Search"
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                      />
                      <button
                        className="btn btn-outline-success"
                        type="submit"
                        onClick={handleBookSerch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={style.imageDiv}>
                <img
                  src="https://i.pinimg.com/originals/47/ba/bb/47babb5dda082f490ebe21390a9cad2c.png"
                  alt="front"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border-red p-4 " style={{ background: "" }}>
        <h1 className="text-center p-4">Books</h1>
        <div
          className="d-flex flex-wrap px-4 py-2 justify-content-between"
          style={{ width:"90%",margin:"auto" }}
        >
          <div>
            <Accordion style={{ width: "200px", padding: "1px" }}>
              <Accordion.Item
                eventKey="0"
                className="border-0"
                // style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <Accordion.Header>Select Language</Accordion.Header>
                <Accordion.Body style={{ padding: "5px 20px" }}>
                  <Form.Check
                    label="English"
                    style={{ fontSize: "20px" }}
                    checked={eng}
                    onChange={(e) => {
                      setEng(e.target.checked);
                    }}
                  />
                  <Form.Check
                    label="Hindi"
                    style={{ fontSize: "20px" }}
                    checked={hnd}
                    onChange={(e) => {
                      setHnd(e.target.checked);
                    }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <Form.Select
              size="md"
              className="border-0"
              onChange={(e) => {
                setSortState(e.target.value);
              }}
            >
              <option value={""}>Sort By Price</option>
              <option value={"lth"}>Low to High</option>
              <option value={"htl"}>High to Low</option>
            </Form.Select>
          </div>
        </div>

        {allBooks.filter((elem) => {
          let lang = elem?.volumeInfo?.language;

          return (lang == "en" && eng) || lang == "hn" || (lang == "kn" && hnd);
        }).length === 0 && (
          <div style={{ minHeight: "300px", textAlign: "center" }}>
            <h1>No Books</h1>
          </div>
        )}

        <Container>
          <Row className="gx-5 gy-5">
            {allBooks
              .filter((elem) => {
                let lang = elem?.volumeInfo?.language;
                return (lang == "en" && eng) || (lang == "hn" && hnd);
              })
              .sort((a, b) => {
                let priceA = a?.saleInfo?.listPrice?.amount || 1000;
                let priceB = b?.saleInfo?.listPrice?.amount || 1000;
                if (sortState === "htl") {
                  return +priceB - +priceA;
                } else if (sortState === "lth") {
                  return +priceA - +priceB;
                } else {
                  return 0;
                }
              })
              .map((el, i) => {
                return (
                  <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    {" "}
                    <BasicCard item={el} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
