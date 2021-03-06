/**
 * 1pass4all's mobile version(no installation)
 *
 * Copyright (c) 2012, Hui Zheng
 * License: MIT License <http://www.opensource.org/licenses/mit-license.php>
 */

var onePassForAll_mobile = {
    WRAPPER_ID: "onePassForAllWrapper",

    /** Main function */
    main: function() {
        passCreator.isMobile = true;
        this._wrapper = document.getElementById(this.WRAPPER_ID);
        this._panel = passCreator.createPasswordPanel(this._wrapper, this.settings);
    },

    settings: {
        panelCss: "margin: 0px auto; width: 100%;" +
            "padding: 2px 0px; background-color: transparent;",
        labelCss: "float: left; text-align: left; margin-left: 6px;" +
            "padding: 2px 8px;" +
            "font: bold 1em arial,verdana,sans-serif",
        fldCss: "overflow: hidden;",
        inputCss: "width: 100%; border: none;" +
            "margin: 3px 2px; padding: 2px",
        selectCss: "margin: 3px 2px; padding: 2px",
        buttonCss: "background: #FFF; color: #000; font-weight: bold;font-size: 1.1em;" +
            "margin-top: 4px; padding: 3px 0; border: 1px solid silver;" +
            "-moz-border-radius: 5px; -webkit-border-radius: 5px;" +
            "border-radius: 5px; -khtml-border-radius: 5px",
        inputRegionStyle: {border: "1px solid silver",
            '-moz-border-radius': "10px", '-webkit-border-radius': "10px",
            'border-radius': "10px", '-khtml-border-radius': "10px",
            'background-color': "#FFF"},
        fldSepStyle: {'border-bottom': "1px solid silver"},
        advancedDivStyle: {width: "100%"},
        cmdDivStyle: {width: "100%", margin: "2px auto"},
        genBtnStyle: {width: "100%"},
        clearBtnStyle: {display: "none"},
        msgDivStyle: {width: "100%", 'text-align': "center", 
            font: "normal 10pt arial", display: "none"},
        msgFldStyle: {color: "red", background: "transparent", border: "none", 'text-align': "center"},
        resultDivStyle: {width: "100%", 'text-align': "center", 
            font: "normal 10pt arial", display: "none"},
        resultFldStyle: {color: "green", background: "transparent", border: "none", 'text-align': "center"}
    }
};

if (window.test && debug) {
    log("in unit test");
} else {
    onePassForAll_mobile.main();
}
