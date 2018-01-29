var path = "live_set tracks 0";
var liveObject = new LiveAPI(path);
liveObject.set("tempo", 80);
liveObject.call("start playing");
