// DomainX starter website
// Prices are calculated at 70% of the registrar prices supplied by the owner.
// This is a front-end catalogue only. Connect a registrar/reseller API and secure
// server-side checkout before accepting payments or promising live availability.

const domains = [
  {tld:".com", first:11.17, renewal:11.17, label:"Most popular"},
  {tld:".org", first:8.50, renewal:11.20, label:"For organisations"},
  {tld:".app", first:8.20, renewal:14.20, label:"For apps"},
  {tld:".io", first:32.00, renewal:50.00, label:"For technology"},
  {tld:".ai", first:160.00, renewal:80.00, label:"For AI brands"},
  {tld:".net", first:11.86, renewal:11.86, label:"For networks"},
  {tld:".uk", first:5.30, renewal:5.30, label:"United Kingdom"},
  {tld:".dev", first:8.20, renewal:12.20, label:"For developers"},
  {tld:".cc", first:8.00, renewal:8.00, label:"Flexible identity"},
  {tld:".xyz", first:12.30, renewal:11.20, label:"Creative brands"},
  {tld:".ca", first:9.19, renewal:9.19, label:"Canada"},
  {tld:".co.uk", first:5.30, renewal:5.30, label:"United Kingdom"}
];
const factor = 0.70;
const money = n => "$" + (n * factor).toFixed(2);
const grid = document.getElementById("extensionGrid");

function renderExtensions(){
  grid.innerHTML = domains.map(d => `
    <article class="extension-card">
      <div class="extension-top"><strong>${d.tld}</strong><span class="extension-tag">${d.label}</span></div>
      <div class="extension-price">${money(d.first)} <small>/ first year</small></div>
      <div class="renewal">Renews at ${money(d.renewal)} / year</div>
    </article>`).join("");
}

function cleanName(value){
  let name = value.trim().toLowerCase();
  name = name.replace(/^https?:\/\//,"").replace(/^www\./,"").split(/[/?#]/)[0];
  if(name.includes(".")) name = name.split(".")[0];
  return name.replace(/[^a-z0-9-]/g,"").replace(/^-+|-+$/g,"").slice(0,63);
}

function showResults(raw){
  const name = cleanName(raw);
  const section = document.getElementById("resultsSection");
  const list = document.getElementById("resultsList");
  if(name.length < 2){
    alert("Please enter at least 2 letters or numbers for your domain name.");
    return;
  }
  list.innerHTML = domains.map(d => {
    const full = name + d.tld;
    const subject = encodeURIComponent("DomainX order enquiry: " + full);
    const body = encodeURIComponent(`Hello DomainX,\n\nI would like to enquire about ${full}.\nEstimated first-year price: ${money(d.first)}\nEstimated renewal price: ${money(d.renewal)}\n\nPlease confirm live availability, final price and registration requirements.`);
    return `<div class="result-row">
      <div><div class="result-name">${full}</div><div class="result-meta">Availability not checked · Estimated pricing</div></div>
      <div class="result-price">${money(d.first)}<small>First year · renews ${money(d.renewal)}/yr</small></div>
      <a class="order-link" href="mailto:emoglobalsolutions@gmail.com?subject=${subject}&body=${body}">Enquire</a>
    </div>`;
  }).join("");
  section.classList.remove("hidden");
  section.scrollIntoView({behavior:"smooth",block:"start"});
}

document.getElementById("domainForm").addEventListener("submit", e => {
  e.preventDefault();
  showResults(document.getElementById("domainInput").value);
});
document.querySelectorAll(".suggestion").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("domainInput").value = button.dataset.name;
    showResults(button.dataset.name);
  });
});
document.getElementById("clearResults").addEventListener("click", () => {
  document.getElementById("resultsSection").classList.add("hidden");
  document.getElementById("domainInput").value = "";
});
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
renderExtensions();