addEventListener("load", function(){
  Array.prototype.forEach.call(document.querySelectorAll("h1"), function(h1){
    h1.innerHTML = "<span>" + h1.innerHTML + "</span>"
  })
  var title = document.createElement("title")
  title.innerHTML = document.title
  document.body.insertBefore(title, document.body.firstChild)
})