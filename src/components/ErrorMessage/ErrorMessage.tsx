import styles from "./ErrorMessage.module.css"
import video from "./video/han-solo.mp4"
import UIVideo from "../UI/UIVideo"

const ErrorMessage: React.FC = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <UIVideo src={video} playbackRate={1.5} classes={styles.video} />
    </>
  )
}

export default ErrorMessage
