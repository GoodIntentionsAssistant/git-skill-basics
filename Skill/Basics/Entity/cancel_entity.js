/**
 * Cancel Entity
 */
const Entity = girequire('src/Entity/entity');

module.exports = class CancelEntity extends Entity {

	setup() {
		this.import = {
			file: "App.Basics.Data.cancel",
			type: "json"
		};
	}

}

