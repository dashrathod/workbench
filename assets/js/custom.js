$(document).ready(function () {
     /* $("#siteInfo tr").click(function (e) {
          $(this).next('tr').toggle('5000','linear');
     }); */

     console.log('js loaded!');
     $("td").each(function () {
          $(this).addClass("text-break");
          $(this).children().addClass("text-break");
     });

     var qqq = $("#siteInfo").DataTable({
          ordering: false,
          searching: false,
          lengthChange: false,
          bInfo: false
     });


     $('#siteInfo tbody td:not(:first-child)').click(function () {
          var tr = $(this).closest('tr');
          var row = qqq.row(tr);

          if (row.child.isShown()) {
               // This row is already open - close it
               row.child.hide();
               tr.removeClass('shown');
          }
          else {
               // Open this row
               row.child('<div class="alert alert-info"> <table class="table" id="siteInfoExp" width="100%"> <thead> <tr> <th><input type="checkbox"></th> <th>Contact Name</th> <th>Contact Email</th> <th>Contact Number</th> <th>Business Purpose</th> </tr> </thead> <tbody> <tr> <td><input type="checkbox"></td> <td>Rakesh Kumar</td> <td>Rakesh.kdjfsh@gdlk.com</td> <td>+1 876 54673 876</td> <td>-</td> </tr> <tr> <td><input type="checkbox"></td> <td>Rakesh Kumar</td> <td>Rakesh.kdjfsh@gdlk.com</td> <td>+1 876 54673 876</td> <td>-</td> </tr> </tbody> </table> <div class="pagination"> <div class="col-md-6 text-left"> show <input type="text" class="pgnIpt" value="01"> of 10 </div> <div class="col-md-6 text-right"> <a href="#"> <div class="float-right pgnBtn">Next <i class="fa fa-angle-right pgnicn" aria-hidden="true"></i> </div> </a> <a href="#"> <div class="float-right pgnBtn blurBtn"> <i class="fa fa-angle-left pgnicn" aria-hidden="true"></i> Previous </div> </a> </div> </div> </div>').show();
               tr.addClass('shown');
          }
     });


});