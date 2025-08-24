# Section Six: Terminal For Beginners

### 👋 Welcome!

Previously, you set up VS Code and created your first website. Now it's time to level up by learning how to use the terminal inside VS Code an essential tool for professional developers.

By the end of this lesson, you'll know:

- What the terminal is
- Why it’s important
- How to run basic terminal commands inside VS Code (for Windows, Mac, and Linux)

## 💡 **Topic: Using the Terminal (Inside VS Code)**

🎯 **Goal**: Learn how to navigate folders and manage files using the built-in terminal in VS Code.

### 🧠 Why Use the Terminal?

The terminal is like a control panel for your computer. It lets you create folders, move files, and run code all by typing commands.

Most developers prefer it because:

- It’s faster than clicking around
- It gives you more control over your project
- It’s required for using tools like Git

<aside>
💡

Think of the terminal as **a command center** for your computer. Instead of clicking around, you **type in commands,** and your computer listens.

</aside>

## 🖥️ How to Open the Terminal in VS Code

1. Open your `my-first-website` folder in VS Code.
2. Press `Ctrl + `` (the key above Tab) to open the terminal panel at the bottom.

   > Mac users: Press Cmd + `  Linux users: Use Ctrl + Shift +` if needed

   You should see something like 👇

   ```powershell

   PS C:\Users\YourName\Desktop\my-first-website>
   ```

   ![image.png](attachment:2cbdb7d8-9305-440a-a8ab-3f5779d6e140:image.png)

   ✅ Great! You’re now inside your project folder, ready to type commands.

## 🔧 Basic Commands to Know

Run the commands below one at a time and observe what they do. Make sure you’re in the `my-first-website` folder before doing so.

### 📁 Step one: List all files and folders

```bash
dir
```

> Mac/Linux: use ls

✅ This shows you what's inside the current folder.

### 📄 Step two: Create a new HTML file

```bash
echo "" > about.html
```

> This creates a blank file named about.html

✅ Run `dir` again to confirm it's there.

### 📂 Step three: Create a new folder

```bash
mkdir images
```

✅ You’ll now have a folder named `images`.

### 🔄 Step four: Move into a folder

```bash

cd images
```

You are now inside the `images` folder.

To go back:

```bash
bash
CopyEdit
cd ..

```

✅ You’re back in the main folder.

### 🔁 Step five: Clear the terminal (optional)

```bash
cls
```

> Mac/Linux: use clear

### 🧠 Summary

Here is a summary of the commands we explored 👇

| Command               | Description                      | Windows / Mac / Linux                  | Example                |
| --------------------- | -------------------------------- | -------------------------------------- | ---------------------- |
| `dir` / `ls`          | Lists files and folders          | `dir` on Windows, `ls` on Mac/Linux    | `dir`                  |
| `echo "" > file.html` | Creates a blank file             | Works on all platforms                 | `echo "" > about.html` |
| `mkdir foldername`    | Creates a new folder             | All platforms                          | `mkdir assets`         |
| `cd foldername`       | Moves into a folder              | All platforms                          | `cd assets`            |
| `cd ..`               | Moves up one folder level        | All platforms                          | `cd ..`                |
| `cls` / `clear`       | Clears the terminal screen       | `cls` on Windows, `clear` on Mac/Linux | `cls`                  |
| `code .`              | Opens VS Code for current folder | All platforms (if configured)          | `code .`               |

## 🔥 Practice Activity

Open your terminal inside VS Code and run the following ( write one line at a time and see what changes)

```bash

echo "" > contact.html
mkdir assets
cd assets
echo "" > style.css
cd ..
code .
```

> code . opens the entire folder in a new VS Code window. If this doesn’t work, skip it — you’re already in VS Code.

✅ You’ve just created two new pages, organized your files, and prepped your folder for styling.

## 🧠 **Exercise: Terminal Mini-Challenge**

Now that you’ve practiced the basics, let’s make sure you **understand** how to use the terminal, not just follow instructions.

### ⚔️ **Your Challenge**

You are tasked with creating the folder and file structure for a **personal blog** using only the terminal inside VS Code.

🎯 Your goal:

Build this structure **from scratch**, without copying exact commands.

```
markdown
CopyEdit
my-blog/
│
├── index.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
└── posts/
    ├── post1.html
    └── post2.html
```

### 🛠 **What You Need to Practice / Use**

- Create folders (`mkdir`)
- Navigate (`cd`)
- Create files (`echo "" > filename`)
- Move back (`cd ..`)
- View contents (`dir` or `ls`)

### ✅ **Self-Check**

Once you're done, ask yourself:

- Can I navigate into and out of folders without help?
- Did I remember the command to create a new file?
- Does my project structure match the one above?

If yes, great job! If not, retype your commands (don’t paste!) and try again. Mistakes = learning.

### 📁 Submission

1. Take a screenshot of your folder structure inside VS Code and submit it under the `Terminal For Beginners` assignment using the form below 👇

https://tally.so/r/nrge7X

## 📚 Additional Resources

- [VS Code Terminal Docs](https://code.visualstudio.com/docs/editor/integrated-terminal)
- Command Line Crash Course: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line

## Meme Time😎

---

![Guess who is the most impressive tech guru on the block, You! 😎](attachment:1e642751-8d99-4fed-a6cd-9806416c8708:image.png)

Guess who is the most impressive tech guru on the block, You! 😎

---
