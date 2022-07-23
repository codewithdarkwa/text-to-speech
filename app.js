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

selectElement("#rate").addEventListener("input", () => {
  const rate = selectElement("#rate")
  speech.rate = rate.value;
 selectElement("#rate-label").innerHTML = rate.value;
});

selectElement("#volume").addEventListener("input", () => {
  const volume = selectElement("#volume").value
  speech.volume = volume;
  selectElement("#volume-label").innerHTML = volume;
});

selectElement("#pitch").addEventListener("input", () => {
  const pitch = selectElement("#pitch").value
    speech.pitch = pitch
  selectElement("#pitch-label").innerHTML = pitch
});

selectElement("#voices").addEventListener("change", () =>speech.voice = voices[selectElement("#voices").value]);

selectElement("#start").addEventListener("click", () => {
  speech.text = selectElement("textarea").value
  window.speechSynthesis.speak(speech);
});

selectElement("#pause").addEventListener("click", () => window.speechSynthesis.pause());
selectElement("#resume").addEventListener("click", () =>  window.speechSynthesis.resume());
selectElement("#cancel").addEventListener("click", () => window.speechSynthesis.cancel());