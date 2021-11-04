 function myFunction(){
     let time = new Date().getHours();
     let greeting;
     if (time < 12){
        greeting = 'Goog Morning'
    }else {
        greeting = 'Good day'
    }
    console.log(greeting);
 }

//  myFunction()

 
//  let plants = [ "grass", "crop", "flowers", "Ariables", 12, {
//     name: "fruits", type: "banana"}]
    
//     console.log(plants)
//     console.log('First item is', plants[0])
    
//     plants[3] = "segun"
//     console.log(plants)
//     console.log(typeof (plants))

//     length
//     console.log('length of the plants in array is', 
//     plants.length)

//     plants[3] = "segun"
//     console.log(plants)
//     console.log(typeof (plants.length))

//     console.log('Last item is', plants[plants.length - 1])

    
    let farmProduce = [
        {
            name: "Soybean",
            product_img: "soyBean",
            category: "crop",
            price:"N23,000/Bag"
        },
        {
            name: "Maize",
            product_img: "maize",
            category: "crop",
            price: "N18,000/Bag"  
        },
        {
            name: "Vegetables",
            product_img: "vegetables",
            category: "crop",
            price: "N17,000/Set" 
        },
        {
            name: "Rice",
            product_img: "ricee",
            category: "crop",
            price: "N19,500/Bag" 
        },
        {
            name: "Fruits",
            product_img: "fruits",
            category: "Crop",
            price: "N4,000/Set" 
        },
        {
            name: "Hay",
            product_img: "hay",
            category: "crop",
            price: "N4,650/Stack" 
        },
        {
            name: "Eggs",
            product_img: "eggs",
            category:  "Livestock",
            price: "N1,000/Crate" 
        },
        {
            name: "Cat-fishes",
            product_img: "catfish",
            category: "Livestock",
            price: "N13,000/Dozen" 
        },
        {
            name: "Milk",
            product_img: "milk",
            category: "Diary",
            price: "N4,000/Litre " 
        },
        {
            name: "Cattle",
            product_img: "cattle",
            category: "Livestock",
            price: "N90,000/Rustle" 
        },
        {
            name: "Poultry",
            product_img: "poultry",
            category: "Livestock",
            price: "N980/Chick" 
        },
        {
            name: "Piggery",
            product_img: "piggery",
            category: "Livestock",
            price: "N34,000/swine"  
        },
    ]

        console.log('the third is', farmProduce[2])

        
    // // length
    //     console.log('length of the plants in array is', 
    //     farmProduce.length)

 
    // farmProduce[3] = "segun"
    // console.log( farmProduce)
    // console.log(typeof  (farmProduce))    

    // for (let i = 0; i < farmProduce.length; i++){
    //     console.log(farmProduce[i])
    // }
        
    // farmProduce. forEach(element => {
    //     console.log(element)
    // });
    
    // Displaying an array on the DOM

    let farmProduceSection = document.getElementById('farmproduce-wrapper');
    let html = '';
    farmProduce.forEach(e => {
        html += `
                <div class="col-lg-4 col-md-4 col-12">
                        <div class="card mt-4" style="  text-align: center; ">
                                <img src=" ./img/${e.product_img}.png" class="card-img-top" style="height: 250px; width: auto;" alt=" ... ">
                                <div class="card-body lc   ">
                                    <p class="card-title f1 fs-4 sft fw-bold"> ${e.name} </p>
                                    <p class=" tdc text-uppercase pt-2" style="font-weight: 750 ; ">Category: ${e.category} </p>
                                    <p class=" tdc pp pt-2 fw-bold" style="color: red;">PRICE: ${e.price}</p>
                                    <div class="order p-3" style="background-color: rgb(58, 184, 58)">
                                    <button  class="btn btn-outline-  pt-1 mb-1 br text-white">Order Now</button>  
                                    </div>
                                </div>
                        </div>
                </div>
        `
        console.log(e)
        
        farmProduceSection.innerHTML = html     
    })
