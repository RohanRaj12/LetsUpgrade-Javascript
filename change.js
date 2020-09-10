function changeimg()
{
    const ele=document.getElementById("image");
    console.log(ele);
    const newurl="https://i.pinimg.com/favicons/0fc1bfef77002f9a966a13515e32791e05feb44a87b339d51f8f1e8b.jpg?95e386d823b762b40026785be93b8170";
    ele.src = newurl;
}
function changeimg1()
{
    const ele=document.getElementById("image");
    console.log(ele);
    const securl="https://vignette.wikia.nocookie.net/filmguide/images/b/b1/IronManEndgamePoster.jpg/revision/latest/top-crop/width/360/height/360?cb=20190427125033";
    ele.src= securl;
}
function changeimg2()
{
    const ele=document.getElementById("image");
    ele.src="https://i.pinimg.com/originals/7c/70/3f/7c703ff95934b0094c5be9994f1998c5.jpg";

}
function printval()
{
    const eles=document.getElementsByClassName("name");
    var val=eles[0].value;
    const eles1=document.getElementById("name1");
    eles1.value=val;

}