(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    $header = document.querySelectorAll(".header")[0];
    $headerHandlers = document.querySelectorAll(".header_openLink, .header_closeLink");
    $headerHandlers.forEach(($el) => {
      $el.addEventListener("click", function(e) {
        $header.classList.toggle("header__isOpen");
      });
    });
  });
})();
