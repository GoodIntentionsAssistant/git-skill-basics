/**
 * Emotion Entity
 */	
const Entity = girequire('src/Entity/entity');

module.exports = class EmotionEntity extends Entity {

	setup() {
		this.import = {
			file: "App.Basics.Data.emotion",
			type: "json"
		};
	}

	parse(string) {
		var result = this.find(string);
		return result;
	}

}