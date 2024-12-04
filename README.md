# Non-Relational Database Design & Implementation using MongoDB
#### Project for NoSQL Databases at SETU
The project is based on the Rifstar space exploration game server network. The project includes four collections. The Nation collection contains data related to a nation. Nations might be a part of an Association like an alliance. For trading, we have a Currency collection to store currency data. A currency might be used by nations and associations.  The Universe is a complex and deep-nested collection that includes several layers like Galaxies and Celestials that might be controlled by Nations. Nations and Associations might have marked locations (important interest points). 

*Celestials might have other celestials orbiting around them, making it a recursive subdocument.

The implementation includes CRUD (Create, Read, Update, Delete) operations as well as aggregation pipelines.

## Diagram

![CA - Page 1](https://github.com/user-attachments/assets/5eb0a828-a0b1-4504-bbec-d1bf9dcad95e)

