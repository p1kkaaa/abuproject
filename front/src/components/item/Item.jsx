import Bio from '../itemcard/Bio';
import History from '../itemcard/History';
import Math from '../itemcard/math';
import './item.css'



const Item = () => {
    return ( 
        <section id='item' className="item">
            <div className="container">
                <div className="item__header">

                    <h2 className="title-2">
                        Образовательные Курсы
                    </h2>

                </div>
                <div className="item__card">
                    <Math />
                    <Bio />
                    <History />
                </div>
            </div>
        </section>
     );
}
 
export default Item;