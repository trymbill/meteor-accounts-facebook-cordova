Package.describe({
    name: "particle4dev:cordova-fb",
    version: "0.11.0",
    summary: "Login service for Facebook accounts (works with cordova)",
    git: "https://github.com/particle4dev/meteor-accounts-facebook-cordova.git"
});

var both = ['client', 'server'];
var client = 'client';
var server = 'server';
var browser = 'web.browser';
var cordova = 'web.cordova';

Cordova.depends({
    'com.phonegap.plugins.facebookconnect': '0.11.0'
});

Package.on_use(function(api) {
    api.versionsFrom("1.0");
    api.use([
        'accounts-base',
        'accounts-oauth',
        'facebook',
        'service-configuration'
    ], both);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', both);
    api.use(['http', 'underscore'], server);

    api.add_files('facebook_server.js', server);
    api.add_files('facebook.js', 'web');
});
