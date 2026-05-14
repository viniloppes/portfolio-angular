export const projects: Project[] = [{
    id: 1,
    name: 'Beauty Clinic Website',
    description: 'Fast, Optimized and responsive Website describing what the clinic do, suport client doubts',
    image: 'beauty-clinic.png',
    tags: ["angular", "bootstrap", "typescript"],
    url: 'https://ednalopesestetica.com.br/inicio'
},
{
    id: 2,
    name: "Mother's Day Promotion Website",
    description: 'Fast, Optimized and responsive Website describing what the clinic do, suport client doubts',
    image: 'mothers-day.png',
    tags: ["angular", "bootstrap", "typescript"],
    url: 'https://ednalopesestetica.com.br/diadasmaes'
},
{
    id: 3,
    name: "Flash Cards",
    description: 'The goal of this project is to learn about how to use state management and component-based architecture using JavaScript frameworks. I builded a flash card app with pre-defined Angular questions and answers that users can flip through to test their knowledge.',
    image: 'flashcards-app.png',
    tags: ["angular", "bootstrap", "typescript"],
    url: 'https://viniloppes.github.io/FlashcardsApp'
},
{
    id: 4,
    name: "Fruit Ninja Prototype",
    description: 'A list of three good target objects and one bad target object will spawn in a random position at the bottom of the screen, thrusting themselves into the air with random force and torque. These targets will be destroyed when the player clicks on them or they fall out of bounds.',
    image: 'fruitninja.png',
    tags: ["unity", "C#",],
    url: 'https://viniloppes.github.io/unity-fruit-ninja-web-build/'
},
{
    id: 5,
    name: "Pacman",
    description: 'This project was developed to consolidate C# and OOP concepts by recreating Pacman. The main goal was to move beyond theory and solve real-world game logic challenges, such as grid-based movement, collision detection, and AI states.',
    image: 'pacman-wpf.png',
    tags: ["WPF", "C#",],
    url: 'https://github.com/viniloppes/Pacman/tree/master'
},


]

export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
    url: string;

}