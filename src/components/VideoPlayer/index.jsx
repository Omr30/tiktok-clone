import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/83633c778d767ee8146f106148bfe21d/61ee3614/video/tos/alisg/tos-alisg-pve-0037c001/7434915487c649fbab35b5b78afb7a19/?a=1988&amp;br=3850&amp;bt=1925&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3E7nz7ThN995lXq&amp;l=202201232314170101910410190CC02832&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M3k8bDk6ZnJvOTMzODczNEApZzppZDdkaWU2N2RnZTw3PGdgaHNhcjRnLnNgLS1kMS1zczY0MjAzMy80LV9gMTUyNGE6Yw%3D%3D&amp;vl=&amp;vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
