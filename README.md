# Algo Energy FastAPI

successfully developed a API that manages assets and performance metrics. Our API includes advanced functionalities such as aggregating costs and failure rates. Additionally, we prioritized security by implementing a jwt based authentication system, ensuring secure and controlled access to the API.

## Installation

**Clone the Repository:**

Open your terminal/Git Bash and run the following command to clone the repository:

```
git clone https://github.com/vlykamol/AlgoEnergy.git
```

Change into the project directory using the `cd` command:

```
cd AlgoEnergy
```

**Install Dependencies:**

Install the project dependencies using a package manager like npm or yarn. Include both commands if applicable:

```
npm install
# or
yarn install
```

**Configure Environment Variables:**

project requires environment variables, 

create a `.env` file in the root directory (inside AlgoEnergy directory) and set the necessary variables. 

```
PORT = 3000
MONGO_URI = mongodb+srv://<user>:<password>@cluster0.shroz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_ACCESS_TOKEN = "asdfghjkl"
```

add MONGO_URI with username and password to the database in `<user>` and `<password>` , or use local MongoDB database uri

JWT_ACESS_TOKEN value with long secrete key

**Install Dependencies:**

Install the project dependencies using a package manager like npm or yarn.

```
npm install
# or
yarn install
```

**Run the Application:**

Start the application using the given command.

```
npm start
# or
yarn start
```

**Access the Application:**

Once the application is running, open a web browser and navigate to the specified address (e.g., [http://localhost:3000]()).

## Usage

all test apis are 

### User Routes

#### 1. Sign Up (Create User):

* **Endpoint:** `POST /user/create`
* with body
* ```
  {
      "email" : "valay@algoEnergy.com",
      "password": "1234"
  }
  ```

#### 2. Sign In:

* **Endpoint:** `POST /user/login`
* with body
* ```
  {
      "email" : "valay@algoEnergy.com",
      "password": "1234"
  }
  ```

  returns
* ```
  {
      "accessToken": "xxxx.yyyy.zzzzz",
      "email": "valay@algoEnergy.com"
  }
  ```

  access token is used in Auth with Bearer Token

### Asset Routes

#### 1. Create Asset:

* **Endpoint:** `POST /asset/create`
* Auth header BearerToken from login
* ```
  "Authorization: Bearer yourToken"
  ```
* with body
* ```
  {
      "initialCost" : 100,
      "location" : {
          "latitude" : 70,
          "longitude" : 23.5
      },
      "name" : "turbine 4",
      "purchaseDate" : "02/03/2024",
      "status" : "working",
      "type"  : "hydro"
  }
  ```

#### 2. Get Asset by ID:

* **Endpoint:** `GET /asset`
* with body
* ```
  {
      "_id" : "_id"
  }
  ```

#### 3. Get All Assets:

* **Endpoint:** `GET /asset/getAll`

#### 4. Update Asset:

* **Endpoint:** `put /asset/update`
* with _id in body and parameters which need to be updated

#### 5. Delete Asset:

* **Endpoint:** `DELETE /asset/delete`
* with _id in body

### Performance Metrics Routes

#### 1. Get Performance Metric by ID:

* **Endpoint:** `GET /performance/get`
* with _id in body

#### 2. Get All Performance Metrics:

* **Endpoint:** `GET /performance/getAll`

#### 3. Create Performance Metric:

* **Endpoint:** `POST /performance`
* 

#### 4. Update Performance Metric:

* **Endpoint:** `PUT /performance/:id`
* 

#### 5. Delete Performance Metric:

* **Endpoint:** `DELETE /performance/:id`
* 

#### 6. Aggregations:

##### Total Maintenance Cost:

* **Endpoint:** `GET /performance/aggregation/totalMaintenanceCost`

##### Assets with Highest Failure Rate:

* **Endpoint:** `GET /performance/aggregation/highestFailureRateAssets`
* 

##### Average Downtime:

* **Endpoint:** `GET /performance/aggregation/averageDowntime`

## Contributing

Explain how others can contribute to your project.

## License

State the license under which your project is released.

## Acknowledgements

Give credit to any resources, tools, or individuals that helped you during the project.
