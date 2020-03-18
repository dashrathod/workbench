$(document).ready(function () {
     /* let siteInfo = $("#siteInfo").DataTable({
          ordering: false,
          searching: false,
          lengthChange: false,
          bInfo : false
     }); */

     $("#siteInfo tr").click(function (e) {
          $(this).next('tr').toggle('5000');
     });

     $("td").each(function () {
          $(this).addClass("text-break");
          $(this).children().addClass("text-break");
     });

     /* function formatInvoice(d) {
          // `d` is the original data object for the row
          return `
         <table class="table" id="siteInfoExp" width="100%">
          <thead>
               <tr>
                    <th><input type="checkbox" onclick="checkAll(this)"></th>
                    <th>Contact Name</th>
                    <th>Contact Email</th>
                    <th>Contact Number</th>
                    <th>Business Purpose</th>
               </tr>
          </thead>
          <tbody>
               <tr>
                    <td><input type="checkbox" onclick="checkAll(this)"></td>
                    <td>Rakesh Kumar</td>
                    <td>Rakesh.kdjfsh@gdlk.com</td>
                    <td>+1 876 54673 876</td>
                    <td>-</td>
               </tr>
               <tr>
                    <td><input type="checkbox" onclick="checkAll(this)"></td>
                    <td>Rakesh Kumar</td>
                    <td>Rakesh.kdjfsh@gdlk.com</td>
                    <td>+1 876 54673 876</td>
                    <td>-</td>
               </tr>
          </tbody>
     </table>
     <div class="pagination">
         <div class="col-md-6 text-left">
             show <input type="text" class="pgnIpt" /> of 10
         </div>
         <div class="col-md-6 text-right">
             <a href="#">
                 <div class="float-right pgnBtn">Next
                     <i class="fa fa-angle-right pgnicn" aria-hidden="true"></i>
                 </div>
             </a>
             <a href="#"></a>
             <div class="float-right pgnBtn blurBtn">
                 <i class="fa fa-angle-left pgnicn" aria-hidden="true"></i>
                 Previous
             </div></a>
         </div>
     </div>
             `;
     }


     $('#siteInfo tbody td:not(:first-child)').click(function () {
          let tr = $(this).closest('tr');
          let row = siteInfo.row(tr);

          if (row.child.isShown()) {
               // This row is already open - close it
               row.child.hide();
               tr.removeClass('shown');
          }
          else {
               // Open this row
               row.child(formatInvoice(row.data())).show();
               tr.addClass('shown');
          }
     }); */
});