# dRecords

**Project Description**
An online charting application allowing healthcare providers to access patient information and schedule follow-up appointments efficiently. The user can keep track of old entries and register new ones upon a change in the patient's condition. An integrated calendar allows the user to plan tasks and keep track of upcoming events.

**Problem solved** 

**Target audience:** Healthcare providers looking for an effective way of documenting their diagnosis and notes as well as keeping track of patients.


## User Stories
As a user (healthcare projessional) I want to
1. login
2. register
3. add patients
4. see all my patients on my main page
5. be able to search patients by name
6. see my calendar
7. be able to book an appointment with a patient
8. send a notification to the patient via phone or email
8. open a patient profile and see all relevant information
10. be able to chart on patient’s change in condition or consultation
11. be able to see previous notes left on this patient

**STRETCH USER Stories**
1. Filter list of patients by latest/earlier viewed
2. be able to fill a patient medial history form
3. Chat system for practitioners to communicate

### Project Git Workflow
NEVER code on Main!

**Create Feature Branches** 
git checkout -b feature/my-feature

**Main branch is your production branch, never directly work on it!**

**Starting a new branch**
1. git checkout main (Start new branches from the main branch)
2. git pull (Make sure you have the most recent version)

**Working on the branch** 
3. git checkout feature/my-feature (Make your feature) 
4. git add & git commit (Commit often with meaningful messages !) 
5. git push (So it's not only local)

**Merging main in the BRANCH**
6. git checkout main (To update it)
7. git pull 
8. git checkout feature/my-feature (Back to your feature) 
9. git merge main 
10. Fix conflicts if any 
11. git commit (commit the merge) 
12. git push (So it's not only local)

**Merging the branch back in MAIN** 
13. git checkout main (To merge your branch) 
14. git merge feature/my-feature 
15. Should not be any conflict since you cleaned them in the branch first 
16. git commit (commit the merge) 
17. git push (So it's not only local)

## NEW Workflow 
1. Step 1 - git pull origin main
Make sure to pull all recent changes to main to start the branch-off process.

2. Step 2 - Add a branch 
To add a branch 
```sh
git checkout -b branchname
```
3. Step 3 - work on feature branch
Commit as OFTEN as you can! Commits really matter. Don't do everything in 1 commit.

4. ### Feature complete!

Now that you are done, and everything has been commited, push the `BRANCH` into github.com

```sh
git push origin_branchname_
```
On github, create a pull request bym clicking `pull requests` button, then clicking the `new pull request` button on the apge. Pick your branch then fill out the form to generate pull request.

#this already checks for conflicts for me
#this also shows all file changes made


### If you have a merge conflict github will tell you

- There are 2 was to fix it, 1, github will five you tools (bad way)
- Switch to main, pull all changes, switch back to your branch, MERGE main into your branch and fix conflicts

Once you fixed them, push the branch back out, and your `pull request` will be updated.


#### Merging pull requests
#### Once reviewed and approved by a team member, merge the pull request by clicking green merge pull request button. Now everything will be added to main branch.
