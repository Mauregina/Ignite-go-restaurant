import { useEffect, useState } from 'react';
import {FoodsContainer} from './styles';
import api from '../../services/api';
import { Header } from '../../components/Header';
import { Food } from '../../components/Food';

interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string; 
}

export function Dashboard() {
    const [foods, setFoods] = useState<Food[]>([])
    const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);

    useEffect(() => {
        async function getFood() {
            const response = await api.get('/foods');
            console.log(response.data);
            setFoods(response.data);
        }
        getFood();
    }, []);

    const handleOpenAddFoodModal = () => {
        setIsAddFoodModalOpen(true);
    }

    const handleCloseAddFoodModal = () => {
        setIsAddFoodModalOpen(false);
    }

    const handleDeleteFood = () => {
        console.log('deleta');
    }

    const handleEditFood = () => {
        console.log('edita');
    }

    return (
        <>
            <Header onOpenAddFoodModal={handleOpenAddFoodModal}/>
            <FoodsContainer data-testid="foods-list">
                {foods &&
                    foods.map(food => (
                    <Food
                        key={food.id}
                        food={food}
                        handleDelete={handleDeleteFood}
                        handleEditFood={handleEditFood}
                    />
                ))}
            </FoodsContainer>    
        </>
    );
}