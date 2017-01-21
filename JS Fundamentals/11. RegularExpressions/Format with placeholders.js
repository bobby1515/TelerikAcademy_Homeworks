function solve(args) {
  let value,
    options = JSON.parse(args[0]),
    template = args[1];
    //regex = /#{(.*?)}/i;

  for (const prop in options) {
    if (options.hasOwnProperty(prop)) {
      value = options[prop];      
      let match = new RegExp('#{' + prop + '}', 'gi');  // if there are more placeholders with the same property 
      
      template = template.replace(match, value);
    }
  }

  console.log(template);
}

solve(['{ "name": "John" }',
"Hello, there! Are you #{name}?"]);

solve(['{ "name": "John", "age": 13 }',
"My name is #{name} and I am #{age}-years-old"]);
