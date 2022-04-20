const invalidChars = [
    '-',
    '+',
    'e'
]

const validations = () => {
    $(document).ready(() => {
        $('#codigo').on('input', () => {
            if ($('#codigo').val().length > 8) {
                $('#codigo').val($('#codigo').val().substring(0, 8));
            }
            $('#codigo').val($('#codigo').val().replace(/[^0-9]/g, ''))
        })

        $('#nombre').on('input', () => {
            if ($('#nombre').val().length > 50) {
                $('#nombre').val($('#nombre').val().substring(0, 50));
            }
        })

        $('#descripcion').on('input', () => {
            if ($('#descripcion').val().length > 150) {
                $('#descripcion').val($('#descripcion').val().substring(0, 150));
            }
        })

        $('#cantidad').keydown((e) => {
            if (invalidChars.includes(e.key)) {
                e.preventDefault()
            }
        })

        $('#precio').keydown((e) => {
            if (invalidChars.includes(e.key)) {
                e.preventDefault()
            }
        })

    })
}

export default validations