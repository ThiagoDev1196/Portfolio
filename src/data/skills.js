const base = import.meta.env.BASE_URL;

export const skills ={
    languages: [
        {name: "HTML", img: `${base}skills-pictures/html5.svg`},
        {name: "CSS", img: `${base}skills-pictures/css3.svg`},
        {name: "JavaScript", img: `${base}skills-pictures/javascript.svg`}
    ],
    frameworks:[
        {name: "Astro", img: `${base}skills-pictures/astro.svg`},
        {name: "React", img: `${base}skills-pictures/react.svg`},
        {name: "Tailwind CSS", img: `${base}skills-pictures/tailwindcss.svg`}
    ],
    tools: [
        {name: "Git", img: `${base}skills-pictures/git.svg`},
        {name: "GitHub", img: `${base}skills-pictures/github.svg`},
        {name: "VS Code", img: `${base}skills-pictures/vsc.svg`},
        {name: "Figma", img: `${base}skills-pictures/figma.svg`},
    ]
}