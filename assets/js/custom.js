$(document).ready(function () {
     $("#siteInfo tr").click(function (e) {
          $(this).next('tr').toggle('5000','linear');
     });

     /* $("td").each(function () {
          $(this).addClass("text-break");
          $(this).children().addClass("text-break");
     }); */
});