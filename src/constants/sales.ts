import { images } from "./images"

export interface SalesType {
    image : string,
    name : string,
    price : string
}

export const salesData : SalesType[] = [
    {
        image : images.SALESIMG1,
        name : 'Plaquettes de Frein',
        price: '25 000 XAF'
    },
    {
        image : images.SALESIMG2,
        name : 'Amortisseurs',
        price: '45 000 XAF'
    },
    {
        image : images.SALESIMG3,
        name : 'Filtres à Air',
        price: '20 000 XAF'
    },
    {
        image : images.SALESIMG4,
        name : 'Batterie de Voiture',
        price: '80 000 XAF'
    },
]