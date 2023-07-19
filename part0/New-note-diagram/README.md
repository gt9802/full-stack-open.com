```mermaid
sequenceDiagram
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

activate server

server->>browser: Status code 302
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: the css file
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: the JavaScript file
deactivate server

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]

deactivate server

Note right of browser: The browser executes the callback function that renders the notes


```

1.An HTTP POST request is made to the server address new_note . (form is sent as an HTTP POST)


2.The server responds to the request with HTTP status code 302. This is a so-called redirection request , i.e. redirection, with which the server prompts the browser to automatically make a new HTTP GET request to the location referred to in the Location header , i.e. the address notes .



3.So the browser reloads the notes page. The page load also triggers three other HTTP requests: loading the style file ( main.css ), the JavaScript code ( main.js ), and the raw data for the notes ( data.json ).