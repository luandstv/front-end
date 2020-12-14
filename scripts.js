const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalMaximize = document.querySelector('.modal')

for (let card of cards) {
  card.addEventListener('click', function(){
    const postTag = card.getAttribute("id")
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postTag}`
    modalOverlay.classList.add('active')
    

 })   
}


document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalMaximize.classList.remove('maximize')
  modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('.maximize-modal').addEventListener('click', function(){

  if(modalMaximize.classList.contains('maximize')) {
    
    modalMaximize.classList.remove('maximize')

  } else {
    modalMaximize.classList.add('maximize')

  }

})
