/**
 * Confirm Entity
 */
const Entity = girequire('src/Entity/entity');

module.exports = class ConfirmEntity extends Entity {

	setup() {
		this.data = {
			'yes': {
				synonyms:['yeah','yep','yup','aye','sure','indeed','true','ok','ya','yaa']
			},
			'no': {
				synonyms:['nope','cancel','maybe','negative','nah','false']
			}
		};
	}

	parse(string) {
		var result = this.find(string);
		return result;
	}

}

