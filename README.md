# Password Manager

## Application Description

My application is a password manager designed to store one user in a local database on the device. The rest of the data is saved in an external API. This application offers various features to enhance the security and management of your passwords.

## Features

### Secure Password Generation

- Automatically generate secure passwords.
- Save passwords with a name for easy identification.

### Cybersecurity Tips

- Access a section with cybersecurity tips to educate the user.
- Stay informed about best practices to protect your data.

### Professional Assistance

- Request help from cybersecurity professionals by sending your questions.
- Receive notifications about the status of your questions and the responses received.

## Notifications

- View the questions you have asked.
- Check the current status of your queries and the provided answers.

# API Setup and Configuration

This guide provides instructions to set up and run the API using Docker, Visual Studio Code, and SQL Server.

## Prerequisites

- Docker: Download and install Docker from [here](https://www.docker.com/products/docker-desktop/).
- Visual Studio Code: Ensure you have Visual Studio Code installed.
- Node.js and npm: Ensure you have Node.js and npm installed.

## Steps to Setup the API

### 1. Install Docker

Download Docker from the [Docker website](https://www.docker.com/products/docker-desktop/) and follow the installation instructions for your operating system.

### 2. Open API Project in Visual Studio Code
Run the following command to clone the repository of api
[linkapi](https://github.com/MaxYRGZ/node-sqlserver-restapi.git)
```bash
git clone https://github.com/MaxYRGZ/node-sqlserver-restapi.git
```

1. Open Visual Studio Code.
2. Open the folder containing the API project.

### 3. Install Required npm Packages

Open the terminal in Visual Studio Code and run the following commands to install the required npm packages:

```bash
npm i express mssql cors dotenv morgan
```
Install nodemon as a development dependency:
```bash
npm i nodemon -D
```
### 4. Setup SQL Server with Docker
Run the following command in the terminal to start a SQL Server instance using Docker:
```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong#Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```
Verify that the Docker container is running:
```bash
docker ps
```
### 5. Connect to SQL Server using Visual Studio Code
1. Install the SQL Server (mssql) extension in Visual Studio Code.
2. Click on the SQL Server extension icon in the sidebar and select Add Connection.
3. In the connection settings, enter the following details:
- Server name: localhost
- Authentication Type: SQL Login
- User name: sa
- Password: yourStrong#Password
4. Check the option to save the password.
5. Click Connect.
6. A notification will appear at the bottom; click Enable Trust Server Certificate.
### 6. Execute Database Scripts
Navigate to the folder containing the API project in Visual Studio Code. Locate the database folder and find the db.sql file. Execute the SQL scripts contained in this file to set up the database schema and initial data.

Running the API
After completing the above steps, you can start the API by running:
```bash
npm run dev
```
```bash
adb devices
```
```bash
adb -s emulator-5554 reverse tcp:3000 tcp:3000
```
# Installation Instructions

## Prerequisites

The first step to running the application is to install Android Studio. You can download it from the following link:
[Android Studio](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwsPCyBhD4ARIsAPaaRf0lhgD3uxM9jl7r5KaKuqQcIeQbhjDsI_YxKmWjoDhpUwAQarvC8FAaAi7CEALw_wcB&gclsrc=aw.ds&hl=es-419)

## Steps

1. **Install Android Studio**
   - Download and install Android Studio from the link above.

2. **Create a Virtual Device**
   - Open Android Studio and create a virtual device.

3. **Clone the Repository**
   - Clone the following repository into a folder:
     ```bash
     git clone https://github.com/MaxYRGZ/ciberguardwebservice.git
     ```

4. **Open the Project**
   - Open the cloned folder in Visual Studio Code.

5. **Start the Application**
   - Ensure Docker is running and all prerequisites are met.
   - Run the application with the following command:
     ```bash
     npm start
     ```
   - With the virtual device running, you will be able to see the application on the emulated mobile device.

