const selectElement = (element) =>{
 const el =  document.querySelector(element)
  if(el) return el
  throw new Error(`Cannot find element ${el}`)
}
let speech = new SpeechSynthesisUtterance();

speech.lang = "en";

let voices = []; 

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = selectElement('#voices')
 
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#rate").addEventListener("input", () => {
  const rate = selectElement("#rate")
  speech.rate = rate.value;
 selectElement("#rate-label").innerHTML = rate.value;
});

document.querySelector("#volume").addEventListener("input", () => {
  const volume = selectElement("#volume").value
  speech.volume = volume;
  selectElement("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
  const pitch = selectElement("#pitch");
    speech.pitch = pitch.value;
  selectElement("#pitch-label").innerHTML = pitch.value;
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click", () => {
  let text = selectElement("textarea").value
   speech.text =text;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

document.querySelector("#cancel").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});