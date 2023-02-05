const speakers = [
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    designation:
      "Associate Professor, Department of Computer Science",
  },
  {
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    designation:
      "Assistant Professor, School of Medicine",
  },
  {
    name: "Masha Niv",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    designation:
      "Professor,Institute of BioChemistry,Food Science and Nutrition",
  },
  {
    name: "Emily Wilson",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    designation:
      "Assistant Professor of Mathematics, School of Natural Sciences",
  },
  {
    name: "Sarah Davis",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    designation:
      "Associate Dean, Faculty of Arts and Sciences",
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
