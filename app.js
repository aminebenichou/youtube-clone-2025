const url = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=us&section=Now';
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
        result.videos.forEach(video => {
            createVideo(video.thumbnails[0].url, video.title, getchannelName(video.channel_id), video.number_of_views, video.video_id)
        });
    } catch (error) {
        console.error(error);
    }
}


function createVideo(thumbnailSrc, videoTitle, channelTitle, videoViews, videoId) {
    const video_card = document.createElement('div')
    const thumbnail = document.createElement('img')
    const video_info = document.createElement('div')
    const video_title = document.createElement('p')
    const channel_title = document.createElement('p')
    const video_views = document.createElement('p')
    const stats = document.createElement('div')
    const link = document.createElement('a')

    video_card.classList.add('video-card')
    thumbnail.classList.add('thumbnail')
    video_info.classList.add('video-info')
    video_title.classList.add('video-title')
    channel_title.classList.add('channel-title')
    stats.classList.add('stats')
    link.href = `https://www.youtube.com/watch?v=${videoId}`
    link.appendChild(video_card)
    video_card.appendChild(thumbnail)
    video_card.appendChild(video_info)
    video_info.appendChild(video_title)
    video_info.appendChild(channel_title)
    video_info.appendChild(stats)
    stats.appendChild(video_views)

    thumbnail.src = thumbnailSrc
    video_title.innerHTML = videoTitle
    video_views.innerHTML = videoViews




    document.getElementsByClassName('videos')[0].appendChild(link)



}



getVideos()

