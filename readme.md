# _Cyber4s_

### Topcis:

1. Creating Databases & Collections using mongoose
2. Create, Read, Update, Delete (CRUD) in MongoDB - Finding, Inserting, Deleting & Updating Elements
3. Data Types - An Overview
4. Query Selectors
5. Schemas

## Task - branch

End product - Student information system database

- I connected to a mongo DB, and used a database named `mongo_practice`.

### Query / Find Documents:

query the `students` collection to

- get all students
- get all students with name set to "Ido"
- get all students where courses include "Law"
- get all students where courses include "Java" and gender set to "Female"
- get all students where birth > 05/05/1998
- get all students where phone starts with 054
- get all students where phone starts with 054

### Update Documents

1. add a **JavaScript** course to the students where name set to "Yahalom"
2. update the **birth** to **02/12/1998** where name set to "Koren"

### Text Search

1. find all students that have a name that contains the letter "o"
2. find all students that have a surName that contains the letter "h" or "y"

### Delete Documents

1. delete the student where name set to "Ido"
1. delete the student where date set to "02/04/1998"

## Relationships

End product - Relationships information system database

I connected to a mongo DB, and used a database named `mongo_practice`.

### Querying related collections

- find all users
- find all posts
- find all posts that was authored by "GoodGuyGreg"
- find all posts that was authored by "ScumbagSteve"
- find all comments
- find all comments that was authored by "GoodGuyGreg"
- find all comments that was authored by "ScumbagSteve"
- find all comments belonging to the post "Reports a bug in your code"
