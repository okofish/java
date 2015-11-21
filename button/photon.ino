int button = D0;
int led = D6;
int power = A0;

// button should be connected to D0 and A0
// LED should be connected to D6 and GND

TCPClient client;

String server = "agent.electricimp.com";
String agent = "<your agent id here>";

void setup() {
    pinMode(button,INPUT_PULLDOWN);
    pinMode(led,OUTPUT);
    pinMode(power,OUTPUT);

    digitalWrite(power,HIGH);

    //Serial.begin(9600);
    //Serial.println("serial open!");
}

void loop() {
    if (digitalRead(button) == HIGH) {
        //Serial.println("button pressed");
        brewToggle();
    }
}

void brewToggle() {
    if (client.connect(server, 80)) {
        //Serial.println("toggle command sent");
        client.println("GET /" + agent + "?brew=toggle HTTP/1.0");
        client.println("Host: " + server);
        client.println("Content-Length: 0");
        client.println();
        delay(50);
        client.stop();

        blinkStatus(1);
    } else {
        //Serial.println("connection failed");
        blinkStatus(0);
    }
}

void blinkStatus(int status) {
    if (status == 1) {
        // success
        digitalWrite(led,HIGH);
        delay(500);
        digitalWrite(led,LOW);
        delay(500);
        digitalWrite(led,HIGH);
        delay(500);
        digitalWrite(led,LOW);
        delay(500);
        digitalWrite(led,HIGH);
        delay(500);
        digitalWrite(led,LOW);
    } else {
        // failure
        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);
        delay(250);
        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);
        delay(250);
        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);

        delay(500);

        digitalWrite(led,HIGH);
        delay(750);
        digitalWrite(led,LOW);
        delay(750);
        digitalWrite(led,HIGH);
        delay(750);
        digitalWrite(led,LOW);
        delay(750);
        digitalWrite(led,HIGH);
        delay(750);
        digitalWrite(led,LOW);
        delay(750);

        delay(500);

        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);
        delay(250);
        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);
        delay(250);
        digitalWrite(led,HIGH);
        delay(250);
        digitalWrite(led,LOW);
    }
}
