import {Socket, Presence} from "phoenix"

let presences = {};

let socket = new Socket("/socket", {params: {user: "phoenix"}});
socket.connect();

let main_socket = socket.channel("main::start");
window.main_socket = main_socket;

main_socket.join()
  .receive("ok", resp => {
    console.log("Joined to Example Channel!!", resp)
    console.log(resp.category);
		$("#current").text( resp.category );
  })
  .receive("error", resp => {
    console.log("Unable to join", resp)
    $("#current_user").text( "FAIL CONNECTION!" );
  })

//ANIME.JS
window.animateSVG = function animateSVG(fromEl, toEl, dur, delay) {
  for (let i = 0; i < fromEl.length; i++) {anime({ targets: fromEl[i], points: { value: toEl[i] }, duration: dur, delay: i * delay });}}

window.animals = {
	insect: [
	"569.3,322 583.5,300.7 605,316.2", "605,316 590.8,337.2 569.3,321.8", "512.7,315.8 431.9,248.3 403.9,124.8", "283.3,117.6 383.8,34.5 431.9,248.3", "384.4,34.7 283.9,117.8 264.5,0", "450.3,324.2 467,291.8 593.8,322.6", "510.5,318 247.7,226.8 220,159.8", "148.4,164.1 250.1,231 215.1,146.7", "185.9,98 148.3,164.3 215.2,146.8", "593.8,322.2 577.1,354.7 450.3,323.8", "421.5,352.1 450.6,323.2 577,354.5", "559,354.1 541.3,404.1 568,354.3", "541.2,404.3 579.7,440.7 545,396.1", "532.1,353.5 491.8,407.3 537.8,353.5", "450.6,323 421.5,352.8 380.1,313.4", "336.6,352.1 380.1,313.4 420.9,352.1", "380.1,313.4 337.4,352.1 310.8,338.3", "305.1,351.3 310.8,338.3 337.4,352.1", "310.8,338.3 277.6,322.8 380.1,313.4", "217,338.5 277.6,322.8 310.8,338.3", "310.8,338.3 305.1,351.3 256.2,352.2", "310.8,338.3 256.2,352.2 217.8,338.3", "277.6,323.4 217.6,338.3 174,317.5", "150.8,350.4 207.4,333.2 256.2,352.2", "174,317.5 150,350.5 208,333.5", "139.4,316.6 150.8,350.2 174.3,317.9", "150.8,350.2 139.4,316.6 79.9,348.9", "70.4,316.6 79.9,348.9 139.4,316.6", "0,321.7 70.4,316.6 79.9,348.9", "78,348.5 19,337.5 54,333.5"],


	tapir: [
	'49.3,203.9 0,215.3 9.2,159.4 ', '544.1,102 523.6,172.3 385.8,194.5', '0,268.6 0,215.3 17.3,241', '32.3,218.4 47.3,203.9 120,187.1', '352.2,97 385.8,194.5 296.1,187', '296,186.7 157.5,284.2 178.1,200', '0,215.3 47.3,203.9 17.6,241.1', '262.1,330 229.7,233.5 284.1,266', '229.1,233 295.1,187 284.1,266', '128.8,73.3 120,187.1 37,121.7', '385.8,194.5 423.1,0 544.1,102', '423.1,0 352.1,98 269.1,0', '519.1,342 526.1,246 559.1,342 ', '385.8,194.5 423.1,0 352.1,97', '269.1,0 351.9,97.5 296.1,187', '285.1,106 269.1,0 128.7,73.3', '544.1,300 453.1,184 505.1,170', '17.3,240.8 18.9,263.5 0,268.6', '201.2,253.7 157.5,284.2 196.3,346', '9.2,159.4 47.3,203.9 36.8,121.8', '18.6,103 36.8,121.8 34,102.2', '296,186.7 285.1,106 177.8,200.1', '177.8,200.1 128.7,73.3 285.1,106 ', '470.1,266 443.1,342 488.1,293 ', '541.1,110 534.1,136 583.1,130', '177.8,200.1 128.7,73.3 120,187.1', '254.1,301 220.1,342 262.1,331', '120,187.1 36.8,121.8 47.3,203.9', '418.1,189 500.1,313 478.1,179', '49.3,203.9 0,215.3 9.2,159.4'],


	wolf: [
	"395.2,34.2 412.8,0 434.9,15.4 ", "395.2,34.2 435,15.6 387,87.6 ", "395.2,34.2 387.4,87.2 376.4,49.6 ", "439.3,95.7 387,87.6 435,15.6 ", "341.1,80.5 376.4,49.6 387.4,87.2 ", "438.2,94.9 363.2,94.9 359.8,82.7 ", "439.3,94.9 412.8,133.5 363.2,94.9 ", "439.3,94.9 412.8,133.5 425,220.6 ", "412.8,133.5 311.3,248.2 363.2,94.9 ", "311.3,248.2 166.8,220.6 363.2,96 ", "424.9,220.6 412.8,133.5 311.3,248.2 ", "387.4,265.9 311.3,248.2 421.6,220.6 ", "349.9,254.8 387.4,265.9 370.9,334.3 ", "385.2,334.3 368,342.6 387.4,265.9 ", "346.6,255.9 333,353.6 312.4,248.2 ", "332,354.6 344.4,267 349.9,346.4 ", "312.4,248.2 290.3,260.4 297,244.9 ", "297,244.9 263.9,326.5 166.8,220.6 ", "143.6,261.5 210.9,268.1 166.8,220.6 ", "143.6,261.5 121.6,315.5 210.9,268.1 ", "121.6,315.5 0,283.5 143.6,261.5 ", "263.9,326.5 210.9,268.1 167,291.6 ", "180,359.6 208,326.6 197,390.6 ", "185,355.6 221,310.6 187,298.6 ", "202,356.6 194,410.6 218,400.6 ", "224,310.6 263.9,326.5 218,366.6 ", "236,349.6 218,365.6 240,384.6 ", "218,365.6 226,397.6 245,388.6 ", "122,439.6 485,288.6 536,384.6 ", "536,384.6 622,445.6 32,445.6 "],


	elephant: [
	"440,296 462,294 442,158 ", "442,158 479,156 462,294 ", "479,156 480,150 537,166 ", "411,121 442,158 479,156 ", "479,155 411,121 475,90 ", "411,121 448,19 475,91 ", "323,0 411,121 448,19 ", "411,121 385,116 323,0 ", "311,16 385,116 323,0 ", "281,102 311,16 385,116 ", "311,16 123,15 281,102 ", "281,102 252,182 385,116 ", "252,182 281,102 123,15 ", "252,182 28,98 123,15 ", "252,182 229,194 129,135 ", "141,196 133,137 229,194 ", "133,137 141,196 28,98 ", "9,150 2,150 28,98 ", "9,150 2,150 13,208 ", "13,208 0,226 11,194 ", "252,182 362,127 310,214 ", "362,127 366,269 310,214 ", "362,158 419,299 366,300 ", "252,182 310,214 294,270 ", "252,182 254,294 310,300 ", "28,98 30,192 141,196 ", "77,193 71,288 30,192 ", "30,304 78,304 42,220 ", "76,193 141,196 133,278 ", "146,304 91,193 91,304 "],


	tiger: [
	"584,123 583,75 599,109 ", "578,138 584,123 547,128 ", "583,75 584,123 491,136 ", "583,75 580,55 491,136 ", "521,15 491,136 580,55 ", "580,55 521,14 533,0 ", "429,39 491,136 521,15 ", "491,136 401,240 429,40 ", "429,40 401,240 359,216 ", "429,39 359,52 359,216 ", "359,52 320,211 359,216 ", "359,52 320,211 313,45 ", "313,45 266,204 320,211 ", "313,45 293,43 266,204 ", "216,198 266,204 293,43 ", "159,26 293,43 216,198 ", "159,26 216,198 136,237 ", "136,237 159,26 89,51 ", "105,116 89,51 61,97 ", "74,207 96,112 61,97 ", "0,274 68,158 74,207 ", "491,136 401,240 454,265 ", "401,240 359,216 354,281 ", "159,312 136,237 216,198 ", "75,302 136,237 116,155 ", "427,318 401,240 454,265 ", "427,318 509,320 449,274 ", "408,317 354,281 382,256 ", "182,265 227,328 159,312 ", "124,321 75,302 112,260 "],


	eagle: [
	"13.3,315 0,318.6 12.4,339.9 ", "6.9,261.6 0,318.6 28.2,321.4 ", "28.2,321.4 6.9,261.6 28.2,227.9 ", "28.2,227.9 61.1,241 28.2,321.4 ", "36.1,302.1 61.1,241 179.3,329.6 ", "61.1,241 170.7,181 179.3,329.6 ", "36.1,302.1 62.3,306 39.9,328.3 ", "62.3,306 50.2,317.9 86.6,366 ", "86.6,366 141.5,397.6 62.3,306 ", "141.5,397.6 179.3,329.6 62.3,306 ", "6.9,169.5 170.7,181 61.1,241 ", "179.3,329.6 246.8,146.4 170.7,181 ", "141.5,397.6 179.3,329.6 179.3,406.7 ", "141.5,397.6 62.5,425.7 86.6,366 ", "141.5,397.6 104.4,454.6 62.5,425.7 ", "6.9,169.5 127.1,111.9 170.7,181 ", "225.3,341.2 246.8,146.4 179.3,329.6 ", "179.3,406.7 179.3,329.6 302.8,412 ", "6.9,169.5 16.5,48.7 127.1,111.9 ", "338.4,222 246.8,146.4 225.3,341.2 ", "94.1,444.3 22,447.7 62.5,425.7 ", "366.1,196.3 338.4,222 246.8,146.4 ", "366.1,196.3 383.3,103.6 302.8,177 ", "67,445.6 17.2,462.8 22,447.7 ", "22,447.7 62.5,425.7 4.8,435.3 ", "237,368.1 393.8,334.2 302.8,412 ", "383.3,103.6 335.2,77.5 302.8,177 ", "302.8,177 335.2,77.5 246.8,146.4 ", "420.6,46.6 335.2,77.5 383.3,103.6 ", "316.6,0 246.8,146.4 335.2,77.5 "] };

