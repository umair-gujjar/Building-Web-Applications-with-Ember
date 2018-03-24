import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  description: validator('presence', true),
  amount: validator('number', {
    allowString: true,
    gt: 0
  })
});

export default DS.Model.extend(Validations, {
  description: DS.attr('string'),
  date: DS.attr('date'),
  amount: DS.attr('number', { defaultValue: 0 }),
  isExpense: DS.attr('boolean', { defaultValue: true }),
  category: DS.belongsTo('category')
});
