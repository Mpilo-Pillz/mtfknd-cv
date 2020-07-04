const data = [
  {
    title: "Front End Web Developer",
    company: "Osiris Trading",
    techstack: "Angular 2-9, Javascript, CSS, HTML",
    duration: "October 2019 - present",
    image: "https://lh3.googleusercontent.com/ajV2k9dREbiUxhQFeGbifYAfGmsjTIJ14JjQUG75Q_m8xQARalXHdG5zpsAvy-dIV_xXnjVNe40IPo9RYHxdOpWcFxurkIsRRuzo1rHGNuphiXt1yezrM36w1zQ_CL2aXva4HhPY=w2400",
    bulletpointone: "Build and maintain Sports betting web app using Angular 2-9.",
    bulletpointtwo: "Render content from Content Management Services onto Angular Web Application.",
    bulletpointthree: "Consume content from Content Management Systems and render on to Angular Web Applications.",
    bulletpointfour: "Build and maintain small reusable web view components/widgets/iframes to be consumed by ntive Android and IOS apllications.",
    bulletpointfive: "Use Angular, HTML, CSS and Javascript to build and maintain web apps that can make CRUD requests on to various APIS for various business problems."
  },
  {
    title: "Software Development Engineer in Test",
    company: "Osiris Trading",
    techstack: "Selenium, C-sharp, SpecFlow, Appium, Jenkins",
    duration: "November 2018 - September 2019",
    image: "https://lh3.googleusercontent.com/A250nV3701oBYwHDjwS6-asTMqwsJXiwAwI6jHCpw3PCRF3-_cN5Fh9Q_gNOlfBVfwX2uv4SOafEHnR_J12jDM3kr0i-oBffWCBChkqdMhLOy9ah6RgM-f0a6nuCmuLILkKjKtOH=w2400",
    bulletpointone: "Create and Maintain Automated end to end tests using Selenium to test web applications.",
    bulletpointtwo: "Create and Maintain Automated tests that execute on Mobile Native Android iOS Apps and Mobile web browsers using Appium.",
    bulletpointthree: "Create readable and maintainable that conform to user acceptance criteria using Gherkin style syntax with SpecFlow and Cucumber.",
    bulletpointfour: "Build and Maintain CI pipeline for automated scheduled execution of regression tests using Jenkins.",
    bulletpointfive: "Train non techncal testers on how to build, maintain and execute automated tests."
  },
  {
    title: "Test Automation Engineer",
    company: "Standard Bank",
    techstack: "Protractor, Selenium, Python, Cucumber, QTP/UFT",
    duration: "November 2015 - November 2018",
    image: "https://lh3.googleusercontent.com/3bVeZXyaiwVVUdaR570V1eVM19_tCFx5vhMpcfKGYgUY-OgJFCW4E7VgudbnQ8hqSRtFaiMf_3zBYlE6ZuI07Ca711izuBkeLifiaFf4nKdSdBYuH3fkHhIkvK2zmu3ZFCl99YdK=w2400",
    bulletpointone: "Create and Maintain automated tests for various bank web applications using Protractor and Selenium.",
    bulletpointtwo: "Create and Maintain automated tests for various bank desktop apllications using QTP/UFT.",
    bulletpointthree: "Mentor and train Graduates and Learners on manual and automated testing.",
    bulletpointfour: "Provide detailed test execution reports to various stake holders.",
    bulletpointfive: "Analyse business requirements documentation to create test requirements, and test cases to be excecuted manually  or automated."
  },
];

const workExperiences = workExperienceIterator(data);

nextWorkExperience();

document.querySelectorAll('.next').forEach(button => {
  button.addEventListener('click', nextWorkExperience);
});
document.querySelectorAll
function nextWorkExperience() {
    const currentWorkExperience = workExperiences.next().value;

    if (currentWorkExperience !== undefined) {
    document.getElementById('workExperienceDisplay').innerHTML = `
      <hr>  
      <ul>
            <li><strong>Role:</strong> ${currentWorkExperience.title}</li>
            <li><strong>Company:</strong> ${currentWorkExperience.company}</li>
            <li><strong>Tech Stack:</strong> ${currentWorkExperience.techstack}</li>
            <li><strong>Duration:</strong> ${currentWorkExperience.duration}</li>
        </ul>
      <hr>
        <div class="job-summary">
                        <strong>Responsibilities:</strong>
                        <ul class="ul__list-style--square ul__padding--sides">
                            <li>${currentWorkExperience.bulletpointone}</li>
                            <li>${currentWorkExperience.bulletpointtwo}</li>
                            <li>${currentWorkExperience.bulletpointthree}</li>
                            <li>${currentWorkExperience.bulletpointfour}</li>
                            <li>${currentWorkExperience.bulletpointfive}</li>
                        </ul>
                    </div>
    `;

    document.getElementById('imageDisplay').innerHTML = `
        <image class="career-img" src="${currentWorkExperience.image}">
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
