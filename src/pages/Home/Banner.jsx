// Import Swiper React components
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Collaborate-Learn.jpeg')]">
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Collaborate with Friends
              </h1>
              <p className="py-6 text-white dark:text-gray-200">
                Work together with friends on assignments and group projects.
                Build knowledge through collaboration and teamwork.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Start Collaborating
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Track-Progress.png')]">
          <div className="hero-overlay bg-black bg-opacity-70"></div>
        
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Track Your Progress
              </h1>
              <p className="py-6 text-white">
                Monitor your assignments, grades, and milestones. Stay motivated
                and on track as you achieve your goals.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[80vh] bg-[url('assets/Engage-Learn.jpg')]">
          <div className="hero-overlay bg-black bg-opacity-60 pointer-events-none"></div>
          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary dark:text-white">
                Engage & Learn
              </h1>
              <p className="py-6 text-white">
                Take part in interactive learning sessions and discussions.
                Transform your understanding through active participation.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Join a Study Group
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
