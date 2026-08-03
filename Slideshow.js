let arrImages = [
            "./Images/alexander-kaufmann-qRBEPQeJ6hE-unsplash.jpg",
            "./Images/kirill-chukhnov-c5adA6zENBg-unsplash.jpg",
            "./Images/kirill-chukhnov-PEXAymTSZdE-unsplash.jpg",
            "./Images/maverick-frame-4-yLQog02Tc-unsplash.jpg",
        ];

        // variable to keep track of the current image index
        let currImage = 0;

        // show slide - pass in the index of the image to show
        function showSlide(index){
            // get a shortcut/nickname for the img element in HTML
            let image = document.getElementById("imgSlide");
            // change the image source to the relative address from the array
            image.src = arrImages[index];
        }

        // previous button function click event
        function prevSlide(){
            // when the user clicks the previous button, change currImage - 1
            currImage--;

            // if the user at the first image in the array, and they clicked the Previous button let's show the last image in the array, to give a "loop effect"
            if(currImage < 0){
                // change currImage from -1 to the last index of the array
                currImage = arrImages.length - 1;
            }

            // load the new image
            showSlide(currImage);
        }

        // next button function click event
        function nextSlide(){
            // when the user clicks the Previous button, change currImage + 1
            currImage++;

            // if currImage has exceeded the number of images in the array, then rest back to the first image in the array, to give a "loop effect"
            if(currImage >= arrImages.length){
                currImage = 0;
            }

             // load the new image
            showSlide(currImage);

        }  