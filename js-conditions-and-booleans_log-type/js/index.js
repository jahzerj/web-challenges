const data = function () {};

switch (typeof data) {
  case "string": {
    console.log("string!");
    break;
  }
  case "undefined": {
    console.log("undefined!");
    break;
  }
  case "number": {
    if (Number.isNaN(data) === true) {
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;
  }
  case "string": {
    console.log("string!");
    break;
  }
  case "boolean": {
    console.log("boolean!");
    break;
  }
  case "object": {
    if (Array.isArray(data) === true) {
      console.log("array!");
    } else if (data === null) {
      console.log("null!");
    } else {
      console.log("object!");
    }
    break;
  }
  case "function": {
    console.log("function!");
    break;
  }
  default:
    console.log("monkey");
}
