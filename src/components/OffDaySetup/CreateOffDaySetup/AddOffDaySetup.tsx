"use client";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { toast } from "sonner";
import OffDay from "./_components/OffDay";
import { useCreateOffDaySetupMutation } from "@/redux/api/OffDaySetup/offDaySetupApi";



const formSections = [
    OffDay
];

const AddOffDaySetupForm = () => {
    const { control, handleSubmit, setValue, trigger, getValues, reset } = useForm({});
    const [createOffDay, { isLoading }] = useCreateOffDaySetupMutation()

    const onSubmit = async (data: any) => {

        try {
            const response = await createOffDay(data).unwrap();
            console.log(response)
            if (response.success) {
                toast.success(response.message);
                // reset()
            } else if (response.success === false && response.errorSources) {
                // Extract error messages from errorSources array
                const errorMessage = response.errorSources.map((err: any) => err.message).join(", ");
                toast.error(errorMessage);
            }
        } catch (error: any) {
            let errorMessage = "Network error, please try again!";

            // Check if error contains data with specific error messages
            if (error?.data?.errorSources) {
                errorMessage = error.data.errorSources.map((err: any) => err.message).join(", ");
            } else if (error?.data?.message) {
                errorMessage = error.data.message;
            }

            toast.error(errorMessage);
        }
    };






    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formSections.map((Component, index) => (
                <Component key={index} control={control} setValue={setValue} trigger={trigger} getValues={getValues} />
            ))}

            <div className="flex justify-end m-10">
                <Button disabled={isLoading} variant="default" type="submit"> {isLoading ? " Submitting" : "Submit"} </Button>
            </div>
        </form>

    );
}

export default AddOffDaySetupForm