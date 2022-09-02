import AppNav from "../../routes/AppNav";
import logoSaroma from '../../assets/logoSaroma.png';

export const Header = () => {
  return (
    <div className="w-full bg-violet-500 h-12 fixed">
      <div className="float-left my-3 ml-3">
        <a target="_blank">
          <img src={logoSaroma} className="w-20 my-1 rounded-md" />
        </a>
      </div>
      <div className="float-right my-3 mr-1">
        <AppNav />
      </div>
    </div>
  );
};
