
(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        var $pcircle = $('.circle');
        var $pbar = $('.bar');
        $pcircle.each(function(i) {
        var circle = new ProgressBar.Circle(this, {
            color: 'rgba(255,255,255,0.9)',
            trailColor: 'rgba(255,255,255,0.1)',
            strokeWidth: 2,
            trailWidth: 2,
            duration: 2000,
            easing: 'easeInOut'
        });
        var cvalue = ($(this).attr('data-value') / 100);
        $pcircle.waypoint(function() {
            circle.animate(cvalue);
            }, {
            offset: "100%"
            })
        });
        $pbar.each(function(i) {
        var bar = new ProgressBar.Line(this, {
            color: 'rgba(30,30,30,0.7)',
            trailColor: 'rgba(30,30,30,0.1)',
            strokeWidth: 2,
            trailWidth: 2,
            duration: 3000,
            easing: 'easeInOut',
            text: {
                style: {
                    color: '#808080',
                    position: 'absolute',
                    right: '0',
                    top: '-30px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: function(state, bar, attachment) {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        var bvalue = ($(this).attr('data-value') / 100);
        $pbar.waypoint(function() {
            bar.animate(bvalue);
        },   {
                offset: "100%"
            })
        });
        

        
        
    });
}(jQuery));	
