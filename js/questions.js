qs = [
	{
		q: "if you had to jump out of a plane and land behind enemy territory to rescue a critical intelligence asset who (plot twist!) also happens to be your best childhood friend, who would you rather parachute in with?",
		a: [
			"vin diesel",
			"ryan gosling",
			"meg ryan",
			"dobby"
			]
	},
	{
		q: "favorite color?",
		a: [
			"aquamarine",
			"persimmon",
			"giraffe",
			"teal"
			]
	},
	{
		q: "height?",
		a: [
			"1",
			"2",
			"3",
			"4"
			]
	},
	{
		q: "fave flower?",
		a: [
			"lilly",
			"daffodil",
			"duck",
			"chrysanthemum"
			]
	},
	{
		q: "crush?",
		a: [
			"jack black",
			"billy bob",
			"ryan meg",
			"bobby dobby"
			]
	},
	{
		q: "nose?",
		a: [
			"coke",
			"mandy",
			"speed",
			"pills"
			]
	},
]

window.addEventListener('DOMContentLoaded', (event) => {

    addQuestions()

});

var imgs = 5
var colors = ["red", "blue", "green"]
var idx = 0

function addQuestions() {

	for (const q of qs) {

		let question_square_template = document.querySelector("#question-square")

		let question_square = question_square_template.content.firstElementChild.cloneNode(true)

		document.getElementById('grid').appendChild(question_square)

		let question = question_square.querySelector(".question")

		question.querySelector("legend").innerHTML = q["q"]

		let answer_container = question.querySelector(".radio-container")

		let loader = question.querySelector(".lottie-loader")

		for (const a of q["a"]) {

			let answer_template = question.querySelector("#answer")

			let answer = answer_template.content.firstElementChild.cloneNode(true)

			answer_container.appendChild(answer)

			let input = answer.querySelector(".radio-input")

			input.setAttribute("id", a)
			input.setAttribute("value", a)
			input.setAttribute("name", q["q"])

			let label = answer.querySelector(".radio-label")

			label.setAttribute("for", a)
			label.innerHTML = a

			answer.addEventListener("click",function(){
				setTimeout(function(){
					loader.style.opacity = 1
					//question.classList.add("filtered")
					let img = new Image();
					img.src = "img/" + idx++ % imgs + ".jpg"
					img.onload = function(){
						setTimeout(function(){
							question.style.backgroundImage = 'url(' + img.src + ')';
							setTimeout(function(){
								//question.classList.remove("filtered")
								loader.style.opacity = 0
							}, 50);
						}, 500);
					};
				}, 100);
				
				//question.style.backgroundImage = "url('img/" + idx++ % imgs + ".jpg')"
			})

		}

	}
}