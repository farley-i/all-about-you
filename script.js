const gridElement = document.getElementById('crossword-grid');
const acrossList = document.getElementById('across-clues');
const downList = document.getElementById('down-clues');

// ================= WORDS & CLUES =================
const words = [
  {word:"community", clue:"sitcom, troy and abed"},
  {word:"coldmilk", clue:"your favourite beverage (your kind of liquor)"},
  {word:"callofduty", clue:"favourite game"},
  {word:"cyusart", clue:"the best page on Instagram right now (after yours ofc)"},
  {word:"cheese", clue:"your favourite thing to put in bread"},
  {word:"theoffice", clue:"one of your favourite sitcom too, has a ship you like"},
  {word:"habdahlak", clue:"song made by teddy afro"},
  {word:"maxpayne", clue:"one of your favourite games as well"},
  {word:"frankocean", clue:"an artist you listened to them a lot last year"},
  {word:"imyumbati", clue:"your favourite thing to eat, usually dinner"},
  {word:"football", clue:"favourite activity/hobby (usually with your brothers)"},
  {word:"trixie", clue:"your last born (of your dogs)"},
  {word:"wiseman", clue:"favourite frank ocean song"},
  {word:"thailand", clue:"one of your dream destination"},
  {word:"anchilij", clue:"one of your favourite songs from efrem tamiru"},
  {word:"horse", clue:"your spirit animal (you if you were an animal)"},
  {word:"curbyourenthusiasm", clue:"show you were watching when we first started talking"},
  {word:"billions", clue:"your last watched drama and you liked how it ended"},
  {word:"dj", clue:"a hobby you picked up in 2014-15"},
  {word:"photography", clue:"a hobby you should definitely pick up again"},
  {word:"venturecapital", clue:"a topic your interested career and study-wise"},
  {word:"alvin", clue:"your first name"},
  {word:"christmas", clue:"your favourite holiday/festive season"},
  {word:"arresteddevelopment", clue:"i'm afraid i just blue myself"},
  {word:"ukunderground", clue:"you like this genre in uk music"},
  {word:"cityofgod", clue:"a movie based in brazil that you liked"},
  {word:"vicecity", clue:"favourite game(from gta)"},
  {word:"november", clue:"your birthday month"},
  {word:"neutral", clue:"your favourite genre of colours on yourself"},
  {word:"AD", clue:"your favourite interior design company/brand"},
  {word:"alabama", clue:"another favourite frank ocean song"},
  {word:"lovingyou", clue:"a favourite song from franchoise hardy"},
  {word:"loving", clue:"a character you have/ a verb you do to the people in your life"},
  {word:"tegide", clue:"a song from merhawi tigri"},
  {word:"haimanotgirma", clue:"they sang the song 'kezira'"},
  {word:"anuradhapaudwal", clue:"they sang the song 'lag ja gale ke phir'"},
  {word:"orange", clue:"your favourite fanta"},
  {word:"germanshepard", clue:"one of your favourite dog breed"},
  {word:"newyork", clue:"the city we keep falling for its propaganda #mamdanistan"},
  {word:"japan", clue:"one of your dream locations too"},
  {word:"figurines", clue:"one of the things you want to start collecting"},
  {word:"mrzimba", clue:"we use him as inside jokes a lot 'what are you talking about'"},
  {word:"traveling", clue:"something you want to do once you get your bag up"},
  {word:"jeffbuckley", clue:"they sang the song 'lover, you should've come over'"},
  {word:"phoebebridgers", clue:"an artist you liked and still like listening to"},
  {word:"legos", clue:"a collection you want to start of, as well"},
  {word:"kind", clue:"another virtue of who you are"},
  {word:"beautiful", clue:"literally what you are, inside and out"},
  {word:"curious", clue:"another thing about you"},
  {word:"loml", clue:"who you are to me"},
  {word:"perfect", clue:"another adjective of who you are"},
  {word:"funny", clue:"another adjective of who you are"},
  {word:"seigfried", clue:"song by frank ocean that you like"},
  {word:"drawing", clue:"another hobby you like"},
  {word:"24songs", clue:"song by playboi carti we both like"},
  {word:"teamo", clue:"i love you but in spanish"},
  {word:"avantgarde", clue:"playlist genre-bending of experimental and alternative music"},
  {word:"oneday", clue:"a serie that might have wrecked you and you might not watch again"},
  {word:"modernfamily", clue:"a sitcom that is funny and is about families"},
  {word:"turtlescanfly", clue:"a movie you liked about the palestinian struggle"},
  {word:"mango", clue:"one of your favourite fruit"},
  {word:"two", clue:"how many siblings you have"},
  {word:"simba", clue:"your first born"},
  {word:"maya", clue:"your second born"},
  {word:"kigali", clue:"the city you live in"},
  {word:"iphone", clue:"the brand of phone you have"},
  {word:"hot", clue:"how you like your milk to be in cereals"},
  {word:"glasses", clue:"you've been wearing them since you were like a baby"},
  {word:"kalisa", clue:"your last name"},
  {word:"muzehe", clue:"your nickname on my phone"},
  {word:"joegoldberg", clue:"the name i used to call you, hint: stalker"},
  {word:"alvley", clue:"our pet's name"},
  {word:"cyusa", clue:"the name everyone that 'know knows' you calls you"},
  {word:"creative", clue:"another adjective of who you are"},
  {word:"rare", clue:"another adjective of who you are"},
  {word:"chocolate", clue:"favourite type of candy"},
  {word:"snickers", clue:"favourite brand of chocolate"},
  {word:"intelligent", clue:"another adjective to describe who you are"},
  {word:"empathic", clue:"another adjective to describe who you are"},
  {word:"hiking", clue:"a hobby you want to do when you move out, outdoor-based"},
  {word:"mybirthday", clue:"something happening on the third friday of this month"},
  {word:"special", clue:"what you are to your loved ones and i"},
  {word:"smile", clue:"my heart lights up when you do this"},
  {word:"eyes", clue:"you have the most beautiful pair i've ever seen"},
  {word:"everywhere", clue:"Fleetwood Mac song starting with 'E'"},
  {word:"coolest", clue:"another adjective of who you are"},
  {word:"interesting", clue:"another adjective of who you are"},
  {word:"letdown", clue:"song by radiohead you like"},
  {word:"thesmiths", clue:"your favourite band, mentioned in 500 Days of Summer"},
  {word:"billyidol", clue:"they sang the song 'eyes without a face'"},
  {word:"thebeatles", clue:"they are a band as well, named after bugs"}
];

