exports.seed = knex =>
  knex('cards').del()
    .then(() => {
      return knex('cards').insert([
        {questions: 'Which ES6 syntax is useful to unpack values from an array or object', answers: 'Destructuring'},
        {questions: 'What s the difference between angular JS and angular', answers: 'angular is based on typescript'},
        {questions: 'Who wrote javascript in ten days', answers: 'Brendan Eich'},
        {questions: 'Which company created couchDB', answers: 'Apache'},
        {questions: 'Who has a computer programming language named after her/him?', answers: 'Ada Lovelace'},
        {questions: "Who deciphered the German's code in World War II?", answers: 'Alan Turing'},
        {questions: 'Which library can we use to make snake case, camel case, kebab case? ', answers: 'Lodash'},
        {questions: 'This ES6 syntax is not compatible with Internet Explorer', answers: 'Array.from and Arary.fill'}
      ])
    })
