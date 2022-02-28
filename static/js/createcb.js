// alert("This alert box !!");

// window.onload = () => {
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.id= "id";
//
//   var label = document.createElement('label');
//   label.htmlFor = "id";
//   label.appendChild(document.createTextNode('This is the label for checkbox.'));
//
//   var myDiv = document.getElementById("here");
//   myDiv.appendChild(checkbox);
//   myDiv.appendChild(label);
//
//
// }

window.onload = () => {
var myStringArray =[]

var firstArray = ["apple","asparagus","avocado","almond","apricot"];
var secondArray = ["beetroot","Baking soda","baking powder","banana","beans","beer","bell pepper","blue berries"];
var thirdArray = ["Cake flour","Cabbage","Caramel","Carrot"];

myStringArray[0] =firstArray;
myStringArray[1]=secondArray;
myStringArray[2]=thirdArray;

  var arrayLength = myStringArray.length;
  for (var i = 0; i < arrayLength; i++) {

  	for(var j = 0; j < myStringArray[i].length ; j++){

    console.log(myStringArray[i][j])

    var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id= myStringArray[i][j];
      checkbox.value= myStringArray[i][j];
      checkbox.name = "mycheckbox";

    var label = document.createElement('label');
      label.htmlFor = myStringArray[i][j];
      label.appendChild(document.createTextNode(myStringArray[i][j]));

    var myDiv = document.getElementsByClassName("card-body")[i];
      myDiv.appendChild(checkbox);
      myDiv.appendChild(label);

    }

  }
  document.getElementById('btn').onclick = function() {
  var items = document.getElementsByName("mycheckbox");
        var selectedItems = "";
        for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
        }
      
       var myP = document.getElementById("selecteditemshere");
       myP.innerHTML = selectedItems;

}


}
