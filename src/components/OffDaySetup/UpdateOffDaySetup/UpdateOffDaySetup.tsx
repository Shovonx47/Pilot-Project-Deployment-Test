"use client";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { toast } from "sonner";
import LoadingSpinner from "@/components/Loader";
import { useGetSingleExamSettingQuery, useUpdateExamSettingMutation } from "@/redux/api/Exam-schedule/examScheduleApi";
import OffDay from "./_components/OffDay";
import { useGetSingleOffDaySetupQuery, useUpdateOffDaySetupMutation } from "@/redux/api/OffDaySetup/offDaySetupApi";



const formSections = [
    OffDay
];

const UpdateOffDaySetupForm = () => {
    const id = "67b98bab757475eda2ca50a9"

    const { control, handleSubmit, setValue, trigger, getValues } = useForm({});

    const { data: singleOffDay, isLoading, refetch } = useGetSingleOffDaySetupQuery(id)

    const [updateOffDaySetup, { isLoading: updateLoading }] = useUpdateOffDaySetupMutation()

    const onSubmit = async (data: any) => {

        try {

            const values = {
                id,
                data
            }

            const response = await updateOffDaySetup(values).unwrap();

            if (response.success) {
                toast.success(response.message);
                refetch()
            } else if (response.success === false && response.errorSources) {
                // Extract error messages from errorSources array
                const errorMessage = response.errorSources.map((err: any) => err.message).join(", ");
                toast.error(errorMessage);
            }
        } catch (error: any) {
            console.log(error)
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



    if (isLoading) {
        return <LoadingSpinner />
    }

    return (


        <form onSubmit={handleSubmit(onSubmit)}>
            {formSections.map((Component, index) => (
                <Component key={index} control={control} setValue={setValue} trigger={trigger} getValues={getValues} singleOffDay={singleOffDay} />
            ))}

            <div className="flex justify-end m-10">
                <Button
                    disabled={updateLoading}
                    variant="default" type="submit">
                    {
                        updateLoading ? "Submitting..." :
                            "Submit"
                    } </Button>
            </div>
        </form>

    );
}

export default UpdateOffDaySetupForm