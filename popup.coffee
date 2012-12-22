alert "Coffee"
$jq = $.get "http://www.tvblog.ro",(response) ->
  $headlines = $("#content h2 a",response)
  for value in $headlines
    $value = $(value)
    $(document).find("body").append($("<p><a target='_blank' href='" + $value.attr("href") + "'>" + $value.html() + "</a></p>"))
$jq.error (jqXHR, textStatus, errorThrown) ->
  alert("There was an error...sorry!")
