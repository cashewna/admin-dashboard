const username = "Morgan Oakley";

const username_class = document.querySelectorAll(".username");
for (let i = 0; i < username_class.length; i++) {
    username_class[i].innerHTML = username;
}

const projectsDiv = document.querySelector(".project-list");
const projects = [
    {
        name: "Project 1",
        description: "This is a project",
        link: "https://www.google.com"
    },
    {
        name: "Project 2",
        description: "This is another project",
        link: "https://notes.khong.dev"
    }
]

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const newCardElement = document.createElement("p");
    newCardElement.classList.add("card");
    newCardElement.appendChild(document.createTextNode(project.name));
    newCardElement.appendChild(document.createElement("br"));
    newCardElement.appendChild(document.createTextNode(project.description));
    projectsDiv.appendChild(newCardElement);
}