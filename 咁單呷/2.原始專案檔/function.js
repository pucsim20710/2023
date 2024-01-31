// Script to open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";//(11/15)點擊透明背景/側邊導覽列以外的地方時，就觸發關閉側邊導覽列
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";//(11/15)點擊透明背景/側邊導覽列以外的地方時，就觸發關閉側邊導覽列
  }

  /* (11/16)手機點擊.電腦滑至使用者名稱區域，顯示資料 
  function showDropdown() {
    document.getElementById("user-show").style.display = "block";
  }

  function hideDropdown() {
    document.getElementById("user-show").style.display = "none";
  }
  (11/16)手機點擊.電腦滑至使用者名稱區域，顯示資料 */

//當季蔬果
//month
  function JANUARY() {
    var name = document.getElementById('JANUARY');
    var textshow = document.getElementById('imgshow1');
    var textshow2 = document.getElementById('imgshow2');
    var textshow3 = document.getElementById('imgshow3');
    var textshow4 = document.getElementById('imgshow4');
    var textshow5 = document.getElementById('imgshow5');
    var textshow6 = document.getElementById('imgshow6');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function FEBRUARY() {
    var name = document.getElementById('FEBRUARY');
    var textshow = document.getElementById('imgshow2');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow3');
    var textshow4 = document.getElementById('imgshow4');
    var textshow5 = document.getElementById('imgshow5');
    var textshow6 = document.getElementById('imgshow6');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function MARCH() {
    var name = document.getElementById('MARCH');
    var textshow = document.getElementById('imgshow3');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow4');
    var textshow5 = document.getElementById('imgshow5');
    var textshow6 = document.getElementById('imgshow6');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function APRIL() {
    var name = document.getElementById('APRIL');
    var textshow = document.getElementById('imgshow4');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow5');
    var textshow6 = document.getElementById('imgshow6');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function MAY() {
    var name = document.getElementById('MAY');
    var textshow = document.getElementById('imgshow5');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow6');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function JUNE() {
    var name = document.getElementById('JUNE');
    var textshow = document.getElementById('imgshow6');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow7');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function JULY() {
    var name = document.getElementById('JULY');
    var textshow = document.getElementById('imgshow7');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow6');
    var textshow8 = document.getElementById('imgshow8');
    var textshow9 = document.getElementById('imgshow9');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

function AUGUST() {
  var name = document.getElementById('AUGUST');
  var textshow = document.getElementById('imgshow8');
  var textshow2 = document.getElementById('imgshow1');
  var textshow3 = document.getElementById('imgshow2');
  var textshow4 = document.getElementById('imgshow3');
  var textshow5 = document.getElementById('imgshow4');
  var textshow6 = document.getElementById('imgshow5');
  var textshow7 = document.getElementById('imgshow6');
  var textshow8 = document.getElementById('imgshow7');
  var textshow9 = document.getElementById('imgshow9');
  var textshow10 = document.getElementById('imgshow10');
  var textshow11 = document.getElementById('imgshow11');
  var textshow12 = document.getElementById('imgshow12');
  if (textshow.style.display === 'none') {
    textshow.style.display = 'block';
    textshow2.style.display = 'none';
    textshow3.style.display = 'none';
    textshow4.style.display = 'none';
    textshow5.style.display = 'none';
    textshow6.style.display = 'none';
    textshow7.style.display = 'none';
    textshow8.style.display = 'none';
    textshow9.style.display = 'none';
    textshow10.style.display = 'none';
    textshow11.style.display = 'none';
    textshow12.style.display = 'none';
  } else {
    textshow.style.display = 'none';
  }
}

  function SEPTEMBER() {
    var name = document.getElementById('SEPTEMBER');
    var textshow = document.getElementById('imgshow9');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow6');
    var textshow8 = document.getElementById('imgshow7');
    var textshow9 = document.getElementById('imgshow8');
    var textshow10 = document.getElementById('imgshow10');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function OCTOBER() {
    var name = document.getElementById('OCTOBER');
    var textshow = document.getElementById('imgshow10');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow6');
    var textshow8 = document.getElementById('imgshow7');
    var textshow9 = document.getElementById('imgshow8');
    var textshow10 = document.getElementById('imgshow9');
    var textshow11 = document.getElementById('imgshow11');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function NOVEMBER() {
    var name = document.getElementById('NOVEMBER');
    var textshow = document.getElementById('imgshow11');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow6');
    var textshow8 = document.getElementById('imgshow7');
    var textshow9 = document.getElementById('imgshow8');
    var textshow10 = document.getElementById('imgshow9');
    var textshow11 = document.getElementById('imgshow10');
    var textshow12 = document.getElementById('imgshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function DECEMBER() {
    var name = document.getElementById('DECEMBER');
    var textshow = document.getElementById('imgshow12');
    var textshow2 = document.getElementById('imgshow1');
    var textshow3 = document.getElementById('imgshow2');
    var textshow4 = document.getElementById('imgshow3');
    var textshow5 = document.getElementById('imgshow4');
    var textshow6 = document.getElementById('imgshow5');
    var textshow7 = document.getElementById('imgshow6');
    var textshow8 = document.getElementById('imgshow7');
    var textshow9 = document.getElementById('imgshow8');
    var textshow10 = document.getElementById('imgshow9');
    var textshow11 = document.getElementById('imgshow10');
    var textshow12 = document.getElementById('imgshow11');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }
//當季蔬果

/*食物分類*/
/*1-6*/
  function CARROT() {
    var name = document.getElementById('CARROT');
    var textshow = document.getElementById('textshow1');
    var textshow2 = document.getElementById('textshow2');
    var textshow3 = document.getElementById('textshow3');
    var textshow4 = document.getElementById('textshow4');
    var textshow5 = document.getElementById('textshow5');
    var textshow6 = document.getElementById('textshow6');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function WHITERADISH() {
    var name = document.getElementById('WHITERADISH');
    var textshow = document.getElementById('textshow2');
    var textshow2 = document.getElementById('textshow1');
    var textshow3 = document.getElementById('textshow3');
    var textshow4 = document.getElementById('textshow4');
    var textshow5 = document.getElementById('textshow5');
    var textshow6 = document.getElementById('textshow6');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function POTATO() {
    var name = document.getElementById('POTATO');
    var textshow = document.getElementById('textshow3');
    var textshow2 = document.getElementById('textshow1');
    var textshow3 = document.getElementById('textshow2');
    var textshow4 = document.getElementById('textshow4');
    var textshow5 = document.getElementById('textshow5');
    var textshow6 = document.getElementById('textshow6');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function SWEETPOTATO() {
    var name = document.getElementById('SWEETPOTATO');
    var textshow = document.getElementById('textshow4');
    var textshow2 = document.getElementById('textshow1');
    var textshow3 = document.getElementById('textshow2');
    var textshow4 = document.getElementById('textshow3');
    var textshow5 = document.getElementById('textshow5');
    var textshow6 = document.getElementById('textshow6');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function BAMBOOSHOOTS() {
    var name = document.getElementById('BAMBOOSHOOTS');
    var textshow = document.getElementById('textshow5');
    var textshow2 = document.getElementById('textshow1');
    var textshow3 = document.getElementById('textshow2');
    var textshow4 = document.getElementById('textshow3');
    var textshow5 = document.getElementById('textshow4');
    var textshow6 = document.getElementById('textshow6');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function ONION() {
    var name = document.getElementById('ONION');
    var textshow = document.getElementById('textshow6');
    var textshow2 = document.getElementById('textshow1');
    var textshow3 = document.getElementById('textshow2');
    var textshow4 = document.getElementById('textshow3');
    var textshow5 = document.getElementById('textshow4');
    var textshow6 = document.getElementById('textshow5');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*4-6 -> 7-14*/
  function SPINACH() {
    var name = document.getElementById('SPINACH');
    var textshow = document.getElementById('textshow7');
    var textshow2 = document.getElementById('textshow8');
    var textshow3 = document.getElementById('textshow9');
    var textshow4 = document.getElementById('textshow10');
    var textshow5 = document.getElementById('textshow11');
    var textshow6 = document.getElementById('textshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CELERY() {
    var name = document.getElementById('CELERY');
    var textshow = document.getElementById('textshow8');
    var textshow2 = document.getElementById('textshow7');
    var textshow3 = document.getElementById('textshow9');
    var textshow4 = document.getElementById('textshow10');
    var textshow5 = document.getElementById('textshow11');
    var textshow6 = document.getElementById('textshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CABBAGE() {
    var name = document.getElementById('CABBAGE');
    var textshow = document.getElementById('textshow9');
    var textshow2 = document.getElementById('textshow7');
    var textshow3 = document.getElementById('textshow8');
    var textshow4 = document.getElementById('textshow10');
    var textshow5 = document.getElementById('textshow11');
    var textshow6 = document.getElementById('textshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHINESECABBAGE() {
    var name = document.getElementById('CHINESECABBAGE');
    var textshow = document.getElementById('textshow10');
    var textshow2 = document.getElementById('textshow7');
    var textshow3 = document.getElementById('textshow8');
    var textshow4 = document.getElementById('textshow9');
    var textshow5 = document.getElementById('textshow11');
    var textshow6 = document.getElementById('textshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function GREENCABBAGE() {
    var name = document.getElementById('GREENCABBAGE');
    var textshow = document.getElementById('textshow11');
    var textshow2 = document.getElementById('textshow7');
    var textshow3 = document.getElementById('textshow8');
    var textshow4 = document.getElementById('textshow9');
    var textshow5 = document.getElementById('textshow10');
    var textshow6 = document.getElementById('textshow12');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function WATERSPINACH() {
    var name = document.getElementById('WATERSPINACH');
    var textshow = document.getElementById('textshow12');
    var textshow2 = document.getElementById('textshow7');
    var textshow3 = document.getElementById('textshow8');
    var textshow4 = document.getElementById('textshow9');
    var textshow5 = document.getElementById('textshow10');
    var textshow6 = document.getElementById('textshow11');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*15-18*/
  function CAULIFLOWER() {
    var name = document.getElementById('CAULIFLOWER');
    var textshow = document.getElementById('textshow15');
    var textshow2 = document.getElementById('textshow16');
    var textshow3 = document.getElementById('textshow17');
    var textshow4 = document.getElementById('textshow18');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function BROCCOLI() {
    var name = document.getElementById('BROCCOLI');
    var textshow = document.getElementById('textshow16');
    var textshow2 = document.getElementById('textshow15');
    var textshow3 = document.getElementById('textshow17');
    var textshow4 = document.getElementById('textshow18');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function DAYLILY() {
    var name = document.getElementById('DAYLILY');
    var textshow = document.getElementById('textshow17');
    var textshow2 = document.getElementById('textshow15');
    var textshow3 = document.getElementById('textshow16');
    var textshow4 = document.getElementById('textshow18');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHIVEFLOWER() {
    var name = document.getElementById('CHIVEFLOWER');
    var textshow = document.getElementById('textshow18');
    var textshow2 = document.getElementById('textshow15');
    var textshow3 = document.getElementById('textshow16');
    var textshow4 = document.getElementById('textshow17');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*19-21*/
  function STRINGBEAN() {
    var name = document.getElementById('STRINGBEAN');
    var textshow = document.getElementById('textshow19');
    var textshow2 = document.getElementById('textshow20');
    var textshow3 = document.getElementById('textshow21');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function TOMATO() {
    var name = document.getElementById('TOMATO');
    var textshow = document.getElementById('textshow20');
    var textshow2 = document.getElementById('textshow19');
    var textshow3 = document.getElementById('textshow21');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function SMALLCUCUMBER() {
    var name = document.getElementById('SMALLCUCUMBER');
    var textshow = document.getElementById('textshow21');
    var textshow2 = document.getElementById('textshow19');
    var textshow3 = document.getElementById('textshow20');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*26-30 + 22-25.31-35.47-50 */
  function WATERMELON() {
    var name = document.getElementById('WATERMELON');
    var textshow = document.getElementById('textshow26');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow22');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function MANGO() {
    var name = document.getElementById('MANGO');
    var textshow = document.getElementById('textshow27');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow22');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function STRAWBERRY() {
    var name = document.getElementById('STRAWBERRY');
    var textshow = document.getElementById('textshow28');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow22');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function LITCHI() {
    var name = document.getElementById('LITCHI');
    var textshow = document.getElementById('textshow29');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow22');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function REDDRAGONFRUIT() {
    var name = document.getElementById('REDDRAGONFRUIT');
    var textshow = document.getElementById('textshow30');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow22');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }
/* (10/27) */
  function PASSIONFRUIT() {
    var name = document.getElementById('PASSIONFRUIT');
    var textshow = document.getElementById('textshow22');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function GRAPE() {
    var name = document.getElementById('GRAPE');
    var textshow = document.getElementById('textshow23');
    var textshow2 = document.getElementById('textshow22');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHERRYTOMATO() {
    var name = document.getElementById('CHERRYTOMATO');
    var textshow = document.getElementById('textshow24');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow22');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function BANANA() {
    var name = document.getElementById('BANANA');
    var textshow = document.getElementById('textshow25');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow22');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CARAMBOLA() {
    var name = document.getElementById('CARAMBOLA');
    var textshow = document.getElementById('textshow31');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow22');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function WAXAPPLE() {
    var name = document.getElementById('WAXAPPLE');
    var textshow = document.getElementById('textshow32');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow22');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PEAR() {
    var name = document.getElementById('PEAR');
    var textshow = document.getElementById('textshow33');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow22');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PINEAPPLE() {
    var name = document.getElementById('PINEAPPLE');
    var textshow = document.getElementById('textshow34');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow22');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function ORANGE() {
    var name = document.getElementById('ORANGE');
    var textshow = document.getElementById('textshow35');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow22');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function GUAVA() {
    var name = document.getElementById('GUAVA');
    var textshow = document.getElementById('textshow47');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow22');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function APPLE() {
    var name = document.getElementById('APPLE');
    var textshow = document.getElementById('textshow48');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow22');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PAPAYA() {
    var name = document.getElementById('PAPAYA');
    var textshow = document.getElementById('textshow49');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow22');
    var textshow18 = document.getElementById('textshow50');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CANDIEDDATES() {
    var name = document.getElementById('CANDIEDDATES');
    var textshow = document.getElementById('textshow50');
    var textshow2 = document.getElementById('textshow23');
    var textshow3 = document.getElementById('textshow24');
    var textshow4 = document.getElementById('textshow25');
    var textshow5 = document.getElementById('textshow26');
    var textshow6 = document.getElementById('textshow27');
    var textshow7 = document.getElementById('textshow28');
    var textshow8 = document.getElementById('textshow29');
    var textshow9 = document.getElementById('textshow30');
    var textshow10 = document.getElementById('textshow31');
    var textshow11 = document.getElementById('textshow32');
    var textshow12 = document.getElementById('textshow33');
    var textshow13 = document.getElementById('textshow34');
    var textshow14 = document.getElementById('textshow35');
    var textshow15 = document.getElementById('textshow47');
    var textshow16 = document.getElementById('textshow48');
    var textshow17 = document.getElementById('textshow49');
    var textshow18 = document.getElementById('textshow22');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
      textshow7.style.display = 'none';
      textshow8.style.display = 'none';
      textshow9.style.display = 'none';
      textshow10.style.display = 'none';
      textshow11.style.display = 'none';
      textshow12.style.display = 'none';
      textshow13.style.display = 'none';
      textshow14.style.display = 'none';
      textshow15.style.display = 'none';
      textshow16.style.display = 'none';
      textshow17.style.display = 'none';
      textshow18.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }
/* (10/27) */

/*36-39*/
  function PIG1() {
    var name = document.getElementById('PIG1');
    var textshow = document.getElementById('textshow36');
    var textshow2 = document.getElementById('textshow37');
    var textshow3 = document.getElementById('textshow38');
    var textshow4 = document.getElementById('textshow39');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PIG2() {
    var name = document.getElementById('PIG2');
    var textshow = document.getElementById('textshow37');
    var textshow2 = document.getElementById('textshow36');
    var textshow3 = document.getElementById('textshow38');
    var textshow4 = document.getElementById('textshow39');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PIG3() {
    var name = document.getElementById('PIG3');
    var textshow = document.getElementById('textshow38');
    var textshow2 = document.getElementById('textshow36');
    var textshow3 = document.getElementById('textshow37');
    var textshow4 = document.getElementById('textshow39');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PIG4() {
    var name = document.getElementById('PIG4');
    var textshow = document.getElementById('textshow39');
    var textshow2 = document.getElementById('textshow36');
    var textshow3 = document.getElementById('textshow37');
    var textshow4 = document.getElementById('textshow38');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*40-44*/
  function CHICKEN1() {
    var name = document.getElementById('CHICKEN1');
    var textshow = document.getElementById('textshow40');
    var textshow2 = document.getElementById('textshow41');
    var textshow3 = document.getElementById('textshow42');
    var textshow4 = document.getElementById('textshow43');
    var textshow5 = document.getElementById('textshow44');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHICKEN2() {
    var name = document.getElementById('CHICKEN2');
    var textshow = document.getElementById('textshow41');
    var textshow2 = document.getElementById('textshow40');
    var textshow3 = document.getElementById('textshow42');
    var textshow4 = document.getElementById('textshow43');
    var textshow5 = document.getElementById('textshow44');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHICKEN3() {
    var name = document.getElementById('CHICKEN3');
    var textshow = document.getElementById('textshow42');
    var textshow2 = document.getElementById('textshow40');
    var textshow3 = document.getElementById('textshow41');
    var textshow4 = document.getElementById('textshow43');
    var textshow5 = document.getElementById('textshow44');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHICKEN4() {
    var name = document.getElementById('CHICKEN4');
    var textshow = document.getElementById('textshow43');
    var textshow2 = document.getElementById('textshow40');
    var textshow3 = document.getElementById('textshow41');
    var textshow4 = document.getElementById('textshow42');
    var textshow5 = document.getElementById('textshow44');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function CHICKEN5() {
    var name = document.getElementById('CHICKEN5');
    var textshow = document.getElementById('textshow44');
    var textshow2 = document.getElementById('textshow40');
    var textshow3 = document.getElementById('textshow41');
    var textshow4 = document.getElementById('textshow42');
    var textshow5 = document.getElementById('textshow43');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*45-46*/
  function DUCK1() {
    var name = document.getElementById('DUCK1');
    var textshow = document.getElementById('textshow45');
    var textshow2 = document.getElementById('textshow46');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function DUCK2() {
    var name = document.getElementById('DUCK2');
    var textshow = document.getElementById('textshow46');
    var textshow2 = document.getElementById('textshow45');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*51-55*/
  function EGG() {
    var name = document.getElementById('EGG');
    var textshow = document.getElementById('textshow51');
    var textshow2 = document.getElementById('textshow52');
    var textshow3 = document.getElementById('textshow53');
    var textshow4 = document.getElementById('textshow54');
    var textshow5 = document.getElementById('textshow55');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function DUCKEGG() {
    var name = document.getElementById('DUCKEGG');
    var textshow = document.getElementById('textshow52');
    var textshow2 = document.getElementById('textshow51');
    var textshow3 = document.getElementById('textshow53');
    var textshow4 = document.getElementById('textshow54');
    var textshow5 = document.getElementById('textshow55');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function SALTEDEGG() {
    var name = document.getElementById('SALTEDEGG');
    var textshow = document.getElementById('textshow53');
    var textshow2 = document.getElementById('textshow51');
    var textshow3 = document.getElementById('textshow52');
    var textshow4 = document.getElementById('textshow54');
    var textshow5 = document.getElementById('textshow55');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PRESERVEDEGG() {
    var name = document.getElementById('PRESERVEDEGG');
    var textshow = document.getElementById('textshow54');
    var textshow2 = document.getElementById('textshow51');
    var textshow3 = document.getElementById('textshow52');
    var textshow4 = document.getElementById('textshow53');
    var textshow5 = document.getElementById('textshow55');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function BIRDEGGS() {
    var name = document.getElementById('BIRDEGGS');
    var textshow = document.getElementById('textshow55');
    var textshow2 = document.getElementById('textshow51');
    var textshow3 = document.getElementById('textshow52');
    var textshow4 = document.getElementById('textshow53');
    var textshow5 = document.getElementById('textshow54');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

/*56-61*/
  function FLAMMULINAVELUTIPES() {
    var name = document.getElementById('FLAMMULINAVELUTIPES');
    var textshow = document.getElementById('textshow56');
    var textshow2 = document.getElementById('textshow57');
    var textshow3 = document.getElementById('textshow58');
    var textshow4 = document.getElementById('textshow59');
    var textshow5 = document.getElementById('textshow60');
    var textshow6 = document.getElementById('textshow61');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function PLEUROTUSERYNGII() {
    var name = document.getElementById('PLEUROTUSERYNGII');
    var textshow = document.getElementById('textshow57');
    var textshow2 = document.getElementById('textshow56');
    var textshow3 = document.getElementById('textshow58');
    var textshow4 = document.getElementById('textshow59');
    var textshow5 = document.getElementById('textshow60');
    var textshow6 = document.getElementById('textshow61');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function HONGXIMUSHROOM() {
    var name = document.getElementById('HONGXIMUSHROOM');
    var textshow = document.getElementById('textshow58');
    var textshow2 = document.getElementById('textshow56');
    var textshow3 = document.getElementById('textshow57');
    var textshow4 = document.getElementById('textshow59');
    var textshow5 = document.getElementById('textshow60');
    var textshow6 = document.getElementById('textshow61');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function MUSHROOM() {
    var name = document.getElementById('MUSHROOM');
    var textshow = document.getElementById('textshow59');
    var textshow2 = document.getElementById('textshow56');
    var textshow3 = document.getElementById('textshow57');
    var textshow4 = document.getElementById('textshow58');
    var textshow5 = document.getElementById('textshow60');
    var textshow6 = document.getElementById('textshow61');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }

  function WHITEMUSHROOM() {
    var name = document.getElementById('WHITEMUSHROOM');
    var textshow = document.getElementById('textshow60');
    var textshow2 = document.getElementById('textshow56');
    var textshow3 = document.getElementById('textshow57');
    var textshow4 = document.getElementById('textshow58');
    var textshow5 = document.getElementById('textshow59');
    var textshow6 = document.getElementById('textshow61');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }
  
  function OYSTERMUSHROOM() {
    var name = document.getElementById('OYSTERMUSHROOM');
    var textshow = document.getElementById('textshow61');
    var textshow2 = document.getElementById('textshow56');
    var textshow3 = document.getElementById('textshow57');
    var textshow4 = document.getElementById('textshow58');
    var textshow5 = document.getElementById('textshow59');
    var textshow6 = document.getElementById('textshow60');
    if (textshow.style.display === 'none') {
      textshow.style.display = 'block';
      textshow2.style.display = 'none';
      textshow3.style.display = 'none';
      textshow4.style.display = 'none';
      textshow5.style.display = 'none';
      textshow6.style.display = 'none';
    } else {
      textshow.style.display = 'none';
    }
  }
/*食物保存方式(10/24)*/
  function showHide(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
/*食物保存方式(10/24)*/

//
  $("body").click(function(){
    $("#mySidebar").w3_close();
  });
//

/*(11/20)*/
  // 回到頂部的函數
  function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // 監聽視窗滾動事件，顯示/隱藏回到頂部按鈕
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    // 添加點擊事件監聽器
    backToTopBtn.addEventListener("click", backToTop);
  }
/*(11/20)*/