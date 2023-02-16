// $window.location.reload();
// sessionStorage.clear();

let data = [
    {
        "food_img": "f1.jpg",
        "food": "Bibimbap",
        "price": 4500,
        "description": "Bibimbap, sometimes romanized as bi bim bap or bi bim bop, is a Korean rice dish. The term bibim means mixing and bap refers to cooked rice. Bibimbap is served as a bowl of warm white rice topped with namul or kimchi and gochujang, soy sauce, or doenjang. A raw or fried egg and sliced meat are common additions."
    },
    {
        "food_img": "f2.jpg",
        "food": "Mandu Soup",
        "price": 4000,
        "description": "Mandu-guk or dumpling soup is a variety of Korean soup made by boiling mandu in a beef broth or anchovy broth mixed with beaten egg."
    },
    {
        "food_img": "f3.jpg",
        "food": "Sundubu-jjigae",
        "price": 6000,
        "description": "Sundubu-jjigae is a jjigae in Korean cuisine. The dish is made with freshly curdled soft tofu which has not been strained and pressed, vegetables, sometimes mushrooms, onion, optional seafood, optional meat, and gochujang or gochugaru."
    },
    {
        "food_img": "f4.jpg",
        "food": "Noodle",
        "price": 5000,
        "description": "Noodles are a type of food made from unleavened dough which is either rolled flat and cut, stretched, or extruded, into long strips or strings. Noodles are a staple food in many cultures and made into a variety of shapes."
    },
    {
        "food_img": "f5.jpg",
        "food": "Sushi",
        "price": 5500,
        "description": "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is sushi rice, also referred to as shari, or sumeshi."
    },
    {
        "food_img": "f6.jpg",
        "food": "Obentou",
        "price": 14000,
        "description": "Cooking Class Menu. an easy-to-make lunch. Obentou Dashimaki Japanese omelette. Nikumaki meat roll-ups."
    },
    {
        "food_img": "f7.jpg",
        "food": "Ramen",
        "price": 6500,
        "description": "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork, nori, menma, and scallions. Ramen has its roots in Chinese noodle dishes."
    },
    {
        "food_img": "f8.jpg",
        "food": "Sashimi (Large)",
        "price": 12000,
        "description": "Sashimi is a Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce."
    },
    {
        "food_img": "f9.jpg",
        "food": "Fried Mandu",
        "price": 3500,
        "description": "Heat the pan with 2 tablespoons of vegetable oil over medium high heat. Add the dumplings, making sure they aren't touching each other."
    },
    {
        "food_img": "f10.jpg",
        "food": "Sashimi (Small)",
        "price": 7000,
        "description": "Sashimi is a Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce."
    },
    {
        "food_img": "f11.jpg",
        "food": "SeaFood Noodle",
        "price": 15000,
        "description": "Samyang Seafood Party Ramen is an instant noodles type of spicy nature. The seafood content is hot red peppers based. The pack comes with noodles, flakes and soup sachets."
    },
    {
        "food_img": "f12.jpg",
        "food": "Fried Chicken",
        "price": 5500,
        "description": "Fried chicken, also known as Southern fried chicken, is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried. The breading adds a crisp coating or crust to the exterior of the chicken while retaining juices in the meat."
    }
];

$(document).ready(function () {
    // sessionStorage.clear();

    // count.classList.add("hide");

    if(sessionStorage.getItem("items") != null){
        let str = sessionStorage.getItem("items");
        let arr = JSON.parse(str);
        //arr[arr.length] = item;
        
        count.classList.remove("hide");
        count.innerHTML = arr.length;

        str = JSON.stringify(arr);
        sessionStorage.setItem("items",str);
    }

    show(data);
});

let arr;

