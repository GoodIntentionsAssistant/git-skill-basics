/**
 * Date Entity
 */
const Entity = girequire('src/Entity/entity');
const chrono = girequire('chrono-node');

module.exports = class DateEntity extends Entity {

  setup() {
    this.import = {
      file: "App.Basics.Data.dates",
      type: "json"
    };
  }

	parse(string) {
		let original = null;
		let value = null;

    //Custom chrono
    let custom = new chrono.Chrono();

    //Refiners
    //let PreferFuture = this.refiner_prefer_next_week();
    //custom.refiners.push(PreferFuture);

		let parsed_date = custom.parse(string, new Date());

		if(parsed_date.length > 0) {
			original = parsed_date[0].text;
			value = parsed_date[0].start.date();
		}

		return {
			value: value,
			original: original,
      data: {
        chrono: parsed_date
      }
		}
	}

  refiner_prefer_next_week() {
    let PreferFuture = new chrono.Refiner();

    PreferFuture.refine = function(text, results) {
      results.forEach(function(result){
        if(!result.start.isCertain('day')){
          result.start.imply('day', result.start.impliedValues.day + 7)
        }
      })
      return results;
    }

    return PreferFuture;
  }

}
