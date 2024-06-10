document.addEventListener("DOMContentLoaded", function () {
  const optItens = document.getElementById("opt-itens");

  const questions = document.getElementById("questions");
  const titleElement = questions.querySelector("h3");
  const videoContainer = questions.querySelector("#video-container");
  const textContent = questions.querySelector("#text-content");

  const btnGroup = [
    {
      topic: "Perguntas Frequentes",
      label: "Atividades complementares",
      dataIndex: 0,
    },
    {
      topic: "Perguntas Frequentes",
      label: "Historico pelo ULIFE",
      dataIndex: 1,
    },
    {
      topic: "Perguntas Frequentes",
      label: "Calendário acadêmico",
      dataIndex: 2,
    },
    {
      topic: "Perguntas Frequentes",
      label: "Horas de extensão",
      dataIndex: 3,
    },
    { topic: "Ânima", label: "Ânima", dataIndex: 4 },
    { topic: "Tutoriais ULIFE", label: "Tutoriais ULIFE", dataIndex: 5 },
  ];

  const dataSet = [
    {
      Title: "Atividades Complementares",
      Video: "https://www.youtube.com/embed/2eeXj-ck9VA",
      Text: "Text 1",
    },
    {
      Title: "Historico pelo ULIFE",
      Video: "https://www.youtube.com/embed/z3fQpBmYAwY",
      Text: "Text 2",
    },
    {
      Title: "Calendário acadêmico",
      Video: "https://www.youtube.com/embed/z3fQpBmYAwY",
      Text: "Text 3",
    },
    {
      Title: "Horas de extensão",
      Video: "https://www.youtube.com/embed/z3fQpBmYAwY",
      Text: "Text 4",
    },
    {
      Title: "Ânima",
      Video: "https://www.youtube.com/embed/z3fQpBmYAwY",
      Text: "Text 5",
    },
    {
      Title: "Tutoriais ULIFE",
      Video: "https://www.youtube.com/embed/z3fQpBmYAwY",
      Text: "Text 6",
    },
  ];

  function updateQuestionsContent(index) {
    const data = dataSet[index];
    titleElement.textContent = data.Title;
    videoContainer.innerHTML = `<iframe src="${data.Video}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    textContent.textContent = data.Text;
  }

  function createButton(button) {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.addEventListener("click", () => {
      updateQuestionsContent(button.dataIndex);
    });
    return btn;
  }

  function createButtonGroup(topic, buttons) {
    let groupWrapper = optItens.querySelector(".opt-itens.m-3");
    if (!groupWrapper) {
      groupWrapper = document.createElement("div");
      groupWrapper.className = "opt-itens m-3";
      optItens.appendChild(groupWrapper);
    }

    const collapsible = document.createElement("button");
    collapsible.className = "collapsible button-faq";
    collapsible.textContent = `${topic}`;

    const content = document.createElement("div");
    content.className = "content";

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    buttons.forEach((button) => {
      const btn = createButton(button);
      btn.className = "button-faq";
      buttonGroup.appendChild(btn);
    });

    content.appendChild(buttonGroup);
    groupWrapper.appendChild(collapsible);
    groupWrapper.appendChild(content);

    collapsible.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  function groupButtons(btnGroup) {
    const groupedButtons = {};

    btnGroup.forEach((btn) => {
      if (!groupedButtons[btn.topic]) {
        groupedButtons[btn.topic] = [];
      }
      groupedButtons[btn.topic].push(btn);
    });

    return groupedButtons;
  }

  const groupedButtons = groupButtons(btnGroup);

  Object.keys(groupedButtons).forEach((topic) => {
    createButtonGroup(topic, groupedButtons[topic]);
  });
});
