let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let backgroundimage = document.querySelector('.body');

let intro = ["Hello, My name is chatbot","Hello, I am chatbot", "Hi, I am byte"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let motivate = ["“Failure is the condiment that gives success its flavor.”","Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.","Do what is right, not what is easy nor what is popular.","Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.","“Pursue what catches your heart, not what catches your eyes.”"];
let inspires = ["“Be the change that you wish to see in the world.”","“No one can make you feel inferior without your consent.”","“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”","“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”"];
let success = ["“Action is the foundational key to all success.” —Pablo Picasso", "“I’ve failed over and over and over again in my life—and that is why I succeed.” —Michael Jordan", "“Try not to become a man of success. Rather become a man of value.”― Albert Einstein"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "i am good"];
let hobbies = ["i am a voice based chatbot. I can help you in various ways, for example, i can help you collect customer feedback, also you can have an entertaining conversation with me when you are bored.", "i like to make friends like you", "i like cooking"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye, have a nice day','bye take-care, have a nice day','Bye-bye, see you soon..']

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
    if(message.includes('hai' || 'hi')){
        let finalresult = 'Hi, how can i help you ?';
        speech.text = finalresult;
    }
    if(message.includes('hello')){
        let finalresult = 'Hi, how can i help you ?';
        speech.text = finalresult;
    }
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('i want help' || 'help')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about yourself' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
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
    if(message.includes('what are your uses' || 'use' || 'where you use')){
        let finalresult = 'I am a user friendly chatbot as you can simply give a voice command and have me answer your question.';
        speech.text = finalresult;
    }
    if(message.includes('which professional fields are you helpful in' || 'helpful')){
        let finalresult = 'I am use in many of professional fields, like medical, buisness, education excetra.';
        speech.text = finalresult;
    }
    if(message.includes('why should I prefer voice based chatbots')){
        let finalresult = 'I can give you personal assistance with quick response service, also voice based chatbots will give you a better interaction experience.';
        speech.text = finalresult;
    }
    if(message.includes('motivational quotes'||'motivational'||'quotes on motivation')){
        let finalresult = motivate[Math.floor(Math.random() * motivate.length)];
        speech.text = finalresult;
    }
    if(message.includes('inspirational quotes' || 'inspirational'||'quotes on inspiration')){
        let finalresult = inspires[Math.floor(Math.random() * inspires.length)];
        speech.text = finalresult;
    }
    if(message.includes('success quotes' || 'success'||'quotes on success')){
        let finalresult = success[Math.floor(Math.random() * success.length)];
        speech.text = finalresult;
    }
    if(message.includes('spiritual quotes' || 'spiritual'||'quotes on spiritual')){
        let finalresult = spiritual[Math.floor(Math.random() * spiritual.length)];
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
