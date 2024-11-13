let currentIndex = 0;

        function mover(carouselId, direction) {
            const carousel = document.getElementById('carrito');
            const items = carousel.querySelector('.compras2');
            const totalItems = items.children.length;
             const itemWidth = items.children[0].offsetWidth;

            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            } else if (currentIndex >= totalItems) {
                currentIndex = 0;
            }

            items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }