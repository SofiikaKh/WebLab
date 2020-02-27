function changeImage()
{
element=document.getElementById('myimage')
if (element.src.match("bulbon"))
  {
  element.src="image1.png";
  }
else
  {
  element.src="image2.png";
  }
}