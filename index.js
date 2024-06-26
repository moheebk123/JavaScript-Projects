const container = document.getElementById("container");
const socialLinkBox = document.getElementById("social-link-box");

const cardHTML = (title, description, imgUrl, codeLink, liveLink) => {
  return `<div class="card">
    <div class="top" style="background-image: url(${imgUrl});"></div>
    <div class="bottom">
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="link-box">
      <a href=${codeLink} target="_blank">
        <button type="button">Code</button>
      </a>
      <a href=${liveLink} target="_blank">
        <button type="button">View</button>
      </a>
    </div>
    </div>
  </div>
`;
};

const linkHTML = (title, link, imgUrl, alt) => {
  return `<a
      class="social-link"
      href=${link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src=${imgUrl}
        class=${title === "LinkedIn" ? "linkedin-logo" : ""}
        alt=${alt}
      />
      <span>${title}</span>
    </a>
`;
};

const getProjects = async () => {
  try {
    const response = await fetch("./data/projects.json");
    const projects = await response.json();
    projects.forEach((project) => {
      const { title, description } = project;
      const imgUrl = `./assets/${title}.png`;
      const codeLink = `https://github.com/moheebk123/JavaScript
      -Projects/tree/main/projects/${title}`;
      const liveLink = `./projects/${title}/`;
      const card = cardHTML(title, description, imgUrl, codeLink, liveLink);
      container.insertAdjacentHTML("beforeend", card);
    });
  } catch (error) {
    alert(`Error : ${error}`);
  }
};
getProjects();

const getLinks = async () => {
  try {
    const response = await fetch("./data/links.json");
    const links = await response.json();
    links.forEach((linkData) => {
      const { title, link, alt } = linkData;
      const imgUrl = `./assets/${title}.webp`;
      const linkElement = linkHTML(title, link, imgUrl, alt);
      socialLinkBox.insertAdjacentHTML("beforeend", linkElement);
    });
  } catch (error) {
    alert(`Error : ${error}`);
  }
};
getLinks();
