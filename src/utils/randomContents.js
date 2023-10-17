const randomResponses = {
  "mcq_questions": [
    {
      "title": "Major innovations of Ancient Greece",
      "stimulus": "Which among the following was a significant contribution by the Ancient Greeks?",
      "options": [
        {
          "label": "They designed the first computer.",
          "value": false,
          "feedback": "Incorrect. The concept of computers, as we know today, did not exist in Ancient Greece."
        },
        {
          "label": "They developed the Corinthian style of architecture.",
          "value": true,
          "feedback": "Correct. The Corinthian order is one of the three principal classical orders of ancient Greek and Roman architecture."
        },
        {
          "label": "They invented the printing press.",
          "value": false,
          "feedback": "Incorrect. The printing press was invented in the Middle Ages, much later than Ancient Greece, by Johannes Gutenberg."
        },
        {
          "label": "They discovered America.",
          "value": false,
          "feedback": "Incorrect. The Ancient Greeks did not discover America; Christopher Columbus is often credited with this discovery in the late 15th century."
        }
      ]
    },
    {
      "title": "The creation of Mickey Mouse",
      "stimulus": "Which of the following statements regarding the character of Mickey Mouse is accurate?",
      "options": [
        {
          "label": "Mickey Mouse was first created by Pixar.",
          "value": false,
          "feedback": "Incorrect. Mickey Mouse was not created by Pixar. He is a character of The Walt Disney Company."
        },
        {
          "label": "Mickey Mouse's original name was Oswald the Lucky Rabbit.",
          "value": false,
          "feedback": "Incorrect. Although Oswald the Lucky Rabbit was indeed produced by Walt Disney before developing Mickey Mouse, Oswald and Mickey are separate characters."
        },
        {
          "label": "Mickey Mouse was created by Walt Disney and Ub Iwerks.",
          "value": true,
          "feedback": "Correct! Walt Disney and Ub Iwerks co-created Mickey Mouse at the Walt Disney Studios in 1928."
        },
        {
          "label": "Mickey Mouse was originally a live-action character.",
          "value": false,
          "feedback": "Incorrect. Mickey Mouse was not originally a live-action character. He debuted in an animated short called 'Steamboat Willie.'"
        }
      ]
    }
  ],
  "true_false_questions": [
    {
      "title": "Recalling key historical periods of France",
      "stimulus": "The French Revolution occurred in the 19th century. Is this statement True or False?",
      "options": [
        {
          "label": "True",
          "value": false,
          "feedback": "This statement is incorrect. The French Revolution actually took place in the late 18th century, specifically from 1789 to 1799."
        },
        {
          "label": "False",
          "value": true,
          "feedback": "Correct! The French Revolution occurred in the late 18th century, not the 19th century."
        }
      ]
    },
    {
      "title": "Understanding significant historical events in India",
      "stimulus": "The Indian independence movement began in 1857. Is the statement true or false?",
      "options": [
        {
          "label": "True",
          "value": false,
          "feedback": "This is not correct. Although the Sepoy Mutiny or First War of Independence took place in 1857, it was not the start of an organized independence movement. The Indian National Congress, the main body leading the struggle for independence, was only established in 1885."
        },
        {
          "label": "False",
          "value": true,
          "feedback": "Good job! The organized Indian independence movement, generally led by the Indian National Congress, didn't begin until 1885. Although there was a significant uprising in 1857 known as the Sepoy Mutiny or First War of Independence, this cannot be considered the start of the Indian independence movement."
        }
      ]
    }
  ],
  "cloze_association_questions": [
    {
      "title": "Understanding Ancient Rome Geography",
      "stimulus": "Here is the fact about Ancient Rome, Complete the sentence by placing the correct words in the blanks.",
      "template": "Ancient Rome was located on the {{response}} peninsula, and it had access to the large body of water, the {{response}}.",
      "correct_response": [
        "Italian",
        "Mediterranean Sea"
      ],
      "options": [
        "Italian",
        "Mediterranean Sea"
      ]
    },
    {
      "title": "Understanding Ancient Egypt",
      "stimulus": "Fill in the blanks with the correct answers to complete the facts about Ancient Egypt.",
      "template": "Ancient Egypt was known for its unique {{response}}, and it was ruled by {{response}}.",
      "correct_response": [
        "Hieroglyphics",
        "Pharaohs"
      ],
      "options": [
        "Hieroglyphics",
        "Pharaohs"
      ]
    }
  ]
}

const dataForTranslation = {
  "response": {
    "widgetJson": {
      "options": [
        {
          "label": "<span lang=\"es\" dir=\"ltr\">[Elección A]</span>",
          "value": "0"
        },
        {
          "label": "<span lang=\"es\" dir=\"ltr\">[Elección B]</span>",
          "value": "1"
        },
        {
          "label": "<span lang=\"es\" dir=\"ltr\">[Elección C]</span>",
          "value": "2"
        },
        {
          "label": "<span lang=\"es\" dir=\"ltr\">[Elección D]</span>",
          "value": "3"
        }
      ],
          "stimulus": "<span lang=\"es\" dir=\"ltr\">la pregunta prueba A es la respuesta correcta</span>",
          "type": "mcq",
          "validation": {
        "scoring_type": "exactMatch",
            "valid_response": {
          "score": 1,
              "value": [
            "0"
          ]
        }
      },
      "ui_style": {
        "type": "horizontal"
      }
    },
    "widgetType": "response",
        "widgetMetadata": {
      "name": "Multiple choice – standard",
          "template_reference": "9e8149bd-e4d8-4dd6-a751-1a113a4b9163"
    }
  },
  "feature": {
    "widgetJson": {
      "type": "sharedpassage",
          "heading": "<span lang=\"es\" dir=\"ltr\">Encabezado</span>",
          "content": "[Ingrese el contenido del pasaje aquí.]"
    },
    "widgetType": "feature",
        "widgetMetadata": {
      "name": "Passage",
          "template_reference": "d5d43bd6-d02a-4969-a79a-e10b344549a8"
    }
  }
}

const getRandomContents = (contentType = 'mcq_questions') => {
  let questions = randomResponses[contentType];

  if (!questions) {
      questions = randomResponses.mcq_questions;
  }
  const randomIndex = Math.floor(Math.random() * questions.length);

  return JSON.stringify(questions[randomIndex]);
}

const getTranslation = (prompt) => {
  const startOfArray = prompt.indexOf('[');
  const widgetsToTranslate = JSON.parse(prompt.slice(startOfArray));
  let itemDefinition;

  for (let i = 0; i < widgetsToTranslate.length; i++) {
    itemDefinition = widgetsToTranslate[i];

    if (itemDefinition.definition) {
      break;
    }
  }
  if (!itemDefinition) {
    return '';
  }
  const widgets = itemDefinition.item.widgets;
  const translatedData = [];

  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i];
    const widgetType = widget.widget_type;
    const target = {reference: widget.reference};

    Object.assign(target, dataForTranslation[widgetType]);
    translatedData.push(target);
  }
  translatedData.push(itemDefinition);
  return JSON.stringify(translatedData);
}

module.exports = {
  getRandomContents: getRandomContents,
  getTranslation: getTranslation
};
