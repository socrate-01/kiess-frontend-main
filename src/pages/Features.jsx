// Components import
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"

const Features = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <main className="flex min-h-mainHeight flex-col items-center justify-between overflow-x-hidden font-jost">
      <section className="my-20 w-screen max-w-6xl max-screen1260px:max-w-3xl">
        <div className="mb-20 hidden justify-center text-4xl font-semibold text-kiessColor max-tablet820px:flex">
          <h1>FONCTIONNALITÉS</h1>
        </div>
  
        <article className="mb-20 flex justify-between gap-x-20 text-blackTextColor max-tablet820px:flex-col-reverse max-tablet820px:items-center max-mobile:items-center">
        <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >

          <div className=" ml-3 w-1/2 max-tablet820px:ml-0 max-tablet820px:w-tendencyTextWidth max-tablet820px:pl-20 max-mobile:ml-0 max-mobile:w-4/5 max-mobile:pl-5">
            <p className="mb-2 text-5xl font-semibold text-kiessColor">
              Rencontre
            </p>
            <p className="mb-2 text-5xl font-semibold text-kiessColor">
              à l'aveugle
            </p>
            <p className="text-3xl font-semibold text-kiessColor">
              Personnalité & Physique
            </p>
            <p className="mb-5 text-lg text-blackTextColor">
              Avec Kiess découvrez qui vous rencontrez
            </p>
            <p className="w-1/2 text-xs max-tablet820px:w-3/4 max-tablet820px:text-sm">
              Les photos de vos matchs sont cachées derrière des cases. Pour les
              découvrir, rien de plus simple : Engagez la conversation,
              remportez des points et utilisez-les pour dévoiler l'apparence
              physique de votre match.
            </p>
          </div>
          </motion.h1>

          <div
            className="flex
        w-1/2 items-center max-tablet820px:w-auto"
          >
          <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src="/assets/image-page-fonctionnalite/CACHE-v2.png"
              alt="3 écrans avec des personnes cachées par des logos kiess"
              className="w-tendencyScreensWidth max-tablet820px:mb-5  max-tablet820px:w-80 max-mobile:w-80 "
            />
            </motion.h1>
          </div> 
          
        </article>
        
        <article className="mb-20 flex justify-between gap-x-20 text-blackTextColor max-tablet820px:flex-col max-tablet820px:items-center">
         
          <div
            className="ml-3 flex
        w-1/2 items-center max-tablet820px:ml-0 max-tablet820px:w-96 max-tablet820px:justify-center max-mobile:ml-0 max-mobile:w-auto"
          >

      <motion.h1
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
      >
            <img
              src="/assets/image-page-fonctionnalite/badges-v2.png"
              alt="5 badges de differentes couleur dispersés"
              className="w-tendencyBadgesWidth max-tablet820px:mb-5 max-tablet820px:w-72 "
            />
      </motion.h1>

          </div>

          <div className=" w-1/2 max-tablet820px:w-tendencyTextWidth max-tablet820px:pl-20 max-mobile:w-3/4 max-mobile:pl-3">
          <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <p className="mb-2 text-5xl font-semibold text-kiessColor">+150</p>
            <p className="mb-2 text-3xl font-semibold text-kiessColor">
              Badges pour vous décrire
            </p>

            <p className="mb-5 text-lg text-blackTextColor">
              et de nouveaux ajoutés régulièrement
            </p>
            <p className="w-3/4 text-xs max-tablet820px:text-sm max-mobile:w-fit">
              Rendez votre profil captivant en sélectionnant jusqu'à 30 badges
              pour vous décrire, incluant vos passions, vos goûts, vos hobbies,
              vos envies et vos traits de personnalité. C'est la meilleure façon
              de le rendre attractif.
            </p>
            </motion.h1> 
          </div>
          
        </article>

        <article className="flex justify-between gap-x-20 text-blackTextColor max-tablet820px:flex-col-reverse max-tablet820px:items-center">
          <div className=" ml-3 w-1/2 max-tablet820px:ml-0 max-tablet820px:flex max-tablet820px:w-tendencyTextWidth max-tablet820px:flex-col max-tablet820px:pl-20 max-mobile:ml-0 max-mobile:w-3/4 max-mobile:pl-3">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
           
            <p className="mb-2 text-5xl font-semibold text-kiessColor">
              Matchmaking
            </p>
            <p className="text-3xl font-semibold text-kiessColor">
              Juste pour vous
            </p>

            <p className="mb-5 text-lg text-blackTextColor">
              Selectionnez le matchmaking qui vous corresponds
            </p>
            <p className="w-2/3 text-xs max-tablet820px:text-sm max-mobile:w-fit">
              Vous recherchez votre âme sœur ou souhaitez vous faire de nouveaux
              amis ? Notre algorithme vous proposera les profils les plus
              attrayants. Testez également nos matchmaking ludiques, tels que
              "Les opposés s'attirent" où les profils avec le moins de points
              communs vous seront présentés, ainsi que d'autres types de jeux
              pour découvrir de nouvelles façons de faire des rencontres.
            </p>
            </motion.h1>
          </div>

          <div
            className="flex
        w-1/2 items-center max-tablet820px:w-auto "
          >
                      <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src="/assets/image-page-fonctionnalite/MATCHMAK-v2.png"
              alt="images des différents couples de l'application kiess"
              className="w-  w-tendencyTendencyWidth max-tablet820px:mb-5 max-tablet820px:w-80 max-mobile:w-72  "
            />
            </motion.h1>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Features;
