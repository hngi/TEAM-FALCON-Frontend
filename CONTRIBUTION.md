## CONTRIBUTION GUIDE FOR HNGI7 FOR TEAM FALCON
-----------------------------------------------

#### TO CONTRIBUTE

- Create a personal fork of the project repo on [Github](https://github.com/hngi/TEAM-FALCON-Frontend.git)

- Clone the fork to your local machine

- If you use https to clone
  `git clone https://github.com/{username}/hngi/TEAM-FALCON-Frontend`

- If you use ssh to clone
  `git clone git@github.com:username/hngi/TEAM-FALCON-Frontend.git`

- On your local system inside the cloned project, add the original repository as a remote called upstream.

  `git remote add upstream git@github.com:/hngi/TEAM-FALCON-Frontend.git`

• Create a new branch to work on! Branch from develop. **It is recommended for every new feature you work on make a new branch and work from there.**

`git checkout -b develop`

- Implement/fix your feature, comment your code.

- Follow the code style of the project, including indentation.

- If the project has tests,please run them!

- Write or adapt tests as needed.

- (This is not necessary, but can be considered) Squash your commits into a single commit with git's interactive rebase.
  Create a new branch if necessary.

- Push your branch to your fork on Github, the remote origin.

- From your fork open a pull request in the correct branch. Target the project's develop branch!

- To keep to update with the main repo, be sure to pull upstream changes into your local repository.

- This way you don't miss changes

`git pull upstream develop` // this fetches and merge the upstream branch immediately
