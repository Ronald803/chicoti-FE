import Swal from "sweetalert2";

const buttonAlert = (props) => {
    Swal.fire({
        title: `<strong>${props.title}</strong>`,
        icon: "info",
        html: props.message,
        focusConfirm: false,
        confirmButtonText: `
          Continuar
        `
      }).then(()=>{
        props.next()
      })
}

export default buttonAlert