let show=(e)=>{

    arr = e;

    // if(arr.length == data.length){
    //     sessionStorage.clear(); 
    // }
            
    for(i = 0; i < arr.length; i++){
        //console.log(arr[i].book);
        var item = document.createElement('div');

            item.innerHTML = `
            <div class="card h-100">
            <div class="card-img">
                <img class="card-img-top" src="assets/${arr[i].food_img}" alt="..." />
            </div>
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${arr[i].food}</h5>
                    <!-- Product price-->
                    ${arr[i].price} Ks
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer d-flex p-4 pt-0 border-top-0 bg-transparent">
                <button type="button" class="btn btn-outline-dark m-auto" data-bs-toggle="modal" data-bs-target="#model${i}">
                View Detail
                </button>
                <div class="text-center"><a class="btn btn-outline-dark m-auto" href="#" onclick="addToCart(${i});return false;">Add to cart</a></div>
            </div>
        </div>
          
          <!-- Modal -->
          <div class="modal fade" id="model${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${arr[i].food}</h1>
                  <button type="button" class="btn-cc" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-circle-fill"></i></button>
                </div>
                <div class="modal-body">
                ${arr[i].description}
                </div>
              </div>
            </div>
          </div>
                        `;

            item.classList.add("col","mb-5");
            itemRow.appendChild(item);
    }
}

let searchFood=(e)=>{
    let txt = e.value;
        // txt = txt.toLowerCase();
        console.log(txt);
        if( txt == ""){
            // sliderDiv.style.display = "block";
            itemRow.innerHTML = "";
            show(data);
        }else{
            let filter_data = data.filter((item, index, array)=>{
                let food_name = item.food.toLowerCase();
                if(food_name.includes(txt)){
                    return true;
                }
            })
        
            // sliderDiv.style.display = "none";
            itemRow.innerHTML = "";
        
            show(filter_data);
            console.log(filter_data);
        }
}

let hideShow=()=>{
    if(count.classList.contains("hide"))
        count.classList.remove("hide");
}

let addToCart=(e)=>{
    // for(i = 0; i < data.length; i++){
    //     if( i == e){
            // alert(data[e].food);
            let fImg = data[e].food_img;
            let fName = data[e].food;
            let fPrice = data[e].price;
            let fQty = 1;

            let item = {iImg:fImg, iName:fName, iPrice:fPrice, iQty:fQty};
            
            if(sessionStorage.getItem("items") == null){
                let arr = [item];
                let str = JSON.stringify(arr);
                sessionStorage.setItem("items",str);
                hideShow();
                count.innerHTML = 1;
            }else{
                let str = sessionStorage.getItem("items");
                
                let arr = JSON.parse(str);
                // arr[arr.length] = item;

                let isHaveItem = arr.findIndex(obj => obj.iName === fName);
                
                console.log(isHaveItem);

                if(isHaveItem !== -1){
                    arr[isHaveItem].iQty++;
                    str = JSON.stringify(arr);
                    sessionStorage.setItem("items",str);
                }else{
                    arr[arr.length] = item;
                    str = JSON.stringify(arr);
                    sessionStorage.setItem("items",str);
                }
                hideShow();
                count.innerHTML = arr.length;


                // let findDuplicates = arr.filter((item, index) =>{
                //     let fN = item.iName;
                //     if(fN.includes(fName)){
                //         // item.iQty++;
                //         return true;
                //     }
                // } );

                // if(findDuplicates.length > 1){
                //     //console.log(arr);
                //     //console.log(findDuplicates);
                //     //let nArr = multiDimensionalUnique(arr);
                //     //console.log(arr);
                //     //console.log(nArr);
                //     // arr = new Set(arr);
                //     // console.log(arr);
                //     //nArr.iQty = findDuplicates.length;

                //     // hideShow();
                //     // count.innerHTML = arr.length;
                //     // str = JSON.stringify(nArr);
                //     // sessionStorage.setItem("items",str);
                // }else{
                //     hideShow();
                //     count.innerHTML = arr.length;

                //     str = JSON.stringify(arr);
                //     sessionStorage.setItem("items",str);
                // }
            }
    //     }
    // }
}

let confirm=()=>{
    window.location.href="confirm.html";
}



