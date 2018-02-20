#!groovy
import hudson.model.*


try {
    node {
 
        stage('checkout-and-test') {
            
            checkout scm
            def flag = true;
            /*
            def branch = BRANCH_NAME.toLowerCase();
            def source = BRANCH_NAME
            if (branch.contains('/')){
                branch = branch.substring(branch.lastIndexOf("/") + 1)
            }
            sh """oc process -f nodejs.json -p NAME=$branch -p SOURCE_REPOSITORY_URL=https://github.com/ttaylorxv/nodejs.git -p SOURCE_REPOSITORY_REF=$source -lapp=$branch | oc apply -f -"""
            sh """oc start-build $branch"""
            */         
            //openshiftBuild apiURL: '', authToken: '', bldCfg: """$branch""", buildName: '', checkForTriggeredDeployments: 'true', commitID: '', namespace: '', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
            if (flag){
                // Read payload which is a submitted JSON request from github and write to temp file
                sh 'echo $payload >> tempGitFile.json'
                // From the temp file place into variable
                def fromgithook = readJSON file: 'tempGitFile.json'
                // find branch name and set to lower case for environment variables
                def branch = fromgithook.ref
             
                branch = branch.substring(branch.lastIndexOf("/") + 1)
                def source = branch
                branch = branch.toLowerCase()
                sh """oc process -f nodejs.json -p NAME=$branch -p SOURCE_REPOSITORY_URL=https://github.com/ttaylorxv/jenkinslab.git -p SOURCE_REPOSITORY_REF=$source -lapp=$branch | oc apply -f -"""
                sh """oc start-build $branch"""
            }
        }
        
    }
} catch (err) {
    echo "in catch block"
    echo "Caught: ${err}"
    currentBuild.result = 'FAILURE'
    throw err
}
