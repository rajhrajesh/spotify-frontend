import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
import song4 from './song4.mp3'
import song5 from './song5.mp3'
import song6 from './song6.mp3'
import song7 from './song7.mp3'
import song8 from './song8.mp3'
import song9 from './song9.mp3'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id: 0,
        name: "Top 50 Global",
        image: img8,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#2a4365"
    },
    {
        id: 1,
        name: "Top 50 India",
        image: img9,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#22543d"
    },
    {
        id: 2,
        name: "Trending India",
        image: img10,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#742a2a"
    },
    {
        id: 3,
        name: "Trending Global",
        image: img16,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#44337a"
    },
    {
        id: 4,
        name: "Mega Hits,",
        image: img11,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#234e52"
    },
    {
        id: 5,
        name: "Happy Favorites",
        image: img15,
        desc: "Your weekly update of the most played tracks",
        bgColor: "#744210"
    }
]

export const songsData = [
    {
        id: 0,
        name: "Song One",
        image: img1,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:00"
    },
    {
        id: 1,
        name: "Song Two",
        image: img2,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:20"
    },
    {
        id: 2,
        name: "Song Three",
        image: img3,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:32"
    },
    {
        id: 3,
        name: "Song Four",
        image: img4,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:50"
    },
    {
        id: 4,
        name: "Song Five",
        image: img5,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "3:10"
    },
    {
        id: 5,
        name: "Song Six",
        image: img14,
        file: song3,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:45"
    },
    {
        id: 6,
        name: "Song Seven",
        image: img7,
        file: song1,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:18"
    },
    {
        id: 7,
        name: "Song Eight",
        image: img12,
        file: song2,
        desc: "Put a smile on your face with these happy tunes",
        duration: "2:35"
    },
    {

        id: 8,
        name: "The Coming of Cybertron",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726770459/samples/Transformers__The_Last_Knight_Art_yncj5u.jpg",
        file: song4,
        desc: "Song by Steve Jablonsky",
        duration: "4:59"
    },
    {


        id: 9,
        name: "Ailasa Ailasa",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726770209/samples/VANAKKAM_CHENNAI_l6fkb5.jpg",
        file: song5,
        desc: "Song by Anirudh Ravichander and Suchitra",
        duration: "4:05"
    }, {
        id: 10,
        name: "Hymn to the Sea",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726769993/samples/titanic_bmkv1h.jpg",
        file: song6,
        desc: "James Horner",
        duration: "6:28"
    }, {
        id: 11,
        name: "Jilendru Oru Kalavaram",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726769581/samples/leelai-100_vchofu.jpg",
        file: song7,
        desc: "Song by Satish Chakravarthy",
        duration: "4:33"
    }, {
        id: 12,
        name: "Aagaaya Neelangalil",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726768842/samples/99_Songs_qdmrmn.jpg",
        file: song8,
        desc: "Song by AR Rahman and Shreya Ghoshal",
        duration: "4:14"
    }, {
        id: 13,
        name: "Kaadhal Rojave",
        image: "https://res.cloudinary.com/de8cab9qa/image/upload/v1726768045/samples/Roja_movie_bvlqbu.jpg",
        file: song9,
        desc: "Song by S. P. Balasubrahmanyam and Sujatha Mohan",
        duration: "5:01"
    }
]