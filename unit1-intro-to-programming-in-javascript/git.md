Title | Tags
--- | ---
Intro To Git | git

## Objectives
* Learn basic command line git
* Get familiar with branching and merging

## TODO: Structure
* 10:00 - 10:40 - Challenge problem
* 10:40 - 10:45 Break
* 10:45 - 11:30 Lecture part 1
* 11:30 - 1:00 Exercise 1
* 1:00 - 2:00 Lunch
* 2:00 - 2:55 Lecture part 2
* 2:55 - 3:00 Break
* 3:00 - 4:55 Exercise 2
* 4:55 - 5:00  Break
* 5:00 - 6:00 - Review 

## Resources
TODO: Add links for slides, live coding examples, helpful resources, etc.

##Lecture
### Intro to the command line
Before the days of graphical user interfaces and the mouse the only way to navigate around a computer was by typing in text commands. Computers have evolved a lot since then but every computer still has a terminal, which lets us type in commands to navigate around our computer and do things like create and edit files. In other words, it lets us interface with our computer without needing to use a mouse.

**Discussion:** What are the advantages of using the terminal? What are the disadvantages?

### Command line basics
Using the command line is a lot like physically using a mouse to click around and open up different folders and files. Except instead of using a mouse we'll only use text commands. 

To use the command line, open your computer’s terminal. You should see a prompt where you can type in text. There are certain prompts we can type in that will help us navigate around our computer and do other cool things. 

Here are some of the most important command line prompts. 

- `pwd`  (print working directory) shows us the current directory that we’re in
- `cd <directory name>` (change directory) changes the current directory (directory is another name for ‘folder’) 
	- For example, `cd downloads` would move into the downloads folder
- `ls`  (list contents) lists all of the contents of the current directory
- `.` (period) shortcut for the current directory
- `..` (double period) shortcut for the current parent directory 
- `~` (tilde) shortcut for your home directory 
- `open <file or directory name>` opens a file or directory
	- For example, `open file1.txt` will open up file1.txt (as long as that file is in your current directory) 
- `mkdir <directory name>` (make directory) makes a new folder
	- For example, `mkdir test-folder` will make a new folder called ‘test-folder’
 - `touch <file name>` makes a new file
	- For example, `touch newFile1.txt` would make a new file called ‘new File1.txt’ in your current directory 

### Exercise

Open up your terminal and start getting familiar with the command line. First use the command line to navigate to your Desktop. Then use the command line to make a new folder. `cd` into that folder and use the `touch` command to make a new txt file. Use the `ls` command to see a list of all the files in your folder and make sure you see your name file. Then try using the `open` command to open that new file.

Continue using the command line to practice navigating around your computer. Be sure to try using the `.` (period) and `..` (double period) shortcuts to help your navigation. 


### What is Git?
Git is a distributed version control system for tracking changes to files. Git essentially takes snapshots of data overtime to create a history of how a project changes overtime. This history allows us to go back to previous versions of our project if needed (for example, if we add new code to a project that accidentally introduces a nasty bug, we can go back to a previous version of the project and restart from there). 

Git solves the problem of saving a bunch of different versions of the same document (e.g. `some_docVersion1.doc`, `some_docVersion2.doc`, `some_docFinal.doc`, `some_docREALLYFINAL.doc`, etc.) Instead, we just have one version of the project, with all of the changes and history conveniently tracked.

### The three states
Git has three main states: modified, staged, and committed. Whenever we change a file in our project, that file becomes “modified.” Or in other words, the file has been changed since the most recent version. However that change is not automatically tracked and added to our history. In order to save those changes to our git repository, we first need to let git know that we want to track that specific file. 

To track a file we need to first add it to the git staging area. The git staging area basically lets us briefly review our modified files to make sure we are before saving them to our history.

If everything looks good in the staging area we can then commit our changes to our git history. Each commit contains information including about the changes to the files, who made the changes, and when. We can then go back through this git history and access previous versions of our project as needed.

### A Basic Git Workflow

Git contains many features. Fortunately, in 99% of cases we don't have to
know or use most of them. Instead, we can rely on a very
simple and straightforward workflow:

* `git init`
	*  Creates a new git repository within your project directory by creating a hidden ‘.git’ folder in the directory
