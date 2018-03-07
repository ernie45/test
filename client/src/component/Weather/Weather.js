import React, {Component} from "react";
import "./Weather.css";

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
window.myWidgetParam.push({
    id: 11,
    cityid: "5391811",
    appid: "166a433c57516f51dfab1f7edaed8413",
    units: 'imperial',
    containerid: 'openweathermap-widget-11'
});  

(function() {
    var script = document.createElement('script');
    script.async = "async";
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);  
})();

export const Weather = props => (
    <div id="openweathermap-widget-11"></div>
)
