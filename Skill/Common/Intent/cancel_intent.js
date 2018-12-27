/**
 * Cancel Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class CancelIntent extends Intent {

	setup() {
		this.train(['@App.Common.Entity.Cancel',], {
			collection: 'cancel'
		});
	}
	
	response(request) {
		return 'No problems!';
	}

}

