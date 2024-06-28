import { heroImage } from "./images"

export interface HeroData {
    title : string,
    title1: string,
    desc: string,
    image : string
}

export const heroData : HeroData[] = [
    {
        title : "Réparation",
        title1 : "De Qualité Supérieure",
        desc : "Nous offrons des services de réparation automobile de haute qualité, assurant que votre véhicule reçoive les meilleurs soins et solutions techniques disponibles sur le marché",
        image : heroImage[0]
    },
    {
        title : "Services",
        title1 : "24/7",
        desc : "Notre équipe est disponible jour et nuit pour répondre à vos besoins en matière de réparation et d'entretien automobile. Nous sommes là pour vous, à tout moment, pour assurer la sécurité et la fiabilité de votre véhicule",
        image : heroImage[1]
    },
    {
        title : "Mécanique",
        title1 : "Automobile",
        desc : "Spécialisés dans la mécanique automobile, nous proposons une gamme complète de services de réparation et d'entretien pour tous types de véhicules. Notre équipe de mécaniciens expérimentés est prête à résoudre vos problèmes mécaniques avec expertise et professionnalisme",
        image : heroImage[2]
    }
]