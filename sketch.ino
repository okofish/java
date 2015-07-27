// this programs exists solely because the imp can't power the relay.

int R1 = 7;
int RIN = 2;

void setup()  { 
  pinMode(R1, OUTPUT);
  pinMode(RIN, INPUT);
} 


void loop()  {
  if (digitalRead(RIN) == HIGH) {
    digitalWrite(R1,HIGH);
  } else {
    digitalWrite(R1,LOW);
  }          
}
