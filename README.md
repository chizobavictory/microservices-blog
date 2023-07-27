### Microservices Blog Application
This is a simple blog application that has been built using a microservice architecture.

The blog application encompasses several distinct services, each serving a unique purpose. These services include the Comments Service, Posts Service, and a Query Service. It also utilizes an event-bus that is responsible for communicating events between the services. It recieves and event and then sends it to all the services that are listening for that event.

The Comments and Posts services manage and manipulate data related to comments and posts, respectively. The Query service is responsible for aggregating all the data from the other services and storing it in a single database. The Query service is also responsible for serving the data to the client. 
The Client is a React application that is served by the client service. The client service is responsible for serving the React. 

<!-- Whenever users submmits a comment or a post, the service that recieves the request will emit an event to the event-bus. The event-bus will then send the event to all the services that are listening for that event. The services will then update their data and emit an event to the event-bus. -->

Whenever users submits a comment, the comment service is going to emmit an event over to the event bus of "comment created", the event-bus will take the event and send it out automatically to all the differenct services in the app including the comment service. 
The comment and post service althought they recieve it they do not process this event, the query service does the processing and it takes the event to understand the comment created and it takes it and stores it inside a local data structure 
