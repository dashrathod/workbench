$(document).ready(function () {
    let init = 0;
    /* Formatting function for row details - modify as you need */
    function format(d) {
        // `d` is the original data object for the row
        return `
        <h5>Order Details</h5>

        <div class='row'>

            <div class='col-xl-3'>

                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">DPID Number :</span> </p>
                    <p class="small text-break"><span class="small text-break">Sales System : </span> </p>
                    <p class="small text-break"><span class="small text-break">POD Date : </span> </p>
                    <p class="small text-break"><span class="small text-break">Delivery Request Date : </span> </p>
                </div>

            </div>

            <div class='col-xl-3'>

                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Internet Receipt Number (IRN) : </span> </p>
                    <p class="small text-break"><span class="small text-break">Date of Sending to Invoice : </span> </p>
                    <p class="small text-break"><span class="small text-break">Order Holds Status : Fraud</span> </p>
                    <p class="small text-break"><span class="small text-break">Customer e-mail address / purchaser :</span> </p>
                </div>

            </div>

            <div class='col-xl-3'>

                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Order type : </span> </p>
                    <p class="small text-break"><span class="small text-break">Freight / other Charges :</span> </p>
                    <p class="small text-break"><span class="text-break">Product Description/Brent Description/Domain SKU : </span> </p>
                    <p class="small text-break"><span class="small text-break">Source of Order :</span> </p>
                </div>

            </div>

        </div>
            `;
    }

    function formatInvoice(d) {
        // `d` is the original data object for the row
        return `
        <h5>Invoice Details</h5>

        <div class='row'>
        
            <div class='dtl_div'>
        
                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Transaction Source Type : BRM, Credit, Rebill </span> </p>
                    <p class="small text-break"><span class="small text-break">Invoice Delivery Method : Post, Email </span> </p>
                    <p class="small text-break"><span class="small text-break">Base Product: Hardware, Software, Licence</span> </p>
                    <p class="small text-break"><span class="small text-break">Transaction Payment Terms : </span> </p>
                    <p class="small text-break"><span class="small text-break">Legal Entity:</span> </p>
                </div>
        
            </div>
        
            <div class='dtl_div'>
        
                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Sales Rep : </span> </p>
                    <p class="small text-break"><span class="small text-break">End User Contact Information : </span> </p>
                    <p class="small text-break"><span class="small text-break">End user name :</span> </p>
                    <p class="small text-break"><span class="small text-break">End user Number :</span> </p>
                </div>
        
            </div>
        
            <div class='dtl_div'>
        
                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Bill To Location</span> </p>
                    <p class="small text-break"><span class="small text-break">Postfach 51 01 53,<br>Hannover, 30631,Germany <br>(Hannover-BILL_TO-101811577)</span> </p>
        
                </div>
        
            </div>
        
        
            <div class='dtl_div'>
        
                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Bill To Site No</span> </p>
                    <p class="small text-break"><span class="small text-break">Postfach 51 01 53,<br> Hannover, 30631, <br>Germany (Hannover-BILL_TO-101811577)</span> </p>
        
                </div>
        
            </div>
        
        
            <div class='dtl_div'>
        
                <div clas='order_details_show'>
                    <p class="small text-break"><span class="small text-break">Unpaid Reason Code : </span> </p>
                    <label>Last Transaction Level Notes</label><br> <input type="text"><br>
                </div>
        
            </div>
        
        </div>
            `;
    }

    var table = $('#orderTable').DataTable({
        //for responsive
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: -1
        }, {
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],

        //for select
        select: {
            style: 'os',
            selector: 'td:first-child'
        },

        order: [[1, 'asc']],
        searching: false,
        lengthChange: false,
    });

    table.on('user-select', function (e, dt, type, cell, originalEvent) {
        if ($(originalEvent.target).index() === 0) {
            // e.preventDefault();
        }
    });

    // Add event listener for opening and closing details
    // $('#orderTable tbody td:not(:first):not(.control)').click(function () {
    $('#orderTable tbody td:not(.control)').click(function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    $('.nav-tabs a[href="#Invoice"]').on('shown.bs.tab', function (event) {
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab

        if (init === 0) {
            let invoiceTable = $('#invoiceTable').DataTable({
                //for responsive
                responsive: {
                    details: {
                        type: 'column',
                        target: -1
                    }
                },
                columnDefs: [{
                    className: 'control',
                    orderable: false,
                    targets: -1
                }, {
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                }],

                //for select
                select: {
                    style: 'os',
                    selector: 'td:first-child'
                },

                order: [[1, 'asc']],
                searching: false,
                lengthChange: false,
            });

            invoiceTable.on('user-select', function (e, dt, type, cell, originalEvent) {
                if ($(originalEvent.target).index() === 0) {
                    // e.preventDefault();
                }
            });

            // Add event listener for opening and closing details
            // $('#invoiceTable tbody td:not(:first):not(.control)').click(function () {
            $('#invoiceTable tbody td:not(.control)').click(function () {
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
            });

            init = 1;
        };
    });
});
