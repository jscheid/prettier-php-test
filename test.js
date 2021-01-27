const prettier = require("prettier");
const expect = require("expect");

console.log(
  prettier.getSupportInfo().languages.find((lang) => lang.name === "PHP")
);

const result = prettier.format(
  `array_map(function($arg1,$arg2) use ( $var1, $var2 ) {
    return $arg1+$arg2/($var+$var2);
}, array("complex"=>"code","with"=>
    function() {return "inconsistent";}
,"formatting"=>"is", "hard" => "to", "maintain"=>true));
`,
  { parser: "php" }
);

expect(result).toEqual(`array_map(
    function ($arg1, $arg2) use ($var1, $var2) {
        return $arg1 + $arg2 / ($var + $var2);
    },
    [
        "complex" => "code",
        "with" => function () {
            return "inconsistent";
        },
        "formatting" => "is",
        "hard" => "to",
        "maintain" => true,
    ]
);
`);
