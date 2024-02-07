import Swal from 'sweetalert2'

const infoAlert = (msg) => {
    Swal.fire({
        title: '<strong><u>Estás seguro?</u></strong>',
        icon: 'info',
        text: msg
      })
}

export default infoAlert;
