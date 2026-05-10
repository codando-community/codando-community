const faqData = [
    {
        question: "O que Significa IES? ",
        answer: 
             `IES significa <b>Instituição de Ensino Superior</b>.
                O Grupo Ânima é uma organização educacional composta por 22 instituições de ensino superior — IES. São elas:
            <table> 
                <tbody>
                    <tr>
                        <td>Instituição de Ensino Superior</td>
                        <td>Localização</td>
                    </tr>
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
            `,
        isHtml: true
    },

    {
        question: "Como acesso o Painel do Estudante? ",
        answer:
             `O Portal da sua IES específica pode ser acessado pelo link com o formato https://estudantes<b>[sigla da IES]</b>.ead.br. 
                Por exemplo: https://estudantes<b>ages</b>.ead.br.`,
        images: ["/img/faq/painel-estudante.png", "/img/faq/painel-estudante-ead.png"],
        isHtml: true
    },

    {
        question: "Onde encontro o meu número de matrícula? ",
        answer:
             `O número encontra-se no Painel do Estudante. <br> Outra opção é entrar em contato com a Central de Atendimento ao 
                    Estudante através do WhatsApp pelo número (11) 3298-7730. Após informar sua IES e seu CPF, será informado o seu RA (registro 
                    de aluno), sinônimo de matrícula.`,
        images: ["/img/faq/numero_matricula.png"],
        isHtml: true
    },

    {
        question: "Onde vejo as minhas matérias? ",
        answer: 
             `As matérias ou disciplinas no ecossistema ânima são conhecidas como Unidades Curriculares - UC's. É possível conferir suas Unidades 
             Curriculares através do Painel do Estudante, pelo caminho: <b>Histórico Escolar > Visualizar.</b>`,
        images: ["/img/faq/materias.png"],
        isHtml: true
    },

    { 
        question: "Onde vejo o cronograma de aula e calendário de provas?",
        answer: 
             `É possível conferir o calendário através do Ulife, pelo caminho: <b>Disciplinas > Atividades Avaliativas.</b><br> Na sua UC também aparece ao final
              e o calendário de encontros síncronos:`,
        images: ["/img/faq/uc_calendario.png",
                "/img/faq/calendario_final.png"],
        isHtml: true
    },

    {
        question: "Como funcionam as provas? ",
        answer: 
            `O processo de avaliação das Unidades Curriculares ocorre por meio de três avaliações durante o semestre letivo: <b>A1, A2 e A3</b>.
                <p> 
                <b>Avaliação 1 (A1)</b> consistirá em uma avaliação dissertativa em que o aluno demonstrará competências por meio de expressão de linguagem, códigos e signos da área. 
                Esta avaliação vale de 0 a 30 pontos. 
                <p>
                <b>Avaliação 2 (A2)</b> será composta de questões de múltipla escolha com objetivo de fazer análises e estabelecer relações 
                evidenciando as competências de leitura e interpretação. Esta avaliação vale de 0 a 30 pontos.
                <p>
                <b>Avaliação 3 (A3)</b> consistirá na avaliação das competências explicitadas 
                no plano de ensino, que acompanhe o processo de ensino-aprendizagem ao longo do semestre e resulte no desenvolvimento de um produto final. Esta avaliação vale de 0 a 40 pontos. 
                <p>
                Na UC presencial, estará aprovado o aluno que obtiver, na soma das três avaliações, a nota mínima de 70 pontos e atingir, no mínimo 75% de frequência nas aulas presenciais. 
                Nas UCs digitais, estará aprovado o aluno que obtiver, na soma das três avaliações, a nota mínima de 70 pontos. <br> O aluno que não tenha atingido 70 pontos, necessários para 
                aprovação, e que tenha obtido nota final a partir de 40 pontos e inferior a 70 pontos, desconsiderando a menor nota entre A1 e A2, e tiver no mínimo 75% de presença nas aulas 
                da UC presencial, poderá realizar a <b>Avaliação Integrada (AI)</b> no início do semestre seguinte, que vale 30 pontos. A UC que estiver dentro desses critérios ficará com a situação 
                “elegível para AI” até o período de sua realização. O aluno que não atingir os critérios para realização da AI, ou que não realizar a AI, ou que realizar a AI e não atingir a nota mínima 
                de 70 pontos, ficará com a situação “reprovado” na UC.`,
        images: ["/img/faq/avaliacao.png"],
        isHtml: true
    },

    {
        question: "Qual a diferença entre as modalidades EAD, Semi e Live? ",
        answer:  `                   
                <b>EAD:</b>
                é a modalidade 100% online ou digital, como também é chamada, na qual os encontros presenciais não existem. 
                Todo o conteúdo do curso fica disponível no ambiente virtual de aprendizagem para que o estudante acesse no momento em que for 
                mais oportuno.
                <p>  
                <b>Semipresencial</b>:
                os estudantes precisam cumprir algumas disciplinas no modelo presencial. 
                Para isso, eles comparecem ao polo de apoio para assistir às aulas e realizar atividades práticas. Assim essa modalidade mistura 
                presencial e EAD. 
                <p>
                <b>Live</b>: também pertence à modalidade de ensino a distância. Ou seja, o estudante não precisa estar em sala de
                aula todos os dias para cumprir a grade curricular do curso, mas ele deve assistir às aulas.
                <p> A diferença está justamente na maneira como os encontros com os professores e os colegas de turma acontecem. Todos se reúnem em uma sala de aula virtual e 
                interagem em tempo real, fazendo perguntas, trocando conhecimentos e outras dinâmicas que acontecem nos cursos presenciais.
                </p> 
                <p>
                A graduação Live, portanto, é aquela em que o professor fala ao vivo para os estudantes, mas utilizando a tecnologia e a internet. 
                As transmissões ocorrem em tempo real, 100% ao vivo, como em uma videoconferência, permitindo a participação de todos.
                </p> 
                A IES determina o cronograma para estabelecer o dia e o horário em que as aulas serão transmitidas. O estudante só precisa acessar o ambiente virtual de 
                aprendizagem para entrar na sala online e acompanhar o professor.
                `,
        isHtml: true
    },

    {
        question: "O que são aulas síncronas e assíncronas? ",
        answer: `A diferença está na maneira como os professores transmitem os conteúdos para os estudantes. 
                <p>
                As aulas síncronas são adotadas na modalidade Live. São em tempo real, permitindo a participação ao vivo dos estudantes para que possam conversar com o 
                docente que está ministrando a disciplina. 
                </p>
                Já nas aulas assíncronas, os professores não estão em tempo real junto com a turma e, no caso do curso totalmente digital, cada estudante acessa a aula no momento 
                em que desejar. Logo, não há sincronia na hora de conduzir os estudos.`,
        isHtml: true
    },

    {
        question: "O que é Extensão Universitária? ",
        answer: `É um conjunto de ações práticas realizadas no decorrer dos semestres, envolvendo a comunidade externa à instituição, com o objetivo de gerar impacto social. <br>
                O aluno possui a opção de realizá-la no momento que desejar, desde que a carga horária total seja concluída até o término do curso de graduação no qual está matriculado. 
                A Extensão pode ser realizada por meio de quatro modalidades: 
                <ul>
                    <li><b>Projetos e publicações:</b> são projetos de impacto social que possuem um plano de intervenção local para 
                    solucionar problemas reais na comunidade onde o aluno reside ou no entorno do polo de apoio presencial.</li> 

                    <p>
                    <li><b>Cursos e oficinas:</b> tem como objetivo o desenvolvimento de habilidades 
                    técnicas, socioemocionais e atitudinais para formar profissionais comprometidos com uma atuação cidadã.</li> 
                    </p>

                    <p>
                    <li><b>Prestação de serviços</b>: realização de assessoria e consultoria com foco 
                    no atendimento à sociedade por meio de ONGs ou institutos.</li> 
                    </p>

                    <li><b>Participação em eventos</b>: participação em congressos, seminários, conferências, ciclo de debates, exposições, 
                    espetáculos, festivais e eventos esportivos promovidos por instituições de ensino superior credenciadas pelo MEC.</li>
                </ul>`,
        isHtml: true
    },

    {
        question: "A Extensão é obrigatória? ",
        answer: `Sim, é obrigatória por lei. O Plano Nacional de Educação (2014-2024) determina que, no mínimo, 10% da carga horária total da graduação seja cursada por meio de atividades de 
                Extensão Universitária. <p>
                O aluno tem a liberdade de escolher uma ou mais modalidades de Extensão, desde que a soma das atividades integralize 10%.`,
        isHtml: true
    },

    {
        question: "Em que momento do curso deve-se realizar a Extensão? ",
        answer: `O aluno pode escolher o momento de realização durante o curso, mas tem <b>a obrigação de concluir a carga horária total para que possa receber o diploma de graduação</b>. 
                <p>
                Para cursos tecnólogos, em função da curta duração, é recomendada a realização da Extensão nos semestres iniciais. 
                </p>

                É importante que o aluno organize-se para a realização 
                das atividades, de forma que não haja sobrecarga no final do curso.`,
        isHtml: true
    },

    {
        question: "Se eu optar por um dos cursos de extensão oferecidos pela minha instituição, como funciona? ",
        answer: `CURSOS
                <ul>
                    <li><b>Encontros com o professor</b>: cada curso de Extensão conta com três encontros ao vivo com o professor. 
                    As gravações serão disponibilizadas ao estudante caso não tenha disponibilidade para assistir ao vivo.</li>

                    <li><b>Assistir ao vivo</b>: no dia e horário do evento, o(a) estudante deverá clicar na opção “Calendário” 
                    no menu principal do Ulife. O link da sala virtual estará disponível no box “Hoje”.</li>

                    <li><b>Assistir à gravação</b>: o link estará disponível na aba “Conteúdo” do curso no Ulife.</li>
                

                    <li><b>Atividade Avaliativa de Mapeamento Local</b>: para aprovação, será solicitado o desenvolvimento de um 
                    relatório de pesquisa abordando o contexto do curso localmente, ou seja, em território compatível com o local de 
                    residência do(a) estudante ou do polo de apoio presencial.</li>

                    <li><b>Carga horária e certificado</b>: a realização e aprovação no curso garantirá um certificado que contabiliza 60h 
                    de atividade de Extensão, sendo disponibilizado no final do semestre.<p></li>
                </ul>

                EVENTOS

                <ul>
                    <li><b>Ambientação e mentorias</b>: realizadas por meio de encontros ao vivo com professores convidados, via plataforma Teams, 
                    são abordados temas diversos e possuem duração de 2h cada. Todos os encontros serão gravados e poderão ser acessados a qualquer momento.</li>

                    <li><b>Carga horária e certificado</b>: cada encontro de ambientação e mentoria terá integralização de 10h de atividade de Extensão. </li>
                </ul>

                <b>OBS.: Para o(a) estudante ter direito ao certificado, é obrigatória a inscrição via plataforma Sympla.</b>
                `,
        isHtml: true
    },

    {
        question: "Em quantos cursos ou projetos posso me inscrever?",
        answer: `Há o limite de inscrição em até 3 cursos e em 1 projeto a cada oferta. No momento da inscrição, deve atentar-se ao fato de que cursos e projetos exigem 
                dedicação e disponibilidade e que, caso não consiga acompanhar as atividades previstas em cada ação, constará como reprovado ao término do semestre. 
                Projetos, especificamente, exigem grande disponibilidade.`
    },

    {
        question: "Fiz minha inscrição em um curso/projeto de Extensão e quero cancelar, é possível? ",
        answer: `Sim. Caso o período de inscrições ainda esteja aberto, você poderá editar livremente as suas seleções de cursos/projetos, podendo excluir ou incluir 
                cursos/projetos e até mesmo alterar a ordem de prioridade pelo próprio sistema de seleção, clicando em <b>Ver inscrições</b>. Nesse caso, as exclusões não 
                são contabilizadas no limite máximo de cancelamentos permitido por semestre.
                <p>
                Caso o período de inscrições já tenha encerrado, você pode solicitar o cancelamento de até 3 (três) atividades de extensão por semestre, via abertura 
                de protocolo. Uma vez tendo obtido o cancelamento em três atividades (cursos e/ou projetos), 
                novas solicitações não serão aceitas e permanecerá o status de reprovado caso você não compareça às aulas.`,
        isHtml: true
    },

    {
        question: "Qual a diferença entre as horas de Extensão e complementares? ",
        answer:`Para que seja reconhecida como atividade de Extensão, os estudantes deverão integrar a equipe que planeja e executa a ação de Extensão, que deve envolver a comunidade 
                externa e cumprir um papel formativo; sendo obrigatória em todos os cursos, correspondendo a 10% da carga horária total.<p>

                As atividades complementares, por sua vez, ainda que também desempenhem um papel formativo, permitem que o estudante participe na condição de ouvinte e em ações que não 
                envolvam a comunidade externa, por exemplo como aluno em um curso de idiomas ou participante/ouvinte em seminários, congressos e palestras.<p>

                É preciso consultar a matriz de cada curso para verificar se há uma carga horária de atividades complementares prevista.`,
        isHtml: true
    },

    {
        question: "Como faço para que as horas extras sejam contabilizadas? ",
        answer: `Para as horas complementares, o caminho é:
                    <b>Painel do Estudante > Atividades Complementares > Cadastro.</b><p>

                Para as horas de Extensão, o caminho é:
                <b>Painel do Estudante > Solicitações > Categoria: Acadêmica > Subcategoria: Pesquisa e Extensão > Solicitação: Cadastro de Comprovantes de Atividades de Extensão.</b><p>

                Para cada ação de Extensão (projeto, curso, prestação de serviço, entre outras) deve ser estabelecida a CH (carga horária) específica. Os professores proponentes dos 
                projetos, por exemplo, indicam qual a CH total que seu plano de trabalho permite integralizar, podendo contabilizar 40h, 60h ou 80h.
                Cursos de Extensão devem ter de 8h a 20h de duração, conforme a proposta de cada curso. Ações pontuais devem prever a CH que será contabilizada como Extensão. <p>
                
                As horas de Extensão provenientes das atividades da IES (projetos, cursos, ações pontuais, atividades vinculadas à A3) são lançadas automaticamente 
                no sistema do aluno.`,
        images: ["/img/faq/comprovante_extensao.png"],
        isHtml: true
    },

    {
        question: "Toda UC requer uma ação de Extensão (desenvolvida na A3, por exemplo)? ",
        answer: `Não. A dupla de professores tem autonomia para decidir como será a A3, considerando as metas de compreensão e tópicos geradores a serem desenvolvidos durante 
                o semestre para a Unidade Curricular que ministram.<p>

                Contudo, caso tal projeto/atividade represente uma ação extensionista, poderá ser contabilizado como horas de extensão, desde que o professor proceda com o cadastro 
                do relatório da atividade desenvolvida e das horas para cada aluno no sistema específico da Extensão.<br>
                É importante que as horas de Extensão não coincidam com as horas já contabilizadas para as demais atividades da Unidade Curricular, evitando assim que uma mesma atividade 
                seja considerada duas vezes para fins de integralização curricular.`,
        isHtml: true
    },

    {
        question: "Como faço para retirar meu certificado de participação em curso ou projeto de Extensão? ",
        answer: `Os certificados são emitidos de maneira automática em até 45 dias após o término do curso/projeto. Após esse período, o protocolo é gerado automaticamente e você 
                pode baixar o certificado pelo caminho: <b>Painel do Estudante > Serviços > Solicitações > Emissão de Certificado de Curso/Projeto de Extensão</b> (já aparecerá como 
                protocolo concluído). <p>

                Não é necessário abrir protocolo, a única ação a fazer é baixar o certificado, uma vez emitido.`,
        isHtml: true
    },

    {
        question: "Estágio supervisionado conta como atividade de Extensão? ",
        answer: `Não. O estágio supervisionado é um componente curricular à parte e segue regulamentação própria de cada curso de graduação, conforme as Diretrizes 
                Curriculares Nacionais do Ministério da Educação.`,
        isHtml: true
    },

    {
        question: "Ações de voluntariado podem ser vistas como atividades de Extensão? ",
        answer: `Sim. Neste caso, o aluno deve solicitar uma declaração/certificado da referida ação na respectiva IES e protocolar via Painel do Estudante, contendo a informação 
                da carga horária alocada e assinatura dos responsáveis.<p>
                O caminho para protocolar o certificado é: <b>Painel do Estudante > Solicitações > Categoria: Acadêmica > Subcategoria: Pesquisa e Extensão > Solicitação: Cadastro de 
                Comprovantes de Atividades de Extensão.</b>`,
        images: ["/img/faq/comprovante_extensao.png"],
        isHtml: true
    },

    {
        question: "Quem posso contatar para questões gerais?",
        answer: `Pode entrar em contato com a Central de Atendimento ao Estudante através do WhatsApp pelo número (11) 3298-7730.`,
        images: ["/img/faq/projeto_extensao_2.png", "/img/faq/minhas_ucs.png"],
        isHtml: true
    },
]

export default faqData;