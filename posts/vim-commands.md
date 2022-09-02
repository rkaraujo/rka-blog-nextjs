---
title: Vim commands
date: "2022-09-02T17:30:00"
description: Useful commands I use in Vim
---

I was getting a little tired learning shortcuts in different editors and operational systems (damn Mac OS command key!). So, after accidentally watching some Vim videos on YouTube, I thought "Why not try that?".

Now I have Vim extensions installed in Pycharm and VS Code, so I can execute Vim commands on those editors.

I will list some commands that I can remember right now. Most of them are intuitive if you associate the letter with the action (for example, p with paste):

- :q - quit Vim
- :wq - write file, quit Vim
- i - enters insert mode for editing the text
- a - enters insert mode after the cursor position
- A - enters insert mode at the end of the line
- I - enters insert mode at the beginning of the line
- S - deletes the current line and enters insert mode
- o - Open a new line below the cursor for editing
- O - Open a new line above the cursor for editing
- yy - Copy one line
- dd - Cut one line
- 4dd - Cut 4 lines
- p - Paste the line below the cursor
- P - Paste the line above the cursor
- ci" - Change in double quote (with the cursor between the double quotes, it deletes the content in between and change to insert mode)
- ci( - Similar to the above, but between parentheses
- d$ - Delete till the end of line, starting from cursor
- dt( - Delete till (, starting from cursor
- dt* - Delete till *, starting from cursor
- df/ - Delete until find /, including the /
- u - Undo
- ctrl-r - Redo
- "+p - Paste content in the OS clipboard
- "1p - Paste the text before the last one copied (1 can be replaced, by other numbers until 9, 9 being oldest)
- { - Navigate to previous open block
- } - Navigate to next open block
- % - With the cursor being in a open block character (like {), it goes to the closing character
- gg - Goes to the start of the file
- G - Goes to the end of the file
- :line number - colon line number, goes to the line number
- w - goes to next word
- b - goes back to previous word
- :/search term - search for the "search term" forward
- :?search term - search for the "search term" backward
- n - search for the next occurrence
- V - enter Visual mode to select lines
- &gt; - indent the lines selected
- &lt; - unindent the lines selected
