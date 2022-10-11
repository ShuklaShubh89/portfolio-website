// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shubham",
  middleName: "",
  lastName: "Shukla",
  message: " Passionate about changing the world with technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/shuklashubh89/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/shubham.wolf/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/shubham89/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/shubham-shukla-254b81a5/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shubhamshukla.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/ava.jpg"),
  imageSize: 325,
  message:
    "My name is Shubham Shukla. I'm an experience SRE/Devops Engineer with more than 10 years of industry experience. Always fascinated by new technologies , i work to keep those servers ticking in the background while the consumers enjoy the smooth uninterrupted experience.",
  resume: require("../assets/pdf/resume-shubhamshukla.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ShuklaShubh89",
  reposLength: 4,
  specificRepos: [],
};

// Certifications Section
const certifications = {
  show: true,
  heading: "Certifications",
  images: [
    { 
      img: require("../assets/img/sapro.png"), 
      caption: "AWS Solutions Architect Professional",
      expires: "July 2025"
    },
    { 
      img: require("../assets/img/devopspro.png"), 
      caption: "AWS Devops Engineer Professional", 
      expires: "Aug 2025"
    },
    { 
      img: require("../assets/img/saa.png"), 
      caption: "AWS Solutions Architect Associate", 
      expires: "July 2025"
    },
    { 
      img: require("../assets/img/sysops.png"), 
      caption: "AWS Sysops Adminstrator Associate", 
      expires: "Aug 2025"
    },
    { 
      img: require("../assets/img/cka_logo.png"), 
      caption: "Certified Kubernetes Administrator", 
      expires: "Sep 2022"
    },
    { 
      img: require("../assets/img/cks_logo.png"), 
      caption: "Certified Kubernetes Security Specialist", 
      expires: "June 2024"
    },
    { 
      img: require("../assets/img/gcp_ace.png"), 
      caption: "GCP Associate Cloud Engineer", 
      expires: "Sep 2023"
    },
    { 
      img: require("../assets/img/terraform.png"), 
      caption: "Hashicorp Terraform Associate", 
      expires: "Oct 2024"
    }
  ],
  imageSize: {
    width:"250",
    height:"250"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "Kubernetes", value: 80 },
    { name: "Amazon Web Services", value: 80 },
    { name: "Google Cloud Platform", value: 65 },
    { name: "Docker", value: 85 },
    { name: "Linux", value: 70 },
    { name: "Chef", value: 60 },
    { name: "Java", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time SRE/Devops Positions. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shubham.a.shukla@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Principal Site Reliability Engineer',
      org: 'Ultimate Kronos Group',
      companylogo: {
        src: require('../assets/img/ukg.jpg'),
        width: 150,
        height: 150,
      },
      date: 'Aug 2021 - Present',
    },
    {
      role: 'Senior Site Reliability Engineer',
      org: 'Cvent India',
      companylogo: {
        src: require('../assets/img/cvent.png'),
        width: 200,
        height: 100,
      },
      date: 'Nov 2019 - Aug 2021',
    },
    {
      role: 'Senior Associate Devops',
      org: 'Publicis Sapient',
      companylogo: {
        src: require('../assets/img/sapient.jpg'),
        width: 200,
        height: 200,
      },
      date: 'Apr 2018 - Nov 2019',
    },
    {
      role: 'Senior Application Development Analyst',
      org: 'Accenture India',
      companylogo: {
        src: require('../assets/img/accenture.jpg'),
        width: 200,
        height: 200,
      },
      date: 'June 2012 - Apr 2018',
    },
  ]
}

const architecture = {
  show: true,
  //src: require('../assets/img/architecture.png')
}
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, certifications, getInTouch, experiences, architecture };
