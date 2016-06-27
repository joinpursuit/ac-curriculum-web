Title | Tags
--- | ---
Intro to GitHub | github, git

## Objectives
* Learn GitHub basics
* Launch a GitHub pages project

## TODO: Structure
* *This is just an example structure, feel free to change*
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

## TODO: Resources
Add links for slides, live coding examples, helpful resources, etc.

##Lecture
### Github Overview

Github is a platform for hosting git repositories online. You certainly don't need Github to use git (alternatives include BitBucket and GitLab), but its popularity and dominance, especially within the open source community, have made the 2 somewhat synonymous for many users.

Github basically lets us create a ‘remote’ repository that GitHub hosts in the cloud. This remote repository makes it possible for a bunch of people to work together collaboratively on the same project. Whenever anyone makes a change on their local computer they can push that change up to GitHub, which will then update the remote repository. The other people working on the project can then pull down those changes to their own computer, and everyone can stay in synch. 

As you progress through becoming a more practiced git user, don't forget that these 2 are really distinct things -- `git` provides the core technology for tracking and managing local changes, while GitHub provides a shared location for hosting git projects.


### Cloning and forking
GitHub makes it easy to copy a remotely hosted repository to our local computer. We can then make changes to that copy of the project and submit those changes to the original owner of the project, who can decide whether they want to include those changes in the original version. This makes it very easy for large teams to collaboratively work together on a single project. To clone a project to your local computer do the following:

- `git clone <repository-url>` 
	- Clones a git repository locally to your computer (aka creates a copy of the project on your comp).  
	- you can find repository URLs by going onto the project’s github page and clicking the green “Clone or download” button, then copying and pasting the link.
	- For example,  `git clone https://github.com/C4Q/ac-curriculum-web.git` will copy the project found at https://github.com/C4Q/ac-curriculum-web.git to your local computer

We can also ‘fork’ a repository, which remotely copies a repository to our GitHub account. In other words, if you fork someone else’s repository, you will have an exact copy of that project hosted on your own GitHub page. Forking is great if you want to use someone else’s project as a starting point, or if you want to contribute code to someone else’s project.

To fork a repository do the following: 
- In your browser, go to the GitHub page that you’d like to fork
- Click the ‘Fork’ button in the upper right

### Pulling and pushing
After you’ve cloned a repository to your computer you’ll need to be able to update your local copy if the remote repository changes. Additionally, you’ll need to be able to push changes from your local copy up to the remote copy, in order to update the project on GitHub. You can do this using the following commands:
- `git pull <remote-name> <branch-name>` 
	- will check for changes on our GitHub repository and pull down any new changes to our computer and merge them with our local files. For example, `git pull origin master`
 - `git push <remote-name> <branch-name>` 
	- Will push all of our local changes to our remote GitHub repository and merge them with our remote files. For example,  `git push origin master`

### Setting up a remote repository

There are a few things we'll need to do to use GitHub to host a remote repository:
 -  Create a new repository on GitHub by going to GitHub.com, clicking the ‘+’ icon in the upper right corner of the page, and selecting “New repository”
- In your command line: `git remote add origin <remote-url>` 
	- You can find the origin url on your github page by clicking on the repository after you’ve created it 
	- This will link our local repo to our remote repository
	- For example, `git remote add origin https://github.com/user/repo.git`
- We can then “push" changes from our local repository to the remote copy that Github is tracking for us

### Pull request basics
Pull requests (commonly called PRs) are a crucial tool for collaboratively writing code. A pull request lets us submit a proposed change to someone else’s repository, which they can then review and merge into their project (if they like the changes). Here are the steps for creating a pull request:

- On GitHub, navigate to the main page of the repository that you want to merge your code into.
	- In the "Branch" menu, choose the branch that contains your commits.
	- To the right of the Branch menu, click New pull request.
	- On the Compare page, click Create pull request.
	- Type a title and description for your pull request.
	- Click Create pull request.

You can view PRs by going to the github repo, clicking on the “Pull Requests” tab, then clicking on the specific PR. You can conveniently view the changes by clicking the “Files Changed” tab. After a PR is made, the team will review the code and add comments.  Typically there will be one team member (or a group of team members) who are in charge of reviewing and merging PRs.  If everything looks good the PR will then be merged and closed.

### TODO: GitHub pages and GitBot.io intro

### TODO/WORK IN PROGRESS: Exercise 
  
Two students work together to create really simple website that they’ll put on github and push to github pages using gitbot
- Most of the code for the website will be provided in a github repo. They will just need to go in and change a few details to customize it
	- Students will first have to clone the repo to their local comp
	- First student will make a new branch, make a change, commit it (and put in a PR? - maybe each make a few local changes first before trying to do first PR)
	- Other student will review PR and leave a test comment
	- Students will then switch roles
	- After site is completed they will deploy it using github pages

## Review and Wrapup
* What was easy? What was challenging?
* What made sense? What didn’t make sense?

## TODO: Further Reading
* Add links to further reading