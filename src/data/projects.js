const base = import.meta.env.BASE_URL;

export const projects = [
    {
        id: 1,
        name: 'Furina de Fontaine',
        desc: 'An immersive café landing page with a deep, coffee-inspired palette. Furina de Fontaine allows customers to browse the menu and locate the shop, creating a sensory-driven interface that makes users feel the cozy atmosphere and aroma of Fontaine\'s finest brews.',
        img: `${base}projects-pictures/FurinaDeFontaine-preview.png`,
        link: '',
        tags: ['Astro', 'HTML', 'CSS', 'JavaScript']
    },

    {
        id: 2,
        name: 'Green Evergarden',
        desc: 'A nature-centric online store for eco-conscious shoppers. Green Evergarden allows users to discover premium sustainable products, browse verified customer feedback, and join a growing community through its integrated subscription system.',
        img: `${base}projects-pictures/GreenEvergarden-preview.png`,
        link: '',
        tags: ['React', 'Tailwind CSS', 'CSS']
    },

]