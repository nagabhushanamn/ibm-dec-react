
function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching...");
            let self = this;
            let learn = function () {
                console.log(this.name + " learning from " + self.name);
            }
            return learn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag'); // constructor invocation
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let learnFunc = tnr.doTeach(); // method invocation
    learnFunc.call(e1); // call/apply/bind invocation
    learnFunc.call(e2);
}
sessionStart();  // function invocation