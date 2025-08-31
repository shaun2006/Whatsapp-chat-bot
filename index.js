const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const axios = require("axios");

const client = new Client({
	authStrategy: new LocalAuth()
});

client.on("qr", (qr) =>{
	qrcode.generate(qr,{
		small:true
	})
});


client.on("ready",() =>{
	console.log("Client is ready");	
});

client.on("message", message => {
    var data = (message.body);
    console.log(data);
    axios.post("http://localhost:11434/api/chat", {
    	model: "gemma3:1b", // make sure this model is actually installed
	messages: [
		{ role: "system", content: "You are an AI assistant created to help your owner, Shaun. Always address Shaun respectfully and do your best to answer his queries, even if you are unsure." },
    		{ role: "user", content: data }
    		],
		stream: false // ensure we get the full response, not a stream
    }, 
    {
    	headers: { "Content-Type": "application/json" }
    })
    .then(response => {
	  var reply_from_llm = (response.data.message.content);
	  console.log(reply_from_llm);
	  client.sendMessage(message.from, reply_from_llm);
    });
});
client.initialize();

