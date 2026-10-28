/* =====================================================================
   TRAIN THE TRAINER · PAGE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change words, numbers,
   photos, videos or links on the page. All three designs read it.

   HOW TO EDIT ON GITHUB
   1. Open this file on github.com and click the pencil (Edit) icon.
   2. Change the text INSIDE the quotes "like this". Keep the quotes,
      commas and brackets exactly as they are.
   3. Click "Commit changes". The live page updates in 1–2 minutes.

   PHOTOS: upload into assets/img with "Add file → Upload files",
   then type the path here, e.g. "assets/img/my-new-photo.jpg".
   ===================================================================== */

window.CONTENT = {

  /* ---------- LINKS ---------- */
  settings: {
    jotformId:   "",   // from Jotform: the number at the end of your form link. When filled, the Jotform replaces the built-in form.
    leadWebhook: "",   // Google Apps Script / Make.com link: every form entry is sent here (Google Sheet + email alert)
    calendlyUrl: "https://calendly.com/themissingp-support/30min",
    whatsapp:    "0335-0560516",
    email:       "themissingp.support@gmail.com"
  },

  /* ---------- 1. TOP OF PAGE ---------- */
  hero: {
    eyebrow:  "Train the Trainer · 2-day experiential workshop",
    titleA:   "Your experts know it.",
    titleB:   "Now they'll teach it.",
    subtitle: "Two practical days that turn subject experts and internal trainers into confident facilitators who simplify the complex, hold the room and make learning stick. Scored before and after, so you see the change.",
    button:   "Get a TTT plan for your team",
    button2:  "See the two days",
    photo:    "assets/img/usman-stage.jpg",
    photos:   ["assets/img/group-flipchart.jpg", "assets/img/nayatel-certificates.jpg"],
    badge:    "+44% pre → post score"
  },

  proof: [
    { number: "+44%",    label: "pre → post score, Customer Service TTT" },
    { number: "+24%",    label: "competency uplift, Faysal Bank trainers" },
    { number: "98%",     label: "trainer evaluation at Nayatel" },
    { number: "50,000+", label: "professionals trained by Usman Gulzari" }
  ],

  /* Logos: "ttt" = organisations that ran this program. "more" = other TMP clients */
  logosTitle: "Train the Trainer delivered for",
  logos: [
    { name: "Faysal Bank",    file: "assets/logos/faysalbank.png" },
    { name: "Engro",          file: "assets/logos/engro.png" },
    { name: "Nayatel",        file: "assets/logos/nayatel.png" },
    { name: "PIPS",           file: "" },
    { name: "GIZ",            file: "assets/logos/giz.png" },
    { name: "European Union", file: "assets/logos/eu.png" }
  ],
  moreLogosTitle: "Trusted by 125+ organisations across Pakistan",
  moreLogos: [
    { name: "Jazz", file: "assets/logos/jazz.png" },
    { name: "HBL", file: "assets/logos/hbl.png" },
    { name: "Meezan Bank", file: "assets/logos/meezan.png" },
    { name: "Telenor", file: "assets/logos/telenor.png" },
    { name: "Shan Foods", file: "assets/logos/shan.png" },
    { name: "National Foods", file: "assets/logos/nationalfoods.png" },
    { name: "HUBCO", file: "assets/logos/hubco.png" },
    { name: "Descon", file: "assets/logos/descon.png" },
    { name: "JS Bank", file: "assets/logos/js.png" },
    { name: "Servis", file: "assets/logos/servis.png" },
    { name: "Suzuki", file: "assets/logos/suzuki.png" },
    { name: "Zameen", file: "assets/logos/zameen.png" },
    { name: "UN Women", file: "assets/logos/unwomen.png" },
    { name: "WWF", file: "assets/logos/wwf.png" },
    { name: "Mercy Corps", file: "assets/logos/mercycorps.png" },
    { name: "International Rescue Committee", file: "assets/logos/irc.png" },
    { name: "K-Electric", file: "assets/logos/ke.png" },
    { name: "NUST", file: "assets/logos/nust.png" },
    { name: "Hino", file: "assets/logos/hino.png" },
    { name: "Feroze1888", file: "assets/logos/feroze.png" }
  ],

  /* ---------- 2. THE PROBLEM ---------- */
  problem: {
    eyebrow: "Why most internal training doesn't stick",
    title:   "Technically rich. Hard to sit through.",
    text:    "Your best people know the subject inside out. But dense slides and long monologues lose the room in minutes, and the knowledge never reaches the job.",
    shifts: [
      { from: "Reading from dense slides",      to: "Activities, role plays and simulations" },
      { from: "Content-first sessions",         to: "Learner-first: WIIFM and gap theory" },
      { from: "Nervous, flat delivery",         to: "Voice, pace and presence on purpose" },
      { from: "Every trainer does it their way", to: "One shared standard and toolkit" }
    ]
  },

  /* ---------- 3. VIDEO ---------- */
  video: {
    eyebrow: "Watch a session",
    title:   "Learn it. Practise it. Get coached on it.",
    text:    "Every concept is followed by practice in front of the group, on video, with direct feedback. That loop is why scores move in two days.",
    steps: [
      { word: "Learn",    text: "A tool or framework, shown live by Usman." },
      { word: "Practise", text: "Each participant delivers it to the group." },
      { word: "Refine",   text: "Video and feedback on content, engagement and delivery." }
    ],
    youtubeId: "kNV6XT60ggA",
    youtubeLabel: "Train the Trainer highlights",
    more: [
      { name: "Session reel", note: "Watch on Facebook", link: "https://www.facebook.com/share/v/1FC6sYwuvk/" },
      { name: "Full video",   note: "Watch on YouTube",  link: "https://youtu.be/kNV6XT60ggA" }
    ]
  },

  /* ---------- 4. WHY US ---------- */
  why: {
    eyebrow: "Why this TTT",
    title:   "Built for trainers who already know their subject.",
    text:    "What L&D and HR heads tell us they got from two days with us.",
    points: [
      { title: "Tailored to your content",     text: "A pre-workshop assessment and needs call. Role plays and examples come from your own customers, systems and scenarios." },
      { title: "Practice over lecture",        text: "Every participant presents on both days, on video, and gets individual feedback on content, engagement and delivery." },
      { title: "Measured before and after",    text: "Pre and post scores for each participant, shared in a post-training report with recommendations." },
      { title: "A toolkit that stays",         text: "Trainer's guide, participant workbooks, activity deck and role-play simulations, so your team keeps training to one standard." },
      { title: "Works for technical topics",   text: "Built for engineers, bankers and service leads who need to simplify complex material for non-experts." },
      { title: "14 years in the room",         text: "Led by Usman Gulzari: 2,000+ trainings and 50,000+ professionals across banks, telecoms, NGOs and government." }
    ]
  },

  /* ---------- 5. RESULTS CHART ---------- */
  results: {
    eyebrow: "Measured, not claimed",
    title:   "Every trainer, first take to final take.",
    text:    "Faysal Bank, November 2025. Fifteen internal trainers scored out of 100 at the start and again on their final demonstration. Nobody went backwards.",
    // [before, after] for each participant (names kept private)
    scores: [[78,99],[85,99],[86,90],[10,100],[95,100],[75,82],[79,84],[90,100],[100,100],[71,87],[40,79],[86,95],[62,100],[78,90],[98,99]],
    totalBefore: 1133,
    totalAfter:  1404,
    callouts: [
      { number: "+24%", label: "Total score, 1133 → 1404" },
      { number: "10 → 100", label: "Biggest single jump" },
      { number: "100%", label: "Said it met or beat expectations" }
    ]
  },

  /* ---------- 6. PAST PROGRAMS ---------- */
  portfolio: [
    { name: "Faysal Bank", big: "+24%", unit: "competency", tags: ["15 internal trainers", "Nov 2025"],
      text: "Two days with the bank's top internal trainers. Biggest gains in session structuring, delivery confidence and engagement. 100% said it met or exceeded expectations.",
      photos: ["assets/img/faysal-group.jpg", "assets/img/faysal-session.jpg"] },
    { name: "Engro · Customer Service team", big: "+44%", unit: "pre → post", tags: ["2 batches", "Customer Service TTT"],
      text: "Built internal capability to deliver customer service training, with a full toolkit: trainer's guide, workbooks, activity deck and role plays from real customer cases.",
      photos: ["assets/img/cs-team-group.jpg", "assets/img/cs-roleplay.jpg", "assets/img/cs-room.jpg"] },
    { name: "Nayatel", big: "98%", unit: "trainer rating", tags: ["16 training hours", "Islamabad", "June 2025"],
      text: "Participants delivered session after session over two days, with feedback after each. Rated 98% by 11 trainees, three of them giving a perfect 70 out of 70.",
      photos: ["assets/img/nayatel-certificates.jpg", "assets/img/nayatel-banner.jpg"] },
    { name: "Pakistan Institute for Parliamentary Services", big: "4", unit: "assemblies", tags: ["2 batches", "2023", "With GIZ & EU"],
      text: "Train the Trainer for parliamentary officers from the assemblies of Sindh, Balochistan, KPK and Punjab, co-facilitated with Shireen Naqvi.",
      photos: ["assets/img/pips-batch1.jpg", "assets/img/pips-batch2.jpg", "assets/img/pips-shireen.jpg"] }
  ],

  /* ---------- 7. WHAT PARTICIPANTS SAID ---------- */
  testimonials: [
    { quote: "Usman is an excellent trainer with comprehensive knowledge and a strong grasp of the concepts. I have never experienced a training session like this before. He was fully engaged with all participants, making the training highly interactive.", name: "Participant", org: "Customer Service TTT", feature: true },
    { quote: "This is amazing and completely changed my training methodology and skills. Highly recommended.", name: "Kamran Ejaz", org: "Faysal Bank" },
    { quote: "Delivering four sessions back-to-back, I saw a clear transformation from my first to my last presentation in confidence, clarity, and connection.", name: "Abdul Moiz Khan", org: "HSE Officer, Nayatel" },
    { quote: "Impactful training is not about how much information is shared, but how effectively it is absorbed. A style and approach I plan to carry forward in all my sessions.", name: "Mobeen Malik", org: "Systems Engineer, Nayatel" },
    { quote: "He showed a good understanding of the organisation's culture and training goals, and created an environment where participants were encouraged to contribute.", name: "Trainee feedback form", org: "Nayatel" }
  ],
  screenshots: [
    { file: "assets/proof/linkedin-mobeen.jpg",      caption: "LinkedIn post · Mobeen Malik, Nayatel" },
    { file: "assets/proof/linkedin-abdul-moiz.jpg",  caption: "LinkedIn post · Abdul Moiz Khan, Nayatel" },
    { file: "assets/proof/linkedin-ramla.jpg",       caption: "LinkedIn post · Ramla Kaleem, Nayatel" },
    { file: "assets/proof/nayatel-feedback-sheet.jpg", caption: "Trainer evaluation sheet · Nayatel, 98%" }
  ],

  /* ---------- 8. THE TWO DAYS ---------- */
  outcomesTitle: "What your trainers will be able to do",
  outcomes: [
    "Find the real learning need behind a training request",
    "Simplify complex concepts and make them clear and engaging",
    "Design outcome-focused sessions with clear objectives",
    "Hook and hold any audience using PACE Elements",
    "Use activities, role plays and simulations with purpose",
    "Handle resistance and difficult participants with confidence"
  ],
  agenda: [
    { day: 1, time: "09:10 – 10:45", name: "Setting the Stage", stage: "Day 1 · Concepts & tools",
      points: ["Objective and norm setting", "Each participant records a first-take video", "What great training looks like"],
      result: "A baseline for every participant to measure against.",
      photo: "assets/img/usman-stage.jpg" },
    { day: 1, time: "11:00 – 13:00", name: "The Pre-requisites", stage: "Day 1 · Concepts & tools",
      points: ["Expressed and unexpressed needs of learners", "Administrator, trainer and facilitator: three roles", "Connecting in the first few seconds", "The first 20% of a session and its impact"],
      result: "Trainers start from the learner, not the slides.",
      photo: "assets/img/usman-coaching.jpg" },
    { day: 1, time: "14:00 – 15:45", name: "Training Design", stage: "Day 1 · Concepts & tools",
      points: ["Structuring content with clarity", "Templates for short and full-day sessions", "Specific purpose and central idea", "Learning objectives, assessments and evaluation forms"],
      result: "A session plan they can reuse for any topic.",
      photo: "assets/img/group-flipchart.jpg" },
    { day: 1, time: "16:00 – 17:30", name: "The Art of Engagement", stage: "Day 1 · Concepts & tools",
      points: ["How to start with a bang: the STAR hook", "Gap theory and WIIFM framing", "PACE Elements to hold attention", "Learning with fun, without losing seriousness"],
      result: "Openings that win the room in the first minute.",
      photo: "assets/img/ttt-room-1.jpg" },
    { day: 2, time: "09:10 – 10:45", name: "Power of Non-Verbal Impact", stage: "Day 2 · Practice day",
      points: ["Posture, expressions, movement and gestures", "Pause, pace, volume and pitch", "Words-per-minute PACE activity", "Injecting life into dead words"],
      result: "Visible confidence in voice and body.",
      photo: "assets/img/usman-mic.jpg" },
    { day: 2, time: "11:00 – 13:00", name: "Engagement Toolkit", stage: "Day 2 · Practice day",
      points: ["Ice-breakers, energizers and role plays", "Making technical subjects interesting", "Simulations for real workplace scenarios", "Individual feedback on first-take videos"],
      result: "A bank of activities ready to run.",
      photo: "assets/img/ttt-practice.jpg" },
    { day: 2, time: "14:00 – 15:00", name: "Dealing with Difficult Situations", stage: "Day 2 · Practice day",
      points: ["Difficult participants and resistance", "Low participation and disengagement", "Interruptions and time pressure", "Framing difficult conversations"],
      result: "Composure when the room pushes back.",
      photo: "assets/img/cs-roleplay.jpg" },
    { day: 2, time: "15:15 – 17:30", name: "Learning into Action", stage: "Day 2 · Practice day",
      points: ["Every participant delivers a 3-minute session", "Scored feedback on engagement, content and delivery", "Winners announced, certificates awarded"],
      result: "A final take you can compare with the first.",
      photo: "assets/img/nayatel-certificates.jpg" }
  ],
  agendaNote: "We tailor examples, role plays and the final demonstration topics to your content. Customer Service and Technical tracks swap in their own modules.",

  /* ---------- 9. TRACKS ---------- */
  tracks: [
    { name: "Core Train the Trainer", for: "L&D teams and internal trainers", text: "Design, delivery and facilitation for everyone who trains inside your organisation, to one shared standard.", photo: "assets/img/faysal-group.jpg" },
    { name: "Technical TTT", for: "Engineers and subject experts", text: "For people with deep expertise who need non-experts to understand and apply it. Simplify, structure and make it stick.", photo: "assets/img/usman-coaching.jpg" },
    { name: "Customer Service TTT", for: "Service leads and supervisors", text: "Four levels of service, calming disgruntled customers, saying no, and how to teach it all to the frontline.", photo: "assets/img/cs-collage.jpg" }
  ],

  /* ---------- 10. WHAT YOU GET ---------- */
  toolkit: [
    { title: "Pre-workshop assessment", text: "So the two days fit your people and content." },
    { title: "Trainer's guide",          text: "Step-by-step delivery for consistent sessions." },
    { title: "Participant workbooks",    text: "Exercises learners apply on the job." },
    { title: "Activity & role-play deck", text: "Energizers, games and simulations ready to run." },
    { title: "Videos of every presentation", text: "First and final takes, shared on Drive." },
    { title: "Post-training report",     text: "Pre/post scores, feedback and next steps." }
  ],

  /* ---------- TRAINER ---------- */
  trainer: {
    name:  "Usman Gulzari",
    role:  "Lead Trainer, The Missing P",
    bio:   "Usman has spent 14 years training trainers, managers and frontline teams at banks, telecoms, NGOs and government institutions. He is the author of Wings to Fly, and was named in Change Makers among the 33 most influential personalities. The most active participants take home his book with a handwritten note.",
    photo: "assets/img/usman-facilitating.jpg",
    stats: [ ["14", "years"], ["125+", "organisations"], ["2,000+", "trainings"], ["50,000+", "professionals"] ]
  },

  /* ---------- FORM ---------- */
  form: {
    eyebrow:  "Plan your TTT",
    title:    "Get a Train the Trainer plan for your team",
    text:     "Answer a few quick questions (about 1 minute), then pick a time for a short call with our team.",
    promises: ["A two-day outline tailored to your trainers' content", "The right track: Core, Technical or Customer Service", "How we'll measure pre and post results", "A clear proposal, with no obligation"],
    tracks:    ["Core Train the Trainer", "Technical TTT", "Customer Service TTT", "Not sure yet"],
    trainers:  ["Up to 15", "15 to 25", "2 batches or more"],
    needs:     ["Experts lose the room", "New trainers need structure", "Training quality is inconsistent", "Low engagement in sessions", "We need measurable results", "Something else"],
    timeline:  ["Within 1 month", "1–3 months", "3–6 months", "Just exploring"],
    city:      ["Islamabad / Rawalpindi", "Lahore", "Karachi", "Other city"],
    authority: ["I make the decision", "I recommend to management", "I'm collecting options"],
    privacy:   "We only use your details to plan your workshop. No mailing lists."
  },

  thanks: {
    title: "Thank you",
    text:  "Pick a time below for a 30-minute call. We'll come prepared with ideas for your trainers."
  },

  footer: "Train the Trainer · Two-day experiential workshops across Pakistan, led by Usman Gulzari."
};
