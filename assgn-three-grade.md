# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (70 points)

| Requirement                                                 | Points |     |
| ----------------------------------------------------------- | ------ | --- |
| Github                                                      |        |     |
| - code is on the main branch                                | 5      | 5   |
| - node_modules is not in the repository                     | 5      | 5   |
| Routes                                                      |        |     |
| - api CRUD endpoints added for users                        | 10     | 7   |
| - api CRUD endpoints added for products                     | 10     | 7   |
| - api login endpount added                                  | 10     | 0   |
| - routes are refactored router modules                      | 15     | 15  |
| Data                                                        |        |     |
| - user data is moved under data folder                      | 5      | 5   |
| - product data is moved under data folder                   | 5      | 5   |
| Service Classes                                             |        |     |
| - create a User Service for CRUD operations                 | 10     | 5   |
| - create a Product Service for CRUD operations              | 10     | 5   |
| - create an AuthenticationService for simple authentication | 15     | 8   |

## Total Score: 67 / 100

### Comments:

You are on the right track here but unfrotunatley the end points fail.

User endpoints are broken becasue you named the data userData but reference them as user.

Products endpoints don't work beccause you try to assign the JSON to
service. YOu need to require("products.service")

`const ProductsService = JSON.parse(fs.readFileSync('./data/fakeProducts.json', 'utf8'));`

Authenitcaion service is there endpoint is not implemented.
