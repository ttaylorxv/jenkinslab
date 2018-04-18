# Github - Jenkins - Openshift Repo/Lab
![Pipeline Diagram](docs/pipeline.png)

This repo creates Openshift objects on-the-fly correlating to that branch.

In this lab you will need a few things to get started.
1. Access to Internet
2. Github Account
3. Access to an Openshift Cluster
4. A simple Node JS application (If you do not have one, you can grab one from [here](https://github.com/ttaylorxv/nodejs-jenk).)

Flow of the lab:
1. Create an Openshift Project
2. Add Jenkins-Ephemeral application to the Openshift Project (using the Openshift Catalog).
2. Create the Jenkins Multi-Branch Pipeline Item in Jenkins to be our CI builder
3. Create the Openshift Template to invoke the openshift objects (parameterized for re-use).
4. Create the Jenkinsfile to define how the application should be built and deployed.
5. Add the Github Service to ensure push notifications are sent to Jenkins. 


The Openshift Template:
A template describes a set of objects that can be parameterized and processed to produce a list of objects for creation by Openshift. The objects to create can include anything that users have permissions to create within a project, such as services, build configurations, and deployment configurations.

The Template can be broken down into 4 layers:
1. Abstractions (i.e. routes, services, secrets, etc.)
2. Builds
3. Images
4. Deployments

For more info on the different layers: [template layers](docs/template_definitions.md)

Note: A template will be defined in Json or Yaml format.

If you take a quick glance at the template, you might notice some variables. In order to make the template reusable, we must parameterize it.



Note:
In this lab we used the Multi-Branch pipeline in Jenkins. This allows us to grab the branch name from the Jenkins environment variable (branch_name).





For more help, reference the documents below:
1. [Openshift Templates](https://docs.openshift.org/latest/dev_guide/templates.html)
2. [Groovy Scripting](http://groovy-lang.org/single-page-documentation.html)
3. [Node JS](https://nodejs.org/en/docs/)
