const videos = document.getElementsByClassName("videos")[0]
const video_title = document.getElementsByClassName("video-title")[0]
const img = document.getElementsByClassName("thumbnail")[0]
img.src = "https://images.pistonheads.com/nimg/48614/mceu_82531368411717752397215.jpg"
video_title.innerHTML="Rs7"

const dropdown = document.getElementsByClassName("dropdown")[0]
const dropmenu = document.getElementsByClassName("drop-menu")[0]

dropdown.addEventListener("click", ()=>{
    if (dropmenu.classList.contains("active")){
        dropmenu.classList.remove("active")
    }
    else{
        dropmenu.classList.add("active")

    }
})