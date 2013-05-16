
define(['jquery', '../../', 'Backbone', 'views/next/NextView', 'text!templates/HomeView.tpl'],
    function ($, _, Backbone, NextView, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({

            events:{
                'click #btnNextView':'btnNextView_clickHandler'
            },

            render:function () {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            btnNextView_clickHandler:function (event) {
                $.mobile.jqmNavigator.pushView(new NextView);
            }

        });
        return HomeView;
    });