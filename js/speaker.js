const speakers = [
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
];

const list = document.getElementById("speaker-list");

const html = speakers
  .map((speaker) => {
    return `<li class="speaker-card">
  <img  src=${speaker.image}
    alt=""
  />
  <div class="speaker-details">
    <div class="vertical-divider"></div>
    <div>
      <h5>${speaker.name}</h5>
      <p>
        ${speaker.designation}      
        </p>
    </div>
  </div>
</li>`;
  })
  .join("");

list.innerHTML = html;
