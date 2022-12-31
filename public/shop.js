function fetchProducts(done){
    $.get('/products',(data)=>{
        done(data)
    })
    //sends get request to /products and returns array of products (json obj)
}
function addProduct(name,manu,price,done){
    $.post('/products',{
        name:name,
        manufacturer:manu,
        price:price,
    },function(data){
        done(data)
    }

    )
}
function createProductCard(product){
    //takes product object and creates card
    return $(`<div class="col-4">
    <div class="card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title product-name">${product.name}</h5>
          <p class="card-text product-manufacturer">${product.manufacturer}</p>
          <p class="card-text product-price"><b>${product.price}</b></p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>
    </div>
    `)
}