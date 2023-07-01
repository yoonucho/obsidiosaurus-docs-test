# Quick Start ⏱️

Want to see Obsidiosaurus in action quickly? Follow this guide.

### Step 1: Install Essential Tools 🛠️

First, we need to make sure you have the necessary tools installed. Confirm the successful installation by checking their versions (Write commands in Terminal)

- [ ] [Node.js](https://nodejs.org/en/download) 
	- Check with: `node --version`
- [ ] [ImageMagick](https://imagemagick.org/script/download.php)
	- Check with: `convert --version`
	- (For MacOS install via [Homebrew](https://brew.sh/index_de))
- [ ] [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	-  Check with: `git --version`
- [ ] [Obsidian.md](https://obsidian.md/)

### Step 3: Clone `obsidiosaurus-docs` Repo 📥

Now, it's time to clone the Obsidiosaurus repository to your local machine.

- Open your Terminal or Command Prompt
- Run: `git clone https://github.com/CIMSTA/obsidiosaurus-docs.git`
- Navigate into the cloned repo: `cd obsidiosaurus-docs`

This will give you the following structure:

```js
obsidiosaurus-docs/
├── vault/
│   └── (Obsidian Vault lives here)
└── website/
    └── (Docusaurus Installation is here)
```

### Step 4: Launch Docusaurus Dev Server 🚀

- In Terminal, navigate to the `website` folder by running `cd website`
- Install node packages by running: `npm install`
- Start the dev server: `npm run start`
- Open your browser and visit: `http://localhost:3000/`
- You should now see the Obsidiosaurus documentation site running locally
- Dont close the Terminal for the rest of the session

### Step 5: Open the Vault with Obsidian 🔓

- Launch the Obsidian application
- Click on `Open folder as vault`
- Select the `vault` folder from your path, i.e. `.../obsidiosaurus-docs/vault`
- You should now be able to see the Obsidiosaurus documentation files and structure within Obsidian

### Step 6: Make changes and start Obsidiosaurus 📝

- Feel free to edit some of the files in the Obsidian Vault
- Once you've made your changes, click on the `page with up arrow` in your left sidebar in Obsidian

	- ![](assets/obsidiosaurus_sidebar_icon.png)
- This triggers the Obsidiosaurus conversion process
- Once the conversion process is complete, you get a notification on the top right

	- ![](assets/obsidiosaurus_run_sucess_notifaction.png)

And there you go! Have fun 🎉

>[!note]
>The obsidiosaurus-docu vault is set up as best as possible.
>You find alot useful thing setup inside what is currently not covered in the documentation.

If you need more info, help or want to provide general feedback, join the [CIMSTA Discord Channel](https://discord.gg/SSGK5tuqJh).

### (Step 7:  Optional: Leave a ⭐️ at Github )

- If you like it consider leaving a star at [Github](https://github.com/CIMSTA/obsidiosaurus) to support the development.
