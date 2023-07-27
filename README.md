### Microservices Blog Application

This is a simple blog application that has been built using a microservice architecture.

The blog application encompasses several distinct services, each serving a unique purpose. These services include the Comments Service, Posts Service, and a Query Service. It also utilizes an event-bus that is responsible for communicating events between the services. It recieves and event and then sends it to all the services that are listening for that event.

The Comments and Posts services manage and manipulate data related to comments and posts, respectively. The Query service is responsible for aggregating all the data from the other services and storing it in a single database. The Query service is also responsible for serving the data to the client. 
The Client is a React application that is served by the client service. The client service is responsible for serving the React. 
