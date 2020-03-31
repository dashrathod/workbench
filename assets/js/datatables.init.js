$(document).ready(function () {
    $("#datatable tbody tr").click(function (e) {
        $(".collapse").collapse('toggle');
        $(this).next('tr').toggle('5000', 'linear');
    });

    $(".dropdown-menu").on('click', 'li a', function () {
        $(this).parents('ul').addClass("show");
    });

    $("td").each(function () {
        $(this).addClass("text-break");
        $(this).children().addClass("text-break");
    });

});