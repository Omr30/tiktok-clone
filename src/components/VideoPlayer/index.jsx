import styles from './styles.module.css'

const SRC = "https://v16-webapp.tiktok.com/c103c6d0a5303e564d9604ea4c63f900/61ec13a5/video/tos/useast2a/tos-useast2a-ve-0068c002/64017f94d00249f6a666038ddc63d4d9/?a=1988&amp;br=2030&amp;bt=1015&amp;cd=0%7C0%7C0%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=2&amp;er=&amp;ft=Yu12_FGgkag3-I&amp;l=202201220824270102231280870E9BBF6F&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=am5rcjs8ZHNtNjMzNzczM0ApOGk7NTtkZjw6NzU5OjQ1Nmcuc2RpM2leMDNgLS1kMTZzczY0Yl8wNGJhNjUzYWJgMy06Yw%3D%3D&amp;vl=&amp;vr=";


export default function VideoPlayer () {
    return (
        <video className={styles.video} src={SRC} controls={false} />
    )
}

