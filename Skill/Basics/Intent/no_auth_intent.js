/**
 * No Auth Intent
 */
const Intent = girequire('src/Intent/intent');

module.exports = class NoAuthIntent extends Intent {

	setup() {
	}

	response () {
		var output = [
			"You need to be logged in to do that command"
		];
		return output;
	}

}
