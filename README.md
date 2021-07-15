Development process 🚀
1. Creating a branch 🐙
When it is time to start a task, you must create a new branch based on the main one, its name must follow the following pattern:

<BRANCH_TYPE>/<PROJECT_KEY>-<TICKET_ID>
Types of branches:

feature: It is used when new components or functions are developed.

bugfix: It is used to correct an unwanted state of a production version or that affects other areas of development.

2. Change Log 🐾
We need to keep track of all the changes in the components, for this we need to keep the CHANGELOG.md file updated, with the following structure.

## [X.Y.Z](PR_URL) (YYYY-MM-DD) -> Date and Pull Request of the last change
**Added/Fixed**
- [PROJ-ZZZ](TICKET_URL) <Description of the change> ->  And ticket URL
Example:

[0.1.0](https://github.com/MinTic-Web-Develop/Backend_web_project/pull-requests/1) (2021-07-15)
**Added**
- [IV-01] Adding products services. 
3. Certify your changes 🏆
Ensuring that the changes work as expected is a two-step process:

Local tests: Each developer must test the changes on their machines.

Development testing and quality control: When the developer is sure to promote the changes, they must create a PR, must be approved by other teammates and finally merged using --squash.

4. Who can merge branches? 👩‍💻 👨‍💻
BE leader: Juan David González - TOYCRESJDGM

FE leader: ???