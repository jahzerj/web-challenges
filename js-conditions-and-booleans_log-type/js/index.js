const data = "12";

switch (typeof data) {
  case "string": {
    console.log("string!");
    break;
  }
  case 'undefined': {
    console.log("undefined!");
    break;
  }
  case 'number' : {
    if (Number.isNaN(data) === true) {
        console.log("not a number!");
    }   else {
        console.log('number!');
    }
    break;
  }
  case 'string': {
    console.log('string!');
    break;
  }
  case 'boolean': {
    console.log('boolean!');
    break;
  }
  default:
    console.log("I have no idea!");
}

