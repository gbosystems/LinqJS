LinqJS
======

LinqJS is a Javascript/Typescript library that augments the global Array object with LINQ methods.

Example Usage
<pre>
  <code>//example.ts
import "linqjs";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

var people: Person[] = ...;

// Sort by lastname then by firstname
var tmp1 = people
            .orderBy(s => s.lastName)
            .thenBy(s => s.firstName);

// Sort by lastname then by age
var tmp2 = people
            .orderBy(s => s.lastName)
            .thenBy(s => s.age);    

// Everyone under 30
var tmp3 = people.where(s => s.age < 30);

// The oldest person
var tmp4 = people.max(s => s.age);

// The average age of the group
var tmp5 = people.average(s => s.age);
  </code>
</pre>
