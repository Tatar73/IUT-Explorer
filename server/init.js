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
    const question2 = new Schema({
      question: 'Souhaitez vous avoir des informations sur les études aménagées ?',
      reponse: ['Musique','Art','Sport', 'A distance', 'SGM', 'Non je ne suis pas intéressé(e)']
    })
    const question3 = new Schema({
      question: 'Voulez vous vous renseignez sur  :',
      reponse: ["Années à l’étranger (Erasmus)",'Activités sportives sur le campus','Associations dans le campus ', 'Aucune de ces 2 réponses']
    })
    const question4 = new Schema({
      question: 'Je voudrais:',
      reponse: ["partir en Erasmus à l’étranger ",'faire du sport ',"m’engager auprès d’une association", 'aucune de ces 3 réponses']
    })

    await question1.save()
    await question2.save()
    await question3.save()
    await question4.save()
    console.log('save');
  })
  .catch((error) => console.log(error.message));
