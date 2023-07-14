import React, { useState, useEffect } from 'react'; 

    const ImageComponent = () => {
        const [image, setImage] = useState('/img/tin5.jpg');
        const [components,setComponents] = useState(true)
        // Hàm này sẽ được gọi sau mỗi 4 giây
        useEffect(() => {
            const interval = setInterval(() => {
                // Chuyển đổi ảnh tại đây
                setImage('/img/tin2.jpg');
                setImage('/img/tin5.jpg');
            }, 4000,4000);


            return () => clearInterval(interval);
        }, []);
    

        return (
            <div>
                <img src={image} alt="Ảnh" />
            </div>
        );
        }

    export default ImageComponent;

