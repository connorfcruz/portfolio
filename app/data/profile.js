export const profile = {
  name: "Connor Cruz",
  // First impression
  headline: "I build sensing hardware and assistive software. Most projects ends up being about memory: both what people keep and what quietly disappears.",
  // Status line
  status: "First-year Biomedical Engineering student at Yale University. Looking for research and internship work in sensing, instrumentation, and healthcare.",
  location: "New Haven, CT",

  about: [
    "I'm a first-year biomedical engineering student at Yale. I'm drawn to projects where the difficult part isn't the code, but rather a physical constraint, messy data, or an assumption taken for granted.",
    "The work below is from before college: an interactive map that teaches the culture of Guam, where I'm from, and a statistical study that set out to confirm a hypothesis about globalization and ended up overturning it. Both of these projects are key to why I ended up in BME. One taught me how a sensor's limits propagate backward into mechanical design while the other taught me how easily a model can produce a confident result while measuring something other than what was intended.",
    "I'm looking for lab and internship work where these two fields meet: instrumentation that has to survive the physical world, and analysis that is actually trustworthy.",
  ],

  skills: [
    { group: "Languages", items: ["C++", "Python", "Wolfram"] },
    { group: "Hardware", items: ["RP2040", "ATTiny", "KiCad", "I2C/SPI", "Sensor integration"] },
    { group: "Fabrication", items: ["Fusion 360", "CNC", "Laser cutting", "3D printing"] },
    { group: "Analysis", items: ["Mathematica", "Regression modeling", "LaTeX"] },
  ],

  links: {
    email: "connor.cruz@yale.edu",
    github: "https://github.com/connorfcruz",
    linkedin: "https://www.linkedin.com/in/connor-cruz-6216423a1/",
    resume: "/resume.pdf",
  },

  // Projects
  projects: [
    {
      title: "Na'danña' Guam",
      year: "2024",
      blurb:
        "An interactive physical map that teaches the culture of Guam, my home island. Placing a 3D-printed latte stone marker on a landmark wakes hall effect sensors hidden under the board, and a TFT screen cycles through that site's history, myths, and photos. The sensing range drove the entire build: the magnets were unreliable past half an inch, so the acrylic map had to be inlaid into a CNC pocket cut rather than mounted on top.",
      stack: ["C", "RP2040", "ATTiny1614", "Fusion 360", "KiCad"],
      image: {
        src: "/projects/nadanna-guam.jpg",
        alt: "A wooden board with a green acrylic cutout of Guam inlaid in the surface, a small 3D-printed latte stone marker resting on one landmark, and a screen showing a photo of that site.",
      },
      links: [
        { label: "Code", href: "https://github.com/connorfcruz/nadanna-guam" },
        // { label: "Summary Slide", href: "/projects/nadanna-slide.png" },
      ],
      featured: true,
    },
    {
      title: "Modeling Cultural Assimilation",
      year: "2025",
      blurb:
        "A computational study testing whether migration and economic integration actually predict cultural diversity across countries. I built a dataset covering 210 countries in Mathematica, constructed a religious fractionalization index, and fit regression models controlling for population and area. Geographic area turned out to dominate; migration and trade explained essentially nothing. Revisiting the analysis later, I found a response-variable ordering bug that had inverted the original result, and I rewrote the paper around the corrected models.",
      stack: ["Mathematica", "Regression analysis", "LaTeX"],
      links: [
        { label: "Paper", href: "/papers/modeling-cultural-assimilation.pdf" },
      ],
      featured: false,
    },
  ],
};
