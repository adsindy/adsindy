
module.exports = {

	setUp: function(adUnit, adUnitFullScreen, isOverlap, isTest) {
        cordova.exec(
            function (result) {
			}, 
			function (error) {
			},
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
            'AdsIndyJava',
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
