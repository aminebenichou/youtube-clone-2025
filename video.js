function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}




const video = document.getElementById("video")
const videoId = getCookie('videoId')

video.src = `https://www.youtube.com/embed/${videoId}`
