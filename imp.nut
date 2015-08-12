brewctrl <- hardware.pin9;
brewctrl.configure(DIGITAL_OUT);

brewing <- false;

function changeBrewState(brewState)
{
  if (brewState == "start" && brewing == false) {
        brewing = true;
        startBrew();
        server.log("Brewing has commenced!");
    } else if (brewState == "stop" && brewing == true) {
        brewing = false;
        stopBrew();
        server.log("Brewing has been halted!");
    } else if (brewState == "toggle") {
      if (brewing == false) {
        changeBrewState("start")
      } else if (brewing == true) {
        changeBrewState("stop")
      }
    }
}

function startBrew() {
  brewctrl.write(1);
}

function stopBrew() {
  brewctrl.write(0);
}

function getBrewState(value)
{

    local response_string = "no";
    if (brewing == true) response_string = "yes";

    agent.send("brew.gotstate", response_string);
}


agent.on("pot.brew", changeBrewState);
agent.on("pot.getstate", getBrewState);

server.log("we're live!");
