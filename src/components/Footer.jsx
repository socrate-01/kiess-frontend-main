const Footer = () => {
  return (
    <footer className="  mt-auto flex w-screen font-jost max-tablet820px:justify-center max-mobile:mt-auto ">
      <div className=" ml-auto mr-8  flex  h-10 items-center max-tablet820px:m-0">
        <div className="z-20 ml-5 flex gap-x-2 max-mobile:ml-0">
          <a href="https://www.instagram.com/kiess.app/?hl=fr" target="blank">
            <img
              src="/assets/svgreseaux/INSTA SVG.svg"
              alt="Objectif rouge representant le logo instagram"
              className="w-6"
            />
          </a>
          <a href="https://www.tiktok.com/@kiess.app" target="blank">
            <img
              src="/assets/svgreseaux/TIKTOK SVG.svg"
              alt="Note musicale sur fond rouge representant le logo de tik tok"
              className="className= w-6"
            />
          </a>
          <a href="https://twitter.com/Kiessapp" target="blank">
            <img
              src="/assets/svgreseaux/TWITTER SVG.svg"
              alt="Oiseau blanc sur fond rouge representant le logo de twitter"
              className="className= w-6"
            />
          </a>
        </div>
        <p className=" ml-3 text-xs text-blackTextColor">
          © 2024 KIESS Inc., Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
