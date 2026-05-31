// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-e-t",
    title: "E.T.",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-synopsis",
          title: "synopsis",
          description: "About the workshop.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/synopsis/";
          },
        },{id: "nav-submit",
          title: "submit",
          description: "Submitting a paper to the workshop.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/submit/";
          },
        },{id: "nav-papers",
          title: "papers",
          description: "Accepted papers at the workshop.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Keynote speakers and workshop organizers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-the-website-is-now-online-sparkles",
          title: 'The website is now online :sparkles:.',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},];
