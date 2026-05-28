# This is a spam bot!
- This bot is ment to automitically send substantial number of messages consisting pings.
- in the code, line 8, it says:
```js
const MESSAGE = "@everyone UwU UwU Nyaa Nyaa";
```

The `@everyone UwU UwU Nyaa Nyaa` is the thing that is going to be sent.
- You can chnage it as your liking

  ---

# Setting Up the Bot

* Open a folder.
* In the terminal for the folder, run:

```bash
npm init -y
npm install discord.js dotenv
```

This will add:

1. `node_modules`
2. `package.json`
3. `package-lock.json`

### Add another file called `a.js`

* In the file, add the content from `a.js`.

### Make a folder called `bots`

* In the `bots` folder, add `.env` files such as `bot1.env`, `bot2.env`, etc.
* In the `.env` files, make sure the content is:

```env
TOKEN=YOUR_TOKEN
CHANNEL_ID=YOUR_CHANNEL_ID
```

Where:

* `TOKEN` is the token for the bot.
* `CHANNEL_ID` is the ID of the channel you want the bot to use.

You can use different bots and different channels.

* Make sure to use NO quotation marks or parentheses.

Your files should look something like this:

```text
Main folder\
│
├── bots\
│   ├── bot1.env
│   ├── bot2.env
│   └── ...
│
├── node_modules\
├── a.js
├── package-lock.json
└── package.json
```

Of course, use this wisely. There is NO warranty for this.

The code is public for anyone to use and modify as they want.
