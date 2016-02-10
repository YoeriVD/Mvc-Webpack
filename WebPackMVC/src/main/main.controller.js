var core_module_1 = require("./../core/core.module");
var MainController = (function () {
    function MainController() {
        var messages = new core_module_1.Messages();
        this.greeting = messages.main;
        this.constant = new core_module_1.Constants().main;
    }
    return MainController;
})();
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map