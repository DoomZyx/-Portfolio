

import ohmyfood from "/public/ohmyfood/ohmyfood.webp";
import ohmyfood3 from "/public/ohmyfood/ohmyfood3.webp";
import ohmyfood4 from "/public/ohmyfood/ohmyfood4.webp";
import ohmyfood2 from "/public/ohmyfood/ohmyfood2.webp";
import ohmyfood5 from "/public/ohmyfood/ohmyfood5.webp";

import kasa from "/public/kasa/kasa.webp";
import kasa2 from "/public/kasa/kasa2.webp";
import kasa3 from "/public/kasa/kasa3.webp";
import kasa4 from "/public/kasa/kasa4.webp";

import lemas1 from "/public/lemas/lemas1.webp";
import lemas2 from "/public/lemas/lemas2.webp";
import lemas3 from "/public/lemas/lemas3.webp";
import lemas4 from "/public/lemas/lemas4.webp";
import lemas5 from "/public/lemas/lemas5.webp";

import js from "/public/stack/js.webp";
import node from "/public/stack/node.webp";
import mongodb from "/public/stack/mongodb.webp";
import react from "/public/stack/react.webp";
import sass from "/public/stack/sass.webp";
import figma from "/public/stack/figma.webp";

const projects = [
  {
    id: 1,
    title: {
      fr: "Ohmyfood",
      en: "Ohmyfood",
    },
    progression: "in-progress",
    images: [ohmyfood, ohmyfood2, ohmyfood3, ohmyfood4, ohmyfood5],
    description: {
      fr: "J'ai décidé de faire une refonte d'un projet que j'ai effectué en formation. Le projet de base consistait à développer une application en mobile-first en se concentrant sur la gestion des composants sass et créer des animations. <br> Quelques mois après, lorsque j'ai su mieux maitriser React je me suis décidé de refaire ce projet mais avec des fonctionnalités complètes et en utlisant Redux. (Créer un compte et se connecter au site, la gestion du panier, ajouter des restaurants). <br> Et j'ai décidé de créer un backend pour me familiariser avec node.js et MangoDB",
      en: "I decided to redesign a project I worked on during my training. The original project involved developing a mobile-first application, focusing on managing Sass components and creating animations. A few months later, when I had a better grasp of React, I decided to redo this project with full features and using Redux. (Creating an account and logging into the site, managing the cart, adding restaurants). I also decided to build a backend to familiarize myself with Node.js and MongoDB",
    },
    technos: [js, react, mongodb, node, sass],
    link: "https://github.com/DoomZyx/OhMyFood",
  },

  {
    id: 2,
    title: {
      fr: "Kasa",
      en: "Kasa",
    },
    progression: "completed",
    images: [kasa, kasa2, kasa3, kasa4],
    description: {
      fr: "Dans le cadre de ma formation, j’ai développé un site de location de logements entre particuliers en utilisant React. Ce projet m’a permis de me confronter à plusieurs défis techniques, notamment la gestion du routage dynamique avec React Router pour afficher les détails d’un logement en fonction de son ID. <br> J’ai également travaillé sur l’implémentation d’un système de collapse permettant d’afficher ou de masquer des informations supplémentaires, c'est deux points m’ont aidés à mieux comprendre la gestion du state, des props et des événements en React. <br> Ce projet m’a permis de renforcer mes compétences en Front-end et d’améliorer mes compétences sur React.",
      en: "As part of my training, I developed a rental housing website for individuals using React. This project allowed me to face several technical challenges, including managing dynamic routing with React Router to display housing details based on their ID. I also worked on implementing a collapse system to show or hide additional information. These two aspects helped me better understand state management, props, and event handling in React. This project strengthened my front-end skills and improved my proficiency in React.",
    },
    technos: [js, react, sass],
    link: "https://github.com/DoomZyx/Kasa",
  },
  {
    id: 3,
    title: {
      fr: "Le Mas Du Paradis Bleu",
      en: "Le Mas Du Paradis Bleu",
    },
    progression: "completed",
    images: [lemas1, lemas2, lemas3, lemas4, lemas5],
    description: {
      fr: "Pour ce projet, j’ai mis mes compétences au service d’un proche souhaitant valoriser son gîte à travers un site vitrine moderne et épuré. J’ai pris en charge l’intégralité du développement web, de la conception des maquettes jusqu’au déploiement d’une version fonctionnelle, avec pour objectif : <br><br> • Offrir aux visiteurs une expérience fluide, visuelle et rassurante.<br>• Créer une interface responsive adaptée à tous les supports (ordinateur, tablette, mobile).<br>• Optimiser l’expérience utilisateur grâce à une navigation claire et un contenu visuel attractif. <br><br> Ce projet m’a également permis d’affiner mes capacités en communication, en traduisant des besoins clients en solutions concrètes et en gérant l’ensemble des aspects techniques jusqu’à la mise en ligne d’une version démo.",
      en: "For this project, I had the opportunity to put my skills to use by helping someone close to me who wanted to promote their vacation rental through a modern and clean showcase website. I handled the entire web development process, from design to deployment, with a clear goal: \n\n• To provide visitors with a smooth, visual, and reassuring experience. \n\nThrough this project, I strengthened several key skills :\n\n • Building a fully responsive interface adapted to all devices (desktop, tablet, mobile). \n• Enhancing the user experience by improving navigation and information clarity. \n • Highlighting visual content to showcase the unique environment of the rental. \n • Deploying and managing hosting to ensure fast and free access via Vercel.\n This project also allowed me to improve my client communication skills by understanding the needs of someone unfamiliar with the digital world and turning them into concrete solutions.",
    },
    technos: [sass, js, react, figma],
    link: "https://github.com/DoomZyx/Le-Mas-Du-Paradis",
  },
];

export default projects;
