/* Page engine: builds every section from content.js. No need to edit. */
(function () {
  const C = window.CONTENT, S = C.settings;
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const head = (eyebrow, title, text, cls = "") => `<div class="head ${cls}">${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2>${esc(title)}</h2>${text ? `<p class="lede">${esc(text)}</p>` : ""}</div>`;
  const logo = l => l.file ? `<span class="logo"><img src="${esc(l.file)}" alt="${esc(l.name)}" loading="lazy"></span>` : `<span class="logo wordmark">${esc(l.name)}</span>`;
  const waLink = `https://wa.me/${esc(S.whatsappIntl)}?text=${encodeURIComponent(S.whatsappText)}`;
  const tick = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* 1. HERO */
  const H = C.hero;
  set("hero", `
    <div class="hero-copy">
      <p class="eyebrow pill">${esc(H.eyebrow)}</p>
      <h1>${esc(H.titleA)} <span class="h1b">${esc(H.titleB)}</span></h1>
      <p class="sub">${esc(H.subtitle)}</p>
      <div class="ctas"><a class="btn" href="#plan">${esc(H.button)} <span class="arr" aria-hidden="true">→</span></a><a class="btn ghost" href="#proof">${esc(H.button2)}</a></div>
      <p class="mini-trust">${tick}<span>Free 30-minute call · No obligation · Proposal tailored to your team</span></p>
    </div>
    <div class="hero-media">
      <div class="hero-frame"><img src="${esc(H.photo)}" alt="Usman Gulzari facilitating a Train the Trainer session"></div>
      <div class="float-card fc1"><strong>${esc(H.cardBig)}</strong><span>${esc(H.cardText)}</span>
        <div class="fc-bars" aria-hidden="true"><i style="height:48%"></i><i style="height:70%"></i></div></div>
      <div class="float-card fc2"><strong>${esc(H.chipBig)}</strong><span>${esc(H.chipText)}</span></div>
    </div>`);
  set("trust", `<p class="label">${esc(H.trustLine)}</p><div class="logo-row">${C.logos.map(logo).join("")}</div>`);

  /* 2. SOCIAL PROOF */
  const P = C.proof;
  set("proof-in", head(P.eyebrow, P.title, "", "center") + `
    <div class="stats">${P.stats.map((s, i) => `<div class="stat s${i}"><strong>${esc(s.number)}</strong><b>${esc(s.label)}</b><span>${esc(s.note)}</span></div>`).join("")}</div>
    <div class="proof-row">
      <button class="yt" type="button" data-id="${esc(P.youtubeId)}" aria-label="Play video: ${esc(P.videoLabel)}">
        <img src="https://i.ytimg.com/vi/${esc(P.youtubeId)}/hqdefault.jpg" alt="" loading="lazy" onerror="this.src='assets/img/big-hall.jpg'">
        <span class="yt-play" aria-hidden="true"></span><span class="yt-label">${esc(P.videoLabel)}</span>
      </button>
      <div class="quotes">${P.quotes.map(q => `<figure class="q"><div class="stars" aria-label="5 stars">★★★★★</div><blockquote>${esc(q.quote)}</blockquote><figcaption><span class="av">${esc(q.name.trim()[0])}</span><span><b>${esc(q.name)}</b><small>${esc(q.org)}</small></span></figcaption></figure>`).join("")}</div>
    </div>`);
  document.addEventListener("click", e => {
    const b = e.target.closest(".yt"); if (!b || b.classList.contains("on")) return;
    b.outerHTML = `<div class="yt on"><iframe src="https://www.youtube-nocookie.com/embed/${esc(b.dataset.id)}?autoplay=1&rel=0" title="${esc(P.videoLabel)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
  });

  /* 3. PROBLEM */
  const PR = C.problem;
  set("problem", head(PR.eyebrow, PR.title, "", "center") + `
    <div class="pains">${PR.pains.map((p, i) => `<div class="pain"><span class="x" aria-hidden="true">✕</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("")}</div>
    <div class="cost"><div><p class="cost-label">${esc(PR.costTitle)}</p><p class="cost-text">${esc(PR.cost)}</p></div></div>
    <p class="bridge"><span>${esc(PR.bridge)}</span> <span class="arrow-down" aria-hidden="true">↓</span></p>`);

  /* 4. SOLUTION */
  const SO = C.solution;
  const visual = f => {
    if (f.visual === "bars") return `<div class="fv fv-bars" aria-hidden="true"><div class="bars-chart"><div><i class="b" style="height:56%"></i><i class="a" style="height:81%"></i><small>Faysal Bank</small></div><div><i class="b" style="height:58%"></i><i class="a" style="height:84%"></i><small>Customer Service</small></div><div><i class="b" style="height:40%"></i><i class="a" style="height:100%"></i><small>Top climber</small></div></div><div class="bars-key"><span class="kb">First take</span><span class="ka">Final take</span></div></div>`;
    if (f.visual === "kit") return `<div class="fv fv-kit" aria-hidden="true"><span class="doc d1">Trainer's Guide</span><span class="doc d2">Participant Workbook</span><span class="doc d3">Activity Deck</span><span class="doc d4">Role-play Cards</span></div>`;
    return `<div class="fv"><img src="${esc(f.photo)}" alt="" loading="lazy"></div>`;
  };
  set("solution", head(SO.eyebrow, SO.title, SO.text, "center") +
    `<div class="features">${SO.features.map((f, i) => `<article class="feature">${visual(f)}<div class="f-body"><span class="f-no">${String(i + 1).padStart(2, "0")}</span><h3>${esc(f.title)}</h3><p class="benefit">${esc(f.benefit)}</p><p>${esc(f.text)}</p></div></article>`).join("")}</div>`);

  /* 4b. AGENDA */
  const A = C.agenda;
  set("agenda", head("The program", C.agendaTitle, C.agendaText, "center") + `
    <div class="daytabs" role="tablist">${[1, 2].map(d => `<button type="button" role="tab" data-day="${d}" aria-selected="${d === 1}">Day ${d} <small>${d === 1 ? "Concepts & tools" : "Practice day"}</small></button>`).join("")}</div>
    <div class="explorer"><div class="mods" role="tablist" aria-label="Modules"></div><div class="mpanel" id="mpanel" aria-live="polite"></div></div>`);
  const showMod = i => {
    const m = A[i];
    document.querySelectorAll(".mod").forEach(b => b.setAttribute("aria-selected", +b.dataset.i === i));
    $("#mpanel").innerHTML = `<div class="m-photo"><img src="${esc(m.photo)}" alt="${esc(m.name)}"></div><div class="m-copy anim"><p class="m-stage">Day ${m.day} · ${esc(m.time)}</p><h3>${esc(m.name)}</h3><ul>${m.points.map(p => `<li>${tick}<span>${esc(p)}</span></li>`).join("")}</ul><div class="m-result"><b>What changes</b>${esc(m.result)}</div></div>`;
  };
  const showDay = d => {
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

  /* 4c. RESULTS CHART + PROGRAMS */
  const R = C.results;
  const rows = R.scores.map(([b, a]) => ({ b, a, g: a - b })).sort((x, y) => y.g - x.g);
  set("results", `
    <div class="res-grid">
      <div>${head(R.eyebrow, R.title, R.text)}
        <div class="total"><div><small>Combined, first take</small><strong>${R.totalBefore}</strong></div><span aria-hidden="true">→</span><div><small>Combined, final take</small><strong class="up">${R.totalAfter}</strong></div></div>
      </div>
      <figure class="chart" aria-label="Before and after scores for ${rows.length} trainers">
        <div class="legend"><span class="lg-b">First take</span><span class="lg-a">Final take</span><span class="lg-n">Names kept private</span></div>
        <div class="axis" aria-hidden="true"><span></span><div class="ticks"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div><span></span></div>
        ${rows.map((r, i) => `<div class="drow"><span class="who">T${String(i + 1).padStart(2, "0")}</span><div class="lane"><i class="seg" style="left:${r.b}%;width:${r.g}%"></i><i class="dot b" style="left:${r.b}%"></i><i class="dot a" style="left:${r.a}%"></i></div><span class="gain">${r.g ? "+" + r.g : "="}</span></div>`).join("")}
      </figure>
    </div>
    <div class="programs">${C.portfolio.map((p, i) => `<article class="prog"><div class="prog-img"><img src="${esc(p.photo)}" alt="${esc(p.name)} training group" loading="lazy"><span class="badge b${i}">${esc(p.big)}<small>${esc(p.unit)}</small></span></div><div class="prog-body"><h3>${esc(p.name)}</h3><div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div><p>${esc(p.text)}</p></div></article>`).join("")}</div>`);

  /* 5. HOW IT WORKS */
  const HW = C.how;
  set("how", head(HW.eyebrow, HW.title, "", "center") + `<ol class="steps">${HW.steps.map((s, i) => `<li class="step"><span class="step-no">${i + 1}</span><p class="step-time">${esc(s.time)}</p><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("")}</ol>
    <div class="how-cta"><a class="btn" href="#plan">Start with step 1 <span class="arr" aria-hidden="true">→</span></a></div>`);

  /* TRAINER */
  const T = C.trainer;
  set("trainer", `<div class="t-photo"><img src="${esc(T.photo)}" alt="${esc(T.name)}"><span class="t-tag">Lead trainer</span></div>
    <div class="t-copy"><p class="eyebrow">Meet your trainer</p><h2>${esc(T.name)}</h2><p class="t-role">${esc(T.role)}</p><p class="lede">${esc(T.bio)}</p>
    <div class="tstats">${T.stats.map(s => `<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join("")}</div>
    <a class="text-link" href="${esc(T.linkedin)}" target="_blank" rel="noopener">View Usman's LinkedIn →</a></div>`);

  /* 6. FAQ */
  set("faq", head("FAQs", "Questions HR and L&D teams ask us", "", "center") +
    `<div class="faqs">${C.faqs.map((f, i) => `<details${i === 0 ? " open" : ""}><summary><span>${esc(f.q)}</span><span class="pm" aria-hidden="true"></span></summary><p>${esc(f.a)}</p></details>`).join("")}</div>`);

  /* 7. FINAL CTA + FORM + QR */
  const F = C.form, Q = C.qr;
  set("plan-copy", `<p class="eyebrow">${esc(F.eyebrow)}</p><h2>${esc(F.title)}</h2><p class="lede">${esc(F.text)}</p>
    <ul class="promises">${F.promises.map(p => `<li>${tick}<span>${esc(p)}</span></li>`).join("")}</ul>
    <div class="qr-card">
      <img src="${esc(S.qrImage)}" alt="QR code that opens WhatsApp chat with The Missing P" width="132" height="132">
      <div><b>${esc(Q.title)}</b><p>${esc(Q.text)}</p>
        <div class="qr-actions"><a class="wa" href="${waLink}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.9-.9-2.8-2.4-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.2-.2-.4-.3Z"/></svg>${esc(Q.button)}</a>
        <span class="mail">or email <b>${esc(S.email)}</b></span></div>
      </div>
    </div>`);
  const pills = (name, opts, type = "radio") => `<div class="pills">${opts.map((o, i) => `<label><input type="${type}" name="${name}" value="${esc(o)}" id="${name}-${i}"><span>${esc(o)}</span></label>`).join("")}</div>`;
  set("leadbox", `
    <form id="leadform" novalidate>
      <div class="progress" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
      <div class="step-f" data-step="1"><p class="steplabel">Step 1 of 3 · Your trainers</p>
        <fieldset><legend>Which track fits best?</legend>${pills("track", F.tracks)}</fieldset>
        <fieldset><legend>How many trainers?</legend>${pills("trainers", F.trainers)}</fieldset>
        <fieldset><legend>What needs to change? <small>Pick all that apply</small></legend>${pills("need", F.needs, "checkbox")}</fieldset>
      </div>
      <div class="step-f" data-step="2" hidden><p class="steplabel">Step 2 of 3 · Your plan</p>
        <fieldset><legend>When are you planning it?</legend>${pills("timeline", F.timeline)}</fieldset>
        <fieldset><legend>Where will it run?</legend>${pills("city", F.city)}</fieldset>
        <fieldset><legend>Your role in this decision</legend>${pills("authority", F.authority)}</fieldset>
      </div>
      <div class="step-f" data-step="3" hidden><p class="steplabel">Step 3 of 3 · Where we send your plan</p>
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
      step = n; form.querySelectorAll(".step-f").forEach(s => s.hidden = +s.dataset.step !== n);
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

  /* 8. FOOTER */
  const FT = C.footer;
  set("footer-in", `
    <div class="f-brand"><img src="assets/logos/tmp-logo.png" alt="The Missing P"><p>${esc(FT.text)}</p></div>
    <div class="f-col"><b>Programs</b>${FT.programs.map(l => `<a href="${esc(l.link)}"${l.link.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(l.name)}</a>`).join("")}</div>
    <div class="f-col"><b>Contact</b><a href="${waLink}" target="_blank" rel="noopener">WhatsApp ${esc(S.whatsapp)}</a><span class="sel">${esc(S.email)}</span>${FT.links.map(l => `<a href="${esc(l.link)}" target="_blank" rel="noopener">${esc(l.name)}</a>`).join("")}</div>
    <div class="f-qr"><img src="${esc(S.qrImage)}" alt="QR code for WhatsApp" width="96" height="96"><span>Scan to WhatsApp us</span></div>`);
  set("year", String(new Date().getFullYear()));

  /* REVEAL ON SCROLL (content stays visible if not supported) */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".feature,.pain,.step,.prog,.stat,.q").forEach(el => { el.classList.add("rv"); io.observe(el); });
  }

  /* STICKY MOBILE BAR */
  const sticky = $("#sticky");
  if (sticky) {
    sticky.querySelector(".wa-mini").href = waLink;
    if ("IntersectionObserver" in window) {
      let past = false, atForm = false;
      const upd = () => sticky.classList.toggle("show", past && !atForm);
      new IntersectionObserver(([e]) => { past = !e.isIntersecting; upd(); }).observe($("#hero"));
      new IntersectionObserver(([e]) => { atForm = e.isIntersecting; upd(); }).observe($("#plan"));
    }
  }
})();
