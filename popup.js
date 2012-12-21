// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var word_to_search = prompt("Enter word to search");
    word_to_search = encodeURIComponent(word_to_search);
var $jq = $.get(
    "http://api.flickr.com/services/rest/?" +
    "method=flickr.photos.search&" +
    "api_key=90485e931f687a9b9c2a66bf58a3861a&" +
    "text=" + word_to_search + "&" +
    "safe_search=1&" +  // 1 is "safe"
    "content_type=1&" +  // 1 is "photos only"
    "sort=relevance&" +  // another good one is "interestingness-desc"
    "per_page=20",
    function(data) {
      var $photos = $("photo",data); //.find("photo");
      $.each($photos, function(index, value) {
        console.log(value);
        var new_image = $("<image src=" + constructImageURL(value) +"></image>");
        $(document).find("body").append(new_image);
      });
    });
// See: http://www.flickr.com/services/api/misc.urls.html
function constructImageURL(photo) {
  return "http://farm" + photo.getAttribute("farm") +
    ".static.flickr.com/" + photo.getAttribute("server") +
    "/" + photo.getAttribute("id") +
    "_" + photo.getAttribute("secret") +
    "_s.jpg";
}
