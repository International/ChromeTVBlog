// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var $jq = $.get("http://www.tvblog.ro",function(response) {
  var $headlines = $("#content h2 a",response);
  $.each($headlines,function(index,value) {
    var $value = $(value);
    $(document).find("body").append($("<p><a target='_blank' href='" + $value.attr("href") + "'>" + $value.html() + "</a></p>"));
  });
});
$jq.error(function(jqXHR, textStatus, errorThrown) {
  alert("There was an error...sorry!");
});
