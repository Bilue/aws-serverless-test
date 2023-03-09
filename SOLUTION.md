## My Idea:
The task is required to build an API by using the lambda function. Since I have not built any API endpoints via the serverless framework so here is how I start the job
1. Find out the requirement
2. Draw a little draft on my paper to find out what components that requires to built
   1. There is many required components such as services, handler, data tranformer is missing, so I will draft them out first to see what I need
3. Start implement the function
4. Write unit test to test the function
5. Once all the unit test is passed, I will try to run it in local to see if works


### what to do if more time needed
1. I will try to add more unit test for the function to make the test coverage to 100%
2. Finish the uncompleted task: Implement the security check, such as JWT with lambda, or Authenticated API Gateway, etc
3. Try to containerize the local dev environment for the other developers' convenience.

### How to run in local
Since I have not deploy the API on the lambda so I just run the command below to run in local

1. ```npm install -g serverless@2  ```
2. ```npm install```
3. ```serverless invoke local --function weatherApi```
