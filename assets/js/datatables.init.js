$(document).ready(function () {
   var table = $("#datatable").DataTable({
      order: [[4, 'asc']],
      searching: false,
      lengthChange: false,
      // ordering: true,
      columnDefs: [{ orderable: false, targets: [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12] }]
   });

   $('#datatable tbody td:not(td:first-child)').click(function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
         // This row is already open - close it
         row.child.hide();
         tr.removeClass('shown');
      }
      else {
         // Open this row
         row.child('<div class="alert alert-info"> <h5>Order Details</h5> <div class="row"> <div class="col-xl-4 col-sm-6"> <div clas="order_details_show"> <p class="small text-break"><span class="small text-break">DPID Number :</span> </p> <p class="small text-break"><span class="small text-break">Sales System : </span> </p> <p class="small text-break"><span class="small text-break">POD Date : </span> </p> <p class="small text-break"><span class="small text-break">Delivery Request Date : </span> </p> </div> </div> <div class="col-xl-4 col-sm-6"> <div clas="order_details_show"> <p class="small text-break"><span class="small text-break">Internet Receipt Number (IRN) : </span> </p> <p class="small text-break"><span class="small text-break">Date of Sending to Invoice : </span> </p> <p class="small text-break"><span class="small text-break">Order Holds Status : Fraud</span> </p> <p class="small text-break"><span class="small text-break">Customer e-mail address / purchaser :</span> </p> </div> </div> <div class="col-xl-4 col-sm-6"> <div clas="order_details_show"> <p class="small text-break"><span class="small text-break">Order type : </span> </p> <p class="small text-break"><span class="small text-break">Freight / other Charges :</span> </p> <p class="small text-break"><span class="small text-break">Product Description/Brent Description/Domain SKU : </span> </p> <p class="small text-break"><span class="small text-break">Source of Order :</span> </p> </div> </div> </div> </div>').show();
         tr.addClass('shown');
      }
   });

   $("td").each(function () {
      $(this).addClass("text-break");
      $(this).children().addClass("text-break");
   });

});