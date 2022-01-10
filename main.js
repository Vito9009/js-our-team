/*
Viene fornito un layout di base e un file js in cui è definito un array 
di oggetti che rappresentano i membro del team. 
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, 
stampiamo dinamicamente una card per ogni membro del team.

BONUS:
Utilizziamo gli input presenti nella pagina per permettere all’utente 
di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene 
creato un nuovo oggetto, il quale viene inserito nell’array iniziale, 
e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
 */


const team = [                                                  // Array di oggetti
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

// Inserimento delle info contenute nell'array di oggetti all'interno del file HTML tramite il ciclo for e innerHTML

let containerTeam = document.querySelector(".team-container");    // Selezionare il container in HTML dove stampare le info

let infoBox = "";

for (let i = 0; i < team.length; i++){                          // Ciclo for per creazione div da stampare in HTML
  infoBox += `
              <div class="team-card">
                <div class="card-image">
                  <img src="${team[i].image}"/>
                </div>

                <div class="card-text">
                  <h3>${team[i].name}</h3>
                  <p>${team[i].role}</p>
                </div>    
              </div>
            `
}

containerTeam.innerHTML += infoBox;                             // Stampa in HTML le info dei 6 profili esistenti
/*
<div class="team-card">
  <div class="card-image">
    <img
      src="img/wayne-barnett-founder-ceo.jpg"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>Wayne Barnett</h3>
    <p>Founder & CEO</p>
  </div>
</div>
*/