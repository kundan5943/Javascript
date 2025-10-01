// Example 1

let student={

    name:"kundan",
    div:'A',
    math:78,
    english:88,
    science:90,

    getavg:function()
    {   
        console.log(this);
        let avg=(this.math+this.english+this.science)/3;
        console.log(`${this.name} got a ${avg} marks`);
    }
}

student.getavg();
// example 2. When a function is alone 

function func()
{
      console.log(this);
    // this points to the global object
}

func();