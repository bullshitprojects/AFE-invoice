// GET PRODUCT DATA FROM ENDPOINT
const urlGetProducts = 'http://localhost:8080/product'

const getProducts = (isNewProduct) => {
    $(document).ready(() => {
        // CLEAR TABLE CONTENT
        $('#productData').html('')
        $('#printContainer').html('')

        // GET DATA
        $.getJSON(urlGetProducts, (json) => {
            const row = []

            for (let i = 0; i < json.length; i++) {
                if(isNewProduct && i == (json.length - 1)){
                    row.push('<tr>')
                    row.push(`<td class="slide-in-bottom"> ${json[i].code} </td>`)
                    row.push(`<td class="slide-in-bottom"> ${json[i].name} </td>`)
                    row.push(`<td class="slide-in-bottom"> ${json[i].description} </td>`)
                    row.push(`<td class="slide-in-bottom"> ${json[i].quantity} </td>`)
                    row.push(`<td class="slide-in-bottom"> $${json[i].unit_price.toFixed(2)} </td>`)
                    // GET SUBTOTAL
                    const subtotal = json[i].quantity * json[i].unit_price

                    row.push(`<td class="slide-in-bottom"> $${subtotal.toFixed(2)} </td>`)
                } else {
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
            }

            if (json.length >= 1) {
                $('#printContainer').html('<button class="clean" id="print">Generar Factura</button>')
            }

            // PLACE PRODUCTS INSIDE THE DOM
            $('#productData').append($(row.join('')))
        })
    })
}

export default getProducts