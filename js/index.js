
 AOS.init({
          duration: 2000

 });

$(window).scroll(function(){
	$("section").each(function(){
if($(window).scrollTop()>$(this).offset().top-15)
  {
	  let section_id=$(this).attr("id");
	  $("a").removeClass("active")

      $(' a[href="#'+section_id+'"]').addClass("active")
  }
	  
  })
})

$(" nav .navul a").click(function(){

    let aherf=$(this).attr("href")
    $(" nav .navul li a").removeClass("active")
    
    $(this).addClass("active")
    // $(this).firstChild.css("color","red")

	$("body ,html").animate({scrollTop:$(aherf).offset().top},2000)
})
$(".nav-dot a").click(function(){

    let aherf=$(this).attr("href")
    $(".nav-dot a").removeClass("active")
    
    $(this).addClass("active")
    // $(this).firstChild.css("color","red")

	$("body ,html").animate({scrollTop:$(aherf).offset().top},2000)
})


// function move(term)
// {
//     term.click(function(){
    
//         let aherf=$(this).attr("href")
//    $(" nav .navul li a").removeClass("active")
// term.addClass("active")
        
//         // $(this).firstChild.css("color","red")
    
//         $("body" ,"html").animate({scrollTop:$(aherf).offset().top},2000)
//     })


// }
// let x=$("nav .navul li a")
// move(x)
// function move(term)
// {
//     term.forEach(element => {
//         element.addEventListener("click",function(e){
//             let href=e.target.href;
//             $("body ,html").animate({scrollTop:$(herf).offset().top},2000)
//             e.target.classList.toggle("active")
            
//         })
        
//     });
// }
// let x=document.querySelectorAll("nav .navul li")
// let c=document.querySelectorAll(".nav-dot a")

// move(x)
// move(c)

$("#username").keyup(function(){
    var rgx=/^[A-Z][a-z]{4,25}$/;
if(rgx.test($(this).val())==false)
{
    $(this).attr("class","form-control is-invalid")
    $(this).next().fadeIn(100);

}
else{
    $(this).next().fadeOut(100);
    $(this).attr("class","form-control is-valid")
}
})
$("#phone").keyup(function(){
    var rgx2=/^(01)[0125][0-9]{8}$/;
if(rgx2.test($(this).val())==false)
{
    $(this).attr("class","form-control is-invalid")
    $(this).next().fadeIn(100);

}
else{
    $(this).next().fadeOut(100);
    $(this).attr("class","form-control is-valid")
}
})