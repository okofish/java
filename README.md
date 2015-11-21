# java
### *IoT coffeemaker with superpowers*

![](https://raw.githubusercontent.com/okofish/java/master/images/logotype.png)

These are the various source files used in my [hackathon project Java](http://challengepost.com/software/java-8xjm41). Here's a brief description of what they do:

#### http.agent.nut and imp.nut
Agent and device scripts to run on the Electric Imp

*You don't have to edit anything in here to get Java up and running.*
#### Everything inside JavaControl
Source for the PhoneGap/Cordova app GUI for the Imp API

*You will have to edit JavaControl/www/js/agenturl-template.js to connect the app to your Imp. You'll also have to build the app for your device.*
#### sketch.ino
Arduino sketch to relay (heh) voltages on pin 9 of the imp to the relay shield on the Arduino

*You don't have to edit anything in here to get Java up and running, but feel free to replace the Arduino with a relay that works directly with the Imp.*
#### button/photon.ino
Code for a Particle Photon-powered button that toggles the coffee maker state.

*You will need to put your Imp agent ID in the `agent` variable on line 11. You can find the ID above the agent code in the online Imp IDE.*

## API overview
The API is *really* simple. There are only three methods:

- <agent url>?getstate: Gets the current state of the relay. Returns "yes" or "no".
- <agent url>?brew=start: Closes the relay to start the coffeemaker. Returns "Brewing commencement command sent...".
- <agent url>?brew=stop: Opens the relay to stop the coffeemaker. Returns "Brewing halt command sent...".
- <agent url>?brew=toggle: Sets the relay to the opposite of its current state. Returns "Toggling brew state...".
  
What did I tell you? Simple!

## Schematic
Here's a little schematic thing I made in [Fritzing](http://fritzing.org/):

![Fritzing schematic](https://raw.githubusercontent.com/okofish/java/master/images/schematic.png "Great job, Jesse.")

---
*Needless to say, this project is not written in the Java language. I just thought it's a witty name.*