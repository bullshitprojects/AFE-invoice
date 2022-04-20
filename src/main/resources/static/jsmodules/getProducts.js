// GET PRODUCT DATA FROM ENDPOINT
const urlGetProducts = 'http://localhost:8080/product'

const getProducts = () => {
    $(document).ready(() => {
        // CLEAR TABLE CONTENT
        $('#productData').html('')

        // GET DATA
        $.getJSON(urlGetProducts, (json) => {
            const row = []

            for (let i = 0; i < json.length; i++) {
                row.push('<tr>')
                row.push(`<td> ${json[i].code} </td>`)
                row.push(`<td> ${json[i].name} </td>`)
                row.push(`<td> ${json[i].description} </td>`)
                row.push(`<td> ${json[i].quantity} </td>`)
                row.push(`<td> $${json[i].unit_price.toFixed(2)} </td>`)
                // GET SUBTOTAL
                const subtotal = json[i].quantity * json[i].unit_price

                row.push(`<td> $${subtotal.toFixed(2)} </td>`)
            }

            // PLACE PRODUCTS INSIDE THE DOM
            $('#productData').append($(row.join('')))
        })
    })
}

export default getProducts