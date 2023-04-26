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
      reponse: ['Musique','Art','Sport', 'A distance', 'Non je ne suis pas intéressé(e)']
    })
    const question2M = new Schema({
      question: "L’IUT propose de réaliser la formation GACO ou SGM en études aménagées Musique. Pour la formation GACO, le cursus est disponible  à partir du 2ème cycle. Il est en partenariat avec le Conservatoire à Rayonnement Régional de Chambéry et l’Association pour la promotion et l’enseignement du jazz et des musiques actuelles en Savoie. Si vous souhaitez avoir plus d'informations sur ce cursus, allez dans l’aile GACO vous adresser à un étudiant.",
    })
    const question2A = new Schema({
      question: "L'IUT, en partenariat avec l’ENAII, vous propose des études aménagées Arts appliqués pour la formation SGM. Les inscriptions se font via Parcoursup et dépendent de l’IUT de Chambéry. Pour plus d’informations, vous pouvez vous dirigez vers l’aile SGM.",
    })
    const question2S = new Schema({
      question: "Deux formations proposent des études aménagées Sport, GACO et SGM. Les études aménagées sport c’est : Un emploi du temps hebdomadaire adapté à votre pratique sportive (4 après-midis par semaine). Une aide continue dans votre scolarité : prise de notes assurée lors de vos compétitions ou concerts Un responsable pédagogique dédié pour mener à bien votre double projet en contact avec votre coach sportif. Convention avec les clubs sportifs, structures d’entraînements. Équipements sportifs de l’université en accès privilégié.",
    })
    const question2D = new Schema({
      question: "Il est possible de réaliser la formation GACO à distance. Composée de 3 temps complémentaires : 3 semaines en présentiel à l’IUT par semestre Cours en ligne disponible 24h/24 sur la plateforme numérique Programme national Classe virtuelle 2 à 3 fois par semaine en live de 18h-20h Replay disponible Le coût pour cette formation est de 2100€ en formation initiale et de 6000€ en alternance (coût pris en charge par l’employeur). Vous souhaitez avoir plus d'informations sur ce cursus? Dirigez-vous vers l’aile GACO !",
    })
    const question3 = new Schema({
      question: 'Voulez vous vous renseignez sur  :',
      reponse: ["Années à l’étranger (Erasmus)",'Activités sportives sur le campus','Associations dans le campus ', 'Aucune de ces 2 réponses']
    })
    const question3GACO = new Schema({
      question: "Le B.U.T GACO offre la possibilité de réaliser une partie de sa formation (au moins un semestre) et son stage à l'international, grâce à une multitude d'universités partenaires dans des destinations privilégiées au Canada, Roumanie, Belgique, USA, etc.Pour plus d’information, je vous invite à vous rendre en aile GACO, ils vous en parleront !"
    })
    const question3MMI = new Schema({
      question: "Pour le moment, il n’y a aucune possibilité d’ERASMUS en cursus MMI mais vous avez la possibilité de faire votre stage à l’étranger. Pour plus d’information, je vous conseille d’aller rencontrer Maxime Bernier, responsable des relations internationales en MMI, il saura répondre à vos questions."
    })
    const question3SGM = new Schema({
      question: "Le B.U.T SGM offre la possibilité d'une poursuite d'étude à l'international, au sein de partenaires universitaires privilégiés au Canada, Ecosse, USA… Allez en SGM ! ",
    })
    const question3GCCD = new Schema({
      question: "Malheureusement cette formation ne propose pas de possibilité d’ERASMUS. Consulter les formations qui les proposent.",
    })
    const question3PEC = new Schema({
      question: "Vous avez la possibilité de passer un semestre ou une année dans une université partenaire à l'étranger. Pour plus d’informations, dirigez-vous vers l’aile PEC ! ",
    })
    const question3S = new Schema({
      question: "Sur le campus, vous trouverez un service de sport qui propose des activités sportives toute l’année. Les inscriptions s’ouvrent au début de chaque semestre. Les places sont limitées.",
    })
    const question3A = new Schema({
      question: "Les nombreuses associations étudiantes contribuent activement à l’animation de la vie étudiante sur le campus du bourget du Lac. Culturelles, sportives, citoyennes ou encore solidaires, il y en a pour tous les goûts !",
    })



    await question1.save()
    await question1a.save()
    await question1b.save()
    await question1c.save()
    await question1d.save()
    await question1e.save()
    await question1f.save()
    await question2.save()
    await question2M.save()
    await question2A.save()
    await question2S.save()
    await question2D.save()
    await question3.save()
    await question3MMI.save()
    await question3GACO.save()
    await question3PEC.save()
    await question3SGM.save()
    await question3GCCD.save()
    await question3S.save()
    await question3A.save()
    console.log('save');
  })
  .catch((error) => console.log(error.message));
