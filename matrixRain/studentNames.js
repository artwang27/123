
let studentNames="陳柏宇白汯勳呂昆琳黃之軒李庠誼陳彥甫朱宥家江品磊吳宸緯周萬旻林恆宇江浚立邱鈞埕陳睦涵戈瑋琦蘇亭瑄張語倢陳姷安葉展榕林宥甄陳安箴張景茜馬亞蔓陳琬喬葉容榕王亦璿李芝彤張富程";

function randomStudentChar(){
    let l=studentNames.length;
    let idx = parseInt( random(0, studentNames.length) );
    print(idx);
    return  studentNames[idx];
}

