const glass = document.querySelector('.glass'); 
const images = document.querySelectorAll('.zoomer img')

let scope = 1.75;

images.forEach(image => {
    image.addEventListener('mousemove',function(event){
        // Hiển thị kính lúp khi đang di chuột vào ảnh
        glass.classList.remove('hide');

        glass.style.backgroundImage = `URL(${image.src})`;
        glass.style.backgroundSize = `${image.width*scope}px ${image.height*scope}px`;

        glass.style.top = event.clientY +'px';
        glass.style.left = event.clientX +'px';

        // Tính background-position x y của glass
        // Lấy tọa độ của con trỏ chuột đối với image chia cho số đo ảnh là ra được tỉ lệ
        let glassPositionX = (event.offsetX / event.target.offsetWidth)*100;
        let glassPositionY = (event.offsetY / event.target.offsetHeight)*100;

        glass.style.backgroundPosition = `${glassPositionX}% ${glassPositionY}%`;
    })

    image.addEventListener('mouseout',function(){
        // Ẩn kính lúp khi không di chuột vào ảnh nào
        glass.classList.add('hide');
    })
})
