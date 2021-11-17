document.addEventListener('DOMContentLoaded', function() {
  $( function() {
    $( "#accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
    $( "#accordion-plug" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });
})