const events = [
  {
    name: "Comic Con",
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
    name: "Comic Won",
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
    name: "Comic Son",
    desc: "Celebrate all things comics, graphic novels, anime, and pop culture",
    venue: "San Diego Convention Center",
    date: "2023-12-15",
    time: "09:00 AM",
    speakerName: "Herman Jensen",
    speakerDesc: "Founder & Leader",
    speakerImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function checkInputValues() {
  // Get all input elements
  const inputs = document.querySelectorAll("input");
  // Check if all inputs have values
  let allValuesPresent = true;
  inputs.forEach((input) => {
    if (!input.value) {
      allValuesPresent = false;
    }
  });
  // Return the result
  return allValuesPresent;
}

// Getting form
const form = document.getElementById("form");
let values = {};

// Form fields
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailName = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const eventName = document.getElementById("eventName");

const formContainer = document.getElementById("form-container");

//Form Submission Error
const success = document.getElementById("success-submission");
const fail = document.getElementById("fail-submission");

firstName.addEventListener("change", (event) => {
  values.firstName = event.target.value;
});

lastName.addEventListener("change", (event) => {
  values.lastName = event.target.value;
});

email.addEventListener("change", (event) => {
  values.email = event.target.value;
});

phoneNumber.addEventListener("change", (event) => {
  values.phoneNumber = event.target.value;
});

eventName.addEventListener("change", (event) => {
  values.eventName = event.target.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const noError = checkInputValues();
  if (noError) {
    const Eventhtml = events.map((eve) => {
      if (eve.name === values.eventName)
        return ` <!-- Event Card -->
    <div class="eventCard">
      <!-- Quote svg -->
      <img src="/assets/quote.svg" alt="" />
      <!-- Event Details -->
      <h2 class="eventName">${eve.name}</h2>
      <p class="eventDesc">
       ${eve.desc}
      </p>

      <!-- Venue,data & time details -->
      <div class="venue-details">
        <div class="flex venue">
          <span>Venue:</span>
          <p> ${eve.venue}</p>
        </div>
        <div class="flex time-date-container">
          <div class="flex data">
            <span>Date:</span>
            <p> ${eve.date}</p>
          </div>

          <div class="flex time">
            <span>Time:</span>
            <p>${eve.time}</p>
          </div>
        </div>
      </div>

      <!-- Speaker details -->
      <div class="cardBottom-container">
        <div class="speaker">
          <img
            src=${eve.speakerImage}
            alt=""
          />
          <div class="speaker-text">
            <h4>${eve.speakerName}</h4>
            <p>${eve.speakerDesc}</p>
          </div>
        </div>
        <a href="/" class="register-button">Back to Home</a>
      </div>
    </div>`;
    });
    success.classList.remove("hidden");
    success.classList.add("flex");
    formContainer.classList.remove("flex");
    formContainer.classList.add("hidden");
    console.log("wings", Eventhtml);
    success.innerHTML = Eventhtml.join("");
  } else {
    fail.classList.add("flex");
    fail.classList.remove("hidden");
  }

  //Post to API
  console.log("Form Values", values);
});
