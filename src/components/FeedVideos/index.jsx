import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'dropsetdave',
    description: '80g Protein 597 Cal for all 3 #fyp #foryou #healthyliving #gymtok',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'Formula - Labrinth',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/7f724d3a33ca4a239b67b2f7fece6158~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/285450c712985d9f24b35969987fec05/61f11c33/video/tos/maliva/tos-maliva-ve-0068c799-us/0e911803880b424d959eb182c082c267/?a=1988&amp;br=3362&amp;bt=1681&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3E7nz7Th9QpGlXq&amp;l=202201260402060102230981511A87AAEA&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anQ6a2k6ZmtwOjMzZzczNEApNDM2ZTY5ZGQ2NzQ7ZzNnNGdmczFfcjQwcWdgLS1kMS9zc19iNWMuLV8yYDIyXy01YzM6Yw%3D%3D&amp;vl=&amp;vr='
  },
  {
    id: 2,
    author: 'dropsetdave',
    description: '80g Protein 597 Cal for all 3 #fyp #foryou #healthyliving #gymtok',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'Formula - Labrinth',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/7f724d3a33ca4a239b67b2f7fece6158~c5_200x200.jpeg',
    src: 'https://v16-webapp.tiktok.com/8a5868d1f932368f1fe72024bc0b84c7/61f11c4e/video/tos/useast5/tos-useast5-pve-0068-tx/26eabc5648454fca9d0c36b0c6e3fb3a/?a=1988&amp;br=3070&amp;bt=1535&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3E7nz7Th9QpGlXq&amp;l=202201260402060102230981511A87AAEA&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=ajRrbWQ6ZnM6OjMzZzczNEApNDNoODlkOWQ4NzY7aGllNmducW0vcjQwYDRgLS1kMS9zczAvLy9jYDRjYmFhLzIxYS46Yw%3D%3D&amp;vl=&amp;vr='
  }
]
export default function FeedVideos () {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
