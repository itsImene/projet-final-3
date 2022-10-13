var users = [
  
]


function login() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var title = document.getElementById('title')
    var login = document.getElementById('login')
    var register = document.getElementById('register')

    const found = users.find(user => user.email === email)

    if (found && found.password === password) {
        title.style.visibility = "visible"
        login.style.visibility = "hidden"
        register.style.visibility = "hidden"
    } else {
        alert("Ce compte n'existe pas . Inscrivez vous d'abord .")
    }
}

function register() {
    var newEmail = document.getElementById('newemail').value
    var newPassword = document.getElementById('newpassword').value
    var newpassword2 = document.getElementById('newpassword2').value

    const found = users.find(user => user.email === newEmail)

    if (found) {
        alert('Vous vous êtes déjà inscrit , connectez vous plutôt.')
    } else {
        if (newPassword !== newpassword2) {
            alert('Vérifiez votre mot de passe.')
        } else if (newPassword.length < 4) {
            alert('Trop court !')
        } else {
            const newUser = {
                email: newEmail,
                password: newPassword
            }
            users.push(newUser)
        }
    }
}
