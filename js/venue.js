const venues = [
  {
    name: "California",
    image:     "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
    event:
      "Biochemistry speech",
  },
  {
    name: "California",
    image:     "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
    event:
      "Biochemistry speech",
  },
  {
    name: "California",
    image:     "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
    event:
      "Biochemistry speech",
  },

];

const list = document.getElementById("venue-list");

const html = venues
  .map((venue) => {
    return `<li class="venue-card">
  <img  src=${venue.image}
    alt=""
  />
  <div class="venue-details">
    <div class="vertical-divider"></div>
    <div>
      <h5>${venue.name}</h5>
      <p>
        ${venue.event}      
        </p>
    </div>
  </div>
</li>`;
  })
  .join("");

list.innerHTML = html;
