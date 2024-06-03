var t=document.querySelectorAll(".population"),e=0;t.forEach(function(t){var o=parseInt(t.textContent.replace(/,/g,""),10);e+=o});var o=e/t.length;document.querySelector(".total-population").textContent=e.toLocaleString(),document.querySelector(".average-population").textContent=o.toLocaleString();
//# sourceMappingURL=index.26995cb9.js.map
