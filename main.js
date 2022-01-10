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
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// Inserimento delle info contenute nell'array di oggetti all'interno del file HTML tramite il ciclo for e innerHTML

let containerTeam = document.querySelector(".team-container");    // Selezionare il container in HTML dove stampare le info

let infoBox = "";

for (let i in team){                          // For...in per creazione div da stampare in HTML
  infoBox += `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${team[i].image}"/>
      </div>

      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>    
    </div>
  `;
}

containerTeam.innerHTML += infoBox;           // Stampa in HTML le info dei 6 profili esistenti




// Possibilità di aggiungere nuovi profili direttamente dalla pagina cliccando sul pulsante "Add"

let insertName = document.querySelector("#name");
let insertRole = document.querySelector("#role");
let insertImg = document.querySelector("#image");

let sendInfoBtn = document.querySelector("#addMemberButton");

sendInfoBtn.addEventListener('click', function(){             // Aggiunta di nuovi utenti tramite il pulsante "Add"
  
  let newUserInfoObject = {                                   // Creazione nuovo oggetto
    name : insertName.value,
    role : insertRole.value,
    image : insertImg.value,
  }

  team.push(newUserInfoObject);                               // Push del nuovo oggetto
  
  let newUserInfoBox = "";

  newUserInfoBox += `
      <div class="team-card">
        <div class="card-image">
          <img src="img/${insertImg.value}.jpg">
        </div>

        <div class="card-text">
          <h3>${insertName.value}</h3>
          <p>${insertRole.value}</p>
        </div>    
      </div>
    `;

    containerTeam.innerHTML += newUserInfoBox;                // Aggiunta del nuovo profilo utente a quelli già esistenti
}
);

/*
 console.log(team); per visualizzare in console l'oggetto o gli oggetti aggiunti dall'utente
*/