# IPMA
Internship Program Management Application

Additional requirements
1. disable CORS inside browser (until fixed completely (get/post works fine , put delete gets rejected))
    chrome: add executable this params
      --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
    firefox: disable (switch to false , default is true) inside about:config 
      security.fileuri.strict_origin_policy
2. add npm param for client (untill included in client environment file)
  REACT_APP_BACKEND_IP_PORT=localhost:8000
