import {getProducts, clearFields, saveProduct, animations, deleteProducts} from "./jsmodules/index.js";

// CLEAR ALL FIELDS TRIGGERED BY BUTTON
$('#clean').click((e) => {
    e.preventDefault()
    clearFields()
})

// CALL DATA ON PAGE LOAD
getProducts()

// PREPARE ACTION ON SAVE
saveProduct()

// PREPARE ACTION TO DELETE TABLE
deleteProducts()