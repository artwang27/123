
let studentNames="陳柏宇白汯勳呂昆琳黃之軒李庠誼陳彥甫朱宥家江品磊吳宸緯周萬旻林恆宇江浚立邱鈞埕陳睦涵戈瑋琦蘇亭瑄張語倢陳姷安葉展榕林宥甄陳安箴張景茜馬亞蔓陳琬喬葉容榕王亦璿李芝彤張富程";


function randomStudentChar(){
    let idx = parseInt( random(0, studentNames.length) );
    return  studentNames[idx];
}


//指派一位學生當值日生
function getWatchMan(){
    let num=Math.floor(Math.random()*28 );

    return studentNames.substr(num*3, 3);
}