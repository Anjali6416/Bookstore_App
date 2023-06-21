import {useState} from 'react'
import "./Book_Details.css";
import { AiFillStar } from "react-icons/ai";

const Book_Details = () => {
    const [currentImg, setCurrentImg] = useState(
        "https://images.pexels.com/photos/964547/pexels-photo-964547.jpeg?auto=compress&cs=tinysrgb&w=600"
      );
      const handleImageMouseOver = (e) => {
        setCurrentImg(e.target.src);
      };
   
    
// const allHoverImages = document.querySelectorAll('.hover-container div img');
// const imgContainer = document.querySelector('.img-container');

// window.addEventListener('DOMContentLoaded', () => {
//     allHoverImages[0].parentElement.classList.add('active');
// });

// allHoverImages.forEach((image) => {
//     image.addEventListener('mouseover', () =>{
//         imgContainer.querySelector('img').src = image.src;
//         resetActiveImg();
//         image.parentElement.classList.add('active');
//     });
// });

// function resetActiveImg(){
//     allHoverImages.forEach((img) => {
//         img.parentElement.classList.remove('active');
//     });
// }
  return (
    <div className= "main-wrapper">
        <div className= "container">
            <div className= "product-div">
                <div className= "product-div-left">
                    <div className= "img-container">
                        <img src = "currentImg" alt = "watch"/>
                    </div>
                    <div className= "hover-container">
                        <div><img src = "https://images.unsplash.com/photo-1613643708215-e3a0b5e5cd8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  onMouseOver={handleImageMouseOver}/></div>
                        <div><img src = "https://images.unsplash.com/photo-1549737221-bef65e2604a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  onMouseOver={handleImageMouseOver}/></div>
                        <div><img src = "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  onMouseOver={handleImageMouseOver}/></div>
                        <div><img src = "https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  onMouseOver={handleImageMouseOver}/></div>
                        <div><img src = "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  onMouseOver={handleImageMouseOver}/></div>
                    </div>
                </div>
                <div className= "product-div-right">
                    <span className= "product-name">(New) Analog Watch - For Men</span>
                    <span className= "product-price">$ 50.25</span>
                    <div className= "product-rating">
                        <span><AiFillStar style={{color:'#FF9F00'}}/></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                    <p className= "product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    <div className= "btn-groups">
                        <button type = "button" className= "add-cart-btn"><i className= "fas fa-shopping-cart"></i>add to cart</button>
                        <button type = "button" className= "buy-now-btn"><i className= "fas fa-wallet"></i>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book_Details