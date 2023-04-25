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
      reponse: ['Ingénierie matériaux','Packaging innovation','Multimédia internet', 'Génie civil', 'Gestion commerce']
    })
    const question1b = new Schema({
      question: 'Quelle branche préférez-vous: ',
      reponse: ['Développement web','Graphisme','Communication', 'Audiovisuel']
    })
    const question1c = new Schema({
      question: 'Quelle branche préférez-vous : ',
      reponse: ['métiers du recyclage et de la valorisation des matériaux',"métiers de l'ingénierie des matériaux et des produits","métiers de la caractérisation et de l'expertise des matériaux et des produits"]
    })
    const question1d = new Schema({
      question: 'Quelle branche préférez-vous : ',
      reponse: ['éco-conception et industrialisation','éco-conception homologation supply chain']
    })
    const question1e = new Schema({
      question: 'Quelle branche préférez-vous : ',
      reponse: ['travaux bâtiment','travaux publics', 'réhabilitation et amélioration des performances environnementales des bâtiments', "bureaux d'études conception"]
    })
    const question1f = new Schema({
      question: 'Quelle branche préférez-vous : ',
      reponse: ['management responsable de projet et des organisations','management des fonctions supports', 'management commercial et marketing omnicanal', "management des activités culturelles, artistiques, sportives et de tourisme"]
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
    await question1a.save()
    await question1b.save()
    await question1c.save()
    await question1d.save()
    await question1e.save()
    await question1f.save()
    await question2.save()
    await question3.save()
    await question4.save()
    console.log('save');
  })
  .catch((error) => console.log(error.message));
