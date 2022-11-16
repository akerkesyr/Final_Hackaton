import React from 'react';
import './CardPage.css'

const CardPage = () => {
    return (
        <div>
            <div className='CardPage__'>
            <img id='CardPage__picture' src='https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=x_large' width={400}>
            </img>
                <span id='CardPage__span'>
                <h4 id='CardPage__h4'>
                ITS YOUR CHIOICE
                </h4>
                    Lorem ipsum dolorlaboriosam delectus facilis eveniet natus! Ab repellendus dolores labore, earum dignissimos autem officiis consectetur quidem excepturi sapiente! Molestiae quae nostrum itaque eveniet at inventore, similique amet.
                    Dicta id atque at, quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis ducimus repellat nulla placeat! Eaque nam aliquam repellendus delectus, minima, praesentium quis quaerat voluptate hic
                    </span>
        </div>
        <div className='CardPage__'>
        <span id='CardPage__span'>
                Lorem ipsum dolorlaboriosam delectus facilis eveniet natus! Ab repellendus dolores labore, earum dignissimos autem officiis consectetur quidem excepturi sapiente! Molestiae quae nostrum itaque eveniet at inventore, similique amet.
                Dicta id atque at, quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis ducimus repellat nulla placeat! Eaque nam aliquam repellendus delectus, minima, praesentium quis quaerat voluptate hic, ea repellat voluptatibus dignissimos vel! 
        </span>
        <img id='CardPage__picture' src='https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=x_large' width={400}>
            </img>
        </div>
        <div className='cardsPart'>
        <div className='secondCards__div'>
            <img id='CardsPart__pic' src='https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg?aki_policy=x_large' width={250}>
            </img>
            <span id='CardPage__span2'>
                Loluptate hic, ea repellat voluptatibus dignissimos vel!  libero, distinctio cumque cum iusto cati iusto nemo a harum sapiente nihil nulla.
        </span>
        </div>
        <div className='secondCards__div'>
            <img id='CardsPart__pic' src='https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg?aki_policy=x_large' width={250}>
            </img>
            <span id='CardPage__span2'>
                Loluptate hic, ea repellat voluptatibus dignissimos vel!  libero, distinctio cumque cum iusto cati iusto nemo a harum sapiente nihil nulla.
        </span>
        </div>
        <div className='secondCards__div'>
            <img id='CardsPart__pic' src='https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg?aki_policy=x_large' width={250}>
            </img>
            <span id='CardPage__span2'>
                Loluptate hic, ea repellat voluptatibus dignissimos vel!  libero, distinctio cumque cum iusto cati iusto nemo a harum sapiente nihil nulla.
        </span>
        </div>
        </div>
        </div>
    );
};

export default CardPage;