let index=1;
let slides = document.getElementsByClassName('slide');

    show_slides(index);

        function go_left() {
            show_slides(index -= 1);
        }

        function go_right() {
            show_slides(index += 1);
        }

        function current_slide(n) {
            show_slides(index = n);
        }
        
        function show_slides(n) {

            if (n > slides.length) {
                index = 1;
            }
            if (n < 1) {
                index = slides.length
            }
            if (document.documentElement.clientWidth > 576) {
              for (let slide of slides) {
                  slide.style.display = "none";
              }
            }

            slides[index - 1].style.display = "block";
        }