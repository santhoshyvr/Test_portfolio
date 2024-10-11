
import  CategoryItem  from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = () => {
    const categories = [
        {
          id: 1,
          title: "Air",
          imageUrl: "https://i.ibb.co/ykFPRgJ/Air-jpg.webp",
        },
        {
          id: 2,
          title: "Earth",
          imageUrl: "https://i.ibb.co/pXY1cxN/Earth.jpg",
        },
        {
          id: 3,
          title: "Fire",
          imageUrl: "https://i.ibb.co/wdT7gp0/Fire.jpg",
        },
        {
          id: 4,
          title: "Space",
          imageUrl: "https://i.ibb.co/tX7TP4S/Space.jpg",
        },
        {
          id: 5,
          title: "Water",
          imageUrl: "https://i.ibb.co/Byrsdns/Water.jpg",
        },
      ];

      return (
        <div className="directory-container">
            {categories.map(( category ) => (
          <CategoryItem key={category.id} category={category} />
            ))}
        </div>
          
      );

}

export default Directory;