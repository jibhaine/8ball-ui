/**
 * Created by Piotr Walczyszyn (@pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:20 AM
 */

require.config({
    paths:{
        // RequireJS plugin
        text:'libs/require/text',
        // RequireJS plugin
        domReady:'libs/require/domReady',
        // underscore library
        underscore:'libs/underscore',
        // Backbone.js library
        Backbone:'libs/backbone',
        // jQuery
        jquery:'libs/jquery-1.8.2',
        //hammer
        hammer:'libs/hammer',
        "jquery-hammer":'libs/jquery.hammer',
        //D3
        traer:'libs/traer'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        }/*,
        "backbone-d3":{
            deps:['Backbone', 'd3']
        }   */
    }
});

require(['domReady', 'views/home/HomeView','traer'],
    function (domReady, HomeView) {

        // domReady is RequireJS plugin that triggers when DOM is ready
        domReady(function () {

            function onDeviceReady(desktop) {
                // Hiding splash screen when app is loaded
                if (desktop !== true)
                    cordova.exec(null, null, 'SplashScreen', 'hide', []);

                // Setting jQM pageContainer to #container div, this solves some jQM flickers & jumps
                // I covered it here: http://outof.me/fixing-flickers-jumps-of-jquery-mobile-transitions-in-phonegap-apps/
                //$.mobile.pageContainer = $('#container');

                // Setting default transition to slide
               // $.mobile.defaultPageTransition = 'slide';

                // Pushing MainView
                //$.mobile.jqmNavigator.pushView(new HomeView());
            }

            if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
                // This is running on a device so waiting for deviceready event
                document.addEventListener('deviceready', onDeviceReady, false);
            } else {
                // On desktop don't have to wait for anything
                onDeviceReady(true);
            }

        });

    });