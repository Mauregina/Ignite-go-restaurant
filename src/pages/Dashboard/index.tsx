import { useEffect, useState } from 'react';
import {FoodsContainer} from './styles';
import api from '../../services/api';
import { Food as FoodInterface} from '../../interfaces/Food';
import { Header } from '../../components/Header';
import { Food } from '../../components/Food';


export function Dashboard() {
    const [foods, setFoods] = useState<FoodInterface[]>([])
    const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);

    useEffect(() => {
        async function getFood() {
            const response = await api.get('/foods');
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

    const handleDeleteFood = async (id: number) => {
        try {
            await api.delete(`/foods/${id}`);
            setFoods(foods.filter(food => food.id !== id)); 
        } catch (error) {
            console.log(error);
        }
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
                        handleDeleteFood={handleDeleteFood}
                        handleEditFood={handleEditFood}
                    />
                ))}
            </FoodsContainer>    
        </>
    );
}