const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=dz&section=Now';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    }
};


async function getchannelName(channel_id) {
    const url = `https://youtube-v2.p.rapidapi.com/channel/details?channel_id=${channel_id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
            'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.title
    } catch (error) {
        console.error(error);
    }
}



async function getVideos() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        result.videos.forEach(video => {
            createVideo(video.thumbnails[0].url, video.title, getchannelName(video.channel_id), video.number_of_views, video.video_id)
            
        });
    } catch {
        
    }
}


function createVideo(thumbnailSrc, videoTitle, channelTitle, videoViews, videoId) {
    console.log('hello');
    
    const video_card = document.createElement('div')
    const thumbnail = document.createElement('img')
    const video_info = document.createElement('div')
    const video_title = document.createElement('p')
    const channel_title = document.createElement('p')
    const video_views = document.createElement('p')
    const stats = document.createElement('div')
    const link = document.createElement('a')
    const video_id_tag= document.createElement("span")

    video_card.classList.add('video-card')
    thumbnail.classList.add('thumbnail')
    video_info.classList.add('video-info')
    video_title.classList.add('video-title')
    channel_title.classList.add('channel-title')
    stats.classList.add('stats')
    video_id_tag.classList.add('hide')

    
    video_card.appendChild(video_id_tag)
    link.appendChild(video_card)
    video_card.appendChild(thumbnail)
    video_card.appendChild(video_info)
    video_info.appendChild(video_title)
    video_info.appendChild(channel_title)
    video_info.appendChild(stats)
    stats.appendChild(video_views)
    
    // link.href = `/video.html`
    video_card.addEventListener('click', ()=>{
        document.cookie = `videoId=${videoId}`
    })
    thumbnail.src = thumbnailSrc
    video_title.innerHTML = videoTitle
    video_views.innerHTML = videoViews
    video_id_tag.innerHTML = videoId



    document.getElementsByClassName('videos')[0].appendChild(link)



}



getVideos()




// const videos = document.getElementsByClassName("video-card")
// console.log(videos)
// var i = 0




// while (i<videos.length) {
//     console.log('videos[i]');
//     i++
// }