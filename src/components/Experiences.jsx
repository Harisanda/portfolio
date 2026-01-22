import React from 'react'
import './style/Experiences.css';
import { MdOutlineWorkOutline } from "react-icons/md";
import { diplomas } from '../utils/diploma';
import { motion } from 'framer-motion';



const projects = [
    {
        poste: "Editeur de texte Intelligent",
        societe: "Projet academiques",
        date: "2025",
        description: `Cet éditeur vise à assister les rédacteurs malagasy, en combinant les 
                    règles linguistiques, algorithmes classiques et modules IA légers pour 
                    compenser le manque de données (Low Resource Language). Il offre un correcteur
                    orthographique avec une autocompletion et une prediction des mots suivants`,
        outils: ['Next','Python','FastAPI']
    },
    {
        poste: "Smart Stock",
        societe: "Projet academiques",
        date: "2025",
        description: `Le Système Gestion des stock intelligent ou « Smart Stock » est un système qui permet
                    de suivre en temps réel les mouvements des stocks, tous en fournissant des alertes automatiques
                    en cas de rupture ou en surstock. Il offre également des prévisions des sorties, afin d’aider les
                    responsables à anticiper les besoins d’approvisionnement. En Combinant automatisation,
                    analyse prédictive et gestion opérationnelle, ce logicielle vise à réduire les pertes et améliorer
                    la rentabilité de l’entreprise.`,
        outils: ['React','FastAPI','Postgresql']
    },
    {
        poste: "Steedy",
        societe: "Smart Enterprise",
        date: "02/2023 - 08/2023",
        description: `Cette application web hybride combine Marketplace, LMS et réseau social pour transformer l’expérience
                     d’apprentissage professionnel. Elle facilite l’accès à des ressources et services variés, encourage 
                     les échanges et la collaboration à distance, et permet aux formateurs de construire des parcours 
                     personnalisés adaptés aux besoins et au niveau de chaque apprenant.
                     Grâce à l’intégration de modules e-learning et d’outils collaboratifs, l’application offre plusieurs bénéfices :
                     gain de temps et optimisation des coûts pour l’entreprise et les apprenants, autonomie et flexibilité dans le suivi des parcours, suivi individualisé des progrès simplifié, engagement renforcé grâce à l’interaction entre apprenants et formateurs.
                     Cette solution exploite pleinement les technologies digitales pour rendre les formations plus efficaces, accessibles et engageantes, tout en soutenant la montée en compétence des collaborateurs.`,
        outils: ['React','Django','Postgresql','Material UI']
    },
    {
        poste: "Mada-pharma",
        societe: "Projet academiques",
        date: "2023",
        description: `Mada-Pharma est une application numérique conçue pour 
                    faciliter l’accès aux médicaments à Madagascar en mettant en relation les utilisateurs
                    un problème courant : la difficulté à trouver un médicament précis, disponible immédiatement
                    et dans une pharmacie proche de la localisation de l’utilisateur.
                    L’application permet à l’utilisateur de rechercher un médicament par nom.
                    Une fois la recherche effectuée, Mada Pharma affiche une liste de pharmacies disposant du médicament demandé,
                    classées par ordre de proximité par rapport à la position GPS du téléphone. Cette fonctionnalité de géolocalisation
                    permet de réduire le temps de déplacement, d’éviter les recherches inutiles et d’améliorer l’expérience globale
                    du patient..`,
        outils: ['React native','Node','Javascript','Postgresql']
    },
]

const cardVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction === "left" ? -100 : 100
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut",
            type:"spring",
            stiffness: 300,
            damping: 20
        }
    }
}

const timelineVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: "easeOut"
        }
    }
}



export const Experiences = () => {
  return (
    <section className='experiences' id='experiences'>
        <div className='skills-title'>
          <div className='trait'></div>
          <div className='xp-title'>
            <h2>EXPERIENCES</h2>
            <MdOutlineWorkOutline />
          </div>
        </div>
        <div className='xp-content'>
            { projects.map((project,index) => {
                const direction = index % 2 === 0 ? "left" : "right"
                return (
                    <motion.div className='card-xp' key={index}
                        variants={cardVariants}
                        custom={direction}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:false, amount:0.3}}
                    >
                        <div className='card-xp-title'>
                            <h2>{project.poste}</h2>
                        </div>
                        <div className='card-xp-subtitle'>
                            <p>{project.societe}</p>
                            <p>{project.date}</p>
                        </div>
                        <div className="card-xp-content">
                            <p>{project.description}</p>
                            <div className='stack-list'>
                                {project.outils.map(outil => {
                                    return (
                                        <p>{outil}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
        <div className='formation'>
            <div className='timeline'>
                {
                    diplomas.map((diploma,index) => {
                        const Icon = diploma.icon;
                        return (
                            <motion.div className={`f-container ${diploma.position}`}  key={index}
                                    variants={timelineVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:false}}
                            >
                                <i><Icon/></i> 
                                <div className='text-box'>
                                    <h2>{diploma.cardTitle}</h2>
                                    <small>{diploma.title} - {diploma.cardSubtitle}</small>
                                    <p>{diploma.description}</p>
                                    <span className={`${diploma.arrow}`}></span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
