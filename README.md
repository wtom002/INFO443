# INFO 443 Software Architecture
## Code Structure Analysis
### Identify the architectural elements, their purposes, and relationships/dependencies
This is a fitness website that allows users to share their share and find the perfect workouts.
With Motion, users can upload workouts and other users can search for the desired workouts based on the available categories in the nav bar and the search bar. It was built with React. The application was built by INFO 340 Winter 2023 AA Group 5 consisting of members William, Mia, Justin, Matthew, and Alexey. For the project Motion, the levels of abstraction focus on various modules for it is a larger React system as a web application.

#### High-Level Application Modules:
1. Search Module:
   -  Description: The Search Bar module is a user interface component. It allows users to search for types of workouts based on various filters such as weight training, cardio, and flexibility. This module is essential for helping users find workouts that match their specific fitness goals and preferences.
   - Characteristics: Allows users to enter search queries and select workout type filters, initiating a search that communicates with the backend, presents results, and handles user interactions and errors.
3. Upload Module:
   - Description: The Upload Module is a user interface component within the fitness and workout application that enables users to contribute content to the system. Users can tag, upload images, and provide descriptions for various types of workouts. This functionality allows users to expand the database of available workouts for others to search and discover.
   - Characteristics: Allows users to tag, upload images, provide workout descriptions, and categorize their content, expanding the system's database for the Search Bar to search, with features for privacy settings, content validation, and user engagement.
#### Component Modules:
1. Workout Card Component:
   -  Description: The Workout Card Component is a user interface element. It displays information about a specific workout, making it easy for users to view, select, and perform exercises. This component is a fundamental part of the application's user interface, enabling users to access and follow workout routines.
   -  Characteristics: Presents workout details, exercises, media elements, and interactivity for users to select and engage with workout routines. Connected to a workout database and is designed with responsiveness and accessibility in mind.
#### Routing Modules:
1. Firebase:
   -  Description: a comprehensive mobile and web application development platform provided by Google. Offers a wide range of tools and services to help developers build high-quality apps, including cloud-based databases, authentication, hosting, and real-time data synchronization.
    - Characteristics: Offering real-time databases, authentication, cloud hosting, analytics, and a range of other services that facilitate the development of secure, scalable, and real-time mobile and web applications.

<img  alt="INFO443 UML Component Diagram" src="https://github.com/wtom002/INFO443/assets/63918959/53fdce2a-7bd0-46c3-9f0e-0d884faebab5">

### Provide a walkthrough of the code's process flow (not the user flow!)
The application initializes necessary dependencies, including Firebase for backend services and the necessary frontend libraries/frameworks for user interface development.

#### Search Module:
  - Frontend Handling: The frontend sends a request to the backend, passing the search queries and filters. The Search Module displays a loading state to indicate that the search is in progress.
  - Backend Processing: The backend, using Firebase services, queries the workout database based on the user's search parameters. Results are retrieved, and the backend sends them back to the front end.
  - Results Presentation: The Search Module updates the UI to display the search results, including Workout Card Components for each workout.

#### Upload Module:

  - Frontend Handling: The front end validates user inputs, ensuring they meet content requirements. It sends a request to the backend, uploading the workout details, and images to Firebase.
  - Backend Processing: The backend stores the uploaded workout content in the Firebase real-time database, associating it with the user's profile.

#### Workout Card Component:
  - Display: The Workout Card Component retrieves workout details from the database and displays them in a user-friendly format.
  - Interactivity: Users can click on a Workout Card to view detailed information about the workout or start a workout session.
#### Firebase (Backend):
  - Real-time Database: Firebase real-time database stores workout data, ensuring that changes are instantly reflected across all connected clients. The database is queried for search results and updated with newly uploaded workouts.
  - Hosting: Firebase hosting serves the frontend application, providing a scalable and reliable hosting solution.
  - 
<img alt="INFO443 UML Sequence Diagram" src="https://github.com/wtom002/INFO443/assets/63918959/7e122221-be34-44de-b12f-45444bbeadf4">

### Architecture Assessment


#### Code Smell #1 Long Functions:
This deficiency is found in our code several times. Long Functions are when there are excessively long functions or methods in the codebase. This issue would lead to other smells and make the code more challenging to understand, maintain, and debug. Our standard is to break down the long function into smaller, more focused functions, each responsible for a specific task. By doing so, it can promote modularity and make the code easier to understand.

#### Code Smell #2 Unused Variables: 
Another deficiency that is found in our code is unused variables. This code smell refers to the presence of variables in the codebase that are declared but not used anywhere. This smell could lead to confusion, increased code complexity, and potential maintenance challenges for both the readers and the developers. Our standard is to remove unnecessary variables and potentially adopt consistent naming conventions for variables. This can help distinguish between variables that are intentionally unused and those that were meant for future use.

