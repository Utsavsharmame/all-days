let id = localStorage.getItem("id");
let mainCnt = document.getElementById("mainCnt");

if (id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((a) => {
      return a.json();
    })
    .then((val) => {
      let title = val.title;
      let category = val.category;
      let img = val.image;
      let price = val.price;
      let desc = val.description;
      mainCnt.innerHTML = `
    
    
    <div>

    <img src="${img}" alt="${title}" style="height:300px;  width:300px;"/>
    <h2 >${title}</h2>
    <h3>Category: ${category}</h3>
    <h3>Price: ${price}</h3>
    <p>${desc}</p>

    </div>`;
      console.log(val);
    })
    .catch((err) => {
      console.error(err.message);
    });
}
