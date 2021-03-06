/**
 * Cities
 */
const Entity = girequire('src/Entity/entity');

module.exports = class CityEntity extends Entity {

	setup() {
		this.data = {};
		this.import = {
			type: "custom"
		};
	}

	load_data(resolve, request) {
		let promise = this.app.Data.load('App.Basics.Data.cities', 'json');

		promise.then((json) => {

			for(let key in json.entries) {
				var synonyms = [];

				var name = json.entries[key].name;
				name = name.substr(name.indexOf('/')+1);
				name = name.replace('/',' ').replace('_',' ');

				synonyms.push(name);

				if(json.entries[key].synonyms) {
					for(var ss=0; ss<json.entries[key].synonyms.length; ss++) {
						synonyms.push(json.entries[key].synonyms[ss]);
					}
				}

				this.data[key] = {
					label:    		name,
					label_full:   json.entries[key].name,
					synonyms: 		synonyms,
					zone_key: 		key,
					zones: 				json.entries[key].zones,
					lat:  				json.entries[key].lat,
					long:  				json.entries[key].long
				};
			}

			resolve();
		});

	}


	parse(string) {
		let result = this.find(string, {
			use_key: false
		});

		//Set data
		if(result.value) {
			result.data = this.data[result.value];
		}

		return result;
	}

}

