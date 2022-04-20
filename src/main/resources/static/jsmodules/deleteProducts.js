import {getProducts, clearFields} from "./index.js";

const urlDeleteProducts = 'http://localhost:8080/product/deleteAll'
const deleteButton = '#cleanTable'

const deleteConfigs = {
    type: 'DELETE',
    url: urlDeleteProducts,
    cache: false
}

const successDeleteMessage = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Productos Eliminados',
        showConfirmButton: false,
        timer: 1500
    })
}

const errorMessage = () => {
    Swal.fire({
        icon: 'error',
        text: 'Ocurrió un problema al intentar borrar los Productos!'
    })
}

const deleteProducts = () => {
    $(document).delegate(deleteButton, 'click', (e) => {
        e.preventDefault()

        $.ajax({
            ...deleteConfigs,
            success: ()=> {
                successDeleteMessage()
                clearFields()
                getProducts()
            },
            error: ()=> {
                errorMessage()
            }
        })
    })
}

export default deleteProducts