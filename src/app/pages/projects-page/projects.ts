export const projects: Project[] = [{
    id: 1,
    name: 'Beauty Clinic Website',
    description: 'Fast, Optimized and responsive Website describing what the clinic do, suport client doubts',
    image: 'bamboo-watch.jpg',
    tags: ["angular", "bootstrap", "typescript"],
    url: 'https://ednalopesestetica.com.br/inicio'
},
{
    id: 1,
    name: 'Beauty Clinic Website',
    description: 'Fast, Optimized and responsive Website describing what the clinic do, suport client doubts',
    image: 'bamboo-watch.jpg',
    tags: ["angular", "bootstrap", "typescript"],
    url: 'https://ednalopesestetica.com.br/inicio'
}

]

export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
    url: string;

}