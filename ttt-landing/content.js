/* =====================================================================
   TRAIN THE TRAINER · LANDING PAGE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to change words, numbers,
   photos, links or FAQs on the page.

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
    whatsappIntl:"923350560516",   // same number, international format without + (used for the WhatsApp link and QR)
    whatsappText:"Hi The Missing P, I'd like to know more about the Train the Trainer workshop for our team.",
    email:       "themissingp.support@gmail.com",
    qrImage:     "assets/img/qr-whatsapp.png"   // QR that opens WhatsApp with the message above
  },

  /* ---------- 1. HERO: the result they want + without what they fear ---------- */
  hero: {
    eyebrow:  "Train the Trainer · 2-day hands-on workshop",
    titleA:   "Turn your experts into trainers people learn from,",
    titleB:   "without another session nobody remembers.",
    subtitle: "Your people practise on camera, get coached one by one, and leave with a ready-to-use toolkit. We score them before and after, so you can show management what changed.",
    button:   "Book a free discovery call",
    button2:  "See the results",
    photo:    "assets/img/usman-hero.jpg",
    cardBig:  "+44%",
    cardText: "pre → post score, Customer Service TTT",
    chipBig:  "98%",
    chipText: "trainer rating at Nayatel",
    trustLine:"Train the Trainer delivered for"
  },

  logos: [
    { name: "Faysal Bank",    file: "assets/logos/faysalbank.png" },
    { name: "Engro",          file: "assets/logos/engro.png" },
    { name: "Nayatel",        file: "assets/logos/nayatel.png" },
    { name: "PIPS",           file: "" },
    { name: "GIZ",            file: "assets/logos/giz.png" },
    { name: "European Union", file: "assets/logos/eu.png" }
  ],

  /* ---------- 2. SOCIAL PROOF ---------- */
  proof: {
    eyebrow: "Results from real batches",
    title:   "Scored on day one. Scored again at the end.",
    stats: [
      { number: "+44%",    label: "Pre → post score", note: "Customer Service TTT, 2 batches" },
      { number: "+24%",    label: "Competency uplift", note: "Faysal Bank, 15 internal trainers" },
      { number: "100%",    label: "Met or beat expectations", note: "Faysal Bank feedback forms" },
      { number: "50,000+", label: "Professionals trained", note: "by Usman Gulzari in 14 years" }
    ],
    youtubeId: "kNV6XT60ggA",
    videoLabel: "Watch a Train the Trainer session",
    quotes: [
      { quote: "I have never experienced a training session like this before. Usman was fully engaged with all participants, making the training highly interactive.", name: "Participant", org: "Customer Service TTT" },
      { quote: "This is amazing and completely changed my training methodology and skills. Highly recommended.", name: "Kamran Ejaz", org: "Faysal Bank" },
      { quote: "From my first to my last presentation, I saw a clear transformation in confidence, clarity, and connection.", name: "Abdul Moiz Khan", org: "HSE Officer, Nayatel" }
    ]
  },

  /* ---------- 3. PROBLEM ---------- */
  problem: {
    eyebrow: "Sound familiar?",
    title:   "Your experts know the subject. The room still switches off.",
    pains: [
      { title: "Slides get read out loud", text: "Dense decks and long monologues. Half the room is on their phones within ten minutes." },
      { title: "New trainers wing it",     text: "No structure, no objectives, no plan for when questions or pushback come." },
      { title: "Every trainer, a different standard", text: "The same topic gets taught five different ways across teams and cities." },
      { title: "Nothing to show management", text: "Sessions happen, but nobody can prove what changed afterwards." }
    ],
    costTitle: "The real cost",
    cost: "Every session that doesn't land costs you twice: the hours of everyone in the room, and the mistakes that keep happening because the knowledge never reached the job.",
    bridge: "There's a better way: train the people who train your people."
  },

  /* ---------- 4. SOLUTION: feature + benefit + visual ---------- */
  solution: {
    eyebrow: "The solution",
    title:   "A two-day workshop that builds trainers, not just slides.",
    text:    "Built from 14 years and thousands of sessions. Every tool is practised in the room, not just explained.",
    features: [
      { title: "Tailored to your content", benefit: "Your trainers practise on the topics they'll actually teach.", text: "A pre-workshop assessment and needs call shape the examples, role plays and final demos.", visual: "photo", photo: "assets/img/group-flipchart.jpg" },
      { title: "Practice on camera, both days", benefit: "Confidence built by doing, not by watching.", text: "Every participant presents, is filmed, and gets one-to-one feedback on content, engagement and delivery.", visual: "photo", photo: "assets/img/usman-coaching.jpg" },
      { title: "Engagement tools for any topic", benefit: "Sessions people remember, even on technical subjects.", text: "STAR hooks, gap theory, WIIFM, PACE Elements, energizers, role plays and simulations.", visual: "photo", photo: "assets/img/ttt-room-1.jpg" },
      { title: "Training design frameworks", benefit: "Any expert can turn knowledge into a clear session.", text: "Templates for short and full-day sessions, learning objectives, assessments and evaluation forms.", visual: "photo", photo: "assets/img/faysal-session.jpg" },
      { title: "Measured before and after", benefit: "Proof you can take straight to management.", text: "Each trainer is scored on a first take and a final take, shared in a post-training report.", visual: "bars" },
      { title: "A toolkit that stays", benefit: "One standard after we leave.", text: "Trainer's guide, participant workbooks, activity deck, role-play simulations and presentation videos.", visual: "kit" }
    ]
  },

  /* ---------- 4b. INSIDE THE TWO DAYS ---------- */
  agendaTitle: "Inside the two days",
  agendaText:  "Day 1 builds the toolkit. Day 2 puts it on stage. Tap a module to see what's covered.",
  agenda: [
    { day: 1, time: "09:10 – 10:45", name: "Setting the Stage", points: ["Objective and norm setting", "Each participant records a first-take video", "What great training looks like"], result: "A baseline for every participant.", photo: "assets/img/usman-session.jpg" },
    { day: 1, time: "11:00 – 13:00", name: "The Pre-requisites", points: ["Expressed and unexpressed needs of learners", "Administrator, trainer and facilitator", "Connecting in the first few seconds", "The first 20% of a session"], result: "Trainers start from the learner, not the slides.", photo: "assets/img/usman-coaching.jpg" },
    { day: 1, time: "14:00 – 15:45", name: "Training Design", points: ["Structuring content with clarity", "Templates for short and full-day sessions", "Specific purpose and central idea", "Objectives, assessments and evaluation forms"], result: "A session plan they can reuse for any topic.", photo: "assets/img/group-flipchart.jpg" },
    { day: 1, time: "16:00 – 17:30", name: "The Art of Engagement", points: ["Start with a bang: the STAR hook", "Gap theory and WIIFM", "PACE Elements", "Learning with fun, without losing seriousness"], result: "Openings that win the room in the first minute.", photo: "assets/img/ttt-room-1.jpg" },
    { day: 2, time: "09:10 – 10:45", name: "Power of Non-Verbal Impact", points: ["Posture, expressions, movement, gestures", "Pause, pace, volume and pitch", "Injecting life into dead words"], result: "Visible confidence in voice and body.", photo: "assets/img/usman-mic.jpg" },
    { day: 2, time: "11:00 – 13:00", name: "Engagement Toolkit", points: ["Ice-breakers, energizers and role plays", "Making technical subjects interesting", "Feedback on first-take videos"], result: "A bank of activities ready to run.", photo: "assets/img/ttt-practice.jpg" },
    { day: 2, time: "14:00 – 15:00", name: "Difficult Situations", points: ["Difficult participants and resistance", "Low participation", "Interruptions and time pressure"], result: "Composure when the room pushes back.", photo: "assets/img/cs-roleplay.jpg" },
    { day: 2, time: "15:15 – 17:30", name: "Learning into Action", points: ["Every participant delivers a 3-minute session", "Scored feedback on engagement, content, delivery", "Winners and certificates"], result: "A final take to compare with the first.", photo: "assets/img/nayatel-certificates.jpg" }
  ],

  /* ---------- 4c. MORE PROOF: chart + past programs ---------- */
  results: {
    eyebrow: "Measured, not claimed",
    title:   "Every Faysal Bank trainer, first take to final take.",
    text:    "Fifteen internal trainers scored out of 100, November 2025. Nobody went backwards. One went from 10 to 100.",
    scores:  [[78,99],[85,99],[86,90],[10,100],[95,100],[75,82],[79,84],[90,100],[100,100],[71,87],[40,79],[86,95],[62,100],[78,90],[98,99]],
    totalBefore: 1133, totalAfter: 1404
  },
  portfolio: [
    { name: "Faysal Bank", big: "+24%", unit: "competency", tags: ["15 internal trainers", "Nov 2025"], text: "Biggest gains in session structuring, delivery confidence and engagement.", photo: "assets/img/faysal-group.jpg" },
    { name: "Engro · Customer Service", big: "+44%", unit: "pre → post", tags: ["2 batches"], text: "Built in-house capability to run customer service training, with a full toolkit.", photo: "assets/img/cs-team-group.jpg" },
    { name: "Nayatel", big: "98%", unit: "trainer rating", tags: ["16 hours", "Islamabad"], text: "Rated by 11 trainees; three gave a perfect 70 out of 70.", photo: "assets/img/nayatel-certificates.jpg" },
    { name: "PIPS · Parliament", big: "4", unit: "assemblies", tags: ["2 batches", "With GIZ & EU"], text: "Officers from Sindh, Balochistan, KPK and Punjab assemblies, co-facilitated with Shireen Naqvi.", photo: "assets/img/pips-batch1.jpg" }
  ],

  /* ---------- 5. HOW IT WORKS (3–4 steps) ---------- */
  how: {
    eyebrow: "How it works",
    title:   "Four simple steps. No commitment until you approve the plan.",
    steps: [
      { title: "Discovery call", time: "30 minutes", text: "We learn about your trainers, the topics they teach and what needs to change." },
      { title: "Tailored plan", time: "Before the workshop", text: "You get an outline, the right track and a pre-assessment to set each trainer's baseline." },
      { title: "Two-day workshop", time: "At your venue", text: "Learn, practise on camera, get coached, then deliver a final scored session." },
      { title: "Results report", time: "After the workshop", text: "Pre and post scores, presentation videos and recommendations for your trainer pipeline." }
    ]
  },

  /* ---------- TRAINER ---------- */
  trainer: {
    name:  "Usman Gulzari",
    role:  "Lead Trainer, The Missing P",
    bio:   "Usman has spent 14 years training trainers, managers and frontline teams at banks, telecoms, NGOs and government institutions. He is the author of Wings to Fly, and was named in Change Makers among the 33 most influential personalities.",
    photo: "assets/img/usman-facilitating.jpg",
    stats: [ ["14", "years"], ["125+", "organisations"], ["2,000+", "trainings"], ["50,000+", "professionals"] ],
    linkedin: "https://www.linkedin.com/in/usmangulzari/"
  },

  /* ---------- 6. FAQs ---------- */
  faqs: [
    { q: "Who is this workshop for?", a: "Subject experts, internal trainers, team leads and L&D staff who deliver training inside your organisation. It works for new and experienced trainers." },
    { q: "How many participants per batch?", a: "Recent batches had 11 to 15 participants, so everyone presents and gets feedback on both days. Larger teams run in two or more batches." },
    { q: "Can it be tailored to our content and industry?", a: "Yes. A pre-workshop assessment and needs call shape the examples, role plays and final demos. We also run Technical and Customer Service tracks." },
    { q: "Where does it take place?", a: "At your office or a venue of your choice, anywhere in Pakistan." },
    { q: "What language is it delivered in?", a: "English, with Urdu wherever it helps the room connect." },
    { q: "How do you measure results?", a: "Each participant is scored on a first take and a final take. You receive the pre/post scores, presentation videos and a post-training report with recommendations." },
    { q: "What do participants take home?", a: "A trainer's guide, workbooks, an activity and role-play deck, videos of their presentations and a Train the Trainer certificate." },
    { q: "How much does it cost?", a: "It depends on the number of batches, the track and the location. After a short discovery call you get a clear proposal, with no obligation." }
  ],

  /* ---------- 7. FINAL CTA + FORM ---------- */
  form: {
    eyebrow:  "Still deciding?",
    title:    "Give your experts two days. Get trainers your people want to learn from.",
    text:     "Answer a few quick questions (about 1 minute), then pick a time for a free 30-minute discovery call.",
    promises: ["A two-day outline tailored to your trainers' content", "The right track: Core, Technical or Customer Service", "How we'll measure pre and post results", "A clear proposal, with no obligation"],
    tracks:    ["Core Train the Trainer", "Technical TTT", "Customer Service TTT", "Not sure yet"],
    trainers:  ["Up to 15", "15 to 25", "2 batches or more"],
    needs:     ["Experts lose the room", "New trainers need structure", "Training quality is inconsistent", "Low engagement in sessions", "We need measurable results", "Something else"],
    timeline:  ["Within 1 month", "1–3 months", "3–6 months", "Just exploring"],
    city:      ["Islamabad / Rawalpindi", "Lahore", "Karachi", "Other city"],
    authority: ["I make the decision", "I recommend to management", "I'm collecting options"],
    privacy:   "We only use your details to plan your workshop. No mailing lists."
  },
  thanks: { title: "Thank you", text: "Pick a time below for a 30-minute call. We'll come prepared with ideas for your trainers." },
  qr: {
    title: "Rather talk on WhatsApp?",
    text:  "Scan with your phone camera. WhatsApp opens with a message ready to send.",
    button:"Open WhatsApp"
  },

  /* ---------- 8. FOOTER ---------- */
  footer: {
    text: "The Missing P · Empowering Human Potential. Two-day Train the Trainer workshops across Pakistan, led by Usman Gulzari.",
    programs: [
      { name: "Train the Trainer", link: "#top" },
      { name: "Delivering Impactful Presentations", link: "https://themissingp-training.github.io/dip/" },
      { name: "Ascending Together · Team Retreats", link: "https://themissingp-training.github.io/Retreats/" }
    ],
    links: [
      { name: "themissingp.com", link: "https://themissingp.com" },
      { name: "Usman Gulzari on LinkedIn", link: "https://www.linkedin.com/in/usmangulzari/" }
    ]
  }
};
