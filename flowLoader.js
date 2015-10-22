var child_process = require("child_process");
var COLORS = {
    RESET: "\x1b[0m",
    YELLOW: "\x1b[33m",
    CYAN: "\x1b[36m",
    RED: "\x1b[31m",
};

var displayMessage = function(message) {
    var msgs = message.descr.split("\n");
    var type = msgs[0];
    var error = msgs[1];
    console.log(" FILE: ", message.path);
    console.log("LINES: ", message.line + ":" + message.start, "to", message.endline + ":" + message.end);
    console.log(" TYPE: ", COLORS.CYAN + type + COLORS.RESET);
    if (error) {
        console.log(COLORS.YELLOW + "\n" + error + "\n" + COLORS.RESET);
    }
}

var displayError = function(error) {
    var messages = error.message;

    console.log(COLORS.RED + "_________________________\n" + COLORS.RESET);
    for (var i = 0; i < messages.length; i++) {
        displayMessage(messages[i]);
    }
    console.log("");
};

module.exports = function(source, map) {
    var callback = this.async();
    this.cacheable();

    // fallback for sync, not sure why a fallback is needed
    if (!callback) {
        return source;
    } else {
        child_process.exec("./flowosx --json", function(err, stdout, stderr) {
            var flowOutput = JSON.parse(stdout);
            if (flowOutput.passed) {
                callback(null, source);
            } else {
                console.log("\n" + COLORS.RED + "TYPE ERRORS:" + COLORS.RESET);
                for (var i = 0; i < flowOutput.errors.length; i++) {
                    displayError(flowOutput.errors[i]);
                }
                console.log(COLORS.RED + "_________________________\n" + COLORS.RESET);

                var error = new Error("Failed type check");
                callback(error);
            }
        });
    }

}
