import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();

    return (
        <ManageRestaurantForm
            onSave={createRestaurant}
            isLoading={isCreateLoading}
        />
    )
}

export default ManageRestaurantPage