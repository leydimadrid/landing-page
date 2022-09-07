import AppNav from "../routes/AppNav";
import logoSaroma from '../assets/logoSaroma.png';

export const Header = () => {
  return (
    <div className="header w-full h-12 fixed">
      <div className="float-left my-3 ml-6">
          <img src={logoSaroma} className="w-24 my-1 rounded-md" />
      </div>
      <div className="float-right my-3 mr-1">
        <AppNav />
      </div>
    </div>
  );
};
