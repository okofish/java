/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var brewing = false;
var testing = false;
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
    getBrewState()
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

function toggleBrew() {
  if (brewing == false) {
    startBrew()
    console.log("starting brew")
  } else if (brewing == true) {
    stopBrew()
    console.log("stopping brew")
  }
  setStatus()
}

function startBrew() {
  if (testing) {
    brewing = true  //for testing
    setStatus()
  }
  $.ajax({
    url: agentURL + "?brew=start"
  }).done(function(data) {
    $(".brewlog").text(data);
    if (console && console.log) {
      console.log(data);
    }
    brewing = true
    setStatus()
  });
}

function stopBrew() {
  if (testing) {
    brewing = false  //for testing
    setStatus()
  }
  $.ajax({
    url: agentURL + "?brew=stop"
  }).done(function(data) {
    $(".brewlog").text(data);
    if (console && console.log) {
      console.log(data);
    }
    brewing = false
    setStatus()
  });
}

function getBrewState() {
  console.log("getting brew state...")
  if (testing == true) {
    setStatus()
  }
  $.ajax({
    url: agentURL + "?getstate"
  }).done(function(data) {
    if (response = "yes") {
      brewing = true
    } else {
      brewing = false
    }
    setStatus()
    if (console && console.log) {
      console.log(data);
    }
  });
}

function setStatus() {
  if (brewing == true) {
    $(".brewstate").text("STATUS: Brewing");
  } else {
    $(".brewstate").text("STATUS: Idle");
  }
}
