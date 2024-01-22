const username = "Morgan Oakley";

const username_class = document.querySelectorAll(".username");
for (let i = 0; i < username_class.length; i++) {
    username_class[i].innerHTML = username;
}