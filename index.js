let arr = [1,2,3,4,5,6,7,8,9]
let color = ["#000000", "#2B8EAD", "#333333", "#6F98A8", "#333333", "#BFBFBF" , "#2B8EAD", "#2F454E", "#72C3DC"]

function onPageLoad(){

renderArray(arr)

}

function renderArray(arr){

const myNode = document.getElementById("grid");
myNode.innerHTML = '';
arr.forEach(function (data,i) {
  const d = document.createElement('div')
  d.textContent = data
  d.classList.add("item")
  var id = `item${i+1}`
  d.setAttribute("id", id)
  document.querySelector('#grid').appendChild(d)
})
onResize()
}

function onResize(){
    var children = document.getElementById("grid").childNodes;
    children.forEach(function(item,i){
      if(window.outerWidth > 768){
        document.getElementById(`item${i+1}`).style.background = color[i]
      }
      else{
        document.getElementById(`item${i+1}`).style.background = "#d3d3d3"
        document.getElementById(`item${i+1}`).style.borderLeft = `7px solid ${color[i]}`
      }
    });
  }

function shuffleArray(){

for(let i=arr.length -1 ; i > 0 ; i--){
		
    let j = Math.floor(Math.random()*(i+1))
    
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t

}

renderArray(arr)

}

function sortArray(){

let res = arr.sort((a,b) => a-b)

renderArray(res)

}

