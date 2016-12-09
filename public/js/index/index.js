jQuery(document).ready(function($) {
  /* BEGIN SVG WEATHER ICON */
if (typeof Skycons !== 'undefined'){
var icons = new Skycons(
    {"color": "#fff"},
    {"resizeClear": true}
    ),
        list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
        ],
        i;

    for(i = list.length; i--; )
    icons.set(list[i], list[i]);
    icons.play();
};

});
