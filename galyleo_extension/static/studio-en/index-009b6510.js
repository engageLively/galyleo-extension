System.register([], (function (exports) {
  var __contextModule__ = typeof module !== 'undefined' ? module : arguments[1];
;
  return {
    execute: (function () {

      var __varRecorder__ = (lively.FreezerRuntime || lively.frozenModules).recorderFor("lively.user/index.js", __contextModule__);

      var __moduleMeta__ = {
        pathInPackage: function pathInPackage() {
          return "./index.js";
        },
        unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
          return function () {};
        },
        subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
          return function () {};
        },
        "package": function _package() {
          return {
            name: "lively.user",
            version: "2.0.0"
          };
        }
      };

      var currentUser = exports('currentUser', __varRecorder__["lively.user/index.js__define__"]("currentUser", "function", function () {
        var storedUserData = localStorage.getItem("gh_user_data");

        if (storedUserData) {
          return JSON.parse(storedUserData);
        } else return {
          login: "guest"
        };
      }, __moduleMeta__));

      __varRecorder__.currentUser = currentUser;

      var isUserLoggedIn = exports('isUserLoggedIn', __varRecorder__["lively.user/index.js__define__"]("isUserLoggedIn", "function", function () {
        return __varRecorder__.currentUser().login !== "guest";
      }, __moduleMeta__));

      __varRecorder__.isUserLoggedIn = isUserLoggedIn;

      var storeCurrentUser = exports('storeCurrentUser', __varRecorder__["lively.user/index.js__define__"]("storeCurrentUser", "function", function (userData) {
        localStorage.setItem("gh_user_data", JSON.stringify(userData));
      }, __moduleMeta__));

      __varRecorder__.storeCurrentUser = storeCurrentUser;

      var currentUserData = exports('currentUserData', __varRecorder__["lively.user/index.js__define__"]("currentUserData", "function", function () {
        return JSON.parse(localStorage.getItem("gh_user_data"));
      }, __moduleMeta__));

      __varRecorder__.currentUserData = currentUserData;

      var currentUsersOrganizations = exports('currentUsersOrganizations', __varRecorder__["lively.user/index.js__define__"]("currentUsersOrganizations", "function", function () {
        return JSON.parse(localStorage.getItem("gh_user_organizations"));
      }, __moduleMeta__));

      __varRecorder__.currentUsersOrganizations = currentUsersOrganizations;

      var storeCurrentUsersOrganizations = exports('storeCurrentUsersOrganizations', __varRecorder__["lively.user/index.js__define__"]("storeCurrentUsersOrganizations", "function", function (orgs) {
        localStorage.setItem("gh_user_organizations", JSON.stringify(orgs));
      }, __moduleMeta__));

      __varRecorder__.storeCurrentUsersOrganizations = storeCurrentUsersOrganizations;

      var currentUsername = exports('currentUsername', __varRecorder__["lively.user/index.js__define__"]("currentUsername", "function", function () {
        return __varRecorder__.currentUser().login;
      }, __moduleMeta__));

      __varRecorder__.currentUsername = currentUsername;

      var currentUserToken = exports('currentUserToken', __varRecorder__["lively.user/index.js__define__"]("currentUserToken", "function", function () {
        return localStorage.getItem("gh_access_token");
      }, __moduleMeta__));

      __varRecorder__.currentUserToken = currentUserToken;

      var storeCurrentUserToken = exports('storeCurrentUserToken', __varRecorder__["lively.user/index.js__define__"]("storeCurrentUserToken", "function", function (token) {
        localStorage.setItem("gh_access_token", token);
      }, __moduleMeta__));

      __varRecorder__.storeCurrentUserToken = storeCurrentUserToken;

      var clearUserData = exports('clearUserData', __varRecorder__["lively.user/index.js__define__"]("clearUserData", "function", function () {
        localStorage.removeItem("gh_user_data");
        localStorage.removeItem("gh_user_organizations");
      }, __moduleMeta__));

      __varRecorder__.clearUserData = clearUserData;

      var clearAllUserData = exports('clearAllUserData', __varRecorder__["lively.user/index.js__define__"]("clearAllUserData", "function", function () {
        __varRecorder__.clearUserData();

        localStorage.removeItem("gh_access_token");
      }, __moduleMeta__));

      __varRecorder__.clearAllUserData = clearAllUserData;
      __varRecorder__.currentUser = currentUser;
      __varRecorder__.isUserLoggedIn = isUserLoggedIn;
      __varRecorder__.storeCurrentUser = storeCurrentUser;
      __varRecorder__.currentUserData = currentUserData;
      __varRecorder__.currentUsersOrganizations = currentUsersOrganizations;
      __varRecorder__.storeCurrentUsersOrganizations = storeCurrentUsersOrganizations;
      __varRecorder__.currentUsername = currentUsername;
      __varRecorder__.currentUserToken = currentUserToken;
      __varRecorder__.storeCurrentUserToken = storeCurrentUserToken;
      __varRecorder__.clearUserData = clearUserData;
      __varRecorder__.clearAllUserData = clearAllUserData;

    })
  };
}));
