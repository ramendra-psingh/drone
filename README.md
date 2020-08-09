# DRONE

# Architecture
- Tello IP: 192.168.10.1
- UDP Port: 8889
- Send Command & Receive Response
- Set up UDP client on PC
- Send "command" to the Tello via UDP Port 8889

# UI Dashboard

![Alt text](https://user-images.githubusercontent.com/44663781/89732755-8de3dd80-da6e-11ea-81cf-3a231322c3b7.png)

# How to run

- Run python app.py 
- Access url : http://localhost:5000/
- Select Drone actions and drop in Selected Actions Box
- Click on Start Button

```
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 548-567-052
127.0.0.1 - - [09/Aug/2020 18:25:11] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [09/Aug/2020 18:57:53] "GET / HTTP/1.1" 200 -
Taking action - command
Taking action - takeoff
Taking action - delay 5
Taking action - land
Closed the connection!!!
127.0.0.1 - - [09/Aug/2020 18:58:04] "POST /sendData HTTP/1.1" 200 -
```
