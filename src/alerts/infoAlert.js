import Swal from 'sweetalert2'

const infoAlert = (title,msg) => {
    Swal.fire({
        title: `<strong><u>${title}</u></strong>`,
        icon: 'info',
        text: msg
      })
}

export default infoAlert;
