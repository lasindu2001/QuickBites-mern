import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();

    return (
        <ManageRestaurantForm
            restaurant={restaurant}
            onSave={createRestaurant}
            isLoading={isCreateLoading}
        />
    )
}

export default ManageRestaurantPage