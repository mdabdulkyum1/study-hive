import { Link } from "react-router-dom";
import errorPageImg from '../../assets/errorPage.png'
const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="hero-content flex flex-col items-center justify-center gap-8 px-4 sm:px-8 lg:px-16">
        {/* Error Image or Animation */}
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <img
            src={errorPageImg} 
            alt="Error"
            className="w-full h-auto"
          />
        </div>

        {/* Error Message */}
        <div className="text-center text-light-text dark:text-dark-text">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Oops! Something went wrong!</h1>
          <p className="text-lg sm:text-xl mb-6">We couldn{"'"}t find the page you{"'"}re looking for.</p>
          
          {/* Link to Home or other page */}
          <Link
            to="/"
            className="btn bg-primary text-white hover:bg-light-accent dark:hover:bg-dark-accent"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
