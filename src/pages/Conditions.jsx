import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"

const Conditions = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  return (
    <main className="flex min-h-mainHeight flex-col items-center overflow-x-hidden  font-jost">
        <motion.h1 initial={{ opacity: 0, y: 200 }} animate={controls} transition={{ duration: 1.5, ease: "easeInOut" }}>

      <section className=" flex max-w-6xl flex-col overflow-x-hidden py-10">
        <img
          src="/assets/Logo SVG.svg"
          alt="coeur avec des lettres qui forment le logo kiess"
          className="mx-auto  w-72 max-mobile:w-40"
        />
        <div className="mx-auto mb-10 text-blackTextColor">
          <h1 className="text-center text-4xl font-semibold max-mobile:text-xl">
            Conditions générales d’utilisation
          </h1>
          <p className="text-center text-4xl font-semibold max-mobile:text-xl">
            & politique de confidentialité
          </p>
        </div>

        <article className="mb-40  ml-10 mr-10 w-fit text-conditionsFontSize text-blackTextColor">
          <h2 className="mb-3 w-fit">Bienvenue sur Kiess !</h2>
          <div className="w-fit">
            <p>
              Kiess est un réseau social proposant à ses Utilisateurs de
              rencontrer des personnes à l’aveugle, les photos étant dissimulé
              par des cases qui devront être découverte (ci-après l’«
              Application »).
            </p>
            <p>
              L’Application Kiess est éditée par Kiess Inc, une société par
              actions simplifiées dont le siège social est situé au 75 avenue de
              Soulac et qui est immatriculée sous le numéro XXX XXX XXX au
              Registre du
            </p>
            <p>commerce et des sociétés de Bordeaux.</p>
            <p>
              Les présentes Conditions générales d’utilisation (ci-après les «
              Conditions » ou “CGU”) déterminent les conditions dans lesquelles
              l’Utilisateur est autorisé à utiliser l’Application et à
              bénéficier de ses Services.
            </p>
            <p>
              L’accès à l’Application et l’utilisation des Services sont
              conditionnés à l’acceptation et au respect des présentes
              Conditions. Par conséquent, en créant un Compte Utilisateur et en
              utilisant l’Application vous
            </p>
            <p>
              acceptez de vous conformer aux obligations décrites dans ce
              document.
            </p>
            <p>
              Notre Politique de Confidentialité fait partie intégrante des
              présentes CGU. Nous vous invitons donc à lire attentivement
              l’ensemble de ces documents et à ne pas vous inscrire sur Kiess si
              vous n’êtes pas
            </p>
            <p>
              d’accord avec une ou plusieurs des dispositions qu’ils
              contiennent.
            </p>
            <p>1 Définitions et interprétation</p>
            <p>
              Dans les présentes CGU, les termes ci-après ont la signification
              suivante :
            </p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                « Compte Utilisateur » ou « Profil de l’Utilisateur » désignent
                l’espace spécifique à un Utilisateur sur lequel il peut
                renseigner des informations sur sa personne, consulter et
                commenter le Contenu d’autres
              </p>
              <p>
                Utilisateurs, et publier son propre Contenu. Le Compte
                Utilisateur est nécessairement public et consultable par
                n’importe qui.
              </p>
            </li>
            <li>
              <p>
                «Contenu» désigne les photos, les vidéos publiées sur
                l’Application et/ou créés grâce aux Services de l’Application ;
              </p>
            </li>
            <li>
              <p>« Parties » désigne Kiess Inc et l’Utilisateur ;</p>
            </li>
            <li>
              <p>
                « Plateforme » désigne la solution en ligne accessible à partir
                de l’application Kiess disponible sur GooglePlay ou Apple Store
                ;
              </p>
            </li>
            <li>
              <p>
                « Matchs » désigne les personnes avec qui l’utilisateur se verra
                proposer une rencontre
              </p>
            </li>
            <li>
              <p>
                « Services » désignent l’ensemble des fonctionnalités offertes à
                l’Utilisateur pour lui permettre de créer, modifier, publier,
                partager son contenu.
              </p>
            </li>
            <li>
              <p>
                « Utilisateur » désigne toute personne physique utilisant
                l’Application et ses Services ;
              </p>
            </li>
          </ul>
          <div className="w-fit">
            <p>2 Création de compte Utilisateurs</p>
            <p>2.1 Informations demandées</p>
            <p>
              Afin d’utiliser Kiess vous devez créer un Compte Utilisateur qui
              vous sera propre. Lors de la création de votre Compte Utilisateur
              nous vous demanderons de renseigner les informations suivantes :
            </p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>votre numéro de téléphone ;</p>
            </li>
            <li>
              <p>votre nom et prénom ;</p>
            </li>
            <li>
              <p>votre âge ;</p>
            </li>
            <li>
              <p>un mot de passe.</p>
            </li>
            <li>
              <p>Votre localisation</p>
            </li>
            <li>
              <p>Une photo de vous</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>
              Ces éléments sont indispensables pour pouvoir utiliser
              l’Application Kiess.
            </p>
            <p>
              Lors de la création de votre Compte Utilisateur, les informations
              communiquées doivent correspondre à votre propre identité et ne
              doivent en aucun cas être fausses ou erronées.
            </p>
            <p>
              Vous vous engagez par ailleurs à conserver la confidentialité du
              mot de passe de votre Compte Utilisateur. Si vous pensez que
              quelqu’un utilise votre Compte Utilisateur de façon illégitime
              vous vous engagez à
            </p>
            <p>
              nous en avertir en nous contactant à l’adresse contact@Kiess.fr ou
              support@kiess.com.
            </p>
            <p>
              En créant votre Compte Utilisateur, vous autorisez Kiess Inc à
              vous contacter via votre numéro de téléphone, pour obtenir des
              retours d’utilisation et des suggestions d’améliorations.
            </p>
            <p>2.2 Limite d’âge et autorisation parentale</p>
            <p>
              Kiess est ouvert aux utilisateurs de plus de 16 ans uniquement.
            </p>
            <p>
              Si vous avez moins de 16 ans, vous n’êtes pas autorisé à vous
              créer un Compte Utilisateur et à utiliser l’Application. Par
              ailleurs, si vous avez entre 13 et 16 ans, selon le pays où vous
              résidez, nous pourrions
            </p>
            <p>avoir besoin de l’autorisation de votre représentant légal.</p>
            <p>
              Si vous êtes le représentant légal d’un mineur de plus de 13 ans
              et que vous souhaitez nous contacter, nous vous invitons à nous
              envoyer un message à l’adresse email : contact@Kiess.fr ou
              support@kiess.com.
            </p>
            <p>3 Description des Services</p>
            <p>
              Vous pouvez utiliser les Services sur votre téléphone via
              l’Application mobile Kiess. Les Services vous permettent de (i)
              créer, publier, partager du Contenu, de (ii) visionner le Contenu
              d’autres Utilisateurs (iii)
            </p>
            <p>d’interagir avec eux et de (iv) supprimer votre Contenu.</p>
            <p>(i) Créer et partager votre propre Contenu</p>
            <p> Sous cette fonctionnalité vous pouvez :</p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>Prendre une photo ou une vidéo ;</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>(ii) Visionner le Contenu des autres Utilisateurs</p>
            <p>
              Vous pouvez consulter le Contenu d’autres Utilisateurs lorsque :
            </p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>Vous êtes matché avec l’Utilisateur.</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>(iii) Interagir avec d’autres Utilisateurs</p>
            <p>
              Vous pouvez interagir avec les autres Utilisateurs ou avec les
              Contenus d’autres Utilisateurs grâce à :
            </p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                La fonctionnalité « Matchmaking » qui vous permet de rechercher
                dans votre carnet de
              </p>
              <p>contacts téléphonique les personnes utilisant Kiess ;</p>
            </li>
            <li>
              <p>
                Une fonctionnalité messagerie pour échanger entre Utilisateurs;
              </p>
            </li>
          </ul>
          <div className="w-fit">
            <p>(iv) Suppression de Contenu</p>
            <p>
              Vous pouvez choisir de supprimer vos contenus une fois révélés.
            </p>
            <p>
              Si vous souhaitez néanmoins supprimer des contenus avant qu’ils
              soient révélés, nous vous invitons à nous envoyer une demande à
              l’adresse contact@Kiess.fr.
            </p>
            <p>4 Signalement de Contenu illicite ou inapproprié</p>
            <p>
              En notre qualité d’hébergeur, nous ne sommes pas soumis à une
              obligation générale de surveiller les informations que nous
              stockons. Néanmoins, si vous estimez qu’un Contenu est illicite ou
              inapproprié vous
            </p>
            <p>
              pouvez nous le signaler ou signaler l’Utilisateur qui en est
              l’auteur en cliquant sur l’onglet « signaler » dans les paramètres
              de la photo ou dans les paramètres du Profil de l’Utilisateur.
            </p>
            <p>
              Nous vous invitons notamment à nous signaler tout Contenu à
              caractère sexuel et/ou pédopornographique, appelant à la haine, au
              terrorisme, à la violence en général ou à l’égard d’un groupe de
              personnes en
            </p>
            <p>
              particulier, incitant autrui à se mettre en danger ou provoquant
              au suicide.
            </p>
            <p>5 Engagements de l’Utilisateur</p>
            <p>
              Dans le cadre de l’utilisation de l’Application, vous vous engagez
              à vous conformer aux dispositions décrites dans les présentes
              Conditions générales d’utilisation et aux lois en vigueur. A ce
              titre vous vous
            </p>
            <p>engagez à ne pas :</p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                Utiliser Kiess si vous avez moins de 13 ans, ou lorsque vous
                avez entre 13 et 16 ans si votre représentant légal n’a pas
                consenti à cette utilisation ;
              </p>
            </li>
            <li>
              <p>
                Utiliser Kiess à des fins publicitaires ou commerciales en vue
                de publier ou de faciliter la transmission de publicité,
                sollicitations commerciales, spams, « chaîne de lettres », «
                systèmes pyramidaux » ou de
              </p>
              <p>
                collecter des informations, données ou Contenus sur d’autres
                Utilisateurs sans leur autorisation ;
              </p>
            </li>
            <li>
              <p>
                Altérer ou tenter d’altérer le bon fonctionnement de
                l’Application, entraver l’accès à l’Application ou contourner
                les mesures que nous pourrions utiliser pour bloquer ou limiter
                l’accès aux Services ;
              </p>
            </li>

            <li>
              <p>
                Utiliser l’Application Kiess de manière trompeuse, malveillante,
                discriminatoire, ou plus généralement de façon illégale, par
                exemple en vous faisant passer pour quelqu’un d’autre à des fins
                personnelles ou
              </p>

              <p>commerciales ;</p>
            </li>

            <li>
              <p>
                Nuire ou tenter de nuire à autrui ou à un groupe, notamment par
                l’intimidation, le harcèlement, la promotion de contenus à
                caractère sexuel, la violence, les appels à la haine, la
                diffusion de fausses
              </p>
              <p>informations ;</p>
            </li>

            <li>
              <p>
                Utiliser les Services pour télécharger, transmettre, distribuer,
                sauvegarder ou mettre à disposition intentionnellement, par
                imprudence ou négligence tout Contenu pouvant porter atteinte
                aux droits de
              </p>

              <p>
                propriété intellectuelle des tiers, au droit à la vie privée, à
                l’image, à la dignité et à l’honneur d’autrui, y compris d’une
                personne décédée. A cet égard, veuillez noter que vous êtes seul
                responsable du
              </p>

              <p>
                Contenu que vous choisissez de partager sur l’Application, et
                cela notamment lorsque ce Contenu représente d’autres personnes.
                Nous vous recommandons de toujours vous assurer du consentement{" "}
              </p>

              <p>d’autrui à l’utilisation de leur image </p>

              <p>ou de leurs créations sur Kiess.</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>
              Nous nous réservons le droit, à tout moment et sans délai de
              préavis, de retirer ou de suspendre temporairement ou
              définitivement l’accès à tout Contenu manifestement illicite ou
              qui ne respecte pas les
            </p>
            <p>présentes Conditions.</p>
            <p>6 Suppression de Compte</p>
            <p>
              Nous nous réservons le droit de suspendre ou supprimer votre
              Compte Utilisateur sur simple notification de notre part et sans
              préavis, pour quelques raisons que ce soit et notamment en cas de
              :
            </p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                Violation ou tentative de violation des Conditions et/ou de la
                loi en vigueur ;
              </p>
            </li>

            <li>
              <p>Problèmes techniques ou de sécurité inattendus ;</p>
            </li>
            <li>
              <p>Longues Périodes d’inactivité de votre compte</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>
              Dans une telle hypothèse, vous n’êtes pas autorisé à créer un
              nouveau Compte Utilisateur.
            </p>
            <p>7 Propriété intellectuelle</p>
            <p>7.1 Propriété intellectuelle et intégrité de l’Application</p>
            <p>
              À l’exclusion des Contenus générés par les Utilisateurs,
              l’Application est la propriété exclusive de Kiess Inc, notamment
              sa structure, son design, ses interfaces, les bases de données,
              les textes, les contenus
            </p>
            <p>
              numériques, les marques, ainsi que les balises HTML de
              référencement (méta-tags). L’Application est protégée par les
              dispositions du Code de la propriété intellectuelle et, par tout
              texte national ou international
            </p>
            <p>
              {" "}
              en vigueur applicable au droit de la propriété intellectuelle.
            </p>
            <p>
              Vous pouvez utiliser l’Application en vertu d’une licence
              non-exclusive, limitée et non-transférable, révocable, valable sur
              le monde entier et jusqu’à la suppression de votre Compte
              Utilisateur pour partager vos
            </p>
            <p>Contenus et interagir avec d’autres Utilisateurs uniquement.</p>
            <p>
              En conséquence, vous vous abstenez de procéder à tout acte de
              reproduction, diffusion, rétro-ingénierie, désassemblage,
              décompilation ou utilisation de tout ou partie de l’Application
              sous quelque forme que
            </p>
            <p>
              ce soit, sauf à ce que nous vous ayons donné une autorisation
              écrite. Toute violation de cette obligation est constitutive d’une
              contrefaçon, sanctionnée notamment par les articles L.335-2 et
              suivants du Code de
            </p>
            <p> la propriété intellectuelle.</p>
            <p>Il est par ailleurs interdit de :</p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                Procéder à des extractions par transfert temporaire ou
                permanent, ou utiliser l’Application ou ses bases de données
                visibles à des fins commerciales ou autres par leur mise à
                disposition au public en tout ou
              </p>
              <p>
                partie et substantielle en terme quantitatif ou qualitatif ;
              </p>
            </li>
            <li>
              <p>
                Extraire ou utiliser de façon répétée et systématique tout ou
                partie des informations visibles de l’Application, lorsqu’une
                telle opération excède manifestement une utilisation normale et
                à titre privé de
              </p>
              <p>l’Application ;</p>
            </li>

            <li>
              <p>
                Exploiter, commercialiser ou distribuer tout élément constitutif
                de l’Application, notamment les informations visibles de
                l’Application, les bases de données, les Services, les
                programmes, les codes sources,
              </p>
              <p>les algorithmes, les méthodes incorporées à l’Application ;</p>
            </li>

            <li>
              <p>
                Utiliser des dispositifs ou logiciels aux fins de perturber ou
                tenter de perturber le bon fonctionnement de l’Application ; ou
                mettre en œuvre des actions qui imposeraient une charge
                disproportionnée sur
              </p>
              <p>nos infrastructures.</p>
            </li>
          </ul>
          <div className="w-fit">
            <p>7.2 Propriété intellectuelle et licence</p>
            <p>
              En utilisant Kiess vous serez amené à créer des Contenus dont vous
              pouvez être l’auteur et, le cas échéant, le titulaire des droits
              de propriété intellectuelle.
            </p>
            <p>
              Dès lors que vous partagez du Contenu sur l’Application vous
              concédez à Kiess Inc et à l’ensemble de ses Utilisateurs une
              licence gratuite, non-exclusive, d’une durée de 30 (trente) ans
              valable pour le monde
            </p>
            <p>entier sur tout type de support permettant :</p>
          </div>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>
                Aux autres Utilisateurs de reproduire et de partager le Contenu
                sur WhatsApp, Facebook, Twitter, SnapChat et Instagram, et plus
                généralement tout réseau social ou application de messagerie qui
                pourraient
              </p>
              <p>être interfacées avec Kiess ;</p>
            </li>
            <li>
              <p>
                A Kiess Inc d’héberger, stocker, reproduire, modifier, adapter,
                afficher, publier, éditer, distribuer et sous-licencier tout ou
                partie du Contenu aux fins de la fourniture des Services de
                l’Application à ses
              </p>
              <p>
                Utilisateurs, et pour mener des activités, marketing, de
                communication ou de promotion commerciale de Kiess.
              </p>
            </li>
          </ul>
          <p>8 Exclusion de garantie et de responsabilité</p>
          <p>
            L’Application et ses Services sont fournis « tels quels ». En
            conséquence nous ne vous offrons aucune garantie les concernant, et
            notamment concernant :
          </p>
          <ul className="ml-7 w-fit list-disc">
            <li>
              <p>La conformité de nos Services à vos attentes ;</p>
            </li>
            <li>
              <p>
                L’absence d’interruption, d’erreurs, de failles de sécurité,
                d’atteinte aux droits des tiers dans le cadre du fonctionnement
                de l’Application Kiess ;
              </p>
            </li>

            <li>
              <p>
                L’exactitude et la fiabilité des informations obtenues lors de
                l’utilisation de nos Services.
              </p>
            </li>
          </ul>
          <div className="w-fit">
            <p>
              Plus généralement, vous reconnaissez que le réseau Internet, et
              tout réseau télématique utilisé à des fins de transmission de
              données peut comporter des risques liés à l’absence de protection
              de certaines{" "}
            </p>
            <p>
              données contre des détournements éventuels et des risques de
              contamination par des virus. Aussi, la responsabilité de Kiess Inc
              ne pourra en aucun cas être retenue du fait de la perte ou
              l’altération de
            </p>
            <p>données, ou encore de la perte d’opportunité ou de temps.</p>
            <p>
              En tout état de cause, notre responsabilité est limitée aux
              préjudices matériels directs à l’exclusion de tout préjudice
              indirect, de quelque nature que ce soit.
            </p>
            <p>
              Nous nous réservons par ailleurs le droit, dans les limites
              autorisées par la loi, de modifier, suspendre, supprimer ou
              limiter la disponibilité de l’intégralité ou d’une partie de notre
              Plateforme pour des raisons
            </p>
            <p>
              commerciales et opérationnelles à tout moment et sans préavis.
            </p>
            <p>9 Protection des données personnelles</p>
            <p>
              Les utilisateurs sont informés que les données à caractère
              personnel recueillies peuvent faire l’objet d’un traitement
              informatisé conformément à la loi n° 78-17 du 6 janvier 1978
              relative à l’informatique, aux
            </p>
            <p>
              fichiers et aux libertés, modifiée (dite Loi Informatique et
              Libertés) ainsi qu’au Règlement UE 2016/679 du 27 avril 2016, dit
              Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p>
              Pour obtenir davantage de détails concernant l’utilisation de vos
              données à caractère personnel et vos droits les concernant, nous
              vous recommandons de lire notre Politique de confidentialité.
            </p>
            <p>10 Modification des Conditions Générales d’Utilisation</p>
            <p>
              Kiess Inc se réserve la faculté de modifier ses CGU à tout moment.
              Dans ce cas, Kiess Inc publiera les nouvelles versions des CGU sur
              les pages de l’Application et alertera les Utilisateurs au moyen
              d’une
            </p>
            <p>fenêtre pop-up qui apparaîtra à l’ouverture de l’Application.</p>
            <p>11 Divers</p>
            <p>
              Dans l’hypothèse où la totalité ou une partie des dispositions des
              CGU serait considérée comme illégale, inopposable ou inapplicable
              par une décision de justice, les autres dispositions ou accords{" "}
            </p>
            <p>
              demeureront applicables, à la condition que l’économie générale du
              contrat n’en soit pas bouleversée. La disposition invalide sera
              remplacée par une disposition valable, se rapprochant le plus
              possible du but{" "}
            </p>
            <p>
              économique poursuivi par les Parties. Les présentes, ainsi que la
              Politique de confidentialité, correspondent à la totalité de
              l’accord entre les Parties.
            </p>
            <p>12 Loi applicable et juridiction compétente</p>
            <p>
              Pour toute réclamation ou différend, l’utilisateur est invité en
              priorité à contacter Kiess Inc à contact@kiess.fr afin de parvenir
              à une solution amiable.
            </p>
            <p>
              Conformément à l’article 14 du Règlement (UE) n°524/2013, la
              Commission Européenne a mis en place une plateforme de règlement
              en ligne des litiges, facilitant le règlement indépendant par voie{" "}
            </p>
            <p>
              extrajudiciaire des litiges en ligne entre consommateurs et
              professionnel de l’Union européenne. Cette plateforme est
              accessible au lien suivant : https://webgate.ec.europa.eu/odr/
            </p>
            <p>
              Les présentes Conditions sont soumises au droit français. Tout
              différend non résolu par les voies indiquées ci-dessus sera soumis
              à la juridiction compétente correspondant au tribunal du lieu de
              résidence de
            </p>
            <p>
              l’Utilisateur se situant dans l’un des Etats membres de l’Espace
              Economique Européen.
            </p>
            <p>13 Frais et conditions d’achat</p>
            <p>13.1 Achats</p>
            <p>
              Dans le Service, vous pouvez acheter, avec de l’argent du « monde
              réel », un droit limité, personnel, non transférable, non
              sous-licenciable et révocable d’utiliser de la monnaie virtuelle,
              mais sans s’y limiter, de
            </p>
            <p>
              l’argent virtuel (appelé « reveals »), le tout pour une
              utilisation dans Kiess. Vous êtes uniquement autorisé à acheter
              des articles virtuels chez nous et pas d’une autre manière.
            </p>
            <p>
              Vous acceptez expressément que nous commencions l’exécution du
              contrat d’achat d’Articles virtuels ou de tout autre contenu
              numérique avant l’expiration de tout délai de rétractation légal
              défini dans les lois
            </p>
            <p>
              applicables. Vous consentez expressément au préalable à ce que le
              contenu que vous avez acheté vous soit livré avant la fin du délai
              de rétractation et vous perdez ainsi le droit légal de
              rétractation.
            </p>
            <p>
              Kiess Inc peut gérer, réglementer, contrôler, modifier ou éliminer
              les Articles virtuels à tout moment, avec ou sans préavis. Dans
              toute la mesure prévue par la loi applicable, Kiess Inc décline
              toute{" "}
            </p>
            <p>
              responsabilité envers vous ou tout tiers dans le cas où Kiess Inc
              exerce de tels droits.
            </p>
            <p>
              Le transfert d’Articles virtuels est interdit sauf autorisation
              expresse dans le Service. Sauf autorisation expresse dans le
              Service, vous ne devez pas vendre, acheter, racheter ou autrement
              transférer des Articles
            </p>
            <p>
              virtuels à toute personne ou entité ou tenter l’une des actions
              susmentionnées, y compris, mais sans s’y limiter, Kiess Inc, un
              autre utilisateur ou un tiers.
            </p>
            <p>
              TOUS LES ACHATS ET RACHATS D’ARTICLES VIRTUELS EFFECTUÉS VIA LE
              SERVICE SONT DÉFINITIFS ET NON REMBOURSABLES, SAUF OÙ L’EXIGE LA
              LOI APPLICABLE.
            </p>
            <p>
              La fourniture d’objets virtuels à utiliser dans l’application
              Kiess est un service fourni par Kiess Inc qui commence dès
              l’acceptation par Kiess Inc de votre achat.
            </p>
            <p>13.2 Paiement des frais</p>
            <p>
              Vous acceptez de payer tous les frais et taxes applicables
              encourus par vous ou toute personne utilisant un compte enregistré
              pour vous. Kiess Inc peut réviser à tout moment le prix des
              Articles virtuels
            </p>
            <p>proposés via le Service.</p>
            <p>
              VOUS RECONNAISSEZ QUE KIESS INC N’EST PAS TENU D’OFFRIR UN
              REMBOURSEMENT POUR QUELQUE RAISON QUE CE SOIT, ET QUE VOUS NE
              RECEVREZ AUCUN ARGENT OU AUTRE
            </p>
            <p>
              COMPENSATION POUR LES ÉLÉMENTS VIRTUELS NON UTILISÉS LORSQU’UN
              COMPTE EST FERMÉ, QUE CETTE FERMETURE AIT ÉTÉ VOLONTAIRE OU
              INVOLONTAIRE.
            </p>
            <p>POLITIQUE DE CONFIDENTIALITE</p>
            <p>
              Nous sommes soucieux de préserver la confidentialité des
              informations personnelles que vous nous transmettez lors de
              l’utilisation de Kiess et nous attachons une grande importance à
              la protection de votre vie
            </p>
            <p>
              privée. C’est la raison pour laquelle nous avons rédigé ce
              document (ci-après la « Politique de Confidentialité » ou les «
              Règles de Confidentialité »). Il s’applique à tous les
              Utilisateurs de la Plateforme.
            </p>
            <p>
              Nous vous invitons à lire avec attention notre Politique de
              Confidentialité et à nous contacter pour toute question sur la
              collecte et le traitement de vos Données Personnelles à l’adresse
              e-mail suivante :{" "}
            </p>
            <p>contact@kiess.fr</p>
            <p>
              Sachez enfin que la Politique de Confidentialité fait partie
              intégrante des Conditions Générales d’Utilisation et qu’à ce titre
              les définitions qui y sont établies sont applicables au présent
              document.
            </p>
            <p>
              Votre vie privée est importante pour Kiess Inc, c’est la raison
              pour laquelle nous insistons sur le fait que Kiess Inc ne vendra
              jamais vos données à des tiers, ni ne les traitera d’une manière
              dont vous ne seriez
            </p>
            <p>pas informé.</p>
          </div>
          <ul className="ml-7 w-fit list-decimal">
            <li>
              <p>Champ d’application</p>
              <p>
                La Politique de Confidentialité détaille les Données
                Personnelles collectées et traitées lors de l’utilisation de
                notre Application, les raisons du traitement des Données
                Personnelles des Utilisateurs, la manière
              </p>
              <p>
                dont Kiess Inc les utilise et les fonctionnalités proposées pour
                permettre aux Utilisateurs d’accéder et de mettre à jour leurs
                Données Personnelles.
              </p>
              <p>
                Une Donnée Personnelle se définit comme toute information se
                rapportant à une personne physique qui peut être identifiée,
                directement ou indirectement. Ce sont par exemple : le nom,
                prénom, adresse email{" "}
              </p>

              <p>
                et postale d’une personne physique, son image sur une
                photographie ou une vidéo, une adresse IP, une donnée de
                localisation, etc.
              </p>
            </li>
            <li>
              <p>
                {" "}
                Acceptation et mise à jour de nos Règles de Confidentialité
              </p>
              <p>
                En acceptant les CGU, vous confirmez avoir pris connaissance et
                accepter sans restriction ni réserve la présente Politique de
                Confidentialité qui en font intégralement partie. En cas de
                désaccord avec l’une ou
              </p>
              <p>
                plusieurs de ses conditions, l’Utilisateur est libre de ne pas
                ou ne plus utiliser nos services (notamment en cas de
                modification des termes de la Politique de Confidentialité).
              </p>

              <p>
                Les présentes Règles de Confidentialité peuvent être amenées à
                changer, étant précisé que toute diminution de vos droits ne
                saurait être appliquée sans votre consentement. Kiess Inc
                publiera les nouvelles{" "}
              </p>

              <p>
                versions de la Politique de Confidentialité sur l’Application et
                à l’adresse suivante https://Kiess.fr/cgu/ et alertera les
                Utilisateurs au moyen d’une fenêtre pop-up qui apparaîtra à
                l’ouverture de l’Application.
              </p>

              <p>
                D’une manière générale, la Politique de Confidentialité est
                toujours facilement accessible à l’adresse
                https://Kiess.fr/cgu/ou depuis les paramètres de votre Compte
                Utilisateur.
              </p>
            </li>
            <li>
              <p>Responsable de traitement des Données Personnelles</p>
              <p>
                Le traitement de vos Données Personnelles est soumis à la loi
                française, notamment à la loi n° 78-17 du 6 janvier 1978
                relative à l’informatique, aux fichiers et aux libertés,
                modifiée (dite Loi Informatique <br /> et Libertés) ainsi qu’au
                Règlement UE 2016/679 du 27 avril 2016, dit Règlement Général
                sur la Protection des Données (RGPD).
              </p>
              <p>
                Selon la réglementation en vigueur, Kiess Inc est le Responsable
                du traitement de vos Données Personnelles.
              </p>

              <p>
                En cette qualité, Kiess Inc s’engage à respecter les
                dispositions légales en vigueur et à effectuer un traitement
                licite, loyal et transparent des Données Personnelles des
                Utilisateurs. Kiess Inc garantit par ailleurs
              </p>

              <p>
                aux Utilisateurs que ce traitement s’inscrit dans le cadre des
                finalités explicites et légitimes déterminées dans la Politique
                de Confidentialité. La durée de traitement n’excède pas la durée
                nécessaire aux finalités
              </p>

              <p>
                pour lesquelles les Données Personnelles sont collectées et
                traitées.
              </p>
            </li>
            <li>
              <p>
                Catégories de Données Personnelles collectées et traitées lors
                de l’utilisation de l’Application
              </p>

              <ul className="ml-9 w-fit list-decimal">
                <li>
                  <p>
                    Quelles sont les Données Personnelles collectées et comment
                    sont-elles traitées ?
                  </p>

                  <p>
                    Afin de fournir un accès à la Plateforme à ses Services,
                    Kiess Inc est susceptible de collecter plusieurs catégories
                    de Données Personnelles vous concernant, pour des finalités,
                    des bases légales de traitement et
                  </p>
                  <p>
                    des durées de conservation différentes. Nous vous proposons
                    une synthèse de l’ensemble de ces informations dans le
                    tableau ci-dessous.
                  </p>

                  <p>
                    Si vous souhaitez en savoir un peu plus sur les Données
                    collectées et les finalités de traitement vous pouvez
                    également lire les précisions en dessous du tableau.
                  </p>

                  <p>Finalités de traitement</p>

                  <p>Données collectées</p>

                  <p>Base légale</p>

                  <p>Durées de conservation</p>

                  <p>
                    Création de compte et Identification de l’Utilisateur –
                    Gestion du compte
                  </p>

                  <p>
                    Données de profil obligatoires (Nom ou Prénom, date de
                    naissance, numéro de téléphone, mot de passe)
                  </p>

                  <p>Exécution contractuelle</p>

                  <p>
                    Durée de l’utilisation des services augmentée de 3 ans après
                    la dernière connexion au service ou jusqu’à la demande
                    suppression
                  </p>

                  <p>Données de profil optionnelles (photos de profil)</p>

                  <p>Consentement</p>

                  <p>
                    Durée de l’utilisation des services augmentée de 3 ans après
                    la dernière connexion au service ou jusqu’au retrait du
                    consentement
                  </p>

                  <p>Achat de fonctionnalités payantes</p>

                  <p>Données de transaction transmises par le Store</p>

                  <p>Exécution contractuelle</p>

                  <p>
                    Durée nécessaire à l’exécution de la transaction augmentée
                    de la durée légale de conservation à des fins comptables
                  </p>

                  <p>Bon fonctionnement de la Plateforme et de ses Services</p>

                  <p>
                    Données relatives à votre activité sur Kiess, Communications
                    avec Kiess, Données relatives aux appareils et équipements
                    utilisés
                  </p>

                  <p>Intérêt légitime</p>

                  <p>2 ans à compter de la collecte</p>

                  <p>
                    Données envoyées par l’appareil photo de votre téléphone et
                    photos stockées sur votre téléphone
                  </p>

                  <p>Consentement</p>

                  <p>
                    Durée de l’utilisation des services augmentée de 3 ans après
                    la dernière connexion ou jusqu’au retrait du consentement
                  </p>

                  <p>
                    Gestion administrative de la Plateforme, des réclamations et
                    signalements des Utilisateurs, Modération de contenu
                    conformément à nos CGU
                  </p>

                  <p>
                    Données relatives au contenu, Communications avec Kiess Inc
                  </p>

                  <p>Intérêt légitime</p>

                  <p>
                    Durée de l’utilisation des services + prescription légale (5
                    ans)
                  </p>

                  <p>
                    Modération de contenu conformément à la loi en vigueur
                    (prévention d’activités illégales, fraudes,
                    cyberharcèlement, …)
                  </p>

                  <p>
                    Modération de contenu conformément à la loi en vigueur
                    (prévention d’activités illégales, fraudes,
                    cyberharcèlement, …)
                  </p>

                  <p>Respect de nos obligations légales</p>

                  <p>
                    1 an à compter de la collecte pour les métadonnées 5 ans
                    (prescription légale) pour les données conservées aux fins
                    de prévention des litiges
                  </p>

                  <p>Mise en relation avec d’autres Utilisateurs</p>

                  <p>Données du carnet de contacts de votre smartphone</p>

                  <p>Consentement</p>

                  <p>
                    Durée de l’utilisation des services ou jusqu’au retrait du
                    consentement
                  </p>

                  <p>Géolocalisation</p>
                  <ul className=" ml-9 w-fit list-disc ">
                    <li>
                      <p>Précisions sur les Données Personnelle collectées</p>

                      <p>
                        Kiess Inc collecte deux types de Données différentes :
                      </p>
                    </li>
                  </ul>

                  <ul className="ml-9 w-fit list-decimal">
                    <li>
                      <p>(i) Les Données que vous nous transmettez</p>
                      <p>
                        Données de profil : Ce sont les Données que vous devez
                        obligatoirement renseigner à l’ouverture de votre compte
                        : votre numéro de téléphone, nom ou prénom, date de
                        naissance, nom d’utilisateur, et mot de
                      </p>

                      <p>passe.</p>

                      <p>
                        Vous pouvez également renseigner des Données
                        optionnelles : photo de profil.
                      </p>

                      <p>
                        Communications avec Kiess Inc : lorsque vous nous
                        signalez un problème sur la plateforme (contenus
                        inappropriés, bugs, erreurs), répondez à un sondage sur
                        la qualité de nos Services, demandez de
                      </p>

                      <p>
                        l’assistance ou faite une demande d’exercice de vos
                        droits nous enregistrons les informations que vous
                        acceptez de nous communiquer ou celles dont nous avons
                        besoin pour répondre à votre demande.
                      </p>
                    </li>

                    <li>
                      <p>
                        (ii) Les Données que nous collectons lorsque vous
                        utilisez nos Services
                      </p>

                      <p>
                        Données relatives à votre activité sur Kiess : ce sont
                        notamment :
                      </p>

                      <ul className="ml-9 w-fit list-disc">
                        <li>
                          <p>
                            les Données de connexion : adresse IP, date
                            d’inscription, date de votre dernière connexion ;
                          </p>
                        </li>

                        <li>
                          <p>
                            les Données relatives à la façon dont vous
                            interagissez avec les autres Utilisateurs : le
                            nombre d’amis et d’invitations, les commentaires
                            laissés sur le Contenu partagé par vos amis, les
                            amis avec lesquels
                          </p>

                          <p>vous interagissez le plus ;</p>
                        </li>

                        <li>
                          <p>
                            Précisions sur les bases légales et les finalités de
                            traitement
                          </p>

                          <p>
                            Nous traitons les Données ci-dessus décrites
                            conformément aux exigences du RGPD pour différentes
                            finalités sur les bases de :
                          </p>

                          <ul className=" w-fit list-disc">
                            <li>
                              <div>
                                L’exécution contractuelle lorsque le traitement
                                permet à Kiess Inc de fournir les Services tels
                                que décrits dans les Conditions Générales
                                d’Utilisation. Cela inclut :
                                <ul className="ml-5 w-fit list-disc">
                                  <li>
                                    <p>
                                      L’accès à la Plateforme et aux services
                                      connexes (visibilité du profil,
                                      transmission des messages et contenus
                                      partagés, suggestion d’amis) ;
                                    </p>
                                  </li>

                                  <li>
                                    <p>
                                      Le bon fonctionnement des comptes
                                      Utilisateurs ;
                                    </p>
                                  </li>

                                  <li>
                                    <p>
                                      La notification des changements apportés à
                                      nos services ;
                                    </p>
                                  </li>

                                  <li>
                                    <p>
                                      Les services d’assistance Utilisateurs ;
                                    </p>
                                  </li>

                                  <li>
                                    <p>
                                      L’administration de la Plateforme,
                                      réparation et correction de bugs, mise à
                                      jour ;
                                    </p>
                                  </li>

                                  <li>
                                    <p>
                                      La fourniture des services de partage de
                                      Contenus Utilisateurs et d’interaction
                                      avec d’autres Utilisateurs ;
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <p>
                                Nos intérêts légitimes lorsque le traitement
                                nous permet de vous proposer une Plateforme
                                efficace et dynamique. Cela inclut :
                              </p>

                              <ul className="ml-5 w-fit list-disc">
                                <li>
                                  <p>
                                    Le contrôle du contenu Utilisateurs,
                                    messages et métadonnées associées à des fins
                                    administratives et de vérification leur
                                    conformité à nos Conditions Générales
                                    d’Utilisation ;
                                  </p>
                                </li>

                                <li>
                                  <p>
                                    La vérification de la compatibilité des
                                    modalités de présentation du contenu au
                                    regard du type d’appareil utilisé ;
                                  </p>
                                </li>

                                <li>
                                  <p>
                                    La compréhension des modalités d’utilisation
                                    de la Plateforme par les Utilisateurs à des
                                    fins d’amélioration, de développement et de
                                    promotion commerciale de l’Application ;
                                  </p>
                                </li>

                                <li>
                                  <p>
                                    La vérification de la stabilité et de la
                                    sécurité de la Plateforme ;
                                  </p>
                                </li>

                                <li>
                                  <p>
                                    L’identification d’activités criminelles, de
                                    comportement frauduleux, d’utilisation
                                    abusive de la Plateforme ;
                                  </p>
                                </li>

                                <li>
                                  <p>
                                    L’envoi de sondages et de demande de
                                    feedbacks dans le but d’améliorer les
                                    Services offerts.
                                  </p>
                                </li>
                              </ul>
                            </li>

                            <li className=" list-disc">
                              <p>
                                Nos obligations légales lorsque le traitement de
                                Données vise à prévenir et lutter contre les
                                activités abusives, frauduleuses, et illégales.
                              </p>
                            </li>

                            <li>
                              <p>
                                Votre consentement lorsque le traitement porte
                                sur des Données de votre carnet de contact. Cela
                                inclut :
                              </p>

                              <ul className="ml-5 w-fit list-disc">
                                <li>
                                  <p>
                                    L’accès au carnet de contacts téléphonique
                                    afin d’identifier les Utilisateurs de nos
                                    Services que vous connaissez.
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <div className="w-fit">
              <p>b) Cookies</p>
              <p>
                Un « cookie » (ou « traceur ») est un témoin de connexion qui
                désigne un fichier texte susceptible d’être enregistré dans un
                espace dédié du disque dur de votre terminal (ordinateur,
                tablette, ou smartphone),
              </p>
              <p>
                à l’occasion de la consultation d’un service accessible en
                ligne. Un cookie permet à son émetteur d’identifier le terminal
                dans lequel il est enregistré, pendant la durée de validité ou
                d’enregistrement du cookie.
              </p>
              <p>
                Le cookie ne permet donc pas d’identifier l’Utilisateur en tant
                que tel ; il sert à enregistrer vos informations de navigation
                sur la Plateforme.
              </p>
              <p>
                Lorsque vous vous connectez sur la Plateforme, des informations
                relatives à votre navigation sont susceptibles d’être
                enregistrées dans des fichiers « Cookies » installés sur votre
                terminal, selon les choix que{" "}
              </p>
              <p>
                vous avez pu exprimer concernant les cookies et qui reste
                modifiable à tout moment. Ces cookies permettent une navigation
                personnalisée et sont également utilisés à des fins analytiques
                (mesures d’audience).
              </p>
              <p>
                L’existence des cookies et leur(s) finalité(s) vous seront
                indiquées dès votre connexion à la Plateforme, par la présence
                d’un bandeau d’information placé en bas ou en haut de la page
                d’accueil.
              </p>
              <p>
                Le dépôt et la lecture des cookies sur votre terminal
                nécessitent en général votre consentement préalable, auquel cas
                il est recueilli par un clic sur « J’accepte ». L’accord donné
                pour l’utilisation de cookies a une
              </p>
              <p>
                durée de validité de 13 mois. Passé ce délai, nous vous
                demanderons de renouveler votre accord.
              </p>
              <p>
                En cas de refus des cookies, d’opposition à ceux qui sont
                déposés par défaut ou de suppression de ceux qui sont
                enregistrés, l’Utilisateur est informé qu’il ne pourra plus
                bénéficier d’un certain nombre de
              </p>
              <p>
                fonctionnalités qui sont néanmoins nécessaires pour naviguer
                dans certains espaces de la Plateforme. Le cas échéant, Kiess
                Inc décline toute responsabilité pour les conséquences liées au
                fonctionnement{" "}
              </p>
              <p>
                dégradé de ses Prestations résultant de l’impossibilité pour
                Kiess Inc d’enregistrer ou de consulter les cookies nécessaires
                au bon fonctionnement de la Plateforme et que vous auriez
                refusés ou supprimés.
              </p>
              <p>
                Enfin, il convient de distinguer les cookies émis sur la
                Plateforme de ceux émis par des tiers. A ce titre, nous vous
                informons que des cookies peuvent être placés de temps à autre
                sur certaines pages de la
              </p>
              <p>
                Plateforme par des tiers (annonceurs publicitaires ou autres).
                Nous vous informons par ailleurs que Kiess n’exerce aucun
                contrôle sur l’utilisation de cookies par les tiers.
              </p>
              <p>Kiess recourt aux cookies et traceurs suivants :</p>
            </div>
            <ul className=" ml-8 w-fit list-disc">
              <li>
                <div>
                  Sur l’Application :
                  <ul className=" w-fit list-disc">
                    <li className="ml-5">
                      <p>
                        les cookies nécessaires à l’utilisation des Services,
                        par exemple en vous permettant de rester connecté à
                        votre compte ;
                      </p>
                    </li>

                    <li className="ml-5">
                      <p>
                        les cookies analysant votre utilisation de l’Application
                        afin de générer des rapports statistiques, sans vous
                        identifier :
                      </p>
                      <li className="ml-10">
                        {" "}
                        <p>Google Analytics</p>
                      </li>

                      <li className="ml-5">
                        <p>
                          les cookies nécessaires au fonctionnement correct et
                          efficace de l’Application, par exemple en sauvegardant
                          vos préférences d’utilisation.
                        </p>
                      </li>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <p>Sur le site internet https://Kiess.fr/:</p>
              </li>

              <li className="ml-5">
                <p>
                  les cookies analysant votre utilisation du site internet afin
                  de générer des rapports statistiques, sans vous identifier :
                </p>
              </li>
            </ul>

            <li>
              <p>Conditions d’utilisation des Données Personnelles</p>

              <p>
                Toute utilisation de Données Personnelles dans un but autre que
                ceux exposés ci-dessus dans nos Règles de Confidentialité
                nécessitera l’accord préalable exprès de l’Utilisateur.
              </p>

              <p>
                Kiess Inc s’engage à conserver les Données Personnelles des
                Utilisateurs uniquement pendant la durée strictement nécessaire
                au(x) traitement(s) déclaré(s) selon les finalités précitées ou
                à l’exercice et à la
              </p>

              <p>
                constatation de ses droits en justice, et en toute hypothèse
                dans les limites imposées par la loi.
              </p>

              <p>
                Kiess Inc s’engage à effacer les Données Personnelles de ses
                bases de données à l’issue de ces différentes durées. En cas de
                demande de suppression de votre compte, celle-ci sera effective
                sous 30 (trente) jours
              </p>

              <p>
                {" "}
                jours. Toutes nos sauvegardes sont automatiquement supprimées
                après 90 (quatre-vingt-dix) jours.
              </p>

              <p>
                Toutefois, Kiess Inc peut conserver certaines informations pour
                une période postérieure à la clôture du compte personnel de
                l’Utilisateur afin de satisfaire à des obligations légales,
                comptables et fiscales et{" "}
              </p>

              <p>
                notamment, afin de prévenir d’éventuels comportements illicites
                après la suppression d’un Compte Utilisateur (réutilisation d’un
                ancien compte par un tiers). Dans cette hypothèse, les Données
                Personnelles
              </p>

              <p> seront désactivées et ne seront plus accessibles en ligne.</p>
            </li>
            <li>
              <p>Partage d’informations avec des tiers</p>
              <p>
                1. Absence de communication des Données Personnelles à des tiers
              </p>

              <p>
                A l’exception des Contenus sur lesquels vous nous avez concédés
                une licence d’utilisation conformément aux dispositions des
                Conditions générales d’utilisation, Kiess Inc s’engage à ne pas
                divulguer à des tiers
              </p>

              <p>
                les informations et Données Personnelles communiquées par les
                Utilisateurs. Ces informations et Données Personnelles sont
                exclusivement utilisées par les services internes de Kiess Inc
                et ne seront en aucun{" "}
              </p>

              <p>
                cas cédées, vendues à des tiers sans votre accord préalable
                exprès.
              </p>

              <p>
                b) Communication des Données Personnelles pour des besoins de
                traitement externe
              </p>

              <p>
                Vos informations et Données Personnelles peuvent, le cas
                échéant, être transmises à des tiers sous-traitants intervenant
                dans la fourniture des Services (prestataires techniques et
                d’hébergement, envoie de{" "}
              </p>

              <p>
                notifications, publication et partage des contenus, suivi
                Utilisateur et enquêtes de satisfaction, gestion d’incident de
                sécurité ou activité frauduleuse, etc.).
              </p>

              <p>
                Kiess Inc s’engage à ne communiquer les Données Personnelles des
                Utilisateurs qu’à des prestataires habilités et de confiance,
                qui les traitent pour notre compte, selon nos instructions,
                conformément aux
              </p>

              <p>
                présentes Règles de Confidentialité et dans le respect de toute
                autre mesure appropriée de sécurité et de confidentialité.
              </p>

              <p>
                c) Communication des Données Personnelles en dehors de l’Union
                Européenne
              </p>

              <p>
                Le traitement des Données Personnelles dans les conditions
                décrites dans les Règles de Confidentialité implique parfois de
                transférer vos Données dans un ou plusieurs autres pays, à
                l’intérieur ou à l’extérieur{" "}
              </p>

              <p>
                de l’Espace Economique Européen, et notamment aux Etats-Unis.
              </p>

              <p>
                Le cas échéant nous utilisons les clauses contractuelles type
                et/ou tout autre mécanisme approuvé par la Commission Européenne
                pour conserver un niveau de protection de vos Données
                Personnelles{" "}
              </p>

              <p>équivalent à celui garanti par le RGPD.</p>

              <p>
                d) Communication pour des raisons d’ordre juridique et légale
              </p>

              <p>
                Les informations et Données Personnelles pourront également être
                divulguées à un tiers si Kiess Inc y est contraint par la loi,
                une disposition réglementaire, ou une ordonnance judiciaire, ou
                encore si cette{" "}
              </p>

              <p>
                divulgation est rendue nécessaire pour les besoins d’une
                enquête, injonction ou d’une procédure judiciaire, sur le
                territoire national ou à l’étranger.
              </p>

              <p>
                De même, Kiess Inc peut être amené à partager les informations
                et Données Personnelles avec des entreprises, des conseils ou
                des personnes tierces afin de :
                <ul className="ml-10 w-fit list-disc">
                  <li>
                    <p>
                      Faire appliquer la Politique de Confidentialité et les
                      Conditions générales d’utilisation de l’Application en
                      vigueur, y compris pour constater d’éventuels manquements
                      à celles-ci ;
                    </p>
                  </li>

                  <li>
                    <p>
                      Se prémunir contre toute atteinte aux droits, aux biens ou
                      à la sécurité de ses utilisateurs, en application et dans
                      le respect de la loi.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>Sécurité des Données Personnelles </p>
            </li>
            <div className="w-fit">
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles, comme le chiffrement des Données ou la
                restriction de leur accès au personnel autorisé, pour nous
                assurer que vos Données Personnelles
              </p>
              <p>
                sont traitées de manière sécurisée dans le respect des Règles de
                Confidentialité. Cependant, la transmission d’informations via
                Internet comporte des risques irréductibles qui ne permettent
                pas de garantir une{" "}
              </p>
              <p>
                parfaite sécurité des informations transmises via la Plateforme.
                En conséquence, toute transmission de Données Personnelles est
                réalisée à vos propres risques.
              </p>
            </div>
            <li>
              <p>Respect des droits des Utilisateurs de la Plateforme</p>
              <div>
                Vous disposez de certains droits sur vos Données Personnelles
                dont voici la liste :
                <ul className="ml-10 w-fit list-decimal">
                  <li>
                    <p>
                      Droit d’accès : il vous permet d’accéder gratuitement aux
                      Données Personnelles collectées à votre égard.
                    </p>
                  </li>

                  <li>
                    <p>
                      Droit de rectification : il vous permet de mettre à jour
                      ou de corriger l’exactitude de vos{" "}
                    </p>
                  </li>

                  <li>
                    <p>
                      Droit de suppression : il peut être exercé lorsque le
                      traitement des Données Personnelles n’est plus nécessaire
                      au regard des finalités pour lesquelles elles ont été
                      collectées ou, le cas échéant,
                    </p>
                    <p>
                      {" "}
                      lorsque vous retirerez votre consentement au traitement.
                    </p>
                  </li>

                  <li>
                    <p>
                      Droit d’opposition à la collecte et au traitement de tout
                      ou partie de vos Données Personnelles : ce droit n’est pas
                      absolu et ne s’applique qu’aux Données Personnelles
                      collectées à des fins de prospection
                    </p>

                    <p>
                      commerciale, y compris de profilage lorsqu’il est lié à
                      des activités de prospection commerciale. Lorsque vous
                      choisissez de vous opposer à un tel traitement nous vous
                      demandons de nous indiquer les{" "}
                    </p>

                    <p>
                      raisons de votre opposition afin de nous permettre de
                      mettre en balance nos intérêts légitimes avec votre
                      demande
                    </p>
                  </li>

                  <li>
                    <div>
                      Droit de limitation du traitement des Données
                      Personnelles. Ce droit n’est pas absolu, et ne peut
                      s’appliquer que lorsque :
                      <ul className="ml-10 w-fit list-disc">
                        <li>
                          <p>
                            une demande de rectification a été effectuée en
                            vertu du droit de rectification décrit au 8.2. Vous
                            pouvez alors demander l’arrêt du traitement de vos
                            Données Personnelles pendant la durée nécessaire à
                          </p>

                          <p>
                            la vérification de l’exactitude des rectifications
                            demandées.
                          </p>
                        </li>

                        <li>
                          <p>
                            Vous souhaitez vous opposer à l’effacement de vos
                            Données Personnelles dont le traitement était
                            illicite ;
                          </p>
                        </li>

                        <li>
                          <p>
                            Kiess Inc n’a plus besoin des Données Personnelles
                            conformément aux finalités de traitement mais
                            celles-ci vous sont encore nécessaires pour la
                            constatation, l’exercice ou la défense de droits en
                            justice ;
                          </p>
                        </li>

                        <li>
                          <p>
                            Vous souhaitez faire usage de votre droit
                            d’opposition décrit au 8.4. Vous pouvez alors
                            demander l’arrêt du traitement de vos Données
                            Personnelles pendant la durée nécessaire à la mise
                            en balance de
                          </p>

                          <p>nos intérêts légitimes avec votre demande.</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <p>
                Avant de pouvoir répondre à une demande d’exercice d’un ou
                plusieurs de vos droits, nous pourrions vous demander de nous
                confirmer quelques informations de votre Compte afin de vérifier
                votre identité.
              </p>
              <p>
                En cas de doute raisonnable, nous pourrons vous demander une
                pièce d’identité.
              </p>
            </li>

            <li>
              <p>Information concernant les enfants</p>

              <p>
                Kiess n’est pas destiné aux mineurs de moins de 13 ans. Si vous
                pensez que nous avons des Données Personnelles concernant un
                enfant ou qui ont été collectées auprès d’un enfant n’ayant pas
                l’âge requis,
              </p>

              <p>
                vous pouvez nous faire part de vos doutes en signalant le
                contenu ou le Compte Utilisateur.
              </p>
            </li>

            <li>
              <p>Informations concernant les utilisateurs Américains</p>

              <p>
                Cette clause n’est valide et juridiquement contraignante que si
                vous êtes partie aux Conditions Générales d’Utilisation de
                Kiess. Cette clause relative aux utilisateurs américains,
                notamment aux résidents
              </p>

              <p>
                Californiens et de Virginie, s’applique aux renseignements
                personnels (tels que définis dans les réglementations
                applicables) fournis à Kiess Inc par l’Utilisateur.
              </p>

              <p>
                À la lumière de la loi californienne sur la protection de la vie
                privée des consommateurs de 2018 (“CCPA”), nous vous fournissons
                cette information en tant que fournisseur de services amené à
                traiter vos{" "}
              </p>

              <p>
                informations personnelles (telles que définies dans la loi
                applicable), afin de confirmer que nous avons mis en place des
                conditions contractuelles adéquates. Le terme « loi applicable »
                désigne l’ensemble des
              </p>

              <p>
                lois, règlements, normes, orientations réglementaires et
                directives d’autoréglementation qui peuvent s’appliquer
                concernant la gestion de vos Données. Les lois applicables
                comprennent, sans s’y limiter, la loi
              </p>

              <p>
                californienne sur la protection de la vie privée des
                consommateurs (Cal. Civ. Code §1798.100 – 1798.199), ou la loi
                de Virginie sur la protection des données des consommateurs (SB
                1392).
              </p>

              <p>
                En tant que fournisseur de services, nous collecterons,
                conserverons, utiliserons, divulguerons et traiterons vos
                informations personnelles uniquement pour remplir nos
                obligations envers vous en vertu de notre
              </p>

              <p>
                accord, pour des finalités opérationnelles préalablement
                mentionnées dans cette Politique, à l’exclusion de toute autre
                finalité.
              </p>

              <p>
                Nous ne vendrons pas vos informations personnelles ou ne
                divulguerons pas vos informations personnelles à des fins
                commerciales.
              </p>

              <p>
                Nous certifions que nous comprenons et respectons les
                restrictions et les obligations énoncées dans la loi Cal. Civ.
                Code § 1798.140(w)(2) ainsi que la loi Va. SB 1392. En cas
                d’incohérence ou de conflit entre
              </p>

              <p>
                les termes et conditions de la présente clause et ceux des CGU
                ou de la Politique de confidentialité, ces dernières feront foi
                en ce qui concerne les Données des personnes dans l’Espace
                économique
              </p>

              <p>européen.</p>

              <p>
                Pour toute question sur le CCPA ou toute autre réglementation
                américaine chez Kiess Inc ou pour exercer vos droits à ce titre,
                vous pouvez nous contacter tel qu’indiqué à l’article 11.
              </p>
            </li>

            <li>
              <p>Contact</p>

              <div>
                Vous pouvez exercer ces droits à tout moment selon deux
                modalités au choix :
                <ul className="ml-10 w-fit list-disc">
                  <li>
                    <p>
                      Par courrier postal à l’adresse suivante : Kiess Inc, 75
                      avenue de Soulac, 33 320 LE TAILLAN MEDOC;
                    </p>
                  </li>
                  <li>
                    <p>Par e-mail à : contact@kiess.fr</p>
                  </li>
                </ul>
              </div>

              <p>
                Kiess Inc s’engage à répondre à vos demandes concernant les
                Règles de Confidentialité ou l’exercice de leurs droits, dans
                les meilleurs délais.
              </p>
            </li>
          </ul>
        </article>
      </section>
      </motion.h1>
    </main>
  );
};

export default Conditions;
