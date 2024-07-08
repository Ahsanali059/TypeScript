function double(value: number): number;
function double(value: string): string;

function double(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(10)); // Output: 20
console.log(double("foo")); // Output: foofoo
