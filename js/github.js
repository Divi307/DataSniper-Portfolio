const username = "Divi307";

const container =
document.getElementById("repo-container");

fetch(
`https://api.github.com/users/${username}/repos`
)
.then(res => res.json())
.then(data => {

data
.sort((a,b)=>b.stargazers_count-a.stargazers_count)
.forEach(repo=>{

const card =
document.createElement("div");

card.className = "repo";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<br>
<a href="${repo.html_url}"
target="_blank">
View Repository
</a>
`;

container.appendChild(card);

});

});