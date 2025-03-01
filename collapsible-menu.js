const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
   coll[i].addEventListener("click", function () {
      // Toggle content visibility
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + "px";
      }

      // Check if this is the last element
      if (this === coll[coll.length - 1]) {
         // Change the border-radius on the last element
         if (this.style.borderRadius === "0px 0px 20px 20px") {
            this.style.transition = ".1s";
            this.style.borderRadius = "0px 0px 0px 0px";  // Change the radius for the last element
         } else {
            this.style.borderRadius = "0px 0px 20px 20px";  // Revert the border-radius
         }
      }
   });
}