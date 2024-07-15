import Home from '../../Components/Main/Home/Home.tsx';
import Services from '../../Components/Main/Services/Services';
import Doctors from '../../Components/Main/Doctors/Partners';
import Reviews from '../../Components/Main/Review/Reviews';

const Main = () => {
  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <Home />
      <Services />
      <Doctors />
      <Reviews />
    </div>
  );
};

export default Main;
