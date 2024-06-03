describe('URLTools', function() {
	describe('Browser pages', function() {
		it.skip('should support firefox signin', function() {
			var transformedDomain = URLTools.nakedDomainForURL("about:accounts");
			transformedDomain.should.equal("firefox.com")
		});
	});

	var domainEquivalencies = [
		,{ test: "https://socialwallet.bbva.com", expectation: "wizzo.es" }
		,{ test: "https://createsend.com", expectation: "campaignmonitor.com" }
		,{ test: "https://icloud.com", expectation: "apple.com"}
		,{ test: "https://me.com", expectation: "apple.com"}	
		,{ test: "https://myapp.herokuapp.com", expectation: "myapp.herokuapp.com"}	
		,{ test: "https://createsend.com", expectation: "campaignmonitor.com" },
		,{ test: "https://tdcanadatrust.com", expectation: "td.com" },
		,{ test: "https://dropbox.com", expectation: "dropbox.com" },
		,{ test: "https://getdropbox.com", expectation: "dropbox.com" },
		,{ test: "https://citi.com", expectation: "citi.com" },
		,{ test: "https://citibank.com", expectation: "citi.com" },
		,{ test: "https://citicards.com", expectation: "citi.com" },
		,{ test: "https://microsoft.com", expectation: "microsoft.com" },
		,{ test: "https://live.com", expectation: "microsoft.com" },
		,{ test: "https://passport.com",expectation: "microsoft.com" },
		,{ test: "https://msn.com",expectation: "microsoft.com" },
		,{ test: "https://hotmail.com",expectation: "microsoft.com" },
		,{ test: "https://outlook.com",expectation: "microsoft.com" },
		,{ test: "https://37signals.com", expectation: "37signals.com" },
		,{ test: "https://basecamphq.com", expectation: "37signals.com" },
		,{ test: "https://backpackit.com", expectation: "37signals.com" },
		,{ test: "https://campfirenow.com", expectation: "37signals.com" },
		,{ test: "https://highrisehq.com", expectation: "37signals.com" },
		,{ test: "https://agile.ws", expectation: "agilebits.com" },
		,{ test: "https://agilewebsolutions.com", expectation: "agilebits.com" },
		,{ test: "https://nelnet.com", expectation: "nelnet.net" },
		,{ test: "https://apple.com", expectation: "apple.com" },
		,{ test: "https://icloud.com", expectation: "apple.com" },
		,{ test: "https://me.com", expectation: "apple.com" },
		,{ test: "https://squarespace.com", expectation: "squarespace.com" },
		,{ test: "https://sqsp.com", expectation: "squarespace.com" },
		,{ test: "https://ingdirect.com", expectation: "capitalone360.com" },
		,{ test: "https://stackexchange.com", expectation: "stackoverflow.com" },
		,{ test: "https://stackoverflow.com", expectation: "stackoverflow.com" },
		,{ test: "https://serverfault.com", expectation: "stackoverflow.com" },
		,{ test: "https://superuser.com", expectation: "stackoverflow.com" },
		,{ test: "https://gravatar.com", expectation: "wordpress.com" },
		,{ test: "https://medcohealth.com", expectation: "express-scripts.com" },
		,{ test: "https://ebay.com", expectation: "ebay.com" },
		,{ test: "https://ebay.co.uk", expectation: "ebay.com" },
		,{ test: "https://ebay.de", expectation: "ebay.com" },
		,{ test: "https://ebay.ca", expectation: "ebay.com" },
		,{ test: "https://ebay.fr", expectation: "ebay.com" },
		,{ test: "https://ebay.com.au", expectation: "ebay.com" },
		,{ test: "https://ebay.es", expectation: "ebay.com" },
		,{ test: "https://ebay.at", expectation: "ebay.com" },
		,{ test: "https://ebay.be", expectation: "ebay.com" },
		,{ test: "https://ebay.com.cn", expectation: "ebay.com" },
		,{ test: "https://ebay.com.hk", expectation: "ebay.com" },
		,{ test: "https://ebay.in", expectation: "ebay.com" },
		,{ test: "https://ebay.ie", expectation: "ebay.com" },
		,{ test: "https://ebay.it", expectation: "ebay.com" },
		,{ test: "https://ebay.co.jp", expectation: "ebay.com" },
		,{ test: "https://ebay.com.my", expectation: "ebay.com" },
		,{ test: "https://ebay.nl", expectation: "ebay.com" },
		,{ test: "https://ebay.ph", expectation: "ebay.com" },
		,{ test: "https://ebay.pl", expectation: "ebay.com" },
		,{ test: "https://ebay.com.sg", expectation: "ebay.com" },
		,{ test: "https://ebay.ch", expectation: "ebay.com" },
		,{ test: "https://ebay.co.th", expectation: "ebay.com" },
		,{ test: "https://ebay.vn", expectation: "ebay.com" },
		,{ test: "https://global.gmarket.co.kr", expectation: "ebay.com" },
		,{ test: "https://tradera.com", expectation: "ebay.com" },
		,{ test: "https://ruten.com.tw", expectation: "ebay.com" },
		,{ test: "https://gittigidiyor.com", expectation: "ebay.com" },
		,{ test: "https://amazon.com", expectation: "amazon.com" }
		,{ test: "https://amazon.co.uk", expectation: "amazon.com" }
		,{ test: "https://amazon.de", expectation: "amazon.com" }
		,{ test: "https://amazon.ca", expectation: "amazon.com" }
		,{ test: "https://amazon.com.au", expectation: "amazon.com" }
		,{ test: "https://amazon.com.br", expectation: "amazon.com" }
		,{ test: "https://amazon.cn", expectation: "amazon.com" }
		,{ test: "https://amazon.fr", expectation: "amazon.com" }
		,{ test: "https://amazon.in", expectation: "amazon.com" }
		,{ test: "https://amazon.it", expectation: "amazon.com" }
		,{ test: "https://amazon.co.jp", expectation: "amazon.com" }
		,{ test: "https://amazon.com.mx", expectation: "amazon.com" }
		,{ test: "https://amazon.nl", expectation: "amazon.com" }
		,{ test: "https://amazon.es", expectation: "amazon.com" }
		,{ test: "https://www.airbnb.com/login?redirect_params[action]=auth&redirect_params[client_id]=4o45r8yvl90b41up01vzd3f9b&redirect_params[controller]=oauth2&redirect_params[redirect_uri]=https%3A%2F%2Fcommunity.withairbnb.com%2Fauth%2Foauth2callback&redirect_params[response_type]=code&redirect_params[scope]=community_read+community_write&redirect_params[state]=eDnVLZ5txuzVIjVvF4vMo9Azx62oIgkesJPNixn0AnO331gFf3oUKO3Gf7Wx1IbqFYaRaMoq4wOzauiXgRnMxQh8G1hy1zryExv5Xjr5P29bbSCj4y2S4UjdCjI4zbKXmkO6SqIE%2B3c2A5wM1nbpe0JsTt8Y9mqDR7OnMvY0SBTnR6joY%2Bpd2%2BSqE0NCMp4C0KxBGxotzJXkqy626j%2BpHHjTAB0TzdrGuUhRstfNocyJ0M0KteKADXJ3XhMSSef5rfdPNOZt2Xw5ehlVtaFddQ%3D%3D", expectation: "airbnb.com"}

	];
	describe('Naked domain extraction', function() {
		describe('base', function() { 
			domainEquivalencies.forEach(function(t) {
				it('transforms ' + t.test + ' into ' + t.expectation, function() {
					var nakedDomain = OnePassword.URLTools.nakedDomainForURL(t.test);
					nakedDomain.should.equal(t.expectation);
				});
			});
		});
		describe('1Password additions', function() {
			["com", "ca", "eu"].forEach(function(tld) {
				it('has a special suffix rule for 1password.' + tld, function() {
					var nakedDomain = OnePassword.URLTools.nakedDomainForURL("https://lol.bbq.agilebits.1password." + tld);
					nakedDomain.should.equal("agilebits.1password." + tld);
				});
			});
		});
	});

	describe('URL processing', function() {
	});

	describe('Phishing protection', function() {
		it('guards against data: uri', function() {
			var host = OnePassword.URLTools.extractHostFromURL('data:text/html,https://accounts.google.com/ServiceLogin?service=mail');
			should.not.exist(host);	
		});
	});
});
