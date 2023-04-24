const mongoose = require('mongoose');

const Schema = require('./models/question.js');


mongoose.connect('mongodb://localhost:27017/chatbotDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async() => {
    console.log('Connected to MongoDB');
    const question1 = new Schema({
        question: 'Vers quelle formation souhaitez-vous vous diriger ?',
        reponse: ['GACO','GCCD','MMI', 'PEC', 'SGM', 'Ne sait pas']
    })
    const question1a = new Schema({
      question: 'Parmi ces 5 domaines, lequel préférez-vous : ',
      reponse: ['Ingénierie matériaux','Packaging innovation','Multimédia internet', 'Génie civil', 'Gestion commerce ']
    })

    await question1.save()
    console.log('save');
  })
  .catch((error) => console.log(error.message));
