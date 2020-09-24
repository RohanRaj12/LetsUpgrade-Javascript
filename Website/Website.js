let merch = [
    {
      id: 1,
      name: "BLAZER",
      size: "M",
      color: "Ash",
      price: 8000,
      image: "https://4.imimg.com/data4/BA/FB/MY-34654392/men-s-winter-blazer-500x500.jpg",
      description: "Classy stylish Blazer",
    },
    {
      id: 2,
      name: "PULLOVER",
      size: "M",
      color: "Black",
      price: 1000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqDAUhJqeGSbzhrsmD14J6tPcielmfQHemcQ&usqp=CAU",
      description: "Pure cotton plain pullover",
    },
  
    {
      id: 3,
  
      name: "JACKET",
      size: "L",
      color: "Black",
      price: 9000,
      image:"https://img5.cfcdn.club/5c/10/5c830268d7872288e12cef4986770010_350x350.jpg",
      description: "Genuine Leather Jacket",
    },
  
    {
      id: 4,
      name: "CASUAL SHOES",
      size: "10",
      color: "Black",
      price: 3000,
      image: "https://waliicorners.com/wp-content/uploads/2019/07/2019-summer-Man-Casual-Shoes-Non-slip-Men-Shoes-Men-s-High-Top-Fashion-Sneakers-Trend-6-600x600.jpg",
      description: "White Sneakers For Causal Wear",
    },
  
    {
      id: 5,
      name: "MEN WATCH",
      size: "Free Size",
      color: "Bluish Tone",
      price: 8000,
      image:"https://menswear.pk/wp-content/uploads/2018/04/t-winner-white-stylish-watch-for-men-mw-898-image1.jpg",
      description: "Royal Feel Classy analog watch",
    },
  
    {
      id: 6,
      name: "PANTS",
      size: "M",
      color: "Gray",
      price: 2000,
      image:
        "https://sc01.alicdn.com/kf/HTB1UjB9iyFTMKJjSZFAq6AkJpXai/230324620/HTB1UjB9iyFTMKJjSZFAq6AkJpXai.jpg",
      description: "Gentlemen's pants",
    },
    {
      id: 7,
      name: "SHOES",
      size: "10",
      color: "Blue",
      price: 7000,
      image:
        "https://sc01.alicdn.com/kf/H7ba1885cedd34e679f30e74d07027ce4d.png",
      description: "Slip on Shoes",
    },
    {
      id: 8,
      name: "SHIRT",
      size: "M",
      color: "Blue",
      price: 1000,
      image:
        "https://i1.wp.com/www.winkaryo.com/wp-content/uploads/2020/01/Men-Shirt-2019-Casual-Slim-Fit-White-Shirts-Mens-Korean-Style-Long-Sleeve-Social-Camisa-Business-1.jpg?fit=800%2C800&ssl=1",
      description: "Good looking suit",
    },
    {
      id: 9,
      name: "SUNGLASS",
      size: "Free size",
      color: "Blue Tint",
      price: 1200,
      image: "https://mytravelaccessories.com/wp-content/uploads/2019/09/13754-097cae.jpeg",
      description: "UV Protected glasses",
    },
    {
      id: 10,
      name: "TIE",
      size: "M",
      color: "Blakish Tone",
      price: 1000,
      image: "https://4.imimg.com/data4/LN/PX/MY-2/formal-mens-tie-500x500.jpeg",
      description: "Cotton Tie",
    },
    {
      id: 11,
      name: "LEATHER SHOES",
      size: "M",
      color: "Black",
      price: 6000,
      image:
        "https://i.pinimg.com/originals/c7/3c/d7/c73cd795af7bac167e614a4a948a81ba.jpg",
      description: "Black Royal Pure Leather Shoes",
    },
    {
      id: 12,
      name: "BELTS",
      size: "M",
      color: "Black",
      price: 800,
      image:
        "https://www.dhresource.com/0x0/f2/albu/g7/M01/E6/64/rBVaSVpceHuAIgbiAAHQm7lFNgY647.jpg/ciartuar-men-039-s-genuine-leather-belt-designer.jpg",
      description: "Leather Long lasting Belt",
    },
  ];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  
  
  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Cool Man!\nDont add the same product twice");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
  function search(){
      console.log("calling");
  }
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filter(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function search(){
      let str= document.getElementById("serstr").value;
      console.log(str);
      let items = merch.filter(function(ele) {
        return ele.name.indexOf(str)!=-1;
      });
      displaymerch(items);
  
  
  }
  displaymerch(merch);