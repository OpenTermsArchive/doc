(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    $languageSwitcher = document.querySelectorAll(".languageSwitcher")[0];
    $languageSwitcherHandlers = document.querySelectorAll(".languageSwitcher_current, .languageSwitcher_item");
    $languageSwitcherHandlers.forEach(($el) => {
      $el.addEventListener("click", function(e) {
        $languageSwitcher.classList.toggle("languageSwitcher__isOpen");
      });
    });
  });
})();
