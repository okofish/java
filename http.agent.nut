// a lot of this code is from https://electricimp.com/docs/resources/interactive/

saved_response <- null;

function request_handler(request, response) {
  try {
    if ("getstate" in request.query) {
      device.send("pot.getstate", 1);
      saved_response = response;
      return;
    }
    if ("brew" in request.query) {
      if (request.query.brew == "start") {
        device.send("pot.brew", "start");
        response.send(200, "Brewing commencement command sent...");
      } else if (request.query.brew == "stop") {
        device.send("pot.brew", "stop");
        response.send(200, "Brewing halt command sent...");
      } else if (request.query.brew == "toggle") {
        device.send("pot.brew", "toggle");
        response.send(200, "Toggling brew state...");
      } else {
        response.send(400, "Invalid query");
      }
    }
  } catch (ex) {
    response.send(500, ("Agent Error: " + ex)); // Send 500 response if error occured
  }
}

function send_brewstate(passed_value)
{
    // Relay current brew data to app

    saved_response.send(200, passed_value);
}

// Register the callback function that will be triggered by incoming HTTP requests

http.onrequest(request_handler);

device.on("brew.gotstate", send_brewstate);

device.onconnect(function() {
    server.log("Connected to imp!")
});
