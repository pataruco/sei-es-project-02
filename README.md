# Beach Finder
## Team composition:
- José Manuel
- Ismael
- Carmen
## Theme selection:
Spain has approximately 7,905 kms of coastline, bathed by the Cantabrian Sea, the Mediterranean and the Atlantic Ocean. As far as 2019, tourism accounted for 12.2% of national GDP, and our beaches have always been the biggest claim.
Only these two data, among others, show the importance of the topic, and our decision to select the topic.
### API Selection
We located the following free source API that responded to our needs:
https://opendata.arcgis.com/datasets/84ddbc8cf4104a579d579f6441fcaa8a_0.geojson
## Project title:
Playas de España
###  Operation:
The objective of the project is to search for an API, all possible information about the beaches of Spain, through a form of search engine
We have taken as the object of the API, the concept "properties", and looked for the beaches by the argument "Termino_mu". The information you have to give us back is all the cities with coasts, and also all the beaches that that city may have.
The information selected to give us back what we find the most relevant information: the name of the beach, a small description, its degree of urbanization, the type of sand, if it has a blue flag, if you have disabled access and some comments that are interesting.
The query will be made on the access and welcome page, and the data is dumped on a different page.
## Tools used:
JSX
REACT 
SASS
NODEJS
## Proyect difficulties
In order to manage the results in a second page routing the information we found problems resolved.
Resizing the disabled access and blue flag pictures solved by including it in a className and resize them.
Find an open Api rest that return Json and appropiate to our likes and expecifications to our proyect.

#### To run
The URL is the root of the Home component. In Home is the event hanleChange, which listens to the input, which when it hears it, generates the submit element that changes the path to another page. The new page is inside the searchString form, and we place everything lowercase so that there are no problems with the URL, in the data download.
Going to the other page, with a dynamic path, rensenriza beaches, and with the Loading array, runs in a loop looking for the Boolean, yes it is true, prints. And if not, it doesn't show anything.
For the first impression it calls fetch, goes to the API and takes all the data and brings it to the array, with the string method, by means of a Boolean system, iterates all over the beaches, and if it is true, with the new array beachesToShow we filter them and show them. And finally with stBeachesToRen, which is a session of immutability, it copies it with the filtered beaches and shows us each of the beaches of that particular municipality.