#### Code Smell #3 Direct DOM Variations: 
Direct DOM Variations is also a code smell that is evidently present throughout our code. This is because our Document Object Model is done directly in the application code, which lacks structure or abstraction. Manipulating the DOM directly without proper organization can lead to various issues which include readability as involves verbose and low-level operations. This makes it harder for developers to understand the purpose and flow of the code. Our standard for this code smell is to use a component-based architecture, such as React, to abstract away DOM manipulations. This allows the components to encapsulate both the structure and behavior, making the code more modular and readable.

#### Code Smell #4 Unnecessary commenting: 
One of the other code smells that is present in the codebase is unnecessary commenting. Similar to unused variables, unnecessary commenting is a smell that could lead to confusion, increased code complexity, and potential maintenance challenges for both the readers and the developers. To fix this, remove unnecessary comments and potentially adopt more easy-to-read code.

#### Code Smell #5 Dead code (Article.js & PostInfo.json): 
The dead code coding smell is seen on our code when there is code that is no longer actively executed or reachable during the program's execution. Our standard is to get rid of all the dead code for it may make the codebase harder to read and understand, as developers may be confused about the purpose or functionality of the unused portions.

#### Code Smell #6 Unused Imports: 
Another of the other code smells that is present in the codebase is unused imports. Unused imports are a smell that could lead to confusion, increased code complexity, and potential maintenance challenges for both the readers and the developers. To keep the standard and fix this, remove these imports and see why they are there.

## Unit Testing
The tests written were to test the basic functionality of the main components of the application. We chose to target and test the Upload.js, HomePage.js, SearchBar.js components along with one of the pages that were populated with user posts as we felt these were the most encompassing parts of the application. Most of the tests check for basic things such as default rendering and basic functionality that is typically expected from the component.

**PostPage.test.js**
1. Renders the Weight component with a title
- Description: This test ensures that the Weight component is rendered, and it contains a title with the text "Weight."
- Test Code:

2. Renders the SearchBar

- Description: This test verifies that the Weight component renders the SearchBar component.
- Test Code:


3. Renders the WorkoutCardList component

- Description: This test checks if the WorkoutCardList component is rendered with the specified renderedCardsArray prop.
- Test Code:


**HomePage.test.js**

1. Renders Home component
  - Description: This test ensures that the Home component is rendered, and it contains an element with the label "Home Page."
  - Test Code:

2. Scroll button click scrolls down the page
  - Description: This test verifies that clicking the scroll button triggers a smooth scroll down the page. It uses the fireEvent function to simulate a button click and checks the window.scroll function is called with the expected parameters.
  - Test Code:

3. Renders the "About Us" section
- Description: This test checks if the Home component renders the "About Us" section.
- Test Code:

**Upload.test.js**
1. Renders Upload component
  - Description: This test ensures that the Upload component is rendered, and it contains an element with the label "Upload Form."
  - Test Code:

2. Handles form input changes
  - Description: This test checks if the Upload component handles changes in the input fields for the username and title. It uses the fireEvent function to simulate input changes and asserts that the input values are updated accordingly.
  - Test Code:
  - 
3. Handles category and subcategory selection
  - Description: This test verifies that the Upload component correctly handles changes in the category and subcategory selection. It uses the fireEvent function to simulate changes and asserts that the selected values match the expected values.
  - Test Code:

4. Handles file input change
  - Description: This test checks if the Upload component correctly handles changes in the file input. It uses the fireEvent function to simulate a file input change and asserts that the preview image source is updated accordingly.
  - Test Code: 

**Search.test.js**

1. Renders SearchBar component
  - Description: This test ensures that the SearchBar component is rendered, and it contains an element with the label "Search Bar."
  - Test Code:

2. Should handle input change
  - Description: This test checks if the SearchBar component correctly handles changes in the input field. It uses the fireEvent function to simulate an input change and asserts that the input value is updated accordingly.
  - Test Code:


3. Should filter the array correctly with searchBarSort
  - Description: This test verifies that the searchBarSort function correctly filters an array based on a search term. It uses a sample array and checks if the filtered result matches the expected output.
  - Test Code:


## Code Refactoring
-  Refactoring for Code Smell #1 Long Functions:
  Split long functions into smaller functions and remove unnecessary functions.
-  Refactoring for Code Smell #2 Unused Variables:
  Removed unused variables and refactored code with unnecessary data structures/variables.
- Refactoring for Code Smell #3 Direct DOM Variations:
  It no longer directly changes the DOM instead uses and changes state variables.
- Refactoring for Code Smell #4:
  Removed unnecessary comments from the entire codebase.
- Refactoring for Code Smell #5 Dead code (Article.js & PostInfo.json):
  Removed unreachable/unused code, components, and files from the codebase.
- Refactoring for Code Smell #6 Unused Imports:
  Removed unused/dead imports from all components.

