const $ = require("node_modules/jquery/dist/jquery.min.js");
const { debounce } = require("lodash");

function toggleBgColorIfScroll() {
  $(document).scroll(debounce(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop == 0) {
      $(".gallery-menu .btn-group").removeClass("hidden");
    } else {
      $(".gallery-menu .btn-group").addClass("hidden");
    }
  }, 50));
};

export const bodyScrollEvent = {
  toggleBgColorIfScroll
}

