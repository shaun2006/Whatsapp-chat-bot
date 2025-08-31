# WhatsApp Chat Bot 🤖💬

## 📌 Description

Hi everyone! 👋 This is a fun side project — a **WhatsApp chat bot** that uses [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) and the **Ollama Gemma 3:1b model** to read and respond to messages.

🚀 The bot connects to your WhatsApp via QR code and lets you have AI-powered conversations right inside your WhatsApp chats.

> ⚠️ **Disclaimer**
> It is not guaranteed you will not be blocked by using this method. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe. Use at your own risk.

---

## 📋 Prerequisites

Make sure you have the following installed before starting:

1. **Node.js** (v18 or higher recommended)

   * [Download Node.js](https://nodejs.org/en/download)

2. **npm** or **yarn** package manager

3. **whatsapp-web.js**

   * A library to interact with WhatsApp Web
   > Note:- these packages are already in package.json file, so the below command is not necessary
   ```bash
   npm install whatsapp-web.js qrcode-terminal
   ```

4. **Ollama** (to run Gemma 3:1b locally)

   * [Install Ollama](https://ollama.com/download)
   * Pull the model:

   ```bash
   ollama pull gemma:3-1b
   ```

---

## ⚙️ Installation

Clone this repository:

```bash
git clone https://github.com/your-username/whatsapp-chat-bot.git
cd whatsapp-chat-bot
```

Install dependencies:

```bash
npm install
```

Start the bot:

```bash
npm start
```

Scan the QR code with your WhatsApp to connect ✅

---

## 🚀 Usage

Once the bot is running:
* It waits for an message to come
* Once the message had been recived by your whstapp
* The bot reads the messages and send that message to ollama using api 
* Ollama reads the message and genereates a response
* Once the response from ollama comes it stores it an variable
* The script then send that variable to the person who messaged you
* i.e it send the reply to the person who send the message
> Note:- By default the bot will respond using **Gemma 3:1b** 🧠
---
# 🧰 You can change the model to any one that you like by editing the below line in `index.js`
``` bash
model: "gemma3:1b", 
```
---

# 🧰 You can customize the prompts or enhance responses by editing `index.js`
```bash
messages: [
  { role: "system", content: "You are an AI assistant created to help your owner, Shaun. Always address Shaun respectfully and do your best to answer his queries, even if you are unsure." },
  { role: "user", content: data }
],
```
---
# ⚠️ Read the below instructions if you want to edit something related to the whatsapp-web-js code in the script...
> **if you want to change any part of the code that is related to the whatsapp-web-js then, after you have done the changes in the index.js file, you may have delete the following directories. before running the code again**
* .wwebjs_auth
* .wwebjs_cache

**use this command to delete them**
``` bash
rm -rf .wwebjs_auth/ .wwebjs_cache/
```

## 📸 Take a look at this
## Chat
![Chat](https://github.com/shaun2006/Whatsapp-chat-bot/blob/main/screenshorts/Screenshot_20250901_031613.png?raw=true)
---
## Running Script
![Terminal](https://github.com/shaun2006/Whatsapp-chat-bot/blob/main/screenshorts/Screenshot_20250901_031325.png?raw=true)
---
# The code
![Code](https://github.com/shaun2006/Whatsapp-chat-bot/blob/main/screenshorts/Screenshot_20250901_031536.png)

---

## For more information take a look at the these following technologies 

* [Node.js](https://nodejs.org/en)
* [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
* [Ollama](https://ollama.ai) with **Gemma 3:1b**

---
## 📂 Files

- `index.js` - Main script file with of all the code
- `package.json` - The file where all the necessary packages required by script are listed

## 🤝 Contributing

Pull requests are welcome! If you’d like to suggest major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

MIT License © 2025 
