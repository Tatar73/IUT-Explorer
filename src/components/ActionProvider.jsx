import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleAbout = () => {
    const botMessage = createChatBotMessage(
      'Je suis Evan Chauffour et actuellement je suis en deuxième année de BUT Métier du Multimédia et de l\'internet sur Chambéry',
      {
        widget: "options",
      }
      );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSkills = () => {
    const botMessage = createChatBotMessage(
      'J\'ai pu au cours de mes différents projets scolaires ou personnels acquérir de bonne connaissance en HTML, CSS, JS, wordpress, PHP et plus récemment React grâce à ce portfolio. Mes projets scolaires mon également appris la gestion de projets et le travail en équipe.',
      {
        widget: "options",
      }
      );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHobbies = () => {
    const botMessage = createChatBotMessage(
      'Je suis passionné de sport et plus précisément de basket, de cinéma et surtout de développement web.',
      {
        widget: "options",
      }
      );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFind = () => {
    const botMessage = createChatBotMessage('ça va super car actuellement vous prenez le temps de regarder mon portfolio');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleAbout,
            handleSkills,
            handleHobbies,
            handleFind,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;