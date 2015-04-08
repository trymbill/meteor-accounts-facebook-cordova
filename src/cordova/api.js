// https://github.com/Wizcorp/phonegap-facebook-plugin#get-status
CFB.getLoginStatus = function (callback) {
    var onError = function (message) {
        callback(new Error(message.errorMessage), null);
    };
    var onSuccess = function (res) {
        callback(null, res);
    };
    facebookConnectPlugin.getLoginStatus(onSuccess, onError);
};

// https://github.com/Wizcorp/phonegap-facebook-plugin#login
CFB.loginCodova = function (callback) {
    var onError = function (message) {
        callback(new Error(message.errorMessage), null);
    };
    var onSuccess = function (res) {
        callback(null, res);
    };
    facebookConnectPlugin.login(CFB.getPermissions(), onSuccess, onError);
};
