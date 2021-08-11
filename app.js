let jsform = document.getElementById('formid');
jsform.addEventListener('submit', submitter);

let donatorName;
let donationamount;



function submitter(e) {
    e.preventDefault();

    donatorName = e.target.donatornameid.value;
    donationamount = e.target.donationamountid.value;

    // console.log(donationamount,donatorName);

    
    renderdata();
    

}

function agegenerator() { // from google
    return Math.floor(Math.random() * (60 - 20 + 1) + 20)
}
let div2=document.getElementById('second-div')
let jstable=document.createElement('table');
div2.appendChild(jstable);

function createheader() {
    let headrow = document.createElement('tr');
    jstable.appendChild(headrow);

    let tablehead1 = document.createElement('th');
    headrow.appendChild(tablehead1);
    tablehead1.textContent = "Donation Amount";

    let tablehead2 = document.createElement('th');
    headrow.appendChild(tablehead2);
    tablehead2.textContent = "Donator Name";

    let tablehead3 = document.createElement('th');
    headrow.appendChild(tablehead3);
    tablehead3.textContent = "Age";
}
createheader();

function renderdata() {
    let datarow=document.createElement('tr');
    jstable.appendChild(datarow);

    let ftd=document.createElement('td');
    datarow.appendChild(ftd);
    ftd.textContent=donatorName;

    let std=document.createElement('td');
    datarow.appendChild(std);
    std.textContent=donationamount;

    let ttd=document.createElement('td');
    datarow.appendChild(ttd);
    ttd.textContent=agegenerator();

    Donor(ftd.textContent,std.textContent,ttd.textContent);
    console.log(allDonor);

    localstoragefunction();
    
}

allDonor=[];
function localstoragefunction() {
    localStorage.setItem('alldonors',JSON.stringify(allDonor))
    // localStorage.setItem('tablecontent',JSON.stringify(jstable));
}

function Donor(name,amount,age) {
    this.name=name;
    this.amount=amount;
    this.age=age;
    allDonor.push(this);
}


// function onrefresh() {//work every time we refresh
//     createheader();
//     renderdata();
// }
// onrefresh();

// please read // please read // please read // please read 

// function getlocalstoragefun(params) {
//     for (let index = 0; index < localStorage.alldonors.length; index++) {
//         let datarow=document.createElement('tr');
//     jstable.appendChild(datarow);

//     let ftd=document.createElement('td');
//     datarow.appendChild(ftd);
//     ftd.textContent=localStorage.alldonors.parse();

//     let std=document.createElement('td');
//     datarow.appendChild(std);
//     std.textContent=donationamount;

//     let ttd=document.createElement('td');
//     datarow.appendChild(ttd);
//     ttd.textContent=agegenerator();
        
//     }
// }





// {
//     "extends": "eslint:recommended",
//     "parserOptions": {
//       "ecmaVersion": 6,
//       "ecmaFeatures": {
//         "impliedStrict": true
//       }
//     },
//     "env": {
//       "browser": true,
//       "es6": true
//     },
//     "rules": {
//       "eqeqeq": ["error", "always"],
//       "no-console": "off",
//       "no-undefined": "off",
//       "indent": ["error", 2],
//       "quotes": ["warn", "single"],
//       "no-multi-spaces": [
//         "warn",
//         {
//           "exceptions": {
//             "VariableDeclarator": true
//           }
//         }
//       ],
//       "no-trailing-spaces": "warn",
//       "new-cap": "warn",
//       "no-redeclare": [
//         "error",
//         {
//           "builtinGlobals": true
//         }
//       ],
//       "semi": [2, "always"],
//       "eol-last": "error"
//     }
//   }