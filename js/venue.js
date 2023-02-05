const venues = [
  {
    name: "California",
    image:
      "https://images.pexels.com/photos/13693849/pexels-photo-13693849.jpeg?auto=compress&cs=tinysrgb&w=800",
    event: "Annual conference for CIOs and senior IT leaders",
  },
  {
    name: "New York",
    image:
      "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800",
    event: "International Business Summit",
  },
  {
    name: "Texas",
    image:
      "https://images.pexels.com/photos/15146485/pexels-photo-15146485.jpeg?auto=compress&cs=tinysrgb&w=800",
    event: "Oil and Gas Industry Expo",
  },
  {
    name: "Florida",
    image:
      "https://images.pexels.com/photos/14514223/pexels-photo-14514223.jpeg?auto=compress&cs=tinysrgb&w=800",
    event: "Annual Tourist and Hospitality Conference",
  },
  {
    name: "Michigan",
    image:
      "https://images.pexels.com/photos/10708974/pexels-photo-10708974.jpeg?auto=compress&cs=tinysrgb&w=800",
    event: "Auto Industry Technology Conference",
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
