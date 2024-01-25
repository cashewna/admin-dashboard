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
    newCardElement.classList.add("project-card");
    newCardElement.appendChild(document.createTextNode(project.name));
    newCardElement.appendChild(document.createElement("br"));
    newCardElement.appendChild(document.createTextNode(project.description));
    projectsDiv.appendChild(newCardElement);
}

const announcements = [
    {
        title: "Announcement 1",
        description: "This is an announcement"
    },
    {
        title: "Announcement 2",
        description: "This is another announcement"
    },
    {
        title: "Announcement 3",
        description: "This is yet another announcement"
    }
]

const announcementDiv = document.querySelector(".announcement-list");
for (let i = 0; i < announcements.length; i++) {
    const announcement = announcements[i];
    const newCardElement = document.createElement("p");
    newCardElement.classList.add("announcement-card");
    newCardElement.appendChild(document.createTextNode(announcement.title));
    newCardElement.appendChild(document.createElement("br"));
    newCardElement.appendChild(document.createTextNode(announcement.description));
    newCardElement.appendChild(document.createElement("hr"));
    announcementDiv.appendChild(newCardElement);
}