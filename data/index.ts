export const navbarData = {
  homeTitle: "Ming's Blog",
}

export const footerData = {
  author: "Ming / Michael Lo",
  aboutAuthor: "Hi! I am Ming, a Tech enthusiast, problem solver and software engineer.",
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, React/VueJs, and Next/Nuxt. Happy coding!",
  aboutTheSite:
    "This is a personal blog site built with Web technologies. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: "Michael Lo",
  description:
    "A Software Engineer. Get Web Development, Javascript, Typescript, React/VueJs, Next/Nuxt, Related Articles, Tips, Learning resources and more.",
}

export const blogsPage = {
  title: "All Blogs",
  description: "Here you will find all the blog posts I have written & published on this site.",
}

export const categoryPage = {
  title: "Categories",
  description:
    "Blow this category is generated from all the tags are mentioned in the different blog post",
}

export const aboutPage = {
  title: "Ming / Michael Lo",
  description: "Software Engineer, Problem Solver, Web Enthusiast.",
  aboutMe:
    "Hello, I'm Michael Lo, a software engineer with a passion for web development. I'm a problem solver and a web enthusiast. Happy coding!",
}

export const seoData = {
  title: `Ming's Blog`,
  ogTitle: `Let's learn Javascript, Typescript, React/VueJs, Next/Nuxt, & Problem Solving - Ming's Blog`,
  description: `Hi I am Michael Lo. A Software Engineer in Taiwan, with over 2.5+ years experience in software development.`,
  twitterDescription: `Ming's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc.`,
  image: "https://michael-lo.ghost.io/content/images/2025/01/white-ig-logo.svg",
  mySite: "https://michael-lo.ghost.io/",
  twitterHandle: "@MichaelLo860520",
  mailAddress: "michael860520@gmail.com",
}

export const socialLinks = {
  githubLink: "https://github.com/Michael0520",
  instagramLink: "https://www.instagram.com/michaello.dev",
  twitterLink: "https://twitter.com/MichaelLo860520",
  ghostWebSiteLink: "https://michael-lo.ghost.io/",
}

export const siteMetaData = [
  {
    name: "description",
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: "og:site_name", content: seoData.mySite },
  { property: "og:type", content: "website" },
  {
    property: "og:url",
    content: seoData.mySite,
  },
  {
    property: "og:title",
    content: seoData.ogTitle,
  },
  {
    property: "og:description",
    content: seoData.description,
  },
  {
    property: "og:image",
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: "twitter:site", content: seoData.twitterHandle },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:url",
    content: seoData.mySite,
  },
  {
    name: "twitter:title",
    content: seoData.ogTitle,
  },
  {
    name: "twitter:description",
    content: seoData.twitterDescription,
  },
  {
    name: "twitter:image",
    content: seoData.image,
  },
]

export const copyright = {
  year: new Date().getFullYear(),
  company: "@michaello.dev",
}
