$(document).ready(function(){
    
var newItem =$("#add_item").on("click",addItem);

    
function addItem(e){
    e.preventDefault();
    
    //alert("aaaaa");
    var newText = $("#newText").val();
    
    console.log(newText);
    
    var list = $("#Lista");
    
    //Crear los hijos de ul
    var div = $("<div>");
    var li = $("<li>");
    var p =$("<p>");
    var check_btn= $("<button>");
    var del_btn= $("<button>");
    var p2 =$("<p>");
    
    
    div.addClass("shopItem");
    li.addClass("lis");
    p.addClass("itemShop");
    check_btn.text("Check");
    check_btn.attr("type","text");
    check_btn.addClass("checar");
    check_btn.attr("id","check");
    del_btn.attr("type","text");
    del_btn.text("Delete");
    del_btn.addClass("del");
    

    
    p.html(newText);
 
    div.append(li);
    li.append(p);
    li.append(check_btn);
    li.append(del_btn);
    li.append(p2);
    list.append(div);
    
    $("#newText").val("");
}
    
 
var checkItem =$('.Lista').on('click', '.checar',function(e){
    e.preventDefault();
    
    console.log($(this).siblings());
    
    
    $(this).siblings('p').toggleClass('checked');
    
});
    
var delItem =$(".Lista").on("click",'.del',function(){
  $(this).parent().remove();
});
    
});
 