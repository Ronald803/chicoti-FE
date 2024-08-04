import Swal from "sweetalert2";

const buttonAlert = (props) => {
    Swal.fire({
        title: `<strong>${props.title}</strong>`,
        icon: "info",
        showCancelButton: true,
        html: props.message,
        focusConfirm: false,
        confirmButtonText: `
          Continuar
        `
      }).then((result)=>{
        if(result.isConfirmed){
          props.next()
        }
      })
}

export default buttonAlert