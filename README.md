# java
### *IoT coffeemaker with superpowers*

These are the various source files used in my [hackathon project Java](http://challengepost.com/software/java-8xjm41). Here's a brief description of what they do:

#### http.agent.nut and imp.nut
Agent and device scripts to run on the Electric Imp

*You don't have to edit anything in here to get Java running.*
#### Everything inside JavaControl
Source for the PhoneGap/Cordova app GUI for the Imp API

*You will have to edit JavaControl/www/js/agenturl-template.js to connect the app to your Imp. You'll also have to build the app for your device.*
#### sketch.ino
Arduino sketch to relay (heh) voltages on pin 9 of the imp to the relay shield on the Arduino

*You don't have to edit anything in here to get Java running, but feel free to replace the Arduino with a relay that works directly with the Imp.*

## API overview
The API is *really* simple. There are only three methods:

- <agent url>?getstate: Gets the current state of the relay. Returns "yes" or "no".
- <agent url>?brew=start: Closes the relay to start the coffeemaker. Returns "Brewing commencement command sent...".
- <agent url>?brew=stop: Opens the relay to stop the coffeemaker. Returns "Brewing halt command sent...".
  
What did I tell you? Simple!

## Schematic
Here's a little schematic thing I made in [Fritzing](http://fritzing.org/):

![Fritzing schematic](https://raw.githubusercontent.com/okofish/java/master/schematic.png "Great idea, Jesse.")
