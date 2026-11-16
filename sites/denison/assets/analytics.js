(function () {
  function send(name, params) {
    if (typeof gtag === "function") {
      gtag("event", name, params);
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (href.indexOf("tel:") === 0) {
      send("click_to_call", { link_url: href, phone_number: href.slice(4) });
    } else if (href.indexOf("mailto:") === 0) {
      send("email_click", { link_url: href });
    }
  });

  // Fire on submit only; do not preventDefault or re-submit, so Netlify Forms still posts to /thanks.
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || form.tagName !== "FORM") return;
    var isTourOrContact =
      form.id === "tour-form" ||
      form.getAttribute("name") === "contact" ||
      form.hasAttribute("data-netlify");
    if (!isTourOrContact) return;
    send("generate_lead", {
      form_id: form.id || "",
      form_name: form.getAttribute("name") || "",
    });
  });
})();
