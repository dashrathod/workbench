$(document).ready(function () {
    // let invoiceTable = $("#datatable").DataTable();
    $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
    $("#datatable tr").click(function (e) {
        $(this).next('tr').toggle();
    });


    $("td").each(function () {
        $(this).addClass("text-break");
        $(this).children().addClass("text-break");
    });

    /* 
        function formatInvoice(d) {
            // `d` is the original data object for the row
            return `
            <h5>Invoice Details</h5>
            <hr>
            <div class='row'>
            
                <div class='dtl_div col-md-3'>
            
                    <div clas='order_details_show'>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Transaction Source Type : BRM, Credit, Rebill </span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Invoice Delivery Method : Post, Email </span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Base Product: Hardware, Software, Licence</span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Transaction Payment Terms : </span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Legal Entity:</span> </p>
                    </div>
            
                </div>
            
                <div class='dtl_div col-md-2'>
            
                    <div clas='order_details_show'>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Sales Rep : </span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">End User Contact Information : </span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">End user name :</span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">End user Number :</span> </p>
                    </div>
            
                </div>
            
                <div class='dtl_div col-md-2'>
            
                    <div clas='order_details_show'>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Bill To Location</span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Postfach 51 01 53,<br>Hannover, 30631,Germany <br>(Hannover-BILL_TO-101811577)</span> </p>
            
                    </div>
            
                </div>
            
            
                <div class='dtl_div col-md-2'>
            
                    <div clas='order_details_show'>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Bill To Site No</span> </p>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Postfach 51 01 53,<br> Hannover, 30631, <br>Germany (Hannover-BILL_TO-101811577)</span> </p>
            
                    </div>
            
                </div>
            
            
                <div class='dtl_div col-md-2'>
            
                    <div clas='order_details_show'>
                        <p class="small font-weight-bolder text-break"><span class="small font-weight-bolder text-break">Unpaid Reason Code : </span> </p>
                        <label>Last Transaction Level Notes</label><br> <input type="text"><br>
                    </div>
            
                </div>
            
            </div>
                `;
        }
    
    
        $('#datatable tbody td:not(:first-child)').click(function () {
            let tr = $(this).closest('tr');
            let row = invoiceTable.row(tr);
    
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