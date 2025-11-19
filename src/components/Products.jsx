// import React from "react";
// import "./Products.css";
// import part1 from "../assets/part1.jpg";
// import part2 from "../assets/part2.jpg";
// import part3 from "../assets/part3.jpg";

// const products = [
//   { id:1, title:"Side Panel / Fairing", img: part1, mat:"ABS", desc:"High finish side panel for motorcycles." },
//   { id:2, title:"Mudguard (Front/Rear)", img: part2, mat:"PP", desc:"Durable mudguards with UV resistance." },
//   { id:3, title:"Tank Cover", img: part3, mat:"ABS", desc:"Decorative & protective tank covers." },
// ];

// export default function Products() {
//   return (
//     <section id="products" className="section">
//       <div className="container">
//         <h2 style={{color:"#0033a0", marginBottom:16}}>Products</h2>
//         <div className="grid-3">
//           {products.map(p => (
//             <div key={p.id} className="product-card">
//               <div className="product-media" style={{backgroundImage:`url(${p.img})`}} />
//               <div className="product-body">
//                 <h4>{p.title}</h4>
//                 <p className="mat">{p.mat}</p>
//                 <p className="desc">{p.desc}</p>
//                 <a className="btn" href="#contact" style={{marginTop:10, background:"#0033a0", color:"#fff"}}>Enquire</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
