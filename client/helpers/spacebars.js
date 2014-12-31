UI.registerHelper( 'getPreviousPage', function(){
    return Session.get( 'previousPage' );
});
UI.registerHelper('isActive', function( args ) {
    return args.hash.menu === args.hash.active ? 'active' : '';
});
UI.registerHelper('getCurrentRoute', function(  ) {
    return Router.current().route.getName();
});