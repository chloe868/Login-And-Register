// basic functionalities
client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
client.subscribe("mqtt/demo")

client.on("connect", function(){
    console.log("Successfully connected");
})

client.on("message", function (topic, payload) {
  console.log([topic, payload].join(": "));
  client.end();
})

client.publish("mqtt/demo", "hello world!")

// // advance functionalities
// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo", function (err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("subscribed")
//   }
// })

// client.on("connect", function(){
//     console.log("Successfully connected");
// })

// client.on("message", function (topic, payload) {
//   console.log([topic, payload].join(": "));
//   client.end();
// })

// client.publish("mqtt/demo", "hello world!", function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("published")
//   }
// })
