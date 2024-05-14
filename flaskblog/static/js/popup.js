/* ----- JavaScript ----- */
$(function () {
    $("#custom-modal").modal("show");
  });

  /* Close the popup when the a selection is made */
  $("#selectCity").on("change", function () {
    $("#custom-modal").modal("hide");
  });