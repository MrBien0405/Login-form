let email = 'tranbien1845@gmail.com'
let password = '123123'
let form = document.getElementById("form")
form.onsubmit = function (event) {
  event.preventDefault()
  if (form.email.value == '') {
    document.getElementById('errorEmail').innerHTML =
      'Email không được để trống!'
  }
  if (form.password.value == '') {
    document.getElementById('errorPassword').innerHTML =
      'Mật khẩu không được để trống!'
  }
  if (form.email.value !== '' && form.password.value !== '') {
    if (form.email.value !== email) {
      document.getElementById('errorEmail').innerHTML = 'Email sai'
    }
    if (form.password.value !== password) {
      document.getElementById('errorPassword').innerHTML = 'Password sai'
    }
  }
  if (form.email.value === email && form.password.value === password) {
    document.getElementById('success').innerHTML = 'Đăng nhập thành công!'
  }
}

let dkn = document.getElementById('dkn')
let photo = document.getElementsByClassName('photo')[0]
dkn.onclick = function (e) {
  e.preventDefault()
  if (!photo.classList.contains('vitri2')) {
    photo.classList.add('vitri2')
  } else {
    photo.classList.remove('vitri2')
  }
}

