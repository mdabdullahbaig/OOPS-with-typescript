import { AppleMobile } from "./classes/AppleMobile";
import { Department } from "./classes/Department";
import { Employee } from "./classes/Employee";
import { Mobile } from "./classes/Mobile";

// Instantiation
const dep = new Department(1, "CSE", "Bangalore");
const emp = new Employee(1, "Abdul", 24, "abdul@gmail.com", false, dep);

console.log(emp);

const mobile = new Mobile("Apple", "white", 39000);
console.log(mobile.getBrand);
console.log(mobile.getColor);
console.log(mobile.getPrice);

console.log(mobile);

mobile.setPrice = 49000;
console.log(mobile.getPrice);
console.log(mobile);

const appleMobile = new AppleMobile(
  "Apple",
  "Silver",
  79000,
  "IOS",
  "iPhone 13"
);
console.log(appleMobile);
