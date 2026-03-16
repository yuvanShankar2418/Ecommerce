import React from 'react';
import img1 from '../img/imag1.jpeg';
import img2 from '../img/imag2.jpeg';
import img3 from '../img/imag3.jpeg';
import img4 from '../img/imag4.jpeg';
import img5 from '../img/imag5.jpeg';
import img6 from '../img/imag6.jpeg';
import img7 from '../img/imag7.jpeg';
import img8 from '../img/imag8.jpeg';
import img9 from '../img/imag9.jpeg';
import img10 from '../img/imag10.jpeg';
import img11 from '../img/imag11.jpeg';
import img12 from '../img/imag12.jpeg';



const dresses = [
  { id: 1, name: 'Chanel coco', price: 620, img:img1},
  { id: 2, name: 'Eve Sandal', price: 450, img:img2 },
  { id: 3, name: 'Danbaoly', price: 300, img:img3 },
  { id: 4, name: 'Blazer', price: 1300, img:img4 },
  { id: 5, name: 'Reward watch', price: 799, img:img5 },
  { id: 6, name: 'Vinzent chase', price: 550, img:img6 },
  { id: 7, name: 'T-shirts', price: 999, img:img7 },
  { id: 8, name: 'Denim-Phants', price: 1299, img:img8 },
  { id: 9, name: 'Jacket', price: 599, img:img9},
  { id: 10, name: "Men's Fashwash", price: 280, img:img10},
  { id: 11, name: 'Hoodie', price: 499, img:img11},
  { id: 12, name: 'Trousers', price: 299, img:img12}
];

function Products({ addToCart }) {
  return (
    <div className="dress-grid">  
      
      {dresses.map((item) => (
        <div style={{margin:"10px 30px",}} className="card" key={item.id}>
          
          <img style={{padding:'10px'}} src={item.img} alt={item.name} />
          <h3 style={{textAlign:"center"}}>{item.name}</h3>
          <p style={{textAlign:"center"}}>₹{item.price}</p>
          <button className='btn btn-primary m-3' onClick={() => addToCart(item)}>
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}
                                                                            
export default Products;
