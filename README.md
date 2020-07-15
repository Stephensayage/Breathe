# Breathe


## Table of Contents

- [OVERVIEW](#OVERVIEW)
  - [Group Dynamics](#Group-Dynamics)
  - [MVP Requirements](#MVP-Requirements)
  - [Post-MVP Possibilities](#Post-MVP-Possibilities)
  - [Presentations](#Presentations)
- [GETTING STARTED](#GETTING-STARTED)
  - [STEP 1. Read All Instructions](#STEP-1-Read-All-Instructions)
  - [STEP 2. Choose Your Czar](#STEP-2-Choose-Your-Czar)
  - [STEP 3. Set Team Expectations](#STEP-3-Set-Team-Expectations)
  - [STEP 4. Pitch Your Idea](#STEP-4-Pitch-Your-Idea)
  - [STEP 5. Project Management](#STEP-5-Project-Management)
  - [STEP 6. Version Control](#STEP-6-Version-Control)
  - [STEP 7. Get Hacking](#STEP-7-Get-Hacking)
  - [EVALUATION](#EVALUATION)
- [PLAGIARISM](#PLAGIARISM)

<br>

# OVERVIEW

> **Deployed Project Due:** 7/23/20 at 2:00 PM
> 
> **Presentation Preparation:** 7/24/20 at 11:00 AM
>
> **Final Presentations:** 7/24/20 at 1:00 PM

For your third project, you’ve already worked in small groups to accomplish various labs and exercises, but this time, we’re going to challenge you to partner with a group of your peers to build a full stack Mongo/Express/React/Node app, commonly referred to as the MERN Stack. 

<br>

## Group Dynamics

**This is meant to push you in a group environment.**

It is highly likely that you will find yourself working in a collaborative environment in your first job post-graduation. It's vital that you gain experience now, working together, setting expectations, communicating with your colleagues, and navigating team dynamics. It is expected that you will conduct yourself professionally. If a group member's behavior undermines the effort of the group or violates the General Assembly Code of Conduct, they may be removed from the group, with serious consequences.

In light of this:

- Strive for communication that is **A**ctionable, **S**pecific, and **K**ind.
- Communicate your expectations of your teammates.
- Make it work, and make it awesome.

![teamwork makes the dream work](https://media.giphy.com/media/CvizJerMeqRTa/giphy.gif)

<br>

## MVP Requirements

**In order to pass, ALL MVP requirements must be met.**

This project, like the previous two, will be a portfolio piece. For a portfolio piece to be complete, it **must** demonstrate an understanding of- and an ability to use- the tools and techniques introduced in this unit; it should be functional with sufficient complexity, meeting the following requirements:

### Planning <!-- omit in toc -->

- Have a thoroughly documented `Team Expectations` Google document.
- Have a **thoroughly** developed, **beautiful** `README.md` file.
- Take time for each team member to discuss where they feel strongest and weakest, in terms of coding ability.
- Create a Whimsical document to convey the data flow between your front-end and back-end, with component hierarchy included.

### Collaboration <!-- omit in toc -->

- Contribute equally.
- Have a solid understanding of the _entire_ project. (Even the features implemented by other team members.)
- Take time to pair program with teammates to reinforce learning.
- Be prepared to explain sections of code that were written by teammates.

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app client`
  - Have at least 6 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.

### Server (Back End) <!-- omit in toc -->

- Have working generic controller actions for full-CRUD (`show`, `create`, `update`, `delete`) using Express, Mongoose, and MongoDB.

### Styling <!-- omit in toc -->

- Be styled with CSS.
- Use flexbox (`display: flex`) or CSS Grid.
- Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase` and `kebab-case` conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes/comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via [Heroku](https://www.heroku.com).
- Deploy the MongoDB database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Procedural <!-- omit in toc -->

- Have _frequent_ commits from _every_ team member dating back to the _very beginning_ of the project. These commits should total to or exceed _50_.
- Use _effective_ and _safe_ branching and merging processes.

<br>

## Post-MVP Possibilities

Achieve your MVP with time to spare? Try aiming for some stretch goals. Communicate with your UX team to see what feature should be built next!

<br>

## Presentations

Finally, to get you familiar with multi-person presentations, the last requirement:

- Select a representative from the SEI team and the UX team. Each of these representatives will have 5 minutes of your 10 minute presentation to talk about your process, your goals, and your challenges over the course of the project.

<br>

# GETTING STARTED

## STEP 1. Read All Instructions

Yes, there's a lot here, but this was created with multiple generations of cohort and instructor input and contains instructions and tips that **will** make your project week easier. If you do not follow the instructions and consequently require assistance for an avoidable issue, we'll have to get out the shame bell.

![shame bell](https://thumbs.gfycat.com/VillainousCheapIndianelephant-max-1mb.gif).

<br>

## STEP 2. Choose Your Czar

Pick one person on the team to be the "Git Czar." This person will be responsible for managing your team's GitHub master branch, pushes, merges, and deployment. (Although one person is taking responsibility, you should all work together to support them and resolve any merge conflicts you run into.)

### STEP 2.1. Git, For The Czar <!-- omit in toc -->

This will be very similar to what we did in our morning [group-git-lesson](https://git.generalassemb.ly/sei-nyc-constellations/group-git-react) exercise. The only difference is the addition of a `development` branch for additional safety.

1. Have the Team Lead make a new repo in their **personal Github account.** 
1. Add a `development` branch on the remote repository: 
    ![](https://git.generalassemb.ly/sei-nyc-constellations/ux-sei-collab-p3/blob/master/assets/add-branch.png)
1. Now that you have a remote `development` branch let's go ahead and set it as the **default** branch of our repository. 
1. Your default branch is named `master`. If you have admin rights over a repository on GitHub, you can change the default branch on the repository. [Setting the default branch](https://help.github.com/en/github/administering-a-repository/setting-the-default-branch)
1. In Settings, in the left menu, click Branches.
1. Update the `development` to be the default branch.

    ![](https://git.generalassemb.ly/sei-nyc-constellations/ux-sei-collab-p3/blob/master/assets/dev-default.png)
1. Create branch protection rules like we did in our morning exercise: 
    - Click on settings and then branches
    - Add rule to dev branch
    - Check Require pull request reviews before merging
    - Check Require view from Code Owners
    - Save Changes

    ![](https://git.generalassemb.ly/sei-nyc-constellations/ux-sei-collab-p3/blob/master/assets/add-rules.png)

    >This will make it so the team lead has to review all changes and no one can accidentally push directly to master.

1. Share the link for your new repo with your teammates in Slack.
1. In GitHub, click on the **Settings** tab, and then navigate to **Collaborators & Teams**.
1. Add your teammates as collaborators. You will need their **personal** GitHub usernames.

    ![](https://git.generalassemb.ly/sei-nyc-constellations/ux-sei-collab-p3/blob/master/assets/add-collaborator1.png)
1. Your team members should have received an invitation to collaborate via email.
1. All other members should **clone** the new repo. **Do not fork!**

At this point, all members should be able to make their own branches. A few things to keep in mind:
  - When you go to push your code to the remote, remember to use the command `git push origin your-branch-name`.
  - When you are ready to make a pull request, double check that your head is set correctly. You should be making the PR on the `development` branch in your team lead's repo.
  - The team lead should now handle pull requests as outlined in [Group-Git-Lesson](https://git.generalassemb.ly/sei-nyc-constellations/group-git-react), but make sure they are all going to `development`, **NOT** `master`. 
  
Master should be reserved for fully tested, completed code that is ready for deployment. Heroku and Netlify both read from the master branch for deployment, so ensure that this branch is untouched apart from team-reviewed merges via a Pull Request from the development branch on GitHub.

<br>

## STEP 3. Set Team Expectations

Your group should take at least 30 minutes to create a team expectations document. This should include:

1. **Timeline:** An overview of every day and when you will be hacking with your team.
2. **Teammates:** Who's on the team, and your personal strengths and weaknesses.
3. **Team Values:** Communication preferences, goals, values.
4. **Team Practices:** Naming conventions, git branching practices, express routes.

> [Team Expectation Setting Template](https://docs.google.com/document/d/1TuvOuy0UQ42KGOza9IAGs8pkPfmoIlVP4Vj6OnJNGG4/edit?usp=sharing)

<br>

## STEP 4. Scope the UX design

Before you start coding away, your team must meet with instructors to help scope your project and determine MVP from the UX mockups.

**Your team must have the following items written up in the repository's `README.md` file to get approved.** 

1.  **Whimsical Diagram**: A link to the whimsical diagram to convey the data flow between your front-end and back-end, with component hierarchy included (remember to enable public link access)
2. **Team Expectations**: A link to your team's Google document that establishes timelines, communication preferences, code conventions, git practices, etc.
3. **Overview:** 4 to 5 non-technical sentences, summarizing the features, functions, and goals.
4. **MVP:** A link to your Trello or [GitHub Projects](https://github.com/features/project-management) board (See Step 5)
5. **Post-MVP:** Your goals for post-MVP based on the given prototype

<br>

## STEP 5. Project Management

- Create either a Trello board or a [GitHub Projects](https://github.com/features/project-management) board on your repo to prioritize and assign tasks. Common categories include `to do`, `in progress`, `done`, and/or `new`, `now`, `next`, and `later`.
  - Each group member should choose or be assigned tasks.
  - Break features into small, focused tasks. If a task can be made more granular, create a new task card on the project board describing the sub-tasks.
  - As work is done on a particular task, or if a feature is complete, report to your Git Czar to merge your branch and begin work on a new task.
    - Move the task card from `To do` to `In progress` to `Ready` when the feature branch can be merged into master.
    - A hidden challenge, you say? Pick a name for your team. Write it down in a fun typography and draw an astronaut doing something (SFW, please) next to your team name. This is your team's logo. Upload this to your project file before you pitch.

<br>

## STEP 6. Version Control

Confirm everyone on your team is running the same version of `node` and `npm` (`npm -v`, `node -v`). Once you're on the same versions, avoid updating throughout the course of the group project.

<br>

### STEP 6.1. Merging, For The Czar <!-- omit in toc -->

(**This is VERY important to avoid merge conflicts. Pay attention.**)

- Once a teammate or you have finished a feature, tested for compatibility, and it is considered ready to merge, there are some important steps to follow:
  1. Create a pull request **from** the completed branch **to** the development branch.
  2. Have the required number of teammates approve the merge.
  3. Merge.
  4. Alert all teammates to a new merge and request they run a `git pull origin development` to get the most updated code on their local environment. (Merge conflicts are inevitable, but this makes sure they're small and manageable. DO THIS EVERY TIME YOUR DEVELOPMENT IS UPDATED.)
  5. Before every subsequent merge, ensure your teammate has pulled the most updated development branch and resolved their conflicts.

Once you finish a significant portion of the application, and it has been fully tested and debugged, the Git Czar can then repeat these steps to merge the `development` branch into `master`. **NOTE: THIS SHOULD ONLY BE DONE BY THE CZAR AND WHEN FEATURES ARE COMPLETELY FINISHED**
<br>

## STEP 7. Get Hacking

Yay! Some tips for project week:

### Deploy Early and Often! <!-- omit in toc -->

### Getting Unstuck <!-- omit in toc -->

Remember, two things:

1. Don't hesitate to write messy code to solve short-term problems; you can always refactor later!
2. Read the documentation for whatever technologies you use! The docs often include a tutorial that can help you get started, and learning to read documentation is crucial to your success as a developer.

### Getting Support <!-- omit in toc -->

Each group will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between groups - there is _still_ no black market for tokens.**

Instructors will not be holding open office hours during project week. This is to give you the opportunity to solve issues and errors you run in to on your own and with your classmates. Shay, however, will still hold his hours as planned.

### Maximizing Effectiveness of Support Sessions <!-- omit in toc -->

Prior to using one of your tokens, we **strongly** recommend that you first check with each of your groupmates to try to resolve it. If you're still stuck, create an issue ticket. This will provide the instructor with a point of reference regarding your code and the issue you are having and will enable us to give you more effective guidance.

<br>

## EVALUATION

Your instructors will evaluate your project and determine if it is complete or
incomplete. We use the following rubric for our evaluation, but ultimately it is
up to your instructors as to whether your project is complete or incomplete.

We will evaluate your project according to the following criteria:

- **Code Quality:** Is the code well formatted? Are variable and function names
  semantic and sensible? Is the code easy to read and understand?
- **Technical Requirements:** How does the project stack up to the requirements
  for this project? Is the developer making use of the material we've covered in
  a way that makes sense?
- **Functionality:** Does the application work without errors or bugs? Does it
  present a complete app, where every feature is fully implemented in a way that
  makes sense?
- **Presentation:** Is there adequate documentation? Is the repository well
  organized and free of clutter?

### Hard Requirements <!-- omit in toc -->

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

# PLAGIARISM

Remember. We have a [**zero tolerance policy**]
