var obj = [
    {
        s: ["Block scope",
            " Function scope",
            "Global scope"],
        h: ["ES6 introduced two important new JavaScript keywords: let and const These two keywords provide Block Scope in JavaScript.Variables declared inside a { } block cannot be accessed from outside the block:", "Variables declared within a JavaScript function, become LOCAL to the function.", "JavaScript has function scope: Each function creates a new scope Variables defined inside a function are not accessible (visible) from outside the function Variables declared with var, let and const are quite similar when declared inside a function."]
    }
    , {
        h: "Hoisting",
        intro: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code."
        , s: ["Fuction Hoisting", "Variable Hoisting", "let & Const Hoisting", "Class hoisting"]
    }
    , {
        h: "JavaScript Constructor Function"
        , intro: "All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (such as object- and array-literals) will have a constructor property that points to the Fundamental Object constructor type for that object."
        ,
        s: `<h1>Object Types (Blueprints) (Classes)</h1>
       <p> The examples from the previous chapters are limited. They only create single objects.
        
        Sometimes we need a "blueprint" for creating many objects of the same "type".
        
        The way to create an "object type", is to use an object constructor function.
        
        In the example above, function Person() is an object constructor function.</p>`
    }, {
        h: 'Object prototypes',
        intro: "Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set."
        , s: [" The prototype chain", "Shadowing properties", "Setting a prototype"]

    }

]
function x(v) {
var all=document.querySelectorAll(".sub")
all.forEach(e=>e.remove())
    var div = document.createElement('div')
    div.className = 'sub'
    if (v == 'scope') {

        div.innerHTML = `<h1>${obj[0].s[0]} </h1>
       <p>${obj[0].h[0]} </p>
      
       <h1>${obj[0].s[1]} </h1>
       <p>${obj[0].h[1]} </p>
       <h1>${obj[0].s[2]} </h1>
       <p>${obj[0].h[2]} </p>`

    }
    if (v == 'hoisting') {


        div.innerHTML = `<h1>${obj[1].h} </h1>
       <p>${obj[1].intro} </p>
       `

        obj[1].s.forEach((e) => {
            var l = document.createElement("p")
            l.innerHTML = e

            div.append(l)
        })
    }

    if (v == 'constructor') {


        div.innerHTML = `<h1>${obj[2].h} </h1>
       <p>${obj[2].intro} </p>
       <p>${obj[2].s} </p>
       `

      
        }
        if (v == 'prototype') {


            div.innerHTML = `<h1>${obj[2].h} </h1>
       <p>${obj[2].intro} </p>
       `
a=obj[3].s
console.log(a)
            a.forEach((e) => {
                var l = document.createElement("p")
                l.innerHTML = e

                div.append(l)
            })
        }




        document.getElementById("can").append(div)



    }