// =================== GRID DATA ===================
let grid = [];
let cellSize = 40; // px

// dynamically create empty grid
function initGrid(rows=50, cols=50){
  gridElement.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  grid = [];
  for(let r=0;r<rows;r++){
    grid[r]=[];
    for(let c=0;c<cols;c++){
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridElement.appendChild(cell);
      grid[r][c]=cell;
    }
  }
}

// =================== PLACE WORDS COMPACTLY ===================
// Simple algorithm: place first word at center, then cross words at matching letters
function placeWordsCompact(words){
  const midRow = Math.floor(grid.length/2);
  const midCol = Math.floor(grid[0].length/2);
  let placedWords = [];
  // First word horizontally center
  let first = words[0];
  first.row=midRow; first.col=midCol; first.direction="across";
  placedWords.push(first);

  for(let i=1;i<words.length;i++){
    let w = words[i];
    let placed=false;
    for(let pw of placedWords){
      for(let pIdx=0;pIdx<pw.word.length;pIdx++){
        for(let wIdx=0;wIdx<w.word.length;wIdx++){
          if(pw.word[pIdx].toUpperCase()===w.word[wIdx].toUpperCase()){
            // try to cross: if pw is across, w goes down, etc
            let r=c=0;
            if(pw.direction==="across"){
              r = pw.row - wIdx;
              c = pw.col + pIdx;
              if(canPlace(w,r,c,"down")){
                w.row=r; w.col=c; w.direction="down"; placedWords.push(w); placed=true; break;
              }
            } else {
              r = pw.row + pIdx;
              c = pw.col - wIdx;
              if(canPlace(w,r,c,"across")){
                w.row=r; w.col=c; w.direction="across"; placedWords.push(w); placed=true; break;
              }
            }
          }
        }
        if(placed) break;
      }
      if(placed) break;
    }
    if(!placed){
      // place at next empty row
      w.row=0; w.col=placedWords.length*5; w.direction="across";
      placedWords.push(w);
    }
  }
}

// =================== CAN PLACE CHECK ===================
function canPlace(word,row,col,direction){
  for(let i=0;i<word.word.length;i++){
    let r=row, c=col;
    if(direction==="across") c+=i; else r+=i;
    if(r<0 || c<0 || r>=grid.length || c>=grid[0].length) return false;
    let cell = grid[r][c];
    let input=cell.querySelector('input');
    if(input && input.value!=="") return false;
  }
  return true;
}

// =================== CREATE GRID INPUTS ===================
function renderGrid(words){
  let numberCounter=1;
  words.forEach(w=>{
    const firstCell=grid[w.row][w.col];
    const numSpan=document.createElement('span');
    numSpan.classList.add('number');
    numSpan.textContent=numberCounter;
    firstCell.appendChild(numSpan);
    w.number=numberCounter++;

    for(let i=0;i<w.word.length;i++){
      let r=w.row, c=w.col;
      if(w.direction==="across") c+=i; else r+=i;
      const cell=grid[r][c];
      if(!cell.querySelector('input')){
        const input=document.createElement('input');
        input.maxLength=1;
        input.dataset.row=r;
        input.dataset.col=c;
        cell.appendChild(input);
      }
    }

    const li=document.createElement('li');
    li.textContent=w.number+". "+w.clue;
    if(w.direction==="across") acrossList.appendChild(li);
    else downList.appendChild(li);
  });
}

// =================== BUTTON FUNCTIONS ===================
function checkAnswers(){
  words.forEach(w=>{
    for(let i=0;i<w.word.length;i++){
      let r=w.row, c=w.col;
      if(w.direction==="across") c+=i; else r+=i;
      const input=grid[r][c].querySelector('input');
      if(input) input.style.backgroundColor=input.value.toUpperCase()===w.word[i]?"#cfc":"#f99";
    }
  });
}

function revealAll(){
  words.forEach(w=>{
    for(let i=0;i<w.word.length;i++){
      let r=w.row, c=w.col;
      if(w.direction==="across") c+=i; else r+=i;
      const input=grid[r][c].querySelector('input');
      if(input) input.value=w.word[i];
    }
  });
}

function resetGrid(){
  document.querySelectorAll('.cell input').forEach(input=>{
    input.value="";
    input.style.backgroundColor="white";
  });
}

document.getElementById('check-button').addEventListener('click', checkAnswers);
document.getElementById('reveal-button').addEventListener('click', revealAll);
document.getElementById('reset-button').addEventListener('click', resetGrid);

// =================== INIT ===================
initGrid(100,100);
placeWordsCompact(words);
renderGrid(words);
