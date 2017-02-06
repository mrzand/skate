//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    right cart toogle menu    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////                                     
//    header search    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#comboBox').bind('keydown keypress keyup change', function() {
    var search = this.value;
    var $thumbnail = $("#goods .thumbnail").hide();
    $thumbnail.filter(function() {
        return $(this).text().indexOf(search) >= 0;
    }).show();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//    all checked qty    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('.thumbnail').on('click', function() {
    function allQty() {
        return $('#alls').has("input[type=checkbox]:checked").length;
    }

    function addQty() {
        $('#all').text(allQty());
        $('#alls').text(doneQty());
    }

    function doneQty() {
        return allQty() + $('.thumbnail').has("input[type=checkbox]:checked").length;
    }

    addQty();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//    calculate sum cart chose item    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
    $("input[type=checkbox]").change(function() {
        recalculate();
    });

    function recalculate() {
        var sum = 0;
        $("input[type=checkbox]:checked").each(function() {
            sum += parseInt($(this).attr("value"));
        });
        $("#output").html(sum);
        $("#total").html(sum);
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////    
//    button reset(buy+sweetalert)    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#reset').click(function() {
    swal({
            title: "Are you sure?",
            text: "You wanna buy it?!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, buy it",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm) {
            if (isConfirm) {
                swal("Congratulation!", "Your have a good choise !");
                setTimeout(function() {
                    location.reload();
                }, 1000);
            } else { swal("Cancelled"); }
        });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//    button on top (left-bottom position)    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {
    $('a.bktop').click(function(e) {
        $('html, body').animate({ scrollTop: 0 }, '1000');
        e.preventDefault();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.bktop').fadeIn('2000');
        } else {
            $('.bktop').fadeOut('500');
        }
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//    reset cart item button    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#res').click(function() {
    location.reload();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//    disabled enter button    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) {
        return false; }
}

document.onkeypress = stopRKey;
