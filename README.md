# Github - Jenkins - Openshift Repo/Lab
![Pipeline Diagram](docs/pipeline.png)

This repo creates Openshift objects on-the-fly correlating to that branch.

In this lab you will need a few things to get started.
1. Access to Internet
2. Github Account
3. Access to an Openshift Cluster
4. A simple Node JS application (If you do not have one, you can grab one from here)

Flow of the lab:
1. Create an Openshift Project
2. Add Jenkins-Ephemeral application to the Openshift Project (using the Openshift Catalog).
2. Create the Jenkins Multi-Branch Pipeline Item in Jenkins to be our CI builder
3. Create the Openshift Template to invoke the openshift objects (parameterized for re-use).
4. Create the Jenkinsfile to define how the application should be built and deployed.
5. Add the Github Service to ensure push notifications are sent to Jenkins. 






Note:
In this lab we used the Multi-Branch pipeline in Jenkins. This allows us to grab the branch name from the Jenkins environment variable (branch_name).





For more help, reference the documents below:
1. [Openshift Templates](https://docs.openshift.org/latest/dev_guide/templates.html)
2. Groovy Scripting
3  Info on Node JS can be found here. 
