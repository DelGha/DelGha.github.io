import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HomePage() {

  return (
    <div className={`z-10 ${styles['index-home']}`}>
      <div className={styles.videoWrapper}>
        <video
          src={require("/public/video.mp4")}
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className={styles.buttons}>
          <div className="flex flex-col items-center">
            <Link href={'https://github.com/DelGha?tab=repositories'} className="bg-transparent" >
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                My Github
              </button>
            </Link>

            <Link href={'https://github.com/DelGha?tab=repositories'} className="bg-transparent" >
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                linkedIn
              </button>
            </Link>

            <Link href={'https://github.com/DelGha?tab=repositories'} className="bg-transparent" >
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                VEDEM LATER
              </button>
            </Link>

          </div>
          <div className="flex flex-col items-center">
            <Link href={'/description'} className="bg-transparent">
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                About Me
              </button>
            </Link>

            <Link href={'https://github.com/DelGha?tab=repositories'} className="bg-transparent" >
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                My Resume
              </button>
            </Link>
            
            <Link href={'https://github.com/DelGha?tab=repositories'} className="bg-transparent" >
              <button className="bg-white p-2 px-4 rounded-lg mb-4">
                VEDEM LATER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}