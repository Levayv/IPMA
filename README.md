# IPMA
Internship Program Management Application

###### Additional requirements
1. disable CORS inside browser (until fixed completely (get/post works fine , put/delete requests give CORS warning))
    * chrome: add executable this params
      --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
    * firefox: disable (switch to false , default is true) inside about:config 
      security.fileuri.strict_origin_policy
2. Set .env (create one with .env.example) files of both client(React) and server(Laravel) folders
   * REACT_APP_BACKEND_IP_PORT=localhost:8000
