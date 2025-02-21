"use client";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { toast } from "sonner";
import LoadingSpinner from "@/components/Loader";
import BasicInfo from "./_components/BasicInfo";
import Exams from "./_components/Exams";
import { useGetSingleExamSettingQuery, useUpdateExamSettingMutation } from "@/redux/api/Exam-schedule/examScheduleApi";



const formSections = [
    BasicInfo,
    Exams
];

const UpdateExamScheduleForm = () => {
    const id = "67af378a197433b9b75dfe9d"

    const { control, handleSubmit, setValue, watch, trigger, getValues } = useForm({});

    const { data: singleExamSchedule, isLoading, refetch } = useGetSingleExamSettingQuery(id)

    const [updateExamSchedule, { isLoading: updateLoading }] = useUpdateExamSettingMutation()

    const onSubmit = async (data: any) => {

        try {

            const values = {
                id,
                data
            }

            const response = await updateExamSchedule(values).unwrap();

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
                <Component key={index} control={control} setValue={setValue} watch={watch} trigger={trigger} getValues={getValues} singleExamSchedule={singleExamSchedule} />
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

export default UpdateExamScheduleForm