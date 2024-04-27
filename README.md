# Express Server with Google Generative AI Integration

## Project Overview

This project combines an Express.js server with Google's Generative AI to create a web service for generating text responses based on prompts. Additionally, it includes a feature to track response history, providing users with a comprehensive tool for generating and managing text-based content dynamically.

## Project Components

1. **Express Server Setup**:
   - Utilizes Express.js, a Node.js framework for building web applications.
   - Configures dependencies such as `express`, `body-parser`, and `dotenv`.

2. **Middleware Configuration**:
   - Utilizes `body-parser` middleware to parse incoming request bodies in JSON format.

3. **Routes**:
   - Defines two routes:
     - `/generate`: A POST route that triggers response generation based on the provided prompt.
     - `/history`: A GET route that returns the response history.

4. **Google Generative AI Integration**:
   - Integrates Google's Generative AI library (`@google/generative-ai`).
   - Initializes a configuration object using the API key stored in the `.env` file.
   - Initializes a generative model (`gemini-pro`) using the configuration object.

5. **Response Generation Endpoint**:
   - Asynchronously generates a response based on the prompt received in the request body.
   - Tracks response history by pushing generated responses to the `history` array.
   - Sends the generated response back to the client in JSON format.

6. **Error Handling**:
   - Implements proper error handling to catch and manage exceptions during response generation.

7. **Running the Server**:
   - Configures the server to listen on the port specified in the `.env` file.
   - Upon server startup, logs a message to the console indicating that the server is running.

## Usage

1. **Setup**:
   - Clone the project repository.
   - Install dependencies using `npm install`.
   - Create a `.env` file and add your Google Generative AI API key and the desired port number.

2. **Running the Server**:
   - Start the server using `npm start`.
   - The server will now be running and ready to handle requests.

3. **Generating Responses**:
   - Send POST requests to the `/generate` endpoint with a prompt included in the request body.
   - The server will generate a response based on the prompt and return it in JSON format.

4. **Viewing Response History**:
   - Access the `/history` endpoint using a GET request to view the response history.
   - The server will return the response history in JSON format.

## Conclusion

This project showcases the integration of Express.js with Google's Generative AI to create a versatile web service for generating text responses. By following the provided setup instructions, users can quickly set up and deploy their own instance of the server. With features for response generation and history tracking, this project offers a valuable tool for dynamically generating and managing text-based content.
