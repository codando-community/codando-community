document.addEventListener("DOMContentLoaded", function () {
  const optItens = document.getElementById("opt-itens");

  const questions = document.getElementById("questions-itens");
  const titleElement = questions.querySelector("h2");
  const videoContainer = questions.querySelector("#video-container");
  const textContent = questions.querySelector("#text-content");

  const btnGroup = [
    { topic: "Tutoriais ULIFE", label: "O que Significa IES?", dataIndex: 0},
    { topic: "Tutoriais ULIFE", label: "Como Acesso o Painel do Estudante",  dataIndex:1},
    { topic: "Tutoriais ULIFE", label: "Onde encontro o meu número de matrícula?",  dataIndex:2},
    { topic: "Tutoriais ULIFE", label: "Onde vejo as minhas matérias?",  dataIndex:3},
    { topic: "Tutoriais ULIFE", label: "Onde vejo o calendário de provas?",  dataIndex:4},
    { topic: "Tutoriais ULIFE", label: "Como funcionam as provas?",  dataIndex:5},
    { topic: "Tutoriais ULIFE", label: "Qual a diferença entre as modalidades EAD, Semi e Live?", dataIndex:6},
    { topic: "Tutoriais ULIFE", label: "O que é Extensão Universitária?", dataIndex:7},
    { topic: "Tutoriais ULIFE", label: "A Extensão é obrigatória?", dataIndex:8},
    { topic: "Tutoriais ULIFE", label: "Em que momento do curso deve-se realizar a Extensão?", dataIndex:9},
    { topic: "Tutoriais ULIFE", label: "Quais cursos de Extensão são oferecidos pela minha IES?", dataIndex:10},
    { topic: "Tutoriais ULIFE", label: "Se eu optar por um dos cursos oferecidos pela minha instituição, como funciona?", dataIndex:11},
    { topic: "Tutoriais ULIFE", label: "Fiz minha inscrição em um curso/projeto de Extensão e quero cancelar, é possível?", dataIndex:12},
    { topic: "Tutoriais ULIFE", label: "Qual a diferença entre as horas de Extensão e complementares?", dataIndex:13},
    { topic: "Tutoriais ULIFE", label: "Como faço para que as horas extras sejam contabilizadas?", dataIndex:14},
    { topic: "Tutoriais ULIFE", label: "Toda UC requer uma ação de Extensão (desenvolvida na A3, por exemplo)?", dataIndex:15},
    { topic: "Tutoriais ULIFE", label: "Como faço para retirar meu certificado de participação em curso ou projeto de Extensão?", dataIndex:16},
    { topic: "Tutoriais ULIFE", label: "Ações de voluntariado podem ser vistas como atividades de Extensão?", dataIndex:17},
    { topic: "Tutoriais ULIFE", label: "Quem posso contatar para questões gerais?", dataIndex:18},
];
  const dataSet = [
    {
      Title: "O que significa IES?",
      Media: null,
      Text: `O Grupo Ânima é uma organização educacional composta por 22 instituições de ensino superior — IES. São elas:
                <table>
                  <thead>
                    <tr>
                      <th>Instituições de Ensino Superior</th>
                      <th>Localização</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ages</td>
                      <td>BA e SE</td>
                    </tr>
                    <tr>
                      <td>EBRADI</td>
                      <td>SP</td>
                    </tr>
                    <tr>
                      <td>FADERGS</td>
                      <td>RS</td>
                    </tr>
                    <tr>
                      <td>FASEH</td>
                      <td>MG</td>
                    </tr>
                    <tr>
                      <td>FPB</td>
                      <td>PB</td>
                    </tr>
                    <tr>
                      <td>Gama Academy</td>
                      <td>SP</td>
                    </tr>
                    <tr>
                      <td>HSM</td>
                      <td>SP</td>
                    </tr>
                    <tr>
                      <td>IBMR</td>
                      <td>RJ</td>
                    </tr>
                    <tr>
                      <td>Inspirali</td>
                      <td>SP</td>
                    </tr>
                    <tr>
                      <td>Le Cordon Bleu</td>
                      <td>Paris</td>
                    </tr>
                    <tr>
                      <td>Milton Campos</td>
                      <td>MG</td>
                    </tr>
                    <tr>
                      <td>UAM</td>
                      <td>SP</td>
                    </tr>
                    <tr>
                      <td>UNA</td>
                      <td>GO e MG</td>
                    </tr>
                    <tr>
                      <td>UniBH</td>
                      <td>MG</td>
                    </tr>
                    <tr>
                      <td>UniCuritiba</td>
                      <td>PR</td>
                    </tr>
                    <tr>
                      <td>UNIFACS</td>
                      <td>BA</td>
                    </tr>
                    <tr>
                      <td>UNIFG</td>
                      <td>PE</td>
                    </tr>
                    <tr>
                      <td>UniRitter</td>
                      <td>RS</td>
                    </tr>
                    <tr>
                      <td>UniSociesc</td>
                      <td>SC</td>
                    </tr>
                    <tr>
                      <td>UniSul</td>
                      <td>SC</td>
                    </tr>
                    <tr>
                      <td>UnP</td>
                      <td>CE e RN</td>
                    </tr>
                    <tr>
                      <td>USJT</td>
                      <td>RJ e SP</td>
                    </tr>
                  </tbody>
                </table>
              `
    },
    {
      Title: "Como acesso o Painel do Estudante?",
      Media: null,
      Text: "O Portal da sua IES específica pode ser acessado pelo link com o formato https://estudantes**[sigla da IES]**ead.br. Por exemplo: https://estudantes**ages**.ead.br."
    },
    {
      Title: "Onde encontro o meu número de matrícula?",
      Media: "./images/numero_matricula.png",
      Text: `O número encontra-se no Painel do Estudante.<br>Outra opção é entrar em contato com a Central de Atendimento ao Estudante através do WhatsApp pelo número (11) 3298-7730. Após informar sua IES e seu CPF, será informado o seu RA (registro de aluno), sinônimo de matrícula.`
    },
    {
      Title: "Onde vejo as minhas matérias?",
      Media: ["./images/historico_escolar_1.png" , "./images/historico_escolar_2.png"],
      Text: "É possível conferir suas Unidades Curriculares através do Painel do Estudante, pelo caminho: Histórico Escolar > Visualizar."
    },
    {
      Title: "Onde vejo o calendário de provas?",
      Media: ["./images/uc_conteudo.png" , "./images/uc_calendario.png"],
      Text: "É possível conferir o calendário através do Ulife, pelo caminho: Conteúdo > Calendário e Critérios."
    },
    { Title: "Como funcionam as provas?",
      Media: null,
      Text: 
        `O processo de avaliação das Unidades Curriculares ocorre por meio de três avaliações durante o semestre letivo: A1, A2 e A3.

        A <strong>avaliação 1</strong> (A1) consistirá em uma avaliação dissertativa em que o aluno demonstrará competências por meio de expressão de linguagem, códigos e signos da área. Esta avaliação vale de 0 a 30 pontos.

        A <b>avaliação 2</b> (A2) será composta de questões de múltipla escolha com objetivo de fazer análises e estabelecer relações evidenciando as competências de leitura e interpretação. Esta avaliação vale de 0 a 30 pontos.

        A <b>avaliação 3</b> (A3) consistirá na avaliação das competências explicitadas no plano de ensino, que acompanhe o processo de ensino-aprendizagem ao longo do semestre e resulte no desenvolvimento de um produto final. Esta avaliação vale de 0 a 40 pontos.

        Na UC presencial, estará aprovado o aluno que obtiver, na soma das três avaliações, a nota mínima de 70 pontos e atingir, no mínimo 75% de frequência nas aulas presenciais. Nas UCs digitais, estará aprovado o aluno que obtiver, na soma das três avaliações, a nota mínima de 70 pontos.

        O aluno que não tenha atingido 70 pontos, necessários para aprovação, e que tenha obtido nota final a partir de 40 pontos e inferior a 70 pontos, desconsiderando a menor nota entre A1 e A2, e tiver no mínimo 75% de presença nas aulas da UC presencial, poderá realizar a **avaliação integrada** (AI) no início do semestre seguinte, que vale 30 pontos. A UC que estiver dentro desses critérios ficará com a situação “elegível para AI” até o período de sua realização.`
    },
    {
      Title: "Qual a diferença entre as modalidades EAD, Semi e Live?",
      Media: null,
      Text: `
        <b>EAD:</b> é a modalidade 100% online ou digital, como também é chamada, na qual os encontros presenciais não existem. Todo o conteúdo do curso fica disponível no ambiente virtual de aprendizagem para que o estudante acesse no momento em que for mais oportuno.

        <b>Semipresencial</b>: os estudantes precisam cumprir algumas disciplinas no modelo presencial. Para isso, eles comparecem ao polo de apoio para assistir às aulas e realizar atividades práticas. Assim essa modalidade mistura presencial e EAD.

        <b>Live</b>: também pertence à modalidade de ensino a distância. Ou seja, o estudante não precisa estar em sala de aula todos os dias para cumprir a grade curricular do curso, mas ele deve assistir às aulas. 

        A diferença está justamente na maneira como os encontros com os professores e os colegas de turma acontecem. Todos se reúnem em uma sala de aula virtual e interagem em tempo real, fazendo perguntas, trocando conhecimentos e outras dinâmicas que acontecem nos cursos presenciais.

        A graduação Live, portanto, é aquela em que o professor fala ao vivo para os estudantes, mas utilizando a tecnologia e a internet. As transmissões ocorrem em tempo real, 100% ao vivo, como em uma videoconferência, permitindo a participação de todos.

        A IES determina o cronograma para estabelecer o dia e o horário em que as aulas serão transmitidas. O estudante só precisa acessar o ambiente virtual de aprendizagem para entrar na sala online e acompanhar o professor.`
    },
    {
      Title: "O que são aulas síncronas e assíncronas?",
      Media: null,
      Text: 
        `A diferença está na maneira como os professores transmitem os conteúdos para os estudantes.

        As aulas síncronas são adotadas na modalidade Live. São em tempo real, permitindo a participação ao vivo dos estudantes para que possam conversar com o docente que está ministrando a disciplina.

        Já nas aulas assíncronas, os professores não estão em tempo real junto com a turma e, no caso do curso totalmente digital, cada estudante acessa a aula no momento em que desejar. Logo, não há sincronia na hora de conduzir os estudos.`
    },
    {
      Title: " O que é Extensão Universitária?",
      Media: null,
      Text: `
        É um conjunto de ações práticas realizadas no decorrer dos semestres, envolvendo a comunidade externa à instituição, com o objetivo de gerar impacto social.

        O aluno possui a opção de realizá-la no momento que desejar, desde que a carga horária total seja concluída até o término do curso de graduação no qual está matriculado. A Extensão pode ser realizada por meio de quatro modalidades:

        <b>Projetos e publicações</b>: são projetos de impacto social que possuem um plano de intervenção local para solucionar problemas reais na comunidade onde o aluno reside ou no entorno do polo de apoio presencial.

        <b>Cursos e oficinas</b>: tem como objetivo o desenvolvimento de habilidades técnicas, socioemocionais e atitudinais para formar profissionais comprometidos com uma atuação cidadã.

        <b>Prestação de serviços</b>: realização de assessoria e consultoria com foco no atendimento à sociedade por meio de ONGs ou institutos.

        <b>Participação em eventos</b>: participação em congressos, seminários, conferências, ciclo de debates, exposições, espetáculos, festivais e eventos esportivos <strong>promovidos por instituições de ensino superior credenciadas pelo MEC.
        `
    },
    {
      Title: "A Extensão é obrigatória?",
      Media: null,
      Text:
        `
        Sim, é obrigatória por lei. O Plano Nacional de Educação (2014–2024) determina que, no mínimo, 10% da carga horária total da graduação seja cursada por meio de atividades de Extensão Universitária.

        O aluno tem a liberdade de escolher uma ou mais modalidades de Extensão, desde que a soma das atividades integralize 10%.
        `
    },
    {
      Title: "Em que momento do curso deve-se realizar a Extensão?",
      Media: null,
      Text:
        `O aluno pode escolher o momento de realização durante o curso, mas tem **a obrigação de concluir a carga horária total para que possa receber o diploma de graduação**.

        Para cursos tecnólogos, em função da curta duração, é recomendada a realização da Extensão nos semestres iniciais.

        É importante que o aluno organize-se para a realização das atividades, de forma que não haja sobrecarga no final do curso.`
    },
    {
      Title: " Quais cursos de Extensão são oferecidos pela minha IES?",
      Media: null,
      Text: 
        `Neste segundo bloco do EAD 2024.1, foram disponibilizadas três opções:

        - <b>Cultura e raízes da violência contra a mulher no Brasil</b>
        - <b>Educação ambiental e caminhos para o bem-viver no mundo</b>
        - <b>Neurociência, aprendizagem e atenção plena</b>

        As inscrições ficaram abertas entre 30/04 e 06/05. No momento não há ofertas de cursos.
        `
    },
    {
      Title: " Se eu optar por um dos cursos oferecidos pela minha instituição, como funciona?",
      Media: null,
      Text:`- Cursos
        <b>Encontros com o professor</b>: cada curso de Extensão conta com três encontros ao vivo com o professor. As gravações serão disponibilizadas ao estudante caso não tenha disponibilidade para assistir ao vivo.
        
        - <b>Assistir ao vivo</b>: no dia e horário do evento, o(a) estudante deverá clicar na opção “Calendário” no menu principal do Ulife. O link da sala virtual estará disponível no box “Hoje”.
        - <b>Assistir à gravação</b>: o link estará disponível na aba “Conteúdo” do curso no Ulife.
        
        <b>Atividade Avaliativa de Mapeamento Local</b>: para aprovação, será solicitado o desenvolvimento de um relatório de pesquisa abordando o contexto do curso localmente, ou seja, em território compatível com o local de residência do(a) estudante ou do polo de apoio presencial. As instruções para construção do relatório serão fornecidas nos encontros com o professor. Por isso, é fundamental que o(a) estudante assista ao menos a gravação dos três encontros. O relatório deve ser realizado de maneira individual e será entregue por meio do Ulife. A produção do relatório será utilizada como comprovação de presença e para fins de avaliação. Para aprovação, é necessário desempenho maior ou igual a 70 pontos.
        
        <b>Carga horária e certificado</b>: a realização e aprovação no curso garantirá um certificado que contabiliza 60h de atividade de Extensão, sendo disponibilizado no final do semestre.
        

        - Eventos
            
            
            <b>Ambientação e mentorias</b>: realizadas por meio de encontros ao vivo com professores convidados, via plataforma Teams, são abordados temas diversos e possuem duração de 2h cada. Todos os encontros serão gravados e poderão ser acessados a qualquer momento.
            
            <b>Carga horária e certificado</b>: cada encontro de ambientação e mentoria terá integralização de 10h de atividade de Extensão. Para o(a) estudante ter direito ao certificado, é obrigatória a inscrição via plataforma Sympla.`
    },
    {
      Title: "Fiz minha inscrição em um curso/projeto de Extensão e quero cancelar, é possível?",
      Media: null,
      Text: `
        Sim. Caso o período de inscrições ainda esteja aberto, você poderá editar livremente as suas seleções de cursos/projetos, podendo excluir ou incluir cursos/projetos e até mesmo alterar a ordem de prioridade pelo próprio sistema de seleção, clicando em “Ver inscrições”. Nesse caso, as exclusões não são contabilizadas no limite máximo de cancelamentos permitido por semestre.

        Caso o período de inscrições já tenha encerrado, você pode solicitar o cancelamento de até 3 (três) atividades de extensão por semestre, via abertura de protocolo. Uma vez tendo obtido o cancelamento em três atividades (cursos e/ou projetos), novas solicitações não serão aceitas e permanecerá o status de reprovado caso você não compareça às aulas.`
    },
    {
      Title: "Qual a diferença entre as horas de Extensão e complementares?",
      Media: null,
      Text: `
        Para que seja reconhecida como atividade de Extensão, os estudantes deverão integrar a equipe que planeja e executa a ação de Extensão, que deve envolver a comunidade externa e cumprir um papel formativo; sendo obrigatória em todos os cursos, correspondendo a 10% da carga horária total.

        As atividades complementares, por sua vez, ainda que também desempenhem um papel formativo, permitem que o estudante participe na condição de ouvinte e em ações que não envolvam a comunidade externa, por exemplo como aluno em um curso de idiomas ou participante/ouvinte em seminários, Congressos e palestras. É preciso consultar a matriz de cada curso para verificar se há uma carga horária de atividades complementares prevista.`
    },
    {
      Title: "Como faço para que as horas extras sejam contabilizadas?",
      Media: null,
      Text: 
        `Para as horas complementares, o caminho é: *Painel do Estudante* > *Atividades Complementares* > *Cadastro*. Já para as horas de Extensão: *Painel do Estudante* > *Solicitações* > Categoria: *Acadêmica* > Subcategoria: *Pesquisa e Extensão* > Solicitação: *Cadastro de Comprovantes de Atividades de Extensão*.

        Para cada ação de Extensão (projeto, curso, prestação de serviço, entre outras) deve ser estabelecida a CH (carga horária) específica. Os professores proponentes dos projetos, por exemplo, indicam qual a CH total que seu plano de trabalho permite integralizar, podendo contabilizar 40h, 60h ou 80h. Cursos de Extensão devem ter de 8h a 20h de duração, conforme a proposta de cada curso. Ações pontuais devem prever a CH que será contabilizada como Extensão.

        As horas de Extensão provenientes das atividades da IES (projetos, cursos, ações pontuais, atividades vinculadas à A3) são lançadas automaticamente no sistema do aluno.`
    },
    {
      Title: " Toda UC requer uma ação de Extensão (desenvolvida na A3, por exemplo)?",
      Media: null,
      Text: `
        Não. A dupla de professores tem autonomia para decidir como será a A3, considerando as metas de compreensão e tópicos geradores a serem desenvolvidos durante o semestre para a Unidade Curricular que ministram.

        Contudo, caso tal projeto/atividade represente uma ação extensionista, poderá ser contabilizado como horas de extensão, desde que o professor proceda com o cadastro do relatório da atividade desenvolvida e das horas para cada aluno no sistema específico da Extensão. É importante que as horas de Extensão não coincidam com as horas já contabilizadas para as demais atividades da Unidade Curricular, evitando assim que uma mesma atividade seja considerada duas vezes para fins de integralização curricular.`
    },
    {
      Title: " Como faço para retirar meu certificado de participação em curso ou projeto de Extensão?",
      Media: "./images/comprovante_extensao.png",
      Text: 
        `Os certificados são emitidos de maneira automática em até 45 dias após o término do curso/projeto. Após esse período, o protocolo é gerado automaticamente e você pode baixar o certificado pelo caminho: *Painel do Estudante* > *Serviços* > *Solicitações* > *Emissão de Certificado de Curso/Projeto de Extensão* (já aparecerá como protocolo concluído).

        **Não é necessário abrir protocolo**; a única ação a fazer é baixar o certificado, uma vez emitido.`
    },
    {
      Title: "Ações de voluntariado podem ser vistas como atividades de Extensão?",
      Media: null,
      Text: 
        `Sim. Neste caso, o aluno deve solicitar uma declaração/certificado da referida ação na respectiva IES e protocolar via Painel do Estudante, contendo a informação da carga horária alocada e assinatura dos responsáveis.

        O caminho para protocolar o certificado é: <b>Painel do Estudante</b> > <b>Solicitações</b> > Categoria: <b>Acadêmica</b> > Subcategoria: <b>Pesquisa e Extensão</b> > Solicitação: <b>Cadastro de Comprovantes de Atividades de Extensão</b>.`
    },
    {
      Title: "Quem posso contatar para questões gerais?",
      Media: null,
      Text: 
        `Pode entrar em contato com a Central de Atendimento ao Estudante através do WhatsApp pelo número (11) 3298-7730.`
    }
  ];

  function updateQuestionsContent(index) {
    const data = dataSet[index];
    titleElement.textContent = data.Title;

    videoContainer.innerHTML = "";
    textContent.innerHTML = "";

    if (data.Media) {
      if (Array.isArray(data.Media)) {
        data.Media.forEach(item => {
          if (isYouTubeVideo(item)) {
            videoContainer.innerHTML += `
              <iframe width="560" height="315" src="${item}" frameborder="0" allowfullscreen></iframe>
            `;
          } else {
            videoContainer.innerHTML += `
              <img src="${item}" alt="Image">
            `;
          }
        });
      } else {
        if (isYouTubeVideo(data.Media)) {
          videoContainer.innerHTML = `
            <iframe width="560" height="315" src="${data.Media}" frameborder="0" allowfullscreen></iframe>
          `;
        } else {
          videoContainer.innerHTML = `
            <img src="${data.Media}" alt="Image">
          `;
        }
      }
      videoContainer.style.visibility = "visible";
    } else {
      videoContainer.style.visibility = "hidden";
    }

    textContent.innerHTML = data.Text;
  }

  function isYouTubeVideo(url) {
    return (
      url.includes("youtube.com/embed/") ||
      url.includes("youtu.be/") ||
      url.includes("youtube.com/watch?v=")
    );
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
    let groupWrapper = optItens.querySelector(".opt-button.m-3");
    if (!groupWrapper) {
      groupWrapper = document.createElement("div");
      groupWrapper.className = "opt-button m-3";
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

      var div1 = document.getElementById("opt-itens");
      var div2 = document.getElementById("questions");
      
      // Obtém os tamanhos de div1
      // var div1Width = window.getComputedStyle(div1).width;
      var div1Height = window.getComputedStyle(div1).height;
      
      // Define os tamanhos de div2 para serem iguais aos de div1
      // div2.style.width = div1Width;
      div2.style.height = div1Height;
      
      // Adiciona o evento de clique ao botão para chamar a função copySize
      document.getElementById("resizeButton").addEventListener("click", copySize);

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
