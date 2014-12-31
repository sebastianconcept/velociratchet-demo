/**
 * Router options
 */
Router.configure({
    layoutTemplate: 'layout'
});

/**
 * Route for:
 * Home
 */
Router.route(
    '/',
    {
        name: 'home'
    }
);

/**
 * Route for:
 * Page 1
 */
Router.route(
    '/page1',
    {
        name: 'page1'
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
 * Profile
 */
Router.route(
    '/profile',
    {
        name: 'profile'
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
