import {clearFields, getProducts} from "./index.js";

const urlSaveProduct = 'http://localhost:8080/product/save'
const submitButton = '#saveProduct'

// CONFIGS FOR POST
const postConfigs = {
    type: 'post',
    contentType: 'application/json; charset=utf-8',
    cache: false,
    url: urlSaveProduct
}

const successSaveMessage = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Agregado',
        showConfirmButton: false,
        timer: 1500
    })
}

const errorMessage = () => {
    Swal.fire({
        icon: 'error',
        text: 'Verifica que todos los campos estén llenos!',
        confirmButtonText: 'Aceptar'
    })
}

const errorDuplicatedCode = () => {
    Swal.fire({
        icon: 'error',
        text: 'El codigo de producto ya ha sido ingresado!',
        confirmButtonText: 'Aceptar'
    })
}

const saveProduct = () => {
    $(document).delegate(submitButton, 'click', (e) => {
        e.preventDefault()

        // GET VALUES
        const code = $('#codigo').val()
        const name = $('#nombre').val()
        const description = $('#descripcion').val()
        const quantity = $('#cantidad').val()
        const unit_price = $('#precio').val()

        if (code.length > 0 && name.length > 0 && description.length > 0 && quantity.length > 0 && unit_price.length > 0) {
            // PREPARE OBJECT
            const data = {
                code,
                name,
                description,
                quantity,
                unit_price
            }

            $.ajax({
                ...postConfigs,
                data: JSON.stringify({...data}),
                success: () => {
                    successSaveMessage()
                    getProducts(true)
                    clearFields()
                },
                error: () => {
                    errorDuplicatedCode()
                }
            })
        } else {
            errorMessage()
        }
    })
}

export default saveProduct