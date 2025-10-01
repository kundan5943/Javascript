let length = 4;

function callback() {
    console.log(this.length);
}

const object = {
   
    method(callback) {
         let length=5;
        callback();
    }
};

object.method(callback);
