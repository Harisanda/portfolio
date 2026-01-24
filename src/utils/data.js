import projets1 from '../assets/images/projets1.jpeg';
import react from '../assets/images/react.svg';
import laravel from '../assets/images/laravel.svg';
import php from '../assets/images/php.svg';
import mysql from '../assets/images/mysql.svg';
import nodejs from '../assets/images/nodejs.svg'
import mongodb from '../assets/images/mongodb.svg';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import javascript from '../assets/images/javascript.svg';
import typescript from '../assets/images/typescript.svg';
import redis from '../assets/images/redis.svg';
import postman from '../assets/images/postman.svg';
import websocket from '../assets/images/websocket.svg';





export const data = [
  {
    titre: 'Immo Agency',
    img: projets1,
    description: `Immo Agency est une application web conçue pour faciliter la gestion des biens immobiliers et la recherche d’appartements.
                  Les utilisateurs peuvent consulter les annonces, filtrer les biens selon leurs critères et trouver des logements correspondant à leurs besoins, tandis que l’application permet une gestion structurée des données immobilières.
                  Ce projet m’a permis de renforcer mes compétences en développement web backend avec Laravel et en conception d’applications orientées métier.`,
    link: "https://github.com/Harisanda/Immo-agency",
    stacks: [
      {
        name: "Laravel",
        logo: laravel
      },
      {
        name: "php",
        logo: php
      },
      {
        name: "Mysql",
        logo: mysql
      },
    ]
  },
  
  {
    titre: 'LMS server',
    img: projets1,
    description: `LMS Server est un projet backend conçu pour fournir une API permettant la gestion des étudiants, des cours et de leurs relations.
                  L’application expose des endpoints REST facilitant la création, la mise à jour et la consultation des données pédagogiques, tout en respectant une architecture claire et maintenable.
                  Ce projet m’a permis de renforcer mes compétences en développement backend et en conception d’API.`,
    link: "https://github.com/Harisanda/lms_server",
    stacks: [
      {
        name: "Node js",
        logo: nodejs
      },
      {
        name: "Mongodb",
        logo: mongodb
      },
      {
        name: "Postman",
        logo: postman
      },
      {
        name: "Redis",
        logo: redis
      },
      {
        name: "Typescript",
        logo: typescript
      },
    ]
  },
  {
    titre: 'Pokemon',
    img: projets1,
    description: `Pokémon App est une application web dans le but d’explorer le fonctionnement du framework React et ses concepts clés.
                  Le projet permet de manipuler des composants, gérer l’état de l’application et structurer une interface dynamique tout en travaillant avec des données liées à l’univers Pokémon.
                  Cette application m’a permis de consolider mes bases en React et de comprendre son approche basée sur les composants.`,
    link: "https://github.com/Harisanda/pokemon-app",
    stacks: [
      {
        name: "React",
        logo: react
      },
      {
        name: "Html",
        logo: html
      },
      {
        name: "Css",
        logo: css
      },
      {
        name: "Typescript",
        logo: typescript
      },
    ]
  },
  {
    titre: 'Clubhouse-Clone',
    img: projets1,
    description: `Clubhouse Clone est une application web dont l’objectif est de reproduire le principe des conférences vocales en ligne.
                  Les utilisateurs peuvent rejoindre des rooms audio, écouter les intervenants et interagir en direct, offrant une expérience de communication fluide et immersive.
                  Ce projet m’a permis de travailler sur une architecture full-stack et la gestion des interactions en temps réel.`,
    link: "https://github.com/Harisanda/clubhouse-clone",
    stacks: [
      {
        name: "React",
        logo: react
      },
      {
        name: "Node js",
        logo: nodejs
      },
      {
        name: "Mongodb",
        logo: mongodb
      },
      {
        name: "Websocket",
        logo: websocket
      },
      {
        name: "Postman",
        logo: postman
      },
      
    ]
  },
  {
    titre: 'Mon Portfolio',
    img: projets1,
    description: `Ce portfolio personnel est une application web conçue pour mettre en valeur mes projets, mes compétences et mon expérience en développement web.
                  Il propose une navigation fluide, un design moderne et des interactions soignées afin d’offrir une expérience utilisateur claire et professionnelle.
                  Ce projet reflète mon identité de développeur et ma capacité à concevoir des interfaces propres et structurées.`,
    link: "https://github.com/Harisanda/portfolio",
    stacks: [
      {
        name: "React",
        logo: react
      },
      {
        name: "Html",
        logo: html
      },
      {
        name: "Css",
        logo: css
      },
      {
        name: "Javascript",
        logo: javascript
      },
    ]
  },
  {
    titre: 'Nft App',
    img: projets1,
    description: `NFT App est une application mobile conçue dans un objectif d’apprentissage du développement mobile.
                  Le projet explore les concepts clés de React Native, tels que la structure des composants, la navigation et la gestion de l’état, à travers une interface inspirée de l’univers des NFT.
                  Cette application m’a permis de découvrir les spécificités du développement mobile par rapport au web.`,
    link: "https://github.com/Harisanda/nft-app",
    stacks: [
      {
        name: "React native",
        logo: react
      },
    ]
  },
]