let Box_shadow_horizontal = document.getElementById('box_shadow_horizontal');
let Box_shadow_vertical = document.getElementById('box_shadow_vertical');
let Box_shadow_blur = document.getElementById('box_shadow_blur');
let box_shadow_spread = document.getElementById('box_shadow_spread');
let Box_shadow_color = document.getElementById('box_shadow_color');

let Box_shadow_textarea = document.getElementById('Box_shadow_code');
let Box_shadow_copy_btn = document.getElementById('copy_Btn');
let objectPreview = document.getElementById('ObjectPrview');

function BoxShadow() {
    let X = Box_shadow_horizontal.value;  
    let Y = Box_shadow_vertical.value; 
    let Blur = Box_shadow_blur.value; 
    let spread = box_shadow_spread.value; 
    let color = Box_shadow_color.value; 
   let Box_Shadow = `${X}px ${Y}px ${Blur}px ${spread}px ${color}`;
  objectPreview.style.boxShadow = Box_Shadow;
  Box_shadow_textarea.innerText = `box-shadow:${Box_Shadow};`;

}
Box_shadow_horizontal.addEventListener('input', BoxShadow)
Box_shadow_vertical.addEventListener('input', BoxShadow)
Box_shadow_blur.addEventListener('input', BoxShadow)
box_shadow_spread.addEventListener('input', BoxShadow)
Box_shadow_color.addEventListener('input', BoxShadow)

BoxShadow();


