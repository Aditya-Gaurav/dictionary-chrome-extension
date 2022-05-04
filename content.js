var word;
window.addEventListener('mouseup', selectWord);
function selectWord() {
	console.log("called selectWord");
	let selectedText = window.getSelection();
	console.log(selectedText);
	if (selectedText.length > 0) {
		let message = {
			text: selectedText
		}
		console.log(message);
		// word = selectedText;
		// UserAction();
	}


document.addEventListener("DOMContentLoaded", function (event) {
	console.log("Hello I am from content.js");
	// window.addEventListener('mouseup', selectWord);

	var btn = document.getElementById("getDefinition");
	btn.addEventListener('click', UserAction);
	// window.addEventListener('click', getDefinition)

	function selectWord() {
		console.log("called selectWord");
		let selectedText = window.getSelection().toString().trim();
		console.log(selectedText);
		if (selectedText.length > 0) {
			let message = {
				text: selectedText
			}
			word = selectedText;
			UserAction();
		}
	
	}



	function UserAction() {
		console.log("function caalled");
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		fetch(apiUrl).then(r => r.json()).then(result => {
			let def = result[0]['meanings'][0]['definitions'][0]['definition'];
			const para = document.createElement("p");
			para.innerText = def;
			document.body.appendChild(para);
		})
	}

});




    // fetch('https://api.dictionaryapi.dev/api/v2/entries/en/catch').then(r => r.text()).then(result => {
    //    let el = document.createElement('p');
    //    el.innerHTML = result;
    // })

    // console.log(result[0]['meanings'][0]['definitions'][0])
