var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
//variables propias
var paleta = document.getElementById("paleta");
var grillaPixeles= document.getElementById("grilla-pixeles");
var indicadorColor= document.getElementById("indicador-de-color");
var apretado= false;
var borrar= document.getElementById("borrar");
var guardar= document.getElementById("guardar");

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//funciones propias
//crea la paleta de colores
function paletaColores(){
  for (i=0;i<=nombreColores.length;i++){
    let newDiv= document.createElement('div');
    newDiv.className='color-paleta';
    newDiv.style.backgroundColor=nombreColores[i];
    paleta.appendChild(newDiv);

  }
}
//crea la grilla
function cuadradosGrilla(){
  for (i=1;i<=1749;i++){
    let newDiv= document.createElement('div');
    newDiv.className="grilla-paleta";
    grillaPixeles.appendChild(newDiv);
  }
}
//pintar el cuadradito cuando el usuario elige un color de la grilla
$(document).on('click', "div.color-paleta", function() {
  //tomamos el valor del div seleccionado. esto es el this
    var seleccionColor = $(this).css("backgroundColor");
  $("#indicador-de-color").css("background-color", seleccionColor);       
});


//pintar un pixel
function pintarPixel(){
  $("div.grilla-paleta").on('click',function(){
    var seleccionColor= $("#indicador-de-color").css("backgroundColor");
    $(this).css("backgroundColor",seleccionColor);
    
  });
  }

  //me fijo si el mouse esta presionado
   
  grillaPixeles.addEventListener("mousedown",function(e){
    apretado=true;
    return apretado;
  });
    
  grillaPixeles.addEventListener("mouseup",function(e){
    apretado=false;
    return apretado;
});

 grillaPixeles.addEventListener("mouseover",function(e){
    if (apretado){
    pintarArrastrado(e);}
});
  //pintar con el mouse mienstras lo tengo presionado y lo arrastro

  function pintarArrastrado(e){
    if (apretado){
     e.target.style.backgroundColor=indicadorColor.style.backgroundColor;
    }
  }

  //borrar todo
function borrarTodo(){
  let $cuadradito= $(".grilla-paleta");
  $cuadradito.animate({'backgroundColor':'white'},750);
}
borrar.addEventListener('click',borrarTodo);

//elegir y cargar un superheroe
$(document).on('click','.imgs li img',function(){
  var idHeroe= $(this).attr("id");
  switch(idHeroe){
  case "batman":
  cargarSuperheroe(batman);
  break;
  case "wonder":
      cargarSuperheroe(wonder);
  break;
  case "flash":
      cargarSuperheroe(flash);
  break;
  case "invisible":
      cargarSuperheroe(invisible);
}
})

//guardar el dibujo
guardar.addEventListener('click',guardarPixelArt);

//que se guarde el color personalizado tambien en el pincel
colorPersonalizado.addEventListener('change', (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
       // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor=colorActual;
  })
);

$(document).ready(function(){
  paletaColores();
  cuadradosGrilla();
  pintarPixel();
  pintarArrastrado();
});
  