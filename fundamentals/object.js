const customerOrder = {
    name: 'Orange Mocha Frapuccino',
    sugars: 8,
    ready: false,
    orderUp: function(){
        this.ready = true
    },
}

function orderReady(object){
    if (object.ready === false) {
        console.log('Order is not ready, be more patient')
    } else {
        console.log('Your order is ready, dont forget to tip')
    }
}

console.log('Your ' + customerOrder.name + ' has ' + customerOrder.sugars + ' sugars')
orderReady(customerOrder)
customerOrder.orderUp()
orderReady(customerOrder)

//DOM as Object example

const documentObjectModel = {
    document: {
        body: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>DOM Traversal</title>
          <style>
              h1 {
                text-align:center;
              }
              ul {
                text-align:center;
                list-style-type:none;
                font-size: 40px;
                border: 10px solid blue
              }
          </style>
        </head>
        
        <body>
          <h1>Open the Console to See the Magic ✨! </h1>
        
          <ul>
            <li id ="first-child-ul">Children[0]</li>
            <li>Children[1]</li>
            <li>Children[2]</li>
          </ul>
        
          <script src= "script.js"></script>
        </body>
        </html>`,
    }
}

console.log(documentObjectModel)
console.log(documentObjectModel.document)
console.log(documentObjectModel.document.body)