
let textString = "touch feel play squeeze flick jump smell show taste break connect move dance listen learn tell speak shout whisper chew draw interact bounce roll hang turn on turn off print poke pick pull push connect think create eat correlate give take unite liberate entertain imagine".replace(/ /g, "");

let textArray = [];
let cellSizeMultiplier = .5;

let xGrid = 54 / cellSizeMultiplier;
let yGrid = 38 / cellSizeMultiplier;

let cellSize = 8 * cellSizeMultiplier;

let fixed_01;
let img;

function preload() {
  fixed_01 = loadFont("fonts/fixed_01.ttf");
  img = loadImage("img/jump3.png");
}

function setup() {
  
  createCanvas(432,304);
  background(255);
 
  textFont(fixed_01);
  textSize(cellSize);

  prepareText();

  background(255);
  
  displayText();
  
}

function draw() {
  
}


function randomSelect(stringToChooseFrom){

	let idx = random(stringToChooseFrom.length);
	return stringToChooseFrom.charAt(idx);
}

function indexSelect(stringToChooseFrom, idx){

	idx = idx%stringToChooseFrom.length;
	return stringToChooseFrom.charAt(idx);
}

function prepareText(){
	image(img, 0, 0, 960/2,685/2);

	let counter = 0;

	for (let y = 0; y < yGrid; y++){
		textArray.push([])
		for(let x = 0; x < xGrid; x++){
			if(counter % 100 == 0){
				console.log(counter/100);
			}

			let xPos = x * cellSize;
			let yPos = y * cellSize;

			let c = get(xPos,yPos);
			
			

			textArray[y].push({
				text:indexSelect(textString, counter),
				colour: c,
				x: xPos,
				y: yPos
			})
			//text(indexSelect(textString, counter), xPos+4, yPos+8);
			counter++;
		}
	}
	console.log(textArray);
}

function displayText(){
	for (let y = 0; y < yGrid; y++){
	  	for(let x = 0; x < xGrid; x++){

	  		let letter = textArray[y][x];
	  		fill(letter.colour[0], letter.colour[1],letter.colour[2]);
	  		text(letter.text, letter.x, letter.y);
	  	}
  }
}