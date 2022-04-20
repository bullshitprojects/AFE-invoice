import {
    getProducts,
    clearFields,
    saveProduct,
    animations,
    deleteProducts,
    validations,
    invoice
} from "./jsmodules/index.js";

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

// CALL VALIDATIONS
validations()

// PREPARE ACTION FOR INVOICE
invoice()