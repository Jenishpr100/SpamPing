# This is a spam bot!
- This bot is ment to automitically send substantial number of messages consisting pings.
- in the code, line 8, it says:
```js
const MESSAGE = "@everyone UwU UwU Nyaa Nyaa";
```

The `@everyone UwU UwU Nyaa Nyaa` is the thing that is going to be sent.
- You can chnage it as your liking

  ---

# Setting up the bot

- Open a folder
- In the terminal, run:
```bash
npm init -y
npm install discord.js dotenv
```
This will add:
1) `node_modules`
2) `package.json`
3) `package-lock.json`

### Add another files called `a.js`
- In the file, add the content of [`a.js`](https://jenishpr100.github.io/SpamPing/a.js)
### Make a folder called `bots`
- In the `bots` folder, add `.env` files like `bot1.env`, `bot2.env`...
- In the `.env` files, make sure the content is:

```botn.env
TOKEN=YOUR_TOKEN
CHANNEL_ID=YOUR_CHANNEL_ID
```
Where `TOKEN` is the Token of bots and `CHANNEL_ID` is the ID of the channel you're trying to spam in.
This can include diffenrnt bots and different channels.
- Make sure to use NO "quotation" or (parentheses)

Youre files should look something like 

- `Main folder\`
  - `bots\`
    - `bot1.env`
    - `bot2.env`
    - ... 
  - `node_modules\`
  - `a.js`
  - `package-lock.json`
  - `package.json`


Of course, use this wisely, theres NO warantee for this.
The code is public for anyone to use and modify as their want.
