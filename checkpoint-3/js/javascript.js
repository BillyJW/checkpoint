
// $(function(){
// ---------------------------------------------
//
var data = {
  totalRevs:360,
  totalCurrent:0,
  totalTech: 0
};
// sets globe in motion in degrees for clicks with delay
setInterval(goGo,1000);
// rotates and changes pop and tech
function goGo() {
  data.totalRevs += data.totalTech;
  data.totalCurrent += data.totalTech;
  $("#earf").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
  // unHide();
}
// updates the pop and tech counters on run
function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#tech").text((data.totalTech/2.2).toFixed(2));
  unHide();
  unHide2();
}

// on click, adds 1 per click to totalRevsand totalCurrent
$("#earf").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})
// on click buttons takes pop as cost and moves value to tech
$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalTech += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
  }
  // unHide();
  updateReport();
})
// -----code from assignment, using as placeholder-----------


function unHide(){
  let i = data.totalCurrent
  let t = data.totalTech
  if (i > 1){
    $(".voices").css("visibility", "visible");
  }if (i > 3){
    $(".tech").css("visibility", "visible");
  }if (i > 5){
    $(".button").css("visibility", "visible");
  }if (i > 5){
    $(".status").css("visibility", "visible");
  }if (t >= 1){
    $(".pew").css("visibility", "visible");
  }
}
