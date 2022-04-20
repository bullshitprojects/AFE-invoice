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
        text: 'Ocurrió un problema al intentar guardar el Producto!'
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

        // PREPARE OBJECT
        const data = {
            code,
            name,
            description,
            quantity,
            unit_price
        }

        console.log(data)

        $.ajax({
            ...postConfigs,
            data: JSON.stringify({...data}),
            success: () => {
                successSaveMessage()
                getProducts()
                clearFields()
            },
            error: () => {
                errorMessage()
            }
        })

    })
}

export default saveProduct