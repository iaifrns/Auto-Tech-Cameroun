import { images } from "./images";

export interface ServiceType {
  image: string;
  title: string;
  desc: string;
}

export const services: ServiceType[] = [
  {
    image: images.SERVICE1,
    title: "Nouveau Design",
    desc: "Services innovants pour améliorer l'apparence et les performances de votre véhicule.",
  },
  {
    image: images.SERVICE2,
    title: "Service de Pneumatiques",
    desc: "Vente, installation, équilibrage et réparation de pneus assurant sécurité et performance.",
  },
  {
    image: images.SERVICE3,
    title: "Révolution technologique",
    desc: "Intégration des dernières innovations pour diagnostiquer, réparer et entretenir votre véhicule",
  },
];

export const serviceData1: ServiceType[] = [
  {
    title: "Diagnostic Véhicule",
    desc: " Identifie rapidement les problèmes mécaniques et électroniques.",
    image: images.SERVICEIMG1,
  },
  {
    title: "Entretien Moteur",
    desc: " Inspection et réparation pour une sécurité optimale",
    image: images.SERVICEIMG2,
  },
  {
    title: "Service de Freins",
    desc: "Inspection et réparation pour une sécurité optimale.",
    image: images.SERVICEIMG3,
  },
];

export const serviceData2: ServiceType[] = [
  {
    title: "Révision Transmission",
    desc: "Réparation et maintenance des transmissions du vehicule",
    image: images.SERVICEIMG4,
  },
  {
    title: "Suspension et Direction",
    desc: "Réparations pour une conduite stable et sécurisée",
    image: images.SERVICEIMG5,
  },
  {
    title: "Changement d'Huile",
    desc: "Entretien régulier pour prolonger la vie du moteur",
    image: images.SERVICEIMG6,
  },
];
