# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |    |
| ----------------------------------------------------- | ------ |----|
| DB                                                    |        |    |
| - neondb created                                      | 10     | 10 |
| Routes                                                |        |    |
| - api CRUD endpoints added for orders                 | 10     | 7  |
| Server                                                |        |    |
| - sequelize or mongo dependencies added               | 10     | 10 |
| - successfully connect to db                          | 10     | 10 |
| Create Database Objects Definitions                   |        |    |
| - User                                                | 10     | 10 |
| - Product                                             | 10     | 10 |
| - Order                                               | 10     | 10 |
| Change your service classes use your Database objects |        |    |
| - User                                                | 10     | 7  |
| - Product                                             | 10     | 7  |
| - Order                                               | 10     | 7  |

## Total Score: 88 / 100

Overall this is excellent work.  Unfortunately, you had a bug that you seemed
to copy into three different places.  In the routes you did not require the service
so the endpoints were not working.  When I fixed this locally it is working.  Maybe
you missed a commit?
