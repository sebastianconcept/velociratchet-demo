/**
 * Router options
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

/**
 * Route for:
 * Home
 */
Router.route(
    '/',
    {
        name: 'home',
        fastRender: true
    }
);

/**
 * Route for:
 * Page 1
 */
Router.route(
    '/page1',
    {
        name: 'page1',
        fastRender: true
    }
);
/**
 * Route for:
 * Page 2
 */
Router.route(
    '/page2',
    {
        name: 'page2'
    }
);

/**
 * Route for:
 * Page 3
 */
Router.route(
    '/page3',
    {
        name: 'page3'
    }
);

/**
 * Route for:
 * Profile
 */
Router.route(
    '/profile',
    {
        name: 'profile',
        fastRender: true
    }
);

/**
 * Route for:
 * Settings
 */
Router.route(
    '/settings',
    {
        name: 'settings'
    }
);

/**
 * Route for:
 * Icons
 */
Router.route(
    '/icons',
    {
        name: 'icons'
    }
);

Router.onBeforeAction(function(){
    console.log(Velociratchet.history);
    this.next();
});
