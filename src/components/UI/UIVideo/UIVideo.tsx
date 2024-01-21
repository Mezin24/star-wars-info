import styles from "./UIVideo.module.css"
import { useEffect, useRef } from "react"
import cn from "classnames"

export type IPlaybackRate = 0.5 | 1 | 1.5 | 2

export interface IUIVideoProps {
  src: string
  classes?: string
  playbackRate?: IPlaybackRate
}

const UIVideo = (props: IUIVideoProps) => {
  const { src, classes, playbackRate = 1 } = props
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={cn(styles.video, classes)}
      autoPlay
      loop
      muted
      id="video"
    >
      <source src={src} />
    </video>
  )
}

export default UIVideo
