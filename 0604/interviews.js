// HW0604 JS INTERVIEW QUESTION
// HW1. combine two arrays

const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];
const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];

const mergeObjects = (names, roles) => {
  // transfer names into an object based on userid
  const nameMap = 
  Object.fromEntries(names.map(name =>
    [name.userid, {...name, role:null}]
  ));

  // use for loop to update name and role
  for (const role of roles) {
    if (nameMap[role.userid]) {
      nameMap[role.userid].role = role.role;
    } else {
      // if there's no userid, then create a new object
      nameMap[role.userid] = { userid:role.userid, name:null, role:role.role};
    }
  }
  // transfer the object into an array
  return Object.values(nameMap);
}

const result = mergeObjects(names, roles);
console.log(result);





// const newNameRole = [{...names.userid, ...names.name, ...roles.role}];
// const newNameRole = Object.assign(names, roles);
// console.log(newNameRole);
// const result = names.merge(roles);
// console.log(result);

// 用Object.method来做, think userid as the prime key, so you can merge all the thing together into an object based on the prime key.

// [
//   {
//     userid: 2, name: "Velen", role: "Mage"
//   },
//   {
//     userid: 44, name: "Cenarius", role: null
//   },
//   ...
// ]





// HW2. 

const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10

function runAll(initNum) {
  return function(...args) {
    return args.reduce((acc, cb) => cb(acc), initNum);
  }
}

console.log(runAll(4)(callback1, callback2, callback3)); // 10


// HW3. Format array
source = [
    ['Foley', 'Chemicals', 'CHEM'],
    ['Foley', 'Chemicals', 'CTO'],
    ['Foley', 'Chemicals', 'LK'],
    ['Foley', 'Chemicals', 'R8'],
    ['Foley', 'Chemicals', 'WT'],
    ['Foley', 'Finishing', 'LB2'],
    ['Foley', 'Finishing', 'LB4'],
    ['Foley', 'Finishing', 'RW1'],
    ['Foley', 'Finishing', 'RW2'],
    ['Foley', 'Line 3', 'LN3'],
    ['Foley', 'Line 3', 'Production Process'],
    ['Foley', 'Line 4', 'LN4'],
    ['Foley', 'Line 4', 'Prod Process'],
    ['Foley', 'Mill General', 'Wastewater Treatment'],
    ['Foley', 'Powerhouse', 'BB1'],
    ['Foley', 'Powerhouse', 'BB2'],
    ['Foley', 'Powerhouse', 'EV5'],
    ['Foley', 'Powerhouse', 'FWE'],
    ['Foley', 'Powerhouse', 'PB1'],
    ['Foley', 'Powerhouse', 'PB2'],
    ['Foley', 'Powerhouse', 'RB2'],
    ['Foley', 'Powerhouse', 'RB3'],
    ['Foley', 'Powerhouse', 'RB4'],
    ['Foley', 'Powerhouse', 'TG2'],
    ['Foley', 'Powerhouse', 'TG3'],
    ['Foley', 'Powerhouse', 'TG4'],
  ];
// hw3: change the data to:
// example: [['Foley', 'Powerhouse', 'TG3'],['Foley', 'Powerhouse', 'TG4']...] --->
// [{
//   name:'Foley',
//   children: [
//     {
//       name: 'Powerhouse',
//       children: [
//         {
//           name: 'TG3'
//         }
//       ]
//     }
//   ] 
// },{
//   name:'Foley',
//   children: [
//     {
//       name: 'Powerhouse',
//       children: [
//         {
//           name: 'TG4'
//         }
//       ]
//     }
//   ] 
// },
// ...]


// create a transfer function of source
const transform = (source) => {
  return source.map(([level1, level2, level3]) => ({
    name: level1,
    children: [
      {
        name: level2,
        children: [
          {
            name: level3
          }
        ]
      }
    ]
  }))
}

// trigger
const resultSource = transform(source);
// transfer object to string
// console.log(resultSource);
console.log(JSON.stringify(resultSource));