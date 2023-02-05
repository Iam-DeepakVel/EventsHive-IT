const events = [
  {
    name: "Comic Conference",
    desc: "Celebrate all things comics, graphic novels, anime, and pop culture",
    venue: "San Diego Convention Center",
    date: "2023-12-15",
    time: "09:00 AM",
    speakerName: "Herman Jensen",
    speakerDesc: "Founder & Leader",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Web Summit",
    desc: "The largest technology conference in the world",
    venue: "Altice Arena, Lisbon",
    date: "2023-11-01",
    time: "08:00 AM",
    speakerName: "Jack Ma",
    speakerDesc: "Founder & Chairman of Alibaba Group",
    speakerImage:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Game Dev's Conference",
    desc: "Annual conference for video game developers",
    venue: "Moscone Center, San Francisco",
    date: "2023-03-15",
    time: "10:00 AM",
    speakerName: "Shigeru Miyamoto",
    speakerDesc: "Creator of Super Mario and The Legend of Zelda",
    speakerImage:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "CES",
    desc: "Consumer Electronics Show",
    venue: "Las Vegas Convention Center",
    date: "2023-01-08",
    time: "09:00 AM",
    speakerName: "Elon Musk",
    speakerDesc: "Founder, CEO and Lead Designer of SpaceX",
    speakerImage:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "SXSW",
    desc: "South by Southwest - Music, Film, and Interactive festival",
    venue: "Austin, Texas",
    date: "2023-03-10",
    time: "10:00 AM",
    speakerName: "Travis Kalanick",
    speakerDesc: "Co-founder of Uber",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dreamforce",
    desc: "Annual customer and stakeholder conference of Salesforce",
    venue: "Moscone Center, San Francisco",
    date: "2023-11-07",
    time: "08:00 AM",
    speakerName: "Marc Benioff",
    speakerDesc: "Co-founder, Chairman and CEO of Salesforce",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Adobe MAX",
    desc: "Annual conference for creatives by Adobe",
    venue: "Los Angeles Convention Center",
    date: "2023-10-15",
    time: "09:00 AM",
    speakerName: "Shantanu Narayen",
    speakerDesc: "President and CEO of Adobe",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Docker Conference",
    desc: "Annual conference for Docker users and developers",
    venue: "San Francisco Marriott Marquis",
    date: "2023-06-20",
    time: "09:00 AM",
    speakerName: "Solomon Hykes",
    speakerDesc: "Founder and CTO of Docker",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "F8",
    desc: "Annual conference by Facebook",
    venue: "McEnery Convention Center, San Jose",
    date: "2023-05-25",
    time: "10:00 AM",
    speakerName: "Mark Zuckerberg",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Black Hat USA",
    desc: "Annual conference for information security professionals",
    venue: "Mandalay Bay Convention Center, Las Vegas",
    date: "2023-08-01",
    time: "09:00 AM",
    speakerName: "Jeff Moss",
    speakerDesc: "Founder of Black Hat and DEF CON",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "AI World",
    desc: "Annual conference for AI professionals and businesses",
    venue: "Boston Convention and Exhibition Center",
    date: "2023-12-12",
    time: "08:00 AM",
    speakerName: "Andrew Ng",
    speakerDesc: "Co-founder of Google Brain and former VP and Chief Scientist at Baidu",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Gartner Symposium/ITxpo",
    desc: "Annual conference for CIOs and senior IT leaders",
    venue: "Walt Disney World Dolphin, Orlando",
    date: "2023-10-17",
    time: "09:00 AM",
    speakerName: "Peter Sondergaard",
    speakerDesc: "Senior Vice President and Global Head of Research at Gartner",
    speakerImage:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const list = document.getElementById("conference-list");
const html = events
  .map((event) => {
    return ` <!-- Event Card -->
    <li class="eventCard">
      <!-- Quote svg -->
      <img src="/assets/quote.svg" alt="" />
      <!-- Event Details -->
      <h2 class="eventName">${event.name}</h2>
      <p class="eventDesc">
       ${event.desc}
      </p>

      <!-- Venue,data & time details -->
      <div class="venue-details">
        <div class="flex venue">
          <span>Venue:</span>
          <p> ${event.venue}</p>
        </div>
        <div class="flex time-date-container">
          <div class="flex data">
            <span>Date:</span>
            <p> ${event.date}</p>
          </div>

          <div class="flex time">
            <span>Time:</span>
            <p>${event.time}</p>
          </div>
        </div>
      </div>

      <!-- Speaker details -->
      <div class="cardBottom-container">
        <div class="speaker">
          <img
            src=${event.speakerImage}
            alt=""
          />
          <div class="speaker-text">
            <h4>${event.speakerName}</h4>
            <p>${event.speakerDesc}</p>
          </div>
        </div>
        <a href="/pages/register/register.html"  class="register-button">Register</a>
      </div>
    </li>`;
  })
  .join("");

list.innerHTML = html;
