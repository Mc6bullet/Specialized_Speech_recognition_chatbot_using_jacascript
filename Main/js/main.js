let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let backgroundimage = document.querySelector('.body');
let intro = ["Hello, My name is curiosity","Hello, I am byte", "Hi, I am byte"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i am a voice based chatbot. I can help you in various ways, for example, i can help you collect customer feedback, also you can have an entertaining conversation with me when you are bored.", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't understand your question.";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'what are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about yourself' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('bye' || 'ok bye see you later' || 'talk to you later')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('hai' || 'hello')){
        let finalresult = 'Hello, how can i help you ?';
        speech.text = finalresult;
    }
    if(message.includes('hello')){
        let finalresult = 'Hi, how can i help you ?';
        speech.text = finalresult;
    }
    if(message.includes('what are your uses')){
        let finalresult = 'I am a user friendly chatbot as you can simply give a voice command and have me answer your question.';
        speech.text = finalresult;
    }
    if(message.includes('which professional fields are you helpful in')){
        let finalresult = 'Hello,how can i help you ?';
        speech.text = finalresult;
    }
    if(message.includes('why should I prefer voice based chatbots')){
        let finalresult = 'I can give you personal assistance with quick response service, also voice based chatbots will give you a better interaction experience.';
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})




