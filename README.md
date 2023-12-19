## Classroom Manager

This application has a single objective, to learn and train all the information from the Software Architecture Phase 1 course classes.<br /><br />

To see the **Architecture Design** or **Infrastructure Design** see the files:
- architecture-design.drawio
- infrastructure-design.drawio

### Prepare your environment

- Access the root of project

- Create the MariaDB database container:<br />
*docker compose -f ./src/adapter/driven/db/mariadb.yml up --detach*

- Install k6 to use:<br />
*choco install k6*

- Install dependencies:<br />
*npm install*

- Run project:<br />
*npm run start*

- Run k6:<br />
*npm run k6*

### Test it, please

The API server will up on **localhost:3000**<br />
Access the routes: <br />

- **GET** /courses
- **GET** /courses/:courseId
- **POST** /courses
- **PUT** /courses/:courseId
- **DELETE** /courses/:courseId
- **GET** /courses/:courseId/didactic-materials
- **POST** /courses/:courseId/didactic-materials
- **GET** /courses/:courseId/didactic-materials/:didacticMaterialId
- **PUT** /courses/:courseId/didactic-materials/:didacticMaterialId
- **DELETE** /courses/:courseId/didactic-materials/:didacticMaterialId
- **GET** /courses/:courseId/class-schedules
- **POST** /courses/:courseId/class-schedules
- **GET** /courses/:courseId/class-schedules/:classScheduleId
- **PUT** /courses/:courseId/class-schedules/:classScheduleId
- **DELETE** /courses/:courseId/class-schedules/:classScheduleId
- **GET** /courses/:courseId/professors
- **POST** /courses/:courseId/professors
- **GET** /courses/:courseId/professors/:professorId
- **PUT** /courses/:courseId/professors/:professorId
- **DELETE** /courses/:courseId/professors/:professorId
- **GET** /students
- **GET** /students/:studentId
- **POST** /students
- **PUT** /students/:studentId
- **DELETE** /students/:studentId
- **GET** /students/:studentId/academic-histories
- **POST** /students/:studentId/academic-histories
- **GET** /students/:studentId/academic-histories/:academicHistoryId
- **PUT** /students/:studentId/academic-histories/:academicHistoryId
- **DELETE** /students/:studentId/academic-histories/:academicHistoryId