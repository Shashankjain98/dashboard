// function status(curr){
//   if("Delivered" == curr){
//     curr.innerHTML = curr.style.color = "#00539b";
//   }
//   else if("Out for Delivery" == curr){
//     curr.innerHTML = curr.style.color = "#00ad5f";
//   }
//   else if("Un Delivered" == curr){
//     curr.innerHTML = curr.style.color = "#fa4251";
//   }
// }

function status_code(Data){
  var a = 0;var b=0;var c=0;var d=0;var e=0;
  for (i=0;i<10; i++){
    code = Data.data[i].current_status_code
    if ("DEL" == code ){
      document.getElementById('del').innerHTML = a++
    }
    else if ("INT" == code){
      document.getElementById('int').innerHTML = b++
    }
    else if ("OOD" == code){
      document.getElementById('ood').innerHTML = c++
    }
    else if ("DEX" == code){
      document.getElementById('dex').innerHTML = d++
    }
    else if ("UND" == code){
      document.getElementById('nfi').innerHTML = e++
    }
}
}

function some(Data){
  var tab = document.getElementById('table')
  for (i=0;i<10; i++){
    var row = tab.insertRow(i)
    var awb = row.insertCell(0).innerHTML = Data.data[i].awbno;
    var trans = row.insertCell(1).innerHTML = Data.data[i].carrier;
    var sur = row.insertCell(2).innerHTML = Data.data[i].from;
    var des = row.insertCell(3).innerHTML = Data.data[i].to;
    var brand = row.insertCell(4).innerHTML = Data.data[i]._id;
    var startd = row.insertCell(5).innerHTML = Data.data[i].pickup_date;
    var etd = row.insertCell(6).innerHTML = Data.data[i].extra_fields.expected_delivery_date;
    var stat = row.insertCell(7).innerHTML = Data.data[i].current_status;
    row.id = i;
    // status(stat);
  }
}


// adding table elements to side of the page which shows shipping details
function side(Data,val){
  var tab_stat = document.getElementById('del_stats');
  var row = tab_stat.insertRow(0);
  var fs = row.insertCell(0).innerHTML = Data.data[val].scan[0].location +"\n"+ Data.data[val].scan[0].time;
  var ro = tab_stat.insertRow(1).innerHTML = ".";
  var row = tab_stat.insertRow(2);
  var fs1 = row.insertCell(0).innerHTML = Data.data[val].scan[1].location +"\n"+ Data.data[val].scan[1].time;
  var ro = tab_stat.insertRow(3).innerHTML = ".";
  var row = tab_stat.insertRow(4);
  var fs1 = row.insertCell(0).innerHTML = Data.data[val].scan[2].location +"\n"+ Data.data[val].scan[2].time;
  var ro = tab_stat.insertRow(5).innerHTML = ".";
  var row = tab_stat.insertRow(6);
  var fs1 = row.insertCell(0).innerHTML = Data.data[val].scan[3].location +"\n"+ Data.data[val].scan[3].time;
  var ro = tab_stat.insertRow(7).innerHTML = ".";
  var row = tab_stat.insertRow(8);
  var fs1 = row.insertCell(0).innerHTML = Data.data[val].scan[4].location +"\n"+ Data.data[val].scan[4].time;
  var ro = tab_stat.insertRow(9).innerHTML = ".";
  var row = tab_stat.insertRow(10);
  var fs1 = row.insertCell(0).innerHTML = Data.data[val].scan[5].location +"\n"+ Data.data[val].scan[5].time;
}


function clik(Data,i){
// program will run by converting the input to string
// now the program works fine for a single click on 3nd row
// for(i=0;i<10;i++){
    var add = "#2";
    $(add).on("click", function () {
        side(Data,i)
    })
}

// to get data from online API
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/dhanush",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer tTU3gFVUdP",
    "cache-control": "no-cache",
    "postman-token": "d9be130b-f619-1160-e733-6dd6a5a2437f"
  },
  "processData": false,
  "data": "{\n\t\"email\":\"dhanushjain190@gmail.com\"\n}"
}
$.ajax(settings).done(function (response) {
  var Data = response
  some(Data)
  side(Data,0)
  clik(Data)
  status_code(Data)
});


(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
    // Right Sidebar
    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');

    sidebar_btn.on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
      right_sidebar.toggleClass("show-sidebar");
    });

    $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      right_sidebar.removeClass("show-sidebar");

    });


  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }


  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
