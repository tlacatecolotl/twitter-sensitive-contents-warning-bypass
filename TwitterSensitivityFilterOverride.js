// ==UserScript==
// @name         Twitter Sensitivity Filter Override
// @namespace    https://github.com/tlacatecolotl
// @version      0.1
// @description  Remove the warning cover on sensitive-tweets to make them easier to read.
// @author       TECOLOTE
// @match       https://twitter.com/*
// @match       https://mobile.twitter.com/*
// @match       https://tweetdeck.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    function addCustomStyles() {
        var css = `
            .r-drfeu3 {
                display: none !important;
            }
            .r-yfv4eo {
                filter: none !important;
            }
        `;
        GM_addStyle(css);
    }
    window.onload = function() {
        addCustomStyles();
    };
})();
