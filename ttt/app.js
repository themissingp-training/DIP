/* Page engine: builds every section from content.js. No need to edit. */
(function () {
  const C = window.CONTENT, S = C.settings;
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const head = (eyebrow, title, text, cls = "") => `<div class="head ${cls}">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2>${esc(title)}</h2>${text ? `<p class="lede">${esc(text)}</p>` : ""}</div>`;
  const logoTile = l => l.file ? `<span class="logo"><img src="${esc(l.file)}" alt="${esc(l.name)}" loading="lazy"></span>` : `<span class="logo wordmark">${esc(l.name)}</span>`;

  /* HERO */
  const H = C.hero;
  set("hero", `
    <div class="hero-copy">
      <p class="eyebrow">${esc(H.eyebrow)}</p>
      <h1><span class="h1a">${esc(H.titleA)}</span> <span class="h1b">${esc(H.titleB)}</span></h1>
      <p class="sub">${esc(H.subtitle)}</p>
      <div class="ctas"><a class="btn" href="#plan">${esc(H.button)} <span class="arr" aria-hidden="true">→</span></a><a class="btn ghost" href="#days">${esc(H.button2)}</a></div>
    </div>
    <div class="hero-media">
      <img class="hero-photo" src="${esc(H.photo)}" alt="Usman Gulzari facilitating a Train the Trainer session">
      ${(H.photos || []).map((p, i) => `<img class="hero-small hs${i}" src="${esc(p)}" alt="" loading="lazy">`).join("")}
      ${H.badge ? `<span class="hero-badge">${esc(H.badge)}</span>` : ""}
    </div>`);
  set("proof", C.proof.map((p, i) => `<div class="stat s${i}"><strong>${esc(p.number)}</strong><span>${esc(p.label)}</span></div>`).join(""));

  /* LOGOS */
  const belt = C.moreLogos.map(logoTile).join("");
  set("logos", `
    <p class="label">${esc(C.logosTitle)}</p>
    <div class="logo-row">${C.logos.map(logoTile).join("")}</div>
    <p class="label more-label">${esc(C.moreLogosTitle)}</p>
    <div class="marquee"><div class="belt">${belt}<span class="dup" aria-hidden="true">${belt}</span></div></div>`);

  /* PROBLEM */
  const P = C.problem;
  set("problem", `
    <div class="prob-copy">${head(P.eyebrow, P.title, P.text)}</div>
    <div class="shifts">
      <div class="shift-head"><span>Before</span><span></span><span>After two days</span></div>
      ${P.shifts.map(s => `<div class="shift"><span class="from">${esc(s.from)}</span><span class="to-arr" aria-hidden="true">→</span><span class="to">${esc(s.to)}</span></div>`).join("")}
    </div>`);

  /* VIDEO */
  const V = C.video;
  set("video", `
    <div class="v-copy">
      ${head(V.eyebrow, V.title, V.text)}
      <ol class="loop">${V.steps.map((s, i) => `<li class="c${i}"><b>${esc(s.word)}</b><span>${esc(s.text)}</span></li>`).join("")}</ol>
    </div>
    <div class="v-media">
      <button class="yt" type="button" data-id="${esc(V.youtubeId)}" aria-label="Play video: ${esc(V.youtubeLabel)}">
        <img src="https://i.ytimg.com/vi/${esc(V.youtubeId)}/hqdefault.jpg" alt="" loading="lazy" onerror="this.src='assets/img/big-hall.jpg'">
        <span class="yt-play" aria-hidden="true"></span><span class="yt-label">${esc(V.youtubeLabel)}</span>
      </button>
      <div class="v-more">${V.more.map((m, i) => `<a class="chip c${i}" href="${esc(m.link)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span><b>${esc(m.name)}</b><small>${esc(m.note)}</small></span></a>`).join("")}</div>
    </div>`);
  document.addEventListener("click", e => {
    const b = e.target.closest(".yt"); if (!b) return;
    b.outerHTML = `<div class="yt on"><iframe src="https://www.youtube-nocookie.com/embed/${esc(b.dataset.id)}?autoplay=1&rel=0" title="${esc(V.youtubeLabel)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
  });

  /* WHY */
  const W = C.why;
  set("why", head(W.eyebrow, W.title, W.text) + `<div class="why-grid">${W.points.map((p, i) => `<div class="why-item c${i % 3}"><span class="mk">${i + 1}</span><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></div>`).join("")}</div>`);

  /* RESULTS CHART */
  const R = C.results;
  const rows = R.scores.map(([b, a]) => ({ b, a, g: a - b })).sort((x, y) => y.g - x.g);
  set("results", `
    <div class="res-copy">
      ${head(R.eyebrow, R.title, R.text)}
      <div class="callouts">${R.callouts.map((c, i) => `<div class="callout c${i}"><strong>${esc(c.number)}</strong><span>${esc(c.label)}</span></div>`).join("")}</div>
    </div>
    <figure class="chart" aria-label="Before and after scores for ${rows.length} trainers">
      <div class="legend"><span class="lg-b">First take</span><span class="lg-a">Final take</span></div>
      <div class="axis" aria-hidden="true"><span></span><div class="ticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div><span></span></div>
      ${rows.map((r, i) => `<div class="drow"><span class="who">T${String(i + 1).padStart(2, "0")}</span><div class="lane"><i class="seg" style="left:${r.b}%;width:${r.g}%"></i><i class="dot b" style="left:${r.b}%"></i><i class="dot a" style="left:${r.a}%"></i></div><span class="gain">${r.g ? "+" + r.g : "="}</span></div>`).join("")}
      <figcaption>Combined score ${R.totalBefore} → ${R.totalAfter} · names kept private</figcaption>
    </figure>`);

  /* PORTFOLIO */
  set("portfolio", head("Recent programs", "Where this workshop has run.", "Banks, telecoms, manufacturers and parliament. Same method, tailored to each room.") +
    `<div class="port">${C.portfolio.map((p, i) => `
      <article class="pcard">
        <div class="shots n${Math.min(p.photos.length, 3)}">${p.photos.slice(0, 3).map(src => `<img src="${esc(src)}" alt="${esc(p.name)} training" loading="lazy">`).join("")}
          ${p.big ? `<span class="badge c${i % 3}">${esc(p.big)}<small>${esc(p.unit)}</small></span>` : ""}</div>
        <div class="body"><h3>${esc(p.name)}</h3><div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div><p>${esc(p.text)}</p></div>
      </article>`).join("")}</div>`);

  /* VOICES */
  set("voices", head("In their words", "What participants said after.", "From feedback forms and their own LinkedIn posts.") +
    `<div class="quotes">${C.testimonials.map((t, i) => `<figure class="q ${t.feature ? "feature" : ""} c${i % 3}"><blockquote>${esc(t.quote)}</blockquote><figcaption class="who"><span class="av">${esc(t.name.trim()[0])}</span><span><b>${esc(t.name)}</b><small>${esc(t.org)}</small></span></figcaption></figure>`).join("")}</div>
    <p class="label proof-label">Screenshots · tap to read</p>
    <div class="proofwall">${C.screenshots.map(s => `<figure class="ss"><button class="zoom" type="button" data-src="${esc(s.file)}" aria-label="Open ${esc(s.caption)}"><img src="${esc(s.file)}" alt="${esc(s.caption)}" loading="lazy"></button><figcaption>${esc(s.caption)}</figcaption></figure>`).join("")}</div>`);

  /* AGENDA */
  const A = C.agenda;
  set("agenda", head("The two days", "Day 1 builds the toolkit. Day 2 puts it on stage.", "") +
    `<div class="outcomes"><p class="label">${esc(C.outcomesTitle)}</p><ul>${C.outcomes.map(o => `<li>${esc(o)}</li>`).join("")}</ul></div>
     <div class="daytabs" role="tablist">${[1, 2].map(d => `<button type="button" role="tab" data-day="${d}" aria-selected="${d === 1}">Day ${d}<small>${d === 1 ? "Concepts & tools" : "Practice day"}</small></button>`).join("")}</div>
     <div class="explorer"><div class="mods" role="tablist" aria-label="Modules"></div><div class="mpanel" id="mpanel" aria-live="polite"></div></div>
     <p class="note">${esc(C.agendaNote)}</p>`);
  let day = 1, cur = 0;
  const showMod = i => {
    cur = i; const m = A[i];
    document.querySelectorAll(".mod").forEach(b => b.setAttribute("aria-selected", +b.dataset.i === i));
    $("#mpanel").innerHTML = `<div class="m-photo"><img src="${esc(m.photo)}" alt="${esc(m.name)}"></div>
      <div class="m-copy anim"><p class="m-stage">${esc(m.stage)} · <span>${esc(m.time)}</span></p><h3>${esc(m.name)}</h3>
      <ul>${m.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul><div class="m-result"><b>What changes</b>${esc(m.result)}</div></div>`;
  };
  const showDay = d => {
    day = d;
    document.querySelectorAll(".daytabs button").forEach(b => b.setAttribute("aria-selected", +b.dataset.day === d));
    const idx = A.map((m, i) => [m, i]).filter(([m]) => m.day === d);
    document.querySelector(".mods").innerHTML = idx.map(([m, i], k) => `<button type="button" role="tab" class="mod" data-i="${i}"><span class="mn">${k + 1}</span><span><b>${esc(m.name)}</b><small>${esc(m.time)}</small></span></button>`).join("");
    showMod(idx[0][1]);
  };
  document.addEventListener("click", e => {
    const t = e.target.closest(".daytabs button"); if (t) return showDay(+t.dataset.day);
    const m = e.target.closest(".mod"); if (m) showMod(+m.dataset.i);
  });
  showDay(1);

  /* TRACKS + TOOLKIT */
  set("tracks", head("Three tracks, one method", "Built around who's in the room.", "") +
    `<div class="tracks">${C.tracks.map((t, i) => `<article class="track c${i}"><img src="${esc(t.photo)}" alt="" loading="lazy"><div class="body"><p class="for">${esc(t.for)}</p><h3>${esc(t.name)}</h3><p>${esc(t.text)}</p></div></article>`).join("")}</div>
     <div class="kit"><div class="kit-head"><p class="eyebrow">What you keep</p><h3 class="kit-title">The workshop ends. The toolkit stays.</h3></div>
     <ul class="kit-list">${C.toolkit.map(k => `<li><b>${esc(k.title)}</b><span>${esc(k.text)}</span></li>`).join("")}</ul></div>`);

  /* TRAINER */
  const T = C.trainer;
  set("trainer", `<div class="t-photo"><img src="${esc(T.photo)}" alt="${esc(T.name)}"></div>
    <div class="t-copy"><p class="eyebrow">Your lead trainer</p><h2>${esc(T.name)}</h2><p class="t-role">${esc(T.role)}</p><p class="lede">${esc(T.bio)}</p>
    <div class="tstats">${T.stats.map(s => `<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join("")}</div></div>`);

  /* FORM */
  const F = C.form;
  set("plan-copy", `<p class="eyebrow">${esc(F.eyebrow)}</p><h2>${esc(F.title)}</h2><p class="lede">${esc(F.text)}</p>
    <ul class="promises">${F.promises.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    <p class="contact">Prefer to talk first? WhatsApp <b>${esc(S.whatsapp)}</b> or email <b>${esc(S.email)}</b></p>`);
  const pills = (name, opts, type = "radio") => `<div class="pills">${opts.map((o, i) => `<label><input type="${type}" name="${name}" value="${esc(o)}" id="${name}-${i}"><span>${esc(o)}</span></label>`).join("")}</div>`;
  set("leadbox", `
    <form id="leadform" novalidate>
      <div class="progress" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
      <div class="step" data-step="1"><p class="steplabel">Step 1 of 3 · Your trainers</p>
        <fieldset><legend>Which track fits best?</legend>${pills("track", F.tracks)}</fieldset>
        <fieldset><legend>How many trainers?</legend>${pills("trainers", F.trainers)}</fieldset>
        <fieldset><legend>What needs to change? <small>Pick all that apply</small></legend>${pills("need", F.needs, "checkbox")}</fieldset>
      </div>
      <div class="step" data-step="2" hidden><p class="steplabel">Step 2 of 3 · Your plan</p>
        <fieldset><legend>When are you planning it?</legend>${pills("timeline", F.timeline)}</fieldset>
        <fieldset><legend>Where will it run?</legend>${pills("city", F.city)}</fieldset>
        <fieldset><legend>Your role in this decision</legend>${pills("authority", F.authority)}</fieldset>
      </div>
      <div class="step" data-step="3" hidden><p class="steplabel">Step 3 of 3 · Where we send your plan</p>
        <div class="fields">
          <div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" autocomplete="name"></div>
          <div class="field"><label for="f-desig">Designation</label><input id="f-desig" name="designation" autocomplete="organization-title" placeholder="e.g. L&amp;D Manager"></div>
          <div class="field"><label for="f-company">Organisation</label><input id="f-company" name="company" autocomplete="organization"></div>
          <div class="field"><label for="f-email">Work email</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
          <div class="field full"><label for="f-phone">Phone / WhatsApp</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="+92 3XX XXXXXXX"></div>
        </div>
      </div>
      <p class="err" id="err" role="alert"></p>
      <div class="navrow"><button type="button" class="back" id="backbtn" hidden>← Back</button><span></span><button type="submit" class="btn" id="nextbtn">Next <span class="arr" aria-hidden="true">→</span></button></div>
      <p class="fine">${esc(F.privacy)}</p>
    </form>
    <div class="thanks" id="thanks" hidden><p class="eyebrow">Received</p><h3>${esc(C.thanks.title)}, <span id="t-name">there</span>!</h3><p class="lede">${esc(C.thanks.text)}</p><div class="cal" id="cal"></div></div>`);

  if (S.jotformId) $("#leadform").outerHTML = `<div class="jot"><iframe title="Train the Trainer enquiry form" src="https://form.jotform.com/${esc(S.jotformId)}" allow="fullscreen"></iframe></div>`;
  const form = $("#leadform");
  if (form) {
    let step = 1;
    const err = $("#err"), next = $("#nextbtn"), back = $("#backbtn"), bars = form.querySelectorAll(".progress i");
    const show = n => {
      step = n; form.querySelectorAll(".step").forEach(s => s.hidden = +s.dataset.step !== n);
      bars.forEach((b, i) => b.classList.toggle("on", i < n)); back.hidden = n === 1;
      next.innerHTML = (n === 3 ? "See available times" : "Next") + ' <span class="arr" aria-hidden="true">→</span>'; err.textContent = "";
    };
    const has = n => form.querySelector(`[name="${n}"]:checked`);
    const check = () => {
      if (step === 1) { if (!has("track")) return "Please choose a track."; if (!has("trainers")) return "Please choose how many trainers."; if (!has("need")) return "Please pick at least one thing that needs to change."; }
      if (step === 2) for (const [k, m] of [["timeline", "when you're planning it"], ["city", "where it will run"], ["authority", "your role"]]) if (!has(k)) return `Please choose ${m}.`;
      if (step === 3) {
        for (const id of ["f-name", "f-desig", "f-company", "f-email", "f-phone"]) { const el = document.getElementById(id); if (!el.value.trim()) { el.focus(); return "Please add your " + el.labels[0].textContent.toLowerCase() + "."; } }
        if (!/^\S+@\S+\.\S+$/.test($("#f-email").value)) return "Please check your work email. It should look like name@company.com.";
      }
      return "";
    };
    back.onclick = () => show(step - 1);
    form.addEventListener("submit", e => {
      e.preventDefault(); const m = check(); if (m) { err.textContent = m; return; }
      if (step < 3) { show(step + 1); $("#plan").scrollIntoView({ behavior: "smooth" }); return; }
      sendLead(); thanks($("#f-name").value);
    });
    function sendLead() {
      if (!S.leadWebhook) return;
      const fd = new FormData(form), lead = {};
      for (const k of new Set(fd.keys())) lead[k] = fd.getAll(k).join(", ");
      lead.program = "Train the Trainer"; lead.submitted_at = new Date().toISOString(); lead.page = location.href;
      try { fetch(S.leadWebhook, { method: "POST", mode: "no-cors", body: new URLSearchParams(lead), keepalive: true }); } catch (_) {}
    }
  }
  function thanks(name) {
    const f = $("#leadform"); if (f) f.hidden = true;
    $("#t-name").textContent = (name || "there").trim().split(" ")[0];
    $("#thanks").hidden = false;
    if (S.calendlyUrl) {
      $("#cal").innerHTML = `<div id="cal-widget" style="min-width:280px;height:700px"></div><p class="cal-alt">Calendar not showing? <a href="${esc(S.calendlyUrl)}" target="_blank" rel="noopener">Open it in a new tab →</a></p>`;
      const prefill = { name: ($("#f-name") || {}).value || "", email: ($("#f-email") || {}).value || "" };
      const start = () => window.Calendly && window.Calendly.initInlineWidget({ url: S.calendlyUrl + "?hide_gdpr_banner=1", parentElement: document.getElementById("cal-widget"), prefill });
      if (window.Calendly) start();
      else { const sc = document.createElement("script"); sc.src = "https://assets.calendly.com/assets/external/widget.js"; sc.async = true; sc.onload = start; document.head.appendChild(sc); }
    }
    $("#plan").scrollIntoView({ behavior: "smooth" });
  }
  if (/[?&]thanks/.test(location.search)) thanks("");

  /* FOOTER */
  set("foot-text", esc(C.footer));

  /* LIGHTBOX */
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.hidden = true;
  lb.innerHTML = `<button type="button" class="lb-close" aria-label="Close">×</button><img alt="">`;
  document.body.appendChild(lb);
  document.addEventListener("click", e => {
    const z = e.target.closest(".zoom"); if (z) { lb.querySelector("img").src = z.dataset.src; lb.hidden = false; return; }
    if (!lb.hidden && (e.target === lb || e.target.closest(".lb-close"))) lb.hidden = true;
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

  /* STICKY MOBILE BUTTON */
  const sticky = $("#sticky");
  if (sticky && "IntersectionObserver" in window) {
    let past = false, atForm = false;
    const upd = () => sticky.classList.toggle("show", past && !atForm);
    new IntersectionObserver(([e]) => { past = !e.isIntersecting; upd(); }).observe($("#hero"));
    new IntersectionObserver(([e]) => { atForm = e.isIntersecting; upd(); }).observe($("#plan"));
  }
})();
