import styles from "../styles/Home.module.css";

export default function Description() {
  
  return (
    <div className="relative bg-bgGray w-screen h-screen overflow-y-scroll overflow-x-hidden">
      {/* Video */}
      <div className={`${styles.videoWrapper} fixed top-0 left-0 w-full h-full z-0 pointer-events-none`}>
        <video
          src={require("../public/video.mp4")}
          autoPlay
          muted
          loop
          className={`${styles.video} object-cover w-full h-full`}
        />
      </div>

      <div className="flex flex-col items-center h-max justify-center w-screen relative z-10">
        {/* Top section */}
        <div className={styles.top}>
          <div className="bg-black rounded-lg p-8 flex center justify-center items-center mb-28 mt-20 border-solid">
            {/* Picture */}
            <div className="w-48 h-48 rounded-full bg-white mr-8"></div>
            {/* Text */}
            <div>
              <h2 className="text-xl font-bold mb-2">Hello and welcome to my page!</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula vitae lorem vestibulum bibendum.</p>
            </div>
          </div>
        </div>

        {/* Parallelograms */}
        <div className="bg-black transform -skew-x-6 h-72 mb-48 mt-24 border-solid border-white border-x-2 border-y-2" style={{ width: '650px', marginRight: '650px' }}></div>
        <div className="bg-black transform skew-x-6 h-72 mb-48 border-solid border-white border-x-2 border-y-2" style={{ width: '650px', marginLeft: '650px' }}></div>
        <div className="bg-black transform -skew-x-6 h-72 mb-28 border-solid border-white border-x-2 border-y-2" style={{ width: '650px', marginRight: '650px' }}></div>
      </div>
    </div>
  );
}
