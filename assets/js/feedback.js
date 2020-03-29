$('#feedback').hide();
$(document).ready(function () {
     swal({
          title: "Do You Have A Moment?",
          text: "We are continuously improving our application. We believe improvement often comes out of a number of small, incremental steps and your Feedback is very important for us to improving our applications.",
          buttons:
          {
               cancel: {
                    text: "No, Maybe Later",
                    value: null,
                    visible: true,
                    className: "btn btn-outline-primary",
                    closeModal: false,
               },
               confirm: {
                    text: "YES, I Have",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
               }
          }
          ,
     }).then((value) => {
          if (value) {
               $('#feedback').show();
          } else {

          }
     });

     $('#feedbackForm').submit(function (e) {
          e.preventDefault();
          $('#feedback').hide();
          swal({
               title: "Thank you for time we value for your feedback.",
               text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
               icon: "success",
               button: {
                    text: "Close",
                    className: "btn btn-primary",
               },
          });
     })

     $("input[type='radio']").click(function () {
          // var radioValue = $("input[name='gender']:checked").val();
          var radioValue = $(this).val();
          var comment = $(this).attr('id').split('-').shift();
          $('.' + comment + '_comment').remove();
          if (radioValue) {
               $(this).parent().siblings().removeClass('active');
               // $('label.star:not(.active)').css('font-size', '36px');
               $(this).parent().siblings().css('font-size', '36px');
               $(this).parent().addClass('active');
               $(this).parent().css('font-size', '50px');
               $(this).parent().siblings().css('opacity', '0.5');
               $(this).parent().css('opacity', '1');
               if (radioValue < 4) {
                    $('.' + comment).append('<div class="form-group text-left ' + comment + '_comment"> <textarea class="form-control" placeholder="Write your comments"></textarea><div class="char_number small">Count : 0</div></div>');
               } else {
                    $('.' + comment + '_comment').remove();
               }
          }
     });

     //for counter of text area
     $("body").on('keyup', 'textarea', function () {
          var charsno = $(this).val().length;
          $(this).siblings('.char_number').html("Count : " + charsno);
     });
});
