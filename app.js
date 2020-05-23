const data = [
  {
    title: "Front End Web Developer",
    company: "Osiris Trading",
    techstack: "Angular 2-9, Javascript, CSS, HTML",
    duration: "October 2019 - present",
    image: "https://picsum.photos/200/300?grayscale"
  },
  {
    title: "Software Development Engineer in Test",
    company: "Osiris Trading",
    techstack: "Selenium, C-sharp, SpecFlow, Appium",
    duration: "November 2018 - September 2019",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Test Automation Engineer",
    company: "Standard Bank",
    techstack: "Protractor, Selenium, Python, Cucumber",
    duration: "November 2015 - November 2018",
    image: "https://picsum.photos/seed/picsum/200/300"
  },
];

const workExperiences = workExperienceIterator(data);

nextWorkExperience();

document.querySelector('#next').addEventListener('click', nextWorkExperience);

function nextWorkExperience() {
    const currentWorkExperience = workExperiences.next().value;

    if (currentWorkExperience !== undefined) {
    document.getElementById('workExperienceDisplay').innerHTML = `
        <ul>
            <li>${currentWorkExperience.title}</li>
            <li>${currentWorkExperience.company}</li>
            <li>${currentWorkExperience.techstack}</li>
            <li>${currentWorkExperience.duration}</li>
        </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <image src="${currentWorkExperience.image}">
    `;
} else {
    window.location.reload();

}
}

function workExperienceIterator(workExperiences) {
    let nextIndex = 0;

    return {
      next: function () {
        return nextIndex < workExperiences.length
          ? { value: workExperiences[nextIndex++], done: false }
          : { done: true };
      },
    };
  }
