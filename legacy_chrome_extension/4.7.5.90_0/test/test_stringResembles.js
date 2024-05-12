let autosaveMapping = [
	[ "…Change       password…", SAVE_TITLES, LOGIN_RED_HERRING_TITLES ]
	,[ "    …Change       password   …", SAVE_TITLES, LOGIN_RED_HERRING_TITLES ]
	,[ "    …  Please    SAVE       cHanGes   …", SAVE_TITLES, LOGIN_RED_HERRING_TITLES ]
]
describe('stringResembles', function() {
	describe('autosave', function() { 
		autosaveMapping.forEach(function(t) {
			console.log('Creating mapping for ' + JSON.stringify(t));
			it('"' + t[0] + '" resembles SAVE_TITLES and not LOGIN_RED_HERRING_TITLES', function() {
				stringResembles(t[0], t[1], t[2]).should.be.true();
			});
		});
	});
});
