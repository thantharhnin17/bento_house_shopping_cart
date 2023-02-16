let showItems=()=>{
    if(sessionStorage.getItem("items") != null){
        let str = sessionStorage.getItem("items");
        let arr = JSON.parse(str);

        //console.log(arr);
        // ans.innerHTML = arr.length;
        for( i = 0; i < arr.length; i++){
            let food_data = document.createElement('tr');
            let no = i+1;
            food_data.innerHTML = `
                        <td>${no}</td>
                        <td class="td_img"><img src="assets/${arr[i].iImg}" alt=""></td>
                        <td>${arr[i].iName}</td>
                        <td>${arr[i].iPrice} Ks</td>
                        <td><input type="number" value="${arr[i].iQty}" min="1" max="50" name="quntity" onChange="calBalance(this)" oninput="this.value = Math.abs(this.value)" onKeyDown="return false"></td>
                        <td class="totalPrice">${arr[i].iPrice * arr[i].iQty} Ks</td>
                        <td><button class="btn btn-danger" onclick="delFood(this)"><i class="bi bi-trash-fill"></i></button></td>
                        `;
            food_data.classList.add("t_row")
            foodList.appendChild(food_data);

            // total += parseInt(arr[i].iPrice);
        }

        
        totalPriceCal();
    }else{
      ans.innerHTML = `<h1 style="color:red; text-align:center">No item in your cart</h1>`  
    }
}

let calBalance=(e)=>{
    let qty = parseInt(e.value);

    let tre = e.parentNode.parentNode;
    let childs = tre.children;
    
    let priceStr = childs[3].innerHTML;
    let priceInt = parseInt(priceStr.replace(" Ks","")) ;

    let totalBal = priceInt * qty;
    childs[5].innerHTML = totalBal +" Ks";

    totalPriceCal2();

    let jstr = sessionStorage.getItem("items");
    let arr = JSON.parse(jstr);
    for(i = 0; i < arr.length; i++){
        if(arr[i].iName == childs[2].innerHTML){
            arr[i].iQty = qty;
        }
    }

    jstr = JSON.stringify(arr);
    sessionStorage.setItem("items",jstr);

    foodList.innerHTML = "";

    showItems();
    
}

let totalPriceCal=()=>{
    let total = 0;

    let totalTds = document.getElementsByClassName("totalPrice");
        for( j = 0; j < totalTds.length; j++){
            
            let tPriceStr = totalTds[j].innerHTML;
            let tPriceInt = parseInt(tPriceStr.replace(" Ks","")) ;

           total += tPriceInt;
        //    console.log(total);
        }

        let total_data = document.createElement('tr');
        total_data.innerHTML = `
                        <td colspan="2"><button class="btn btn-secondary" onclick="window.history.back();"><i class="bi bi-chevron-double-left"></i>Back To Menu</button></td>
                        <td colspan="3">Total Price</td>
                        <td id="totalPrice">${total} Ks</td>
                        <td><a href="#" onclick="goNext(); return false;" class="btn continue"><i class="bi bi-wallet"></i> Continue</a></td>
                        `;
        foodList.appendChild(total_data);
}

let totalPriceCal2=()=>{
    let total = 0;

    let totalTds = document.getElementsByClassName("totalPrice");
        for( j = 0; j < totalTds.length; j++){
            
            let tPriceStr = totalTds[j].innerHTML;
            let tPriceInt = parseInt(tPriceStr.replace(" Ks","")) ;

           total += tPriceInt;
        //    console.log(total);
        }

    totalPrice.innerHTML = total +" Ks";   
}

let delFood=(el)=>
 { 
    let td = el.parentNode;
    let tRow = td.parentNode;

    let fName = tRow.children[2].innerHTML;

    

    let jstr = sessionStorage.getItem("items");
    let arr = JSON.parse(jstr);
    let arr2 = new Array();
    let j = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i].iName != fName){
            arr2[j++] = arr[i];
        }
    }

    jstr = JSON.stringify(arr2);
    sessionStorage.setItem("items",jstr);

    foodList.innerHTML = "";

    showItems();

 } 

 let goNext=()=>{
    window.location.href="success.html";
 }