// to add the new points to the array
var push = function push(from, to) {
	from.forEach(function (e) {return to.push(e.getAttribute('points'));});
};

window.body = document.querySelector('body');
window.animalPolygon = Array.from(document.querySelectorAll('#SVG-animal polygon')).reverse();

// ANIME JS
window.dur = 300;
window.delay = 0.05;

// set default animal
window.animateSVG(window.animalPolygon, window.animals["tiger"], window.dur, window.delay);
window.body.classList = "tiger";

main_socket.on("main::change_image", function(data) {
	let animalData = data.msg;
	console.log(animalData);
  $("#animal").text( data.msg );
	window.animateSVG(window.animalPolygon, window.animals[animalData], window.dur, window.delay);
	window.body.classList = animalData;
});

main_socket.on("main::team_players", function(data) {
  console.log("Contador de jugadores!!");
  $("#a").text( data["A"] );
  $("#b").text( data["B"] );
  $("#c").text( data["C"] );
  $("#d").text( data["D"] );
  $("#e").text( data["E"] );
  $("#f").text( data["F"] );
  $("#g").text( data["G"] );
  $("#h").text( data["H"] );
})

main_socket.on("main::show_toast", function(data) {
  toastr.success('Conexión Exitosa!', data.msg);
})

main_socket.on("main::team_player", function(data) {
  let my_team = document.getElementById("current").textContent;
  if(data.team === my_team){
    $("#player_console").show();
  } else {
    $("#player_console").hide();
  }
})

main_socket.on("presence_state", state => {
  presences = Presence.syncState(presences, state)
  console.log("Presence state")
})

main_socket.on("presence_diff", diff => {
  presences = Presence.syncDiff(presences, diff)
  let users_connected = Object.keys( presences ).length
  $("#current_user").text( "Conexiones: "+ users_connected );
  window.main_socket.push('main::sync_users', {message: "Actualizando!"});
})
