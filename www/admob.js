
module.exports = {

	setUp: function(adUnit, adUnitFullScreen, isOverlap, isTest) {
        cordova.exec(
            function (result) {
			}, 
			function (error) {
			},
            'AdsIndy',
            'setUp',			
            [adUnit, adUnitFullScreen, isOverlap, isTest]
        ); 
    },
	preloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onBannerAdPreloaded") {
					if (self.onBannerAdPreloaded)
						self.onBannerAdPreloaded();
				}
				else if (result == "onBannerAdLoaded") {
					if (self.onBannerAdLoaded)
						self.onBannerAdLoaded();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'preloadBannerAd',
            []
        ); 
    },
	reloadBannerAd: function() {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onBannerAdPreloaded") {
					if (self.onBannerAdPreloaded)
						self.onBannerAdPreloaded();
				}
				else if (result == "onBannerAdLoaded") {
					if (self.onBannerAdLoaded)
						self.onBannerAdLoaded();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'reloadBannerAd',
            []
        ); 
    },
    showBannerAd: function(position, size) {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onBannerAdPreloaded") {
					if (self.onBannerAdPreloaded)
						self.onBannerAdPreloaded();
				}
				else if (result == "onBannerAdLoaded") {
					if (self.onBannerAdLoaded)
						self.onBannerAdLoaded();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'showBannerAd',
            [position, size]
        ); 
    },
    hideBannerAd: function() {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onBannerAdPreloaded") {
					if (self.onBannerAdPreloaded)
						self.onBannerAdPreloaded();
				}
				else if (result == "onBannerAdLoaded") {
					if (self.onBannerAdLoaded)
						self.onBannerAdLoaded();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'hideBannerAd',
            []
        ); 
    },
	//
	preloadFullScreenAd: function() {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onFullScreenAdPreloaded") {
					if (self.onFullScreenAdPreloaded)
						self.onFullScreenAdPreloaded();
				}
				else if (result == "onFullScreenAdLoaded") {
					if (self.onFullScreenAdLoaded)
						self.onFullScreenAdLoaded();
				}
				else if (result == "onFullScreenAdShown") {
					if (self.onFullScreenAdShown)
						self.onFullScreenAdShown();
				}
				else if (result == "onFullScreenAdHidden") {
					 if (self.onFullScreenAdClosed)
						self.onFullScreenAdClosed(); //deprecated
					 if (self.onFullScreenAdHidden)
						self.onFullScreenAdHidden();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'preloadFullScreenAd',
            []
        ); 
    },
	reloadFullScreenAd: function() {
		var self = this;	
        cordova.exec(
            function (result) {
				if (result == "onFullScreenAdPreloaded") {
					if (self.onFullScreenAdPreloaded)
						self.onFullScreenAdPreloaded();
				}
				else if (result == "onFullScreenAdLoaded") {
					if (self.onFullScreenAdLoaded)
						self.onFullScreenAdLoaded();
				}
				else if (result == "onFullScreenAdShown") {
					if (self.onFullScreenAdShown)
						self.onFullScreenAdShown();
				}
				else if (result == "onFullScreenAdHidden") {
					 if (self.onFullScreenAdClosed)
						self.onFullScreenAdClosed(); //deprecated
					 if (self.onFullScreenAdHidden)
						self.onFullScreenAdHidden();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'reloadFullScreenAd',
            []
        ); 
    },	
    showFullScreenAd: function() {
		var self = this;
		cordova.exec(
            function (result) {
				if (result == "onFullScreenAdPreloaded") {
					if (self.onFullScreenAdPreloaded)
						self.onFullScreenAdPreloaded();
				}
				else if (result == "onFullScreenAdLoaded") {
					if (self.onFullScreenAdLoaded)
						self.onFullScreenAdLoaded();
				}
				else if (result == "onFullScreenAdShown") {
					if (self.onFullScreenAdShown)
						self.onFullScreenAdShown();
				}
				else if (result == "onFullScreenAdHidden") {
					 if (self.onFullScreenAdClosed)
						self.onFullScreenAdClosed(); //deprecated
					 if (self.onFullScreenAdHidden)
						self.onFullScreenAdHidden();
				}
			},
            function (error) {
			},
            'AdsIndy',
            'showFullScreenAd',
            []
        ); 
    },
	onBannerAdPreloaded: null,
	onBannerAdLoaded: null,
	onFullScreenAdPreloaded: null,
	onFullScreenAdLoaded: null,
	onFullScreenAdShown: null,
	onFullScreenAdClosed: null, //deprecated
	onFullScreenAdHidden: null
};
