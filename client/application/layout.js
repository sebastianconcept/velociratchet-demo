Template.layout.events({
    'click': function(){
        Velociratchet.transition = null;
    },
    'click .icon-right-nav': function(){
        Session.set('previousPage', Router.current().route.getName() );
        Velociratchet.transition = 'right-to-left';
    },
    'click .navigate-right': function(){
        Session.set('previousPage', Router.current().route.getName() );
        Velociratchet.transition = 'right-to-left';
    },
    'click .icon-left-nav': function(){
        Session.set('previousPage', Router.current().route.getName() );
        Velociratchet.transition = 'left-to-right';
    },
    'click .navigate-left': function(){
        Session.set('previousPage', Router.current().route.getName() );
        Velociratchet.transition = 'left-to-right';
    }

});

Template.layout.helpers({
    transition: function() {
        return function(from, to, element) {
            return Velociratchet.transition || 'fade';
        }
    }
});
