

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let self=this;
        let doLearn=function(){
            console.log(this.name +' learning .js from '+ self.name);
        }
        // doLearn();
        let emp={name:'IBM'};
        doLearn.call(emp);
    }
};

tnr.doTeach();
let tempTnr={name:'Ashok'};
tnr.doTeach.call(tempTnr);