* `git config` (FIRST TIME SETUP ONLY) to set your username and email
	* `git config --global user.email "youremail@example.com"`
	*  `git config --global user.name "Your Name" `
	*  Git stores a special configuration file at `~/.gitconfig`. You can also double check what values are currently set by running `git config -l` at the command line
* `git status` 
	* Shows the current state, your current branch, untracked files
	* Git does NOT automatically track files…we need to tell it which files to track
* `git add` 
	* Tells git which files to track (adds to the ‘snapshot’ of the next commit)
	*  `git add <name-of-file>` adds a specific file
	*  `git add -A` adds all files
	*  This process is called ‘staging’ - aka, preparing the snapshot to track specific changes
*   `git commit -m <your-message-here>`
	* Adds our staged changes to git history
	*  Commits create a replayable log of all changes made to the repository over time
	*  Every commit contains metadata including the Author (who), Date (when), Message (why), Contents (what), Parent Hash (where), and __Hash__ -- Auto-generated fingerprint tagging the contents of the commit -- uniquely id's the commit
*  `git log --oneline` 
	* Shows a high level overview of the commits and lets you looks back through your commit history 
*

### Exercise 1 - Try Git

Complete the first 8 challenges of Try Git (up through 1.8 ‘Committing All Changes’):  https://try.github.io/levels/1/challenges/1

### Branches
Branches let us create different forks of our project and are commonly used when adding new features. A branch is basically a copy of our project where we can test out new changes, and eventually merge those changes into the main branch of our project when ready. Branches are great because if we end up totally breaking something on our branch we can just switch back to our main branch and pretend like it never happened.

#### Creating and working with branches
* `git branch` 
	* Shows all current branches
	* the default git branch is called `master`
* `git branch <banch-name>` OR `git checkout -b <branch-name>`
	* Creates a new branch
	* Important to note: if you just do `git branch <branch-name>` you will still be on your previous branch. You need to `git checkout <branch-name>` to actually switch over to the new branch. Or you can just use `git checkout -b <branch-name>` to both create and switch to the new branch
* `git checkout <branch-name>`
	* Switches to the specified branch
	*  The `HEAD` is Git’s internal way of indicating the snapshot that is currently checked out. The head typically resides at the ‘tip’ of the current development branch, but can be moved using `git checkout` 

#### Merging branches
*  `git checkout <branch-name>` 
	* Switch back to the branch that you want to merge everything into (typically the `master` branch)
* `git merge <branch-name>` 
	* Merges the specified branch into the current working branch
* `git branch -d <branch-name>` 
	* Deletes old branch (use only after you’ve successfully merged)

#### Beware of merge conflicts
 When two branches diverge we may run into a merge conflict. Merge conflicts happen when there are conflicting changes on two separate branches. For example, say two people each make a branch but we both work on the same thing. When they try to merge them back in to master, git will not be sure which changes to keep and which to discard. In these cases we must manually resolve the conflicts before moving forward. 


### Git Demo/Walkthrough

* Make a directory
* Init a git repository
* Make a file
* Add changes to file
* Stage changes
* Commit changes
* Repeat x 2-3
* Create a branch (moving HEAD)
* Repeat changes / Commits
* Checkout master (moving HEAD)
* Merging branch (moving HEAD)


### Exercise 2

TODO: Add exercise 2

## Review and Wrapup
* What was easy? What was challenging?
* What made sense? What didn’t make sense?

## Further Reading
* TODO: Add links to further reading


<label>Author:</label><p class="author">Alex</p>
Language:<p class="language">JavaScript</p>
Topics:<p class="topics">for-loop, continue</p>
Difficulty:<p class="difficulty">4</p>
Topics:<p class="format">coding</p>

<h3 class='question-header'>Question</h3>
<p class='question-text'>Write a `for` loop that counts down from 100 to 10 by 10, and then from 10 to 1 by 1.  The loop should print a single number on each line.  Use a single loop; do not use multiple loops.</p>

<h3 class='answer-header'>Answer</h3>
<code class='answer-text'>
	for(var i = 100; i >= 1; i -= 1) {
		if(i > 10 && i % 10 === 0) {
			console.log(i)
		} else if(i <= 10){
			console.log(i)
		}
	}
</code>