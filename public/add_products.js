
$(
    function(){
        let productName=$('#productName')
        let productManu=$('#productManufacturer')
        let productPrice=$('#productPrice')
        $('#btnAddPdt').click(function()
        {  
     
            addProduct(productName.val(),productManu.val(),productPrice.val(),function(addedProduct){
             
                window.alert('Added '+addedProduct.name+' to Database')

            })
        
        })
    }
)