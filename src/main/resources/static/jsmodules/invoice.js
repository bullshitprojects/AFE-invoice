const urlGetProducts = 'http://localhost:8080/product'

const invoice = () => {
    $(document).delegate('#print', 'click', (e) => {
        e.preventDefault()
        const row = []

        const tableBeginning = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">C&oacute;digo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripci&oacute;n</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>`

        // GET DATA
        $.getJSON(urlGetProducts, (json) => {
            row.push(tableBeginning)
            let total = 0
            for (let i = 0; i < json.length; i++) {
                row.push('<tr>')
                row.push(`<td> ${json[i].code} </td>`)
                row.push(`<td> ${json[i].name} </td>`)
                row.push(`<td> ${json[i].description} </td>`)
                row.push(`<td> ${json[i].quantity} </td>`)
                row.push(`<td> $${json[i].unit_price.toFixed(2)} </td>`)
                // GET SUBTOTAL
                const subtotal = json[i].quantity * json[i].unit_price
                total += subtotal
                row.push(`<td> $${subtotal.toFixed(2)} </td>`)
            }

            const tableEnd = `
                <tr>
                    <th colspan="5" class="text-start">Total a pagar</th>
                    <th>$${total.toFixed(2)}</th>
                </tr>
            </tbody>
        </table>`

            row.push(tableEnd)

            // PRINT INVOICE
            Swal.fire({
                title: 'PASTELITO S.A de C.V',
                html: row.join(''),
                showCloseButton: true,
                showConfirmButton: false,
                width: '900px'
            })
        })


    })
}

export default invoice