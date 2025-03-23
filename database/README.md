# Blog Data for MongoDB

This folder contains the MongoDB data required to run the blog site. You can import this data into your MongoDB instance using the methods described below.

## Importing MongoDB Data

### Using MongoDB Dump

1. Download the MongoDB dump from this folder.
2. Use the following command to restore the dump to your MongoDB instance:
   ```bash
   mongorestore ./dump
