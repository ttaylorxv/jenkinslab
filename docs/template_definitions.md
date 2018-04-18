# Template Definitions

### - Route
  Exposes a service to external users giving them an externally reachable hostname, ex: www.google.com
  
  A route may consist of:
  - Name of the route
  - Labels to describe the Route
  - DNS name used to access our application
  - Defines the service that this route is associated with


### - Service
  Serves as a internal load balancer. Identifies a set of replicated pods in order to proxy the connections it receives to them.
  The application is not externally accessible yet until a Route is created.

  A service may consist of:
  - Name of service
  - Metadata 
  - Ports where the service will be listening
  - Port in the pod to route the network traffic to
  - Selector for determining which pods should be target for this service


### - Build Configuration:

  A Build Config object is the definition of the entire build process.

  A build configuration may consist of:
  - A source description
  - A strategy for building (Source to Image, Docker, Custom)
  - An output description
  - A list of triggers 


### - Deployment Configuration
  
  A deployment configuration may consist of:
  - Replication controller template that describes the application to be deployed
  - Default replica count for how many instances will be deployed and running
  - A deployment Strategy which will be used to execute the deployment
  - A set of triggers which cause the deployments to be created automatically.


### - Image Stream:

  For every build, Openshift will create a new version of the image (will always be tagged as the latest) and added to the Imagestream to help invoke a new version of the application.
  
  An Image stream may consist of:
  - Name of the Imagestream
  - Label to describe the resource
  - Image stream specifications
  - Tags
