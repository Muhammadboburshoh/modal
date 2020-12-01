var elModalWrapper = $_(".modal-wrapper")
var elModalClose = $_(".close-btn", elModalWrapper)
var elModalOpen = $_(".open-btn")

elModalClose.addEventListener("click", function(evt) {
  elModalWrapper.classList.toggle("modal-wrapper");
})

elModalOpen.addEventListener("click", function(evt) {
  elModalWrapper.classList.remove("modal-wrapper");
})

var keyCode = function(evt) {
  console.log(evt);

  if(evt.code === "Escape") {
    elModalWrapper.classList.add("modal-wrapper");
  }
}

/* .addEventListener("click", function(evt) {
  document.body.addEventListener("keyup", keyCode)
}) */

document.body.addEventListener("keyup", keyCode)


