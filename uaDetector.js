/*!
 * uaDetector
 *
 * @author      Van Zheng (zgbjili2009@126.com)
 * @copyright   Copyright (c) Van Zheng.
 * @license     This uaDetector is licensed under the MIT licenses.
 * @version     Version 0.8.0
 *
 */

(function(root) {
    var ua = window.navigator.userAgent.toLowerCase(),
    	matches,
    	version = '0',
    	device = 'unknown',
    	os = 'unknown',
    	uaDetector;

    // Browser info
    // Opera ua contains `chrome`, `safari` keywords
    if (ua.indexOf('opera') > -1 || ua.indexOf('opr') > -1) { 
    	browser = 'opera';

    	matches = /(opera|opr)\/([\d\.]+)/.exec(ua);
    	version = matches ? matches[2] : '0';
    }
    // Chrome ua contains `chrome`, `safari` keywords
    else if (ua.indexOf('chrome') > -1) { 
    	browser = 'chrome';

    	matches = /chrome\/([\d\.]+)/.exec(ua);
    	version = matches ? matches[1] : '0';
    }
    else if (ua.indexOf('safari') > -1) {
    	browser = 'safari';

    	matches = /version\/([\d\.]+)/.exec(ua);
    	version = matches ? matches[1] : '0';
    }
    else if (ua.indexOf('firefox') > -1) {
    	browser = 'firefox';

    	matches = /firefox\/([\d\.]+)/.exec(ua);
    	version = matches ? matches[1] : '0';
    }
    else if (ua.indexOf('msie') > -1 || ua.indexOf('trident') > -1) {
    	browser = 'msie';

    	matches = /(msie|rv:?)\s?([\d\.]+)/.exec(ua);
        version = matches ? matches[2] : '0';
    }

    // platform info
    if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1) {
        device = 'mobile';
        os = 'ios';
    } else if (ua.indexOf('android') > -1) {
        device = 'mobile';
        os = 'android';
    } else if (ua.indexOf('windows phone') > -1) {
        device = 'mobile';
        os = 'windows';
    } else if (ua.indexOf('blackberry') > -1) {
        device = 'mobile';
        os = 'blackberry';
    } else if (ua.indexOf('symbian') > -1) {
        device = 'mobile';
        os = 'symbian';
    } else if (ua.indexOf('windows') > -1) {
        device = 'desktop';
        os = 'windows';
    } else if (ua.indexOf('macintosh') > -1) {
        device = 'macintosh';
        os = 'macintosh';
    } else if (ua.indexOf('linux') > -1) {
        device = 'desktop';
        os = 'linux';
    }

    // Rendering engine
    if (ua.indexOf('webkit') > -1) {
        engine = 'webkit';
    } else  if (ua.indexOf('trident') > -1) {
        engine = 'trident';
    } else if (ua.indexOf('presto') > -1) {
        engine = 'presto';
    } else if (ua.indexOf('khtml') > -1) {
        engine = 'khtml';
    } else if (ua.indexOf('gecko') > -1) {
        engine = 'gecko';
    } else {
        engine = 'unknown';
    }

	uaDetector = {
		browser: browser,
		version: version,
		device: device,
		os: os,
		engine: engine
	}    

	root.uaDetector = uaDetector;
})